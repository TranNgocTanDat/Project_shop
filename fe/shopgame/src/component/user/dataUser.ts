export interface DataUser{
    id: number;
    userName: string;
    passWord: string;
    avt: string;
    mail: string;
    phone: string;
    adress: string;
    cccd: string;
    balance: number;
}

const users: DataUser[]=[
    {
        id: 1,
        userName: "admin",
        passWord: "123",
        avt: "./images/userIMG/user1.png",
        mail: "danh@gmail.com",
        phone: "0111",
        adress: "Tay Ninh",
        cccd: "1818",
        balance: 2000
    },
    {
        id: 2,
        userName: "admin2",
        passWord: "456",
        avt: "./images/userIMG/user1.png",
        mail: "dat@gmail.com",
        phone: "0222",
        adress: "Da Lat",
        cccd: "1212",
        balance: 2000
    }
];

export default users;