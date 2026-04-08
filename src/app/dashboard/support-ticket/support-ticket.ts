import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';

@Component({
  selector: 'app-support-ticket',
  imports: [NewTicket],
  templateUrl: './support-ticket.html',
  styleUrl: './support-ticket.css',
})
export class SupportTicket {}
