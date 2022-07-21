import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, NotEmpty, Unique, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany } from 'sequelize-typescript';
import Role from './role.model';
import UserHasRoles from './user_has_roles.model';

export interface UserInterface {
    id?: number | null;
    first_name: string;
    last_name: string;
    rut: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

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

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}