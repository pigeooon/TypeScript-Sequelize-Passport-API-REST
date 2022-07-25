import { AllowNull, AutoIncrement, Column, CreatedAt, DeletedAt, HasMany, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import RoleHasPermissions from "./role_has_permission.model";

export interface ResourceInterface {
    id?: number | null;
    module: string;
}

@Table({
    timestamps: true,
})
export default class Resource extends Model implements ResourceInterface {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    module!: string;

    @HasMany(() => RoleHasPermissions, 'resource_id')
    resource_roles_permissions!: RoleHasPermissions[];

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}