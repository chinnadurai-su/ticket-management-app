import { Component, input, output, signal } from '@angular/core';
import { Tickets } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  markAsComplete() {
    this.closeTicket.emit(this.ticket()?.id);
  }
  ticket = input.required<Tickets>();
  closeTicket = output<number>();
  isDetailsVisible = signal(false);

  toggleDetails() {
    this.isDetailsVisible.update(visible => !visible);
  }
}




