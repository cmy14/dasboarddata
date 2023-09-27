import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleModel } from './article.model/article.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ArticleModel])],
  providers: [ArticleService] ,
  exports: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
