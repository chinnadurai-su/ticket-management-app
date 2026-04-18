import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket {
  // @ViewChild('ticketForm') ticketForm: ElementRef<HTMLFormElement> | undefined;
  private ticketForm = viewChild<ElementRef<HTMLFormElement>>('ticketForm');
  // @Output() ticketSubmitted = new EventEmitter<{ title: string; request: string }>();
  ticketSubmitted = output<{ title: string; request: string }>()

  submitTicket(title: HTMLInputElement, request: HTMLTextAreaElement) {
    console.log('Ticket submitted:', { title: title.value, request: request.value });
    this.ticketSubmitted.emit({ title: title.value, request: request.value });
    this.ticketForm()?.nativeElement.reset();
  }
}
