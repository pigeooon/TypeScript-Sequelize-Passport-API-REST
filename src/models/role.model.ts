import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, NotEmpty, Unique, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany, HasMany } from 'sequelize-typescript';
import Permission from './permission.model';
import RoleHasPermissions from './role_has_permission.model';
import User from './user.model';
import UserHasRoles from './user_has_roles.model';

export interface RoleInterface {
    id?: number;
    name: string;
    description: string;
}

@Table({
    timestamps: true,
})
export default class Role extends Model implements RoleInterface {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    name!: string;

    @AllowNull(true)
    @Column
    description!: string;

    @BelongsToMany(() => User, () => UserHasRoles)
    users!: User[];

    @HasMany(() => RoleHasPermissions)
    permissions!: RoleHasPermissions[];

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}