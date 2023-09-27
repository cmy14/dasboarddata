import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArticleModel } from './article/article.model/article.model';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ArticleModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: 'dev',
      database: 'dev',
      // models: [ArticleModel],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
