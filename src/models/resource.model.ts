import { AllowNull, AutoIncrement, Column, CreatedAt, DeletedAt, Model, NotEmpty, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

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

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}