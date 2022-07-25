import { AllowNull, AutoIncrement, Column, CreatedAt, DeletedAt, HasMany, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import RoleHasPermissions from "./role_has_permission.model";

export interface PermissionInterface {
    id?: number | null;
    permission: string;
}

@Table({
    timestamps: true,
})
export default class Permission extends Model implements PermissionInterface {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    permission!: string;

    @HasMany(() => RoleHasPermissions, 'permission_id')
    permissions_resources_roles!: RoleHasPermissions[];

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}