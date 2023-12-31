import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleModel } from './article.model/article.model';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateArticleDto } from './dto/update-article.dto/update-article.dto';
import { CreateArticleDto } from './dto/create-article.dto/create-article.dto';
import { ArticleMapper } from './article.mapper/article.mapper';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(ArticleModel)
    private readonly articleModel: typeof ArticleModel,
    private readonly articleMapper: ArticleMapper,
  ) {}
  async create(createArticleDto: CreateArticleDto): Promise<ArticleModel> {
    const article = this.articleMapper.toEntity(createArticleDto);
    return article.save();
  }

  async findAll(): Promise<ArticleModel[]> {
    return this.articleModel.findAll();
  }

  async findOne(id: number): Promise<ArticleModel | null> {
    const article = await this.articleModel.findByPk(id);
    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found.`);
    }
    return article;
  }

  async update(updateArticleDto: UpdateArticleDto): Promise<ArticleModel> {
    const article = await this.findOne(updateArticleDto.id);
    Object.assign(article, updateArticleDto); // Mettez à jour les propriétés de l'article
    return article.save();
  }

  async remove(id: number): Promise<void> {
    const article = await this.findOne(id);
    await article.destroy();
  }
}
