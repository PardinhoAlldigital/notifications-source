import { Notification } from 'src/aplication/entities/notifications';
import { NotificationsRepository } from 'src/aplication/repositories/notification-repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
