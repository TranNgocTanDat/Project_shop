import users from './userData';

export const authenticateUser = (userName: string, password: string): boolean => {
    const user = users.find(user => user.userName === userName && user.password === password);
    return !!user;
};