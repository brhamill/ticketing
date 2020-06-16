import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@bhtickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
