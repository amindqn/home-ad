export interface Ad {
    id?: string;
    address: string;
    description: string;
    phone: string;
    location: {
        lat: number;
        lng: number;
    };
}
