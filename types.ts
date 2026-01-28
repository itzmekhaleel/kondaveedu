
export interface Viewpoint {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  location: string;
  historySnippet: string;
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface BookingData {
  ticketTypeId: string;
  quantity: number;
  date: string;
  customerName: string;
  email: string;
}
