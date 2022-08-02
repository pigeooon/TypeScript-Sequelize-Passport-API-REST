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

export interface CreateUserInterface {
    first_name: string;
    last_name: string;
    rut: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface UpdateUserInterface {
    first_name: string;
    last_name: string;
    rut: string;
    email: string;
    password: string;
    confirm_password: string;
}