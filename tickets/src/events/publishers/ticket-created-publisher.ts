import { Publisher, Subjects, TicketCreatedEvent } from '@bhtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
