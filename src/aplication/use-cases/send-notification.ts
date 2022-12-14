import { Injectable } from '@nestjs/common';
import { Content } from '../entities/notification-content';
import { Notification } from '../entities/notifications';
import { NotificationsRepository } from '../repositories/notification-repositories';

interface SendNotificationRequest {
  recepientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recepientId, content, category } = request;

    const notification = new Notification({
      recepientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
