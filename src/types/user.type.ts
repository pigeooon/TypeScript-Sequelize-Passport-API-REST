export type UserType = {
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