
export interface GameSteamItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
}

export interface CartItem extends GameSteamItem {
  qty: number;
}

const gameSteamItem1: GameSteamItem[] = [
  {
    id: 201,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-1.png",
    name: "APEX",
    price: 20,
  },
  {
    id: 202,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-2.png",
    name: "Back 4 Blood",
    price: 50,
  },
  {
    id: 203,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-3.png",
    name: "MUCK",
    price: 50,
  },
  {
    id: 204,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-4.png",
    name: "PALADINS",
    price: 200,
  },
  {
    id: 205,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-5.png",
    name: "UNDERLORDS",
    price: 200,
  },
  {
    id: 206,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-6.png",
    name: "SEA OF THIEVES",
    price: 100,
  },
];

const gameSteamItem2: GameSteamItem[] = [
  {
    id: 207,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-7.png",
    name: "BRAWHALLA",
    price: 20,
  },
  {
    id: 208,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-8.png",
    name: "REALM ROYALE",
    price: 50,
  },
  {
    id: 209,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-9.png",
    name: "BUSINESS TOUR",
    price: 50,
  },
  {
    id: 210,
    discount: 40,
    cover: "./images/gameSteam/gamesteam-10.png",
    name: "COUNTER STRIKE",
    price: 200,
  },
  {
    id: 211,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-11.png",
    name: "JUST ACT NATUPAL",
    price: 20,
  },
  {
    id: 212,
    discount: 50,
    cover: "./images/gameSteam/gamesteam-12.png",
    name: "Cry of Fear",
    price: 100,
  },
];
const cartItems: CartItem[] = [
{
  id: 1,
  discount: 50,
  cover: "./images/flash/flash-1.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
{
  id: 2,
  discount: 40,
  cover: "./images/flash/flash-2.png",
  name: "Watch",
  price: 20,
  qty: 2
},
{
  id: 3,
  discount: 40,
  cover: "./images/flash/flash-3.png",
  name: "Smart Mobile Black",
  price: 200,
  qty: 2
},
{
  id: 4,
  discount: 40,
  cover: "./images/flash/flash-4.png",
  name: "Smart Watch Black",
  price: 50,
  qty: 2
},
{
  id: 5,
  discount: 50,
  cover: "./images/flash/flash-1.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
{
  id: 6,
  discount: 50,
  cover: "./images/flash/flash-3.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
];

export { gameSteamItem1, gameSteamItem2, cartItems };

