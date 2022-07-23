import { Column, CreatedAt, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import Permission from "./permission.model";
import Resource from "./resource.model";
import Role from "./role.model";

export interface RoleHasPermissionsInterface {
    role_fk: number;
    resource_fk: number;
    permission_fk: number;
}

@Table({
    tableName: "role_has_permissions",
    timestamps: true,
})
export default class RoleHasPermissions extends Model implements RoleHasPermissionsInterface {
    @ForeignKey(() => Role)
    @Column
    role_fk!: number;

    @ForeignKey(() => Resource)
    @Column
    resource_fk!: number;

    @ForeignKey(() => Permission)
    @Column
    permission_fk!: number;

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}