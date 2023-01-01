export interface Immobile {
    id?: number;
    id_user?: number;
    id_status?: number;
    title?:string;
    description?: string;
    price?: string;
    datetime?: number;
    n_rooms?: number;
    square_meters?: number;
    n_bathrooms?: number;
    garage?: number;
    is_furnished?: boolean;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    cep?: string;
}
