import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, NotEmpty, CreatedAt, UpdatedAt, DeletedAt, Default, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PostType } from '../types/post.type';
import User from './user.model';

@Table({
    timestamps: true,
})
export default class Post extends Model implements PostType {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    title!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    content!: string;

    @Default(1)
    @Column
    status!: number;

    @ForeignKey(() => User)
    @Column
    author_id!: number;

    @BelongsTo(() => User)
    author!: User;

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}