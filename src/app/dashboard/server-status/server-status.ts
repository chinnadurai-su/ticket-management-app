import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
// OnDestroy
export class ServerStatus implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private intervalData: ReturnType<typeof setInterval> | null = null;
  private destroyRef = inject(DestroyRef);

  constructor() {}

  stimulateStatusChange() {
    if (this.intervalData) {
      clearInterval(this.intervalData);
    }
    const statuses: ('online' | 'offline' | 'unknown')[] = ['online', 'offline', 'unknown'];
    this.intervalData = setInterval(() => {
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      this.currentStatus.set(randomStatus);
      // console.log(`Server status changed to: ${randomStatus}`);
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.intervalData!);
    });
  }

  ngOnInit() {
    this.stimulateStatusChange();
  }

  // ngOnDestroy() {
  //   if (this.intervalData) {
  //     clearInterval(this.intervalData);
  //   }
  // }
}
