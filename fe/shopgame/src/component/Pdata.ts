
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
  qty: number;
}

export interface CartItem extends ProductItem {
  
}


const productItems: ProductItem[] = [
  {
    qty:1,
    id: 1,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    qty:1,
    id: 2,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    
    name: "solitaired",
    price: 50,
  },
  {
    qty:1,
    id: 3,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
  },
  {
    qty:1,
    id: 4,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
  },
  {
    qty:1,
    id: 5,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
  },
  {
    qty:1,
    id: 6,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",
    name: "Brain Out",
    price: 100,
  },
];

const productOffs: ProductItem[] = [
  {
    qty:1,
    id: 1,
    discount: 0,
    cover: "/images/gameOff/gameoff-1.png",
    name: "Đào vàng",
    price: 100,
  },
  {
    qty:1,
    id: 2,
    discount: 50,
    cover: "/images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    qty:1,
    id: 3,
    discount: 40,
    cover: "./images/gameOff/gameoff-3.png",
    name: "Subway surfers",
    price: 200,
  },
  {
    qty:1,
    id: 4,
    discount: 40,
    cover: "/images/gameOff/gameoff-4.png",
    name: "solitaired",
    price: 50,
  },
  {
    qty:1,
    id: 5,
    discount: 50,
    cover: "/images/gameOff/gameoff-5.png",
    name: "Plants vs zombies",
    price: 100,
  },
  {
    qty:1,
    id: 6,
    discount: 0,
    cover: "/images/gameOff/gameoff-6.png",
    name: "Candy crush saga",
    price: 100,
  },
  {
    qty:1,
    id: 7,
    discount: 50,
    cover: "/images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
  },
  {
    qty:1,
    id: 8,
    discount: 40,
    cover: "/images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
  },
  {
    qty:1,
    id: 9,
    discount: 40,
    cover: "/images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
  },
  {
    qty:1,
    id: 10,
    discount: 50,
    cover: "/images/gameOff/gameoff-10.png",

    name: "Brain Out",
    price: 100,
  },
  {
    qty:1,
    id: 11,
    discount: 50,
    cover: "/images/gameOff/gameoff-11.png",

    name: "Minecraft",
    price: 100,
  },
  {
    qty:1,
    id: 12,
    discount: 50,
    cover: "/images/gameOff/gameoff-11.png",

    name: "Minecraft",
    price: 100,
  },

];

const productOns:ProductItem[] = [
  {
    qty:1,
    id: 13,
    discount: 50,
    cover: "/images/gameOn/gameon-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    qty:1,
    id: 14,
    discount: 40,
    cover: "/images/gameOn/gameon-1.png",
    name: "PUBG",
    price: 50,
  },
  {
    qty:1,
    id: 15,
    discount: 40,
    cover: "/images/gameOn/gameon-3.png",
    name: "CROSS FIRE",
    price: 50,
  },
  {
    qty:1,
    id: 16,
    discount: 40,
    cover: "/images/gameOn/gameon-4.png",
    name: "League of Legends",
    price: 200,
  },
  {
    qty:1,
    id: 17,
    discount: 50,
    cover: "/images/gameOn/gameon-5.png",
    name: "GTA-5",
    price: 200,
  },
  {
    qty:1,
    id: 18,
    discount: 50,
    cover: "/images/gameOn/gameon-6.png",
    name: "Zing Speed",
    price: 100,
  },
  {
    qty:1,
    id: 19,
    discount: 50,
    cover: "/images/gameOn/gameon-7.png",
    name: "Audision",
    price: 20,
  },
  {
    qty:1,
    id: 20,
    discount: 40,
    cover: "/images/gameOn/gameon-8.png",
    name: "Võ Lâm",
    price: 50,
  },
  {
    qty:1,
    id: 21,
    discount: 40,
    cover: "/images/gameOn/gameon-9.png",
    name: "MU",
    price: 50,
  },
  {
    qty:1,
    id: 22,
    discount: 40,
    cover: "/images/gameOn/gameon-10.png",
    name: "Avata Star",
    price: 200,
  },
  {
    qty:1,
    id: 23,
    discount: 50,
    cover: "/images/gameOn/gameon-11.png",
    name: "Chiến Cơ Huyền Thoại",
    price: 20,
  },
  {
    qty:1,
    id: 24,
    discount: 50,
    cover: "/images/gameOn/gameon-12.png",
    name: "Quyền Vương",
    price: 100,
  },
]


export { productItems, productOffs, productOns };

