import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { Tickets } from './tickets.model';
import { Ticket } from "./ticket/ticket";

@Component({
  selector: 'app-support-ticket',
  imports: [NewTicket, Ticket],
  templateUrl: './support-ticket.html',
  styleUrl: './support-ticket.css',
})
export class SupportTicket {
  onCloseTicket($event: number) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === $event) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    })

  }
  onTicketSubmitted($event: { title: string; request: string; }) {
    this.tickets.push({
      id: this.tickets.length + 1,
      title: $event.title,
      requests: $event.request,
      status: 'open',
    });
  }
  tickets: Tickets[] = [];
}
