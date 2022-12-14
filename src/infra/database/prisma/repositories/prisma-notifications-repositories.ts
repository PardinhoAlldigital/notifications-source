import { Injectable } from '@nestjs/common';
import { Notification } from 'src/aplication/entities/notifications';
import { NotificationsRepository } from '../../../../aplication/repositories/notification-repositories';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category,
        recipientId: notification.recepientId,
        readtAt: notification.readAt,
        createAt: notification.createdAt,
      },
    });
  }
}
