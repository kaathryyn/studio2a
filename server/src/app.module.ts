import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './controllers/user.controller';
import { CoursesController } from './controllers/courses.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { CoursesService } from './services/courses.service';
import { TagsController } from './controllers/tags.controller';
import { TagsService } from './services/tags.service';
import { RecommendationsController } from './controllers/recommendations.controller';
import { RecommendationsService } from './services/recommendations.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, CoursesController, TagsController, RecommendationsController],
  providers: [AppService, UserService, SessionService, CoursesService, TagsService, RecommendationsService],
})
export class AppModule {}
