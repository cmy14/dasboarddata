import {
  AutoIncrement,
  Column,
  Model,
  Table,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'articles', // Remplacez par le nom de votre table dans la base de données
})
export class ArticleModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column({
    type: DataType.INTEGER, // Remplacez DataType par le type de votre colonne
    // allowNull: false,
  })
  price: number;

  @Column({ defaultValue: true })
  isActive: boolean;
}
