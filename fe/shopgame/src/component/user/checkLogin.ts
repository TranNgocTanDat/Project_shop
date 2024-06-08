import users, {DataUser} from "./dataUser";



export const check = (userName: string, passWord: string): DataUser | null => {
    const user = users.find(user => user.userName === userName && user.passWord === passWord);
    return user || null;
}

export const checkID = (userID: { userName: string; passWord: string }): number | null => {
    const user = users.find(user => user.userName === userID.userName && user.passWord === userID.passWord);
    return user ? user.id : null;
}
