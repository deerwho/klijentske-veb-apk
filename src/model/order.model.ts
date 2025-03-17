export interface OrderModel {
    id: number;
    movieId: number;
    originalTitle: string;
    startDate: string;
    count: number;
    pricePerItem: number;
    status: 'reserved' | 'paid' | 'watched' | 'cancelled';
    rating: null | boolean;
}