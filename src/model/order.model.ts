export interface OrderModel {
    id: number;
    movieId: number;
    originalTitle: string;
    startDate: string;
    count: number;
    pricePerItem: number;
    projectionTime: number;
    status: 'reserved' | 'paid' | 'watched' | 'cancelled';
    rating: null | boolean;
}