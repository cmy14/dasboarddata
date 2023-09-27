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
    private  articleModel: typeof ArticleModel,
    private  articleMapper: ArticleMapper,
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

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleModel> {
    const [updatedRowCount, updatedArticles] = await this.articleModel.update(
      updateArticleDto,
      {
        where: { id },
        returning: true,
      },
    );
    if (updatedRowCount === 0) {
      throw new NotFoundException(`Article with id ${id} not found.`);
    }
    return updatedArticles[0];
  }

  async remove(id: number): Promise<void> {
    const deletedRowCount = await this.articleModel.destroy({ where: { id } });
    if (deletedRowCount === 0) {
      throw new NotFoundException(`Article with id ${id} not found.`);
    }
  }
}
