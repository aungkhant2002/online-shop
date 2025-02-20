import {create} from "zustand";

const useProductStore = create(()=>({
    products : [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            slug: "fjallraven-foldsack-no-1-backpack",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest...",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: { rate: 3.9, count: 120 }
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            slug: "mens-casual-premium-slim-fit-t-shirts",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve...",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: { rate: 4.1, count: 259 }
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            slug: "mens-cotton-jacket",
            price: 55.99,
            description: "Great outerwear jackets for Spring/Autumn/Winter...",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            rating: { rate: 4.7, count: 500 }
        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            slug: "mens-casual-slim-fit",
            price: 15.99,
            description: "The color could be slightly different...",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            rating: { rate: 2.1, count: 430 }
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            slug: "john-hardy-legends-naga-bracelet",
            price: 695,
            description: "From our Legends Collection...",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 4.6, count: 400 }
        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave",
            slug: "solid-gold-petite-micropave",
            price: 168,
            description: "Satisfaction Guaranteed...",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 3.9, count: 70 }
        },
        {
            id: 7,
            title: "White Gold Plated Princess",
            slug: "white-gold-plated-princess-ring",
            price: 9.99,
            description: "Classic Created Wedding Engagement Solitaire...",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 3, count: 400 }
        },
        {
            id: 8,
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            slug: "pierced-owl-rose-gold-plated",
            price: 10.99,
            description: "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 1.9, count: 100 }
        },
        {
            id: 9,
            title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
            slug: "wd-2tb-elements-external-hard-drive",
            price: 64,
            description: "USB 3.0 and USB 2.0 Compatibility...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            rating: { rate: 3.3, count: 203 }
        },
        {
            id: 10,
            title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            slug: "sandisk-ssd-plus-1tb",
            price: 109,
            description: "Easy upgrade for faster boot up...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            rating: { rate: 2.9, count: 470 }
        },
        {
            id: 11,
            title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost",
            slug: "silicon-power-256gb-ssd-a55",
            price: 109,
            description: "3D NAND flash provides high transfer speeds...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/71kWymZ+FCL._AC_SX679_.jpg",
            rating: { rate: 4.8, count: 319 }
        },
        {
            id: 12,
            title: "WD 4TB Gaming Drive Works with Playstation 4",
            slug: "wd-4tb-gaming-drive-ps4",
            price: 114,
            description: "Expand your PS4 gaming experience...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            rating: { rate: 4.8, count: 400 }
        },
        {
            id: 13,
            title: "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin",
            slug: "acer-sb220q-21-5-inch-monitor",
            price: 599,
            description: "21. 5 inches Full HD IPS Ultra-Thin...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            rating: { rate: 2.9, count: 250 }
        },
        {
            id: 14,
            title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
            slug: "samsung-49-inch-chg90-gaming-monitor",
            price: 999.99,
            description: "Super ultra-wide 49-inch screen with 32:9 aspect ratio...",
            category: "electronics",
            image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            rating: { rate: 2.2, count: 140 }
        },
        {
            id: 15,
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            slug: "biylaclesen-womens-snowboard-jacket",
            price: 56.99,
            description: "Note: The Jackets are US standard size...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            rating: { rate: 2.6, count: 235 }
        },
        {
            id: 16,
            title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            slug: "lock-and-love-womens-biker-jacket",
            price: 29.95,
            description: "Faux leather material for style and comfort...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            rating: { rate: 2.9, count: 340 }
        },
        {
            id: 17,
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            slug: "rain-jacket-women-windbreaker",
            price: 39.99,
            description: "Lightweight perfect for trip or casual wear...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_.jpg",
            rating: { rate: 3.8, count: 679 }
        },
        {
            id: 18,
            title: "MBJ Women's Solid Short Sleeve Boat Neck V",
            slug: "mbj-womens-solid-boat-neck",
            price: 9.85,
            description: "Soft and stretchy material...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            rating: { rate: 4.7, count: 130 }
        },
        {
            id: 19,
            title: "Opna Women's Short Sleeve Moisture",
            slug: "opna-womens-short-sleeve-moisture",
            price: 7.95,
            description: "Lightweight, breathable, and comfortable...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            rating: { rate: 4.5, count: 146 }
        },
        {
            id: 20,
            title: "DANVOUY Womens T Shirt Casual Cotton Short",
            slug: "danvouy-womens-casual-t-shirt",
            price: 12.99,
            description: "Perfect casual t-shirt with cotton material...",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            rating: { rate: 3.6, count: 145 }
        },

    ]

}));

export default useProductStore;