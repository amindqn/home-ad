export interface Ad {
    title:string;
    id?: string;
    address: string;
    description?: string;
    phone: string;
    location: [number,number];
    userId?: string;
}
