export interface Offer {
    id: string;
    title: string;
    description: string;
    imageSrc?: string;
    price: number;
    startDate: string;
    endDate: string;
    createdUserId: string;
}

export type OfferPayload = Omit<Offer, 'id'>;
