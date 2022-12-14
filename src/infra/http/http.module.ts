import { Module } from '@nestjs/common';
import { SendNotification } from 'src/aplication/use-cases/send-notification';
import { DatabaseMOdule } from '../database/database.module';
import { NotificationsController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseMOdule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
