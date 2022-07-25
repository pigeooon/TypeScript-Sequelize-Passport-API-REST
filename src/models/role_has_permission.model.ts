import { AutoIncrement, Column, CreatedAt, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import Permission from "./permission.model";
import Resource from "./resource.model";
import Role from "./role.model";

export interface RoleHasPermissionsInterface {
    role_id: number;
    resource_id: number;
    permission_id: number;
}

@Table({
    tableName: "role_has_permissions",
    timestamps: true,
})
export default class RoleHasPermissions extends Model implements RoleHasPermissionsInterface {
    @PrimaryKey
    @AutoIncrement
    @Column
    id?: number;

    @ForeignKey(() => Role)
    @Column
    role_id!: number;

    @ForeignKey(() => Resource)
    @Column
    resource_id!: number;

    @ForeignKey(() => Permission)
    @Column
    permission_id!: number;

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}