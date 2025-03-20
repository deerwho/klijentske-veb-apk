import { OrderModel } from '../model/order.model';
import { UserModel } from '../model/user.model';

export class UserService {

    static retriveUsers(): UserModel[] {
        if (!localStorage.getItem('users')) {
            const arr: UserModel[] = [
                {
                    email: 'user@kva.com',
                    firstName: 'Jonas ',
                    lastName: 'Kahnwald',
                    phone: '+381647510113',
                    address: 'Feldweg 8, 36777 Winden',
                    favoriteGenre: 'Triler',
                    password: 'user123',
                    orders: []  
                }
            ];
            localStorage.setItem('users', JSON.stringify(arr));
        }

        return JSON.parse(localStorage.getItem('users')!);
    }

    static createUser(model: UserModel){
        const users = this.retriveUsers()
        
        for(let u of users){
            if(u.email === model.email)
                return false
        }

        users.push(model)
        localStorage.setItem('users', JSON.stringify(users))
        return true
    }

    static updateUser(model: UserModel){
        const users = this.retriveUsers()
        for(let u of users){
            if(u.email === model.email){
                u.firstName = model.firstName
                u.lastName = model.lastName
                u.address = model.address
                u.phone = model.phone
                u.favoriteGenre = model.favoriteGenre
            }
        }
        localStorage.setItem('users', JSON.stringify(users))
    }

    static login(email: string, password: string): boolean {
        for (let user of this.retriveUsers()) {
            if (user.email === email && user.password === password) {
                localStorage.setItem('active', user.email);
                return true;
            }
        }
        return false;
    }

    static getActiveUser(): UserModel | null {
        if (!localStorage.getItem('active'))
            return null;

        for (let user of this.retriveUsers()) {
            if (user.email === localStorage.getItem('active'))
                return user;
        }

        return null;
    }

    static createOrder(order: OrderModel) {
        const arr = this.retriveUsers()
        for (let user of arr) {
            if (user.email == localStorage.getItem('active')) {
                user.orders.push(order)
                localStorage.setItem('users', JSON.stringify(arr))
                return true;
            }
        }

        return false;
    }

    static changeOrderStatus(state: 'reserved' | 'paid' | 'watched' | 'cancelled', id:number){
        const active = this.getActiveUser()
        if (active) {
            const arr = this.retriveUsers()
            for(let user of arr){
                if(user.email == active.email){
                    for(let order of user.orders){
                        if(order.id == id){
                            order.status = state
                        }
                    }
                    localStorage.setItem('users', JSON.stringify(arr))
                    return true;
                }
            }
        
        }

        return false;
    
    }
    static changeRatingStatus(r: boolean, id: number){
        const active = this.getActiveUser()
        if (active) {
            const arr = this.retriveUsers()
            for(let user of arr){
                if(user.email == active.email){
                    for(let order of user.orders){
                        if(order.id == id && order.status == 'watched'){
                            order.rating = r;
                        }
                    }
                    localStorage.setItem('users', JSON.stringify(arr))
                    return true;
                }
            }
        
        }

        return false;
    
    }

    static changePassword(newpassword: string): boolean {

        const arr = this.retriveUsers()
        for (let user of arr) {
            if (user.email == localStorage.getItem('active')) {
                user.password = newpassword
                localStorage.setItem('users', JSON.stringify(arr))
                return true;
            }
        }

        return false;
    }
}
