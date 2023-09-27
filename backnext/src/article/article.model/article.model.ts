import {
  AutoIncrement,
  Column,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class ArticleModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column({ defaultValue: true })
  isActive: boolean;
}
