export type PostType = { 
    id?: number | null;
    title: string;
    content: string;
    status: number;
    author_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

export type CreatePostType = {
    title: string;
    content: string;
    status: number;
    author_id: number;
}