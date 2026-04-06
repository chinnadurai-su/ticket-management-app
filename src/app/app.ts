import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { TrafficChart } from './dashboard/traffic-chart/traffic-chart';
import { SupportTicket } from './dashboard/support-ticket/support-ticket';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [Header, ServerStatus, TrafficChart, SupportTicket, DashboardItem],
})
export class App {}
