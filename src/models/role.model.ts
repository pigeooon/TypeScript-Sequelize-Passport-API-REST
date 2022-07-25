import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, NotEmpty, CreatedAt, UpdatedAt, DeletedAt, BelongsToMany, HasMany, Default } from 'sequelize-typescript';
import RoleHasPermissions from './role_has_permission.model';
import User from './user.model';
import UserHasRoles from './user_has_roles.model';

export interface RoleInterface {
    id?: number;
    name: string;
    description: string;
    priority: number;
    super_admin: number;
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

    @Column
    priority!: number;

    @Default(0)
    @Column
    super_admin!: number;

    @BelongsToMany(() => User, () => UserHasRoles)
    users!: User[];

    @HasMany(() => RoleHasPermissions, 'role_id')
    role_has_permissions!: RoleHasPermissions[];

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}