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

  titleInput = '';
  requestInput = '';

  submitTicket() {
    console.log('Ticket submitted:', { title: this.titleInput, request: this.requestInput });
    this.ticketSubmitted.emit({ title: this.titleInput, request: this.requestInput });
    this.titleInput = '';
    this.requestInput = '';
  }
}
