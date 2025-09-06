import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './controllers/users.controller';
import { PostsController } from './controllers/posts.controller';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UsersService, PostsService, DatabaseService],
})
export class AppModule {}
