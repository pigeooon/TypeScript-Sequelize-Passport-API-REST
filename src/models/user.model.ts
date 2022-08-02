import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, NotEmpty, Unique, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany, HasMany } from 'sequelize-typescript';
import { UserInterface } from '../interfaces/user.interface';
import Post from './post';
import Role from './role.model';
import UserHasRoles from './user_has_roles.model';

@Table({
    timestamps: true,
})
export default class User extends Model implements UserInterface {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    first_name!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    last_name!: string;

    @Unique
    @AllowNull(false)
    @NotEmpty
    @Column
    rut!: string;

    @Unique
    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string;

    @BelongsToMany(() => Role, () => UserHasRoles)
    roles!: Role[];

    @HasMany(() => Post)
    posts!: Post[];

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}