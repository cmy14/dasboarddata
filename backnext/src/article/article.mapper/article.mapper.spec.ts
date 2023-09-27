import { Test, TestingModule } from '@nestjs/testing';
import { ArticleMapper } from './article.mapper';

describe('ArticleMapperService', () => {
  let service: ArticleMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArticleMapper],
    }).compile();

    service = module.get<ArticleMapper>(ArticleMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
