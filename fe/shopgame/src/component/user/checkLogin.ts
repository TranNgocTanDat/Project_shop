import users from "./dataUser";

export const check = (userName: string, passWord: string): boolean => {
    const user = users.find(user => user.userName === userName && user.passWord === passWord);
    return !!user;
}