import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Message } from './messages/entities/message.entity';
import { MessagesController } from './messages/messages.controller';
import { MessagesService } from './messages/services/messages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'uoc-blog',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService],
})
export class AppModule {}
