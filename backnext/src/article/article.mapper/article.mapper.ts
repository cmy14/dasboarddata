import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../dto/create-article.dto/create-article.dto';
import { ArticleModel } from '../article.model/article.model';
import { UpdateArticleDto } from '../dto/update-article.dto/update-article.dto';

@Injectable()
export class ArticleMapper {
  toEntity(createArticleDto: CreateArticleDto): ArticleModel {
    const article = new ArticleModel();
    article.name = createArticleDto.name;
    article.price = createArticleDto.price;
    article.isActive = createArticleDto.isActive;
    return article;
  }

  toDto(article: ArticleModel): UpdateArticleDto {
    const updateArticleDto = new UpdateArticleDto();
    updateArticleDto.id = article.id;
    updateArticleDto.name = article.name;
    updateArticleDto.price = article.price;
    updateArticleDto.isActive = article.isActive;
    return updateArticleDto;
  }
}
