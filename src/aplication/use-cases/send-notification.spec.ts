import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const NotificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(NotificationsRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'THis is a notification',
      recepientId: 'example-recipient-id',
    });

    expect(NotificationsRepository.notifications[0]).toEqual(notification);
  });
});
