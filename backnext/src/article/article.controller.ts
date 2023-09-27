import { ArticleService } from './ArticleService';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto/create-article.dto';
import { ArticleModel } from './article.model/article.model';
import { UpdateArticleDto } from './dto/update-article.dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Post()
  async create(
    @Body() createArticleDto: CreateArticleDto,
  ): Promise<ArticleModel> {
    return this.articleService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<ArticleModel[]> {
    console.log('ok');
    return this.articleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ArticleModel> {
    console.log('ok');
    return this.articleService.findOne(id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleModel> {
    // Assurez-vous que l'ID est inclus dans le DTO de mise à jour
    updateArticleDto.id = id;
    return this.articleService.update(id, updateArticleDto).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.articleService.remove(id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }
}
