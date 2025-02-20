import {create} from "zustand";

const useProductStore = create(()=>({
    products : [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            slug: "fjallraven-foldsack-no1-backpack",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: { rate: 3.9, count: 120 }
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            slug: "mens-casual-premium-slim-fit-t-shirts",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: { rate: 4.1, count: 259 }
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            slug: "mens-cotton-jacket",
            price: 55.99,
            description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm-hearted love to Father, husband, or son in this Thanksgiving or Christmas Day.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            rating: { rate: 4.7, count: 500 }
        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            slug: "mens-casual-slim-fit",
            price: 15.99,
            description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            rating: { rate: 2.1, count: 430 }
        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            slug: "john-hardy-legends-naga-bracelet",
            price: 695,
            description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 4.6, count: 400 }
        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave",
            slug: "solid-gold-petite-micropave",
            price: 168,
            description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 3.9, count: 70 }
        },
        {
            id: 7,
            title: "White Gold Plated Princess",
            slug: "white-gold-plated-princess-ring",
            price: 9.99,
            description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 3, count: 400 }
        },
        {
            id: 8,
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            slug: "pierced-owl-rose-gold-plated",
            price: 10.99,
            description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel.",
            category: "jewelery",
            image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
            rating: { rate: 1.9, count: 100 }
        },
        {
            id: 9,
            title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
            slug: "wd-2tb-elements-portable-hdd",
            price: 64,
            description: "USB 3.0 and USB 2.0 compatibility. Fast data transfers. Improve PC Performance. High capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            rating: { rate: 3.3, count: 203 }
        },
        {
            id: 10,
            title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            slug: "sandisk-ssd-plus-1tb",
            price: 109,
            description: "Easy upgrade for faster boot-up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads. The perfect balance of performance and reliability. Shock and vibration-resistant.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            rating: { rate: 2.9, count: 470 }
        },
        {
            id: 11,
            title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost",
            slug: "silicon-power-256gb-ssd-a55",
            price: 109,
            description: "3D NAND flash with SLC Cache technology for improved performance and longer lifespan. Up to 500MB/s read and 450MB/s write speeds. Shockproof and vibration-resistant.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            rating: { rate: 4.8, count: 319 }
        },
        {
            id: 12,
            title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            slug: "wd-4tb-gaming-drive-ps4",
            price: 114,
            description: "Expand your PS4 gaming experience with a portable hard drive designed for gaming. High-speed performance ensures fast load times and smooth gameplay.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            rating: { rate: 4.8, count: 400 }
        },
        {
            id: 13,
            title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            slug: "acer-sb220q-21.5-inch-monitor",
            price: 599,
            description: "21.5 inch Full HD IPS ultra-thin monitor with 1920 x 1080 resolution. Refresh rate: 75Hz using HDMI port. Zero-frame design, ultra-thin, AMD FreeSync technology.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            rating: { rate: 2.9, count: 250 }
        },
        {
            id: 14,
            title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
            slug: "samsung-49-inch-chg90-monitor",
            price: 999.99,
            description: "Super ultra-wide 49-inch screen with 32:9 aspect ratio. 144Hz refresh rate, HDR technology, and QLED color for immersive gaming. Multiple game modes and customizable screen settings.",
            category: "electronics",
            image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            rating: { rate: 2.2, count: 140 }
        },
        {
            id: 15,
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            slug: "biylaclesen-womens-snowboard-jacket",
            price: 56.99,
            description: "Waterproof and windproof winter coat for extreme weather conditions. 3-in-1 design with a removable inner fleece jacket and an outer waterproof shell. Suitable for outdoor sports and activities.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            rating: { rate: 2.6, count: 235 }
        },
        {
            id: 16,
            title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
            slug: "lock-and-love-womens-moto-jacket",
            price: 29.95,
            description: "Made of high-quality faux leather with a removable hood for a versatile look. Slim fit, zip-up closure, and stylish design for everyday wear. Available in multiple colors.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
            rating: { rate: 2.9, count: 340 }
        },
        {
            id: 17,
            title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
            slug: "rain-jacket-women-windbreaker",
            price: 39.99,
            description: "Lightweight perfect for trip or casual wear. Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes lined. The raincoat has 2 side pockets that are a good size to hold all kinds of things, covers the hips, and the hood is generous but doesn't overdo it. Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
            rating: { rate: 3.8, count: 679 }
        },
        {
            id: 18,
            title: "MBJ Women's Solid Short Sleeve Boat Neck V",
            slug: "mbj-womens-solid-boat-neck",
            price: 9.85,
            description: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
            rating: { rate: 4.7, count: 130 }
        },
        {
            id: 19,
            title: "Opna Women's Short Sleeve Moisture",
            slug: "opna-womens-short-sleeve-moisture",
            price: 7.95,
            description: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture-wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            rating: { rate: 4.5, count: 146 }
        },
        {
            id: 20,
            title: "DANVOUY Womens T Shirt Casual Cotton Short",
            slug: "danvouy-womens-casual-t-shirt",
            price: 12.99,
            description: "95% Cotton, 5% Spandex, Features: Casual, Short Sleeve, Letter Print, V-Neck, Fashion Tees. The fabric is soft and has some stretch. Occasion: Casual, Office, Beach, School, Home, Street. Season: Spring, Summer, Autumn, Winter.",
            category: "women's clothing",
            image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            rating: { rate: 3.6, count: 145 }
        }
    ],

}));

export default useProductStore;