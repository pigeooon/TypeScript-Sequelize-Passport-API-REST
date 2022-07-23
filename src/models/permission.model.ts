import { AllowNull, AutoIncrement, Column, CreatedAt, DeletedAt, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

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

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}

/*
Create
Read
Write (Insert/Update)
Delete
*/