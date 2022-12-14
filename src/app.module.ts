import { Module } from '@nestjs/common';
import { DatabaseMOdule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseMOdule],
})
export class AppModule {}
