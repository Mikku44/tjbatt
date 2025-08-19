export interface IBlogPost {
    id: number;
    created_at: string;
    title: string;
    slug: string;
    content: IContent;
    cover_image_url: string | null;
    status: string | null;
    published_at: string | null;
    tags: string[] | null;
}

export interface IContent {
    time: number;
    blocks: TBlock[];
};
export type TBlock =
    | {
        type: "header";
        data: {
            text: string;
            level: number;
        };
    }
    | {
        type: "paragraph";
        data: {
            text: string;
        };
    }
    | {
        type: "list";
        data: {
            items: string[];
            style: "ordered" | "unordered";
        };
    };