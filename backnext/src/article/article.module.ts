import { Module } from '@nestjs/common';
import { ArticleService } from './ArticleService';
import { ArticleController } from './article.controller';
import { ArticleModel } from './article.model/article.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleMapper } from './article.mapper/article.mapper';

@Module({
  imports: [SequelizeModule.forFeature([ArticleModel])],
  providers: [ArticleService, ArticleMapper],
  exports: [ArticleService, ArticleMapper],
  controllers: [ArticleController],
})
export class ArticleModule {}
