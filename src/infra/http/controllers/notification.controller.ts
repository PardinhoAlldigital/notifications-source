import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/aplication/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notification')
export class NotificationsController {
  constructor(private sendNotifications: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recepientId, content, category } = body;

    const { notification } = await this.sendNotifications.execute({
      recepientId,
      content,
      category,
    });

    return { notification };
  }
}
