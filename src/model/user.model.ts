export interface UserModel {
    email: string;
    password: string;
    orders:{
        movieId: number;
        originalTitle: string;
        startDate: string;
        count: number;
        pricePerItem: number;
        status: 'reserved' | 'watched' | 'cancelled';
        rating: null | boolean;
    }[];
}