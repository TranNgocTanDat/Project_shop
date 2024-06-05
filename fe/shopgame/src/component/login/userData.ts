export interface User {
    userName: string;
    password: string;
}

const users: User[] = [
    { userName: 'user1', password: 'password1' },
    { userName: 'user2', password: 'password2' },
    // Thêm các người dùng khác tại đây
];

export default users;