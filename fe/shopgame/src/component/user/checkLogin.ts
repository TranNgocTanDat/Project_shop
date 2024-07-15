import users, {DataUser} from "./dataUser";
import User from "./User";
import user from "./User";



export const check = (userName: string, passWord: string): DataUser | null => {
    const user = users.find(user => user.userName === userName && user.passWord === passWord);
    return user || null;
}

export const checkID = (userID: { userName: string; passWord: string }): number | null => {
    const user = users.find(user => user.userName === userID.userName && user.passWord === userID.passWord);
    return user ? user.id : null;
}

export const getBalance = (userName: {userName: string; passWord: string}): number | null =>{
    const user = check(userName.userName, userName.passWord);
    if (!user) return null;
    const balance = user.balance;
    return balance;
}

export const updateUser = (users: DataUser, newBalance: number): DataUser | null => {
    const user = check(users.userName, users.passWord);
    if(user){
        user.balance = newBalance;
        return user;
    }
    return null;
}