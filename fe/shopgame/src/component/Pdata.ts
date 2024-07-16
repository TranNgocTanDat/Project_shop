
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có

}

export interface CartItem extends ProductItem {
  
  qty: number;
}


const productItems: ProductItem[] = [
  {
    id: 49,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    id: 50,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    
    name: "solitaired",
    price: 50,
  },
  {
    id: 51,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
  },
  {
    id: 52,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
  },
  {
    id: 53,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
  },
  {
    id: 54,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",
    name: "Brain Out",
    price: 100,
  },
];

const productOffs: ProductItem[] = [
  {
    id: 1,
    discount: 0,
    cover: "/images/gameOff/gameoff-1.png",
    name: "Đào vàng",
    price: 100,
  },
  {
    id: 2,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "/images/gameOff/gameoff-3.png",
    name: "Subway surfers",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    name: "solitaired",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "/images/gameOff/gameoff-5.png",
    name: "Plants vs zombies",
    price: 100,
  },
  {
    id: 6,
    discount: 0,
    cover: "/images/gameOff/gameoff-6.png",
    name: "Candy crush saga",
    price: 100,
  },
  {
    id: 7,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
  },
  {
    id: 8,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
  },
  {
    id: 9,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
  },
  {
    id: 10,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",

    name: "Brain Out",
    price: 100,
  },
  {
    id: 11,
    discount: 50,
    cover: "/images/gameOff/gameoff-11.png",

    name: "Minecraft",
    price: 100,
  },
  {
    id: 12,
    discount: 50,
    cover: "/images/gameOff/gameoff-11.png",

    name: "Minecraft",
    price: 100,
  },

];


const productOns:ProductItem[] = [
  {
    id: 13,
    discount: 50,
    cover: "/images/gameOn/gameon-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    id: 14,
    discount: 40,
    cover: "/images/gameOn/gameon-1.png",
    name: "PUBG",
    price: 50,
  },
  {
    id: 15,
    discount: 40,
    cover: "/images/gameOn/gameon-3.png",
    name: "CROSS FIRE",
    price: 50,
  },
  {
    id: 16,
    discount: 40,
    cover: "/images/gameOn/gameon-4.png",
    name: "League of Legends",
    price: 200,
  },
  {
    id: 17,
    discount: 50,
    cover: "/images/gameOn/gameon-5.png",
    name: "GTA-5",
    price: 200,
  },
  {
    id: 18,
    discount: 50,
    cover: "/images/gameOn/gameon-6.png",
    name: "Zing Speed",
    price: 100,
  },
  {
    id: 19,
    discount: 50,
    cover: "/images/gameOn/gameon-7.png",
    name: "Audision",
    price: 20,
  },
  {
    id: 20,
    discount: 40,
    cover: "/images/gameOn/gameon-8.png",
    name: "Võ Lâm",
    price: 50,
  },
  {
    id: 21,
    discount: 40,
    cover: "/images/gameOn/gameon-9.png",
    name: "MU",
    price: 50,
  },
  {
    id: 22,
    discount: 40,
    cover: "/images/gameOn/gameon-10.png",
    name: "Avata Star",
    price: 200,
  },
  {
    id: 23,
    discount: 50,
    cover: "/images/gameOn/gameon-11.png",
    name: "Chiến Cơ Huyền Thoại",
    price: 20,
  },
  {
    id: 24,
    discount: 50,
    cover: "/images/gameOn/gameon-12.png",
    name: "Quyền Vương",
    price: 100,
  },
];

const productPlays:ProductItem[] = [
  {
    id: 25,
    discount: 50,
    cover: "/images/gamePlay/gameplay-1.png",
    name: "FIFA 4",
    price: 20,
  },
  {
    id: 26,
    discount: 40,
    cover: "/images/gamePlay/gameplay-2.png",
    name: "Super Mario",
    price: 50,
  },
  {
    id: 27,
    discount: 40,
    cover: "/images/gamePlay/gameplay-3.png",
    name: "Hollow Knight",
    price: 50,
  },
  {
    id: 28,
    discount: 40,
    cover: "/images/gamePlay/gameplay-4.png",
    name: "Devil May Cry 5",
    price: 200,
  },
  {
    id: 29,
    discount: 50,
    cover: "/images/gamePlay/gameplay-5.png",
    name: "Nioh",
    price: 200,
  },
  {
    id: 30,
    discount: 50,
    cover: "/images/gamePlay/gameplay-6.png",
    name: "Cuphead",
    price: 100,
  },{
    id: 31,
    discount: 50,
    cover: "/images/gamePlay/gameplay-7.png",
    name: "Sonic & Sega All-Stars Racing",
    price: 20,
  },
  {
    id: 32,
    discount: 40,
    cover: "/images/gamePlay/gameplay-8.png",
    name: "Đấu Trường Thú 3",
    price: 50,
  },
  {
    id: 33,
    discount: 40,
    cover: "/images/gamePlay/gameplay-9.png",
    name: "Disney Universe",
    price: 50,
  },
  {
    id: 34,
    discount: 40,
    cover: "/images/gamePlay/gameplay-10.png",
    name: "Renegade Ops",
    price: 200,
  },
  {
    id: 35,
    discount: 50,
    cover: "/images/gamePlay/gameplay-11.png",
    name: "Deathspank Trilogy",
    price: 20,
  },
  {
    id: 36,
    discount: 50,
    cover: "/images/gamePlay/gameplay-12.png",
    name: "Naruto Shippuden Ninja Storm 3",
    price: 100,
  },
];

const productSteams: ProductItem[] = [
  {
    id: 37,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-1.png",
    name: "APEX",
    price: 20,
  },
  {
    id: 38,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-2.png",
    name: "Back 4 Blood",
    price: 50,
  },
  {
    id: 39,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-3.png",
    name: "MUCK",
    price: 50,
  },
  {
    id: 40,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-4.png",
    name: "PALADINS",
    price: 200,
  },
  {
    id: 41,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-5.png",
    name: "UNDERLORDS",
    price: 200,
  },
  {
    id: 42,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-6.png",
    name: "SEA OF THIEVES",
    price: 100,
  },
  {
    id: 43,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-7.png",
    name: "BRAWHALLA",
    price: 20,
  },
  {
    id: 44,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-8.png",
    name: "REALM ROYALE",
    price: 50,
  },
  {
    id: 45,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-9.png",
    name: "BUSINESS TOUR",
    price: 50,
  },
  {
    id: 46,
    discount: 40,
    cover: "/images/gameSteam/gamesteam-10.png",
    name: "COUNTER STRIKE",
    price: 200,
  },
  {
    id: 47,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-11.png",
    name: "JUST ACT NATUPAL",
    price: 20,
  },
  {
    id: 48,
    discount: 50,
    cover: "/images/gameSteam/gamesteam-12.png",
    name: "Cry of Fear",
    price: 100,
  },
];


// Chuyển đổi ProductItem thành CartItem
const cartItems: CartItem[] = productItems.map(product => ({
  ...product,
  qty: 1, // Đặt qty mặc định là 1
}));


export { productItems, productOffs, productOns, productPlays, productSteams, cartItems};

