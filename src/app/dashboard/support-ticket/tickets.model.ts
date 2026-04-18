export interface Tickets {
  id: number;
  title: string;
  requests: string;
  status: 'open' | 'closed';
}