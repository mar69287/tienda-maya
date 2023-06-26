require('dotenv').config();
require('./config/database');
const Product = require('./models/product');
const mongoose = require('mongoose');

const products = [
    {
        id: 1,
        title: 'Utility Apron Mint',
        price: 54.99,
        description: 'This utility apron is handmade in Guatemala by Mayan artisans, showcasing their exceptional craftsmanship and cultural heritage. It features a mint color design and is perfect for various kitchen activities, providing both functionality and style.',
        details: ['100% cotton', 'Top to bottom hem: 29.5"', 'Top hem width: 12.5"', 'Bottom hem width: 27"', 'Pockets 7.5" x 7.5"', 'Straps: 21.5"', 'Open back'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/YoXnPyH.png'
    },
    {
        id: 2,
        title: 'Utility Apron Rainbow',
        price: 59.99,
        description: 'Add a pop of color and style to your culinary adventures with this delightful rainbow apron. Handcrafted with care, it features a vibrant rainbow pattern that is sure to brighten up your kitchen. The apron is made from high-quality, durable fabric, ensuring long-lasting use. It comes with a spacious front pocket to conveniently hold your utensils and recipe cards. The adjustable neck strap and waist ties provide a comfortable and customized fit for all. Get ready to cook, bake, and create in style with this fabulous rainbow apron.',
        details: ['100% cotton', 'Approximately 30" long, 30" across', 'Waist straps approximately 40" long', 'One pocket', 'Pockets 12" x 9"', 'Open back'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/Fb5IJvQ.png'
    },
    {
        id: 3,
        title: 'Sol Potholder Honey',
        price: 31.99,
        description: `Introducing our double-sided pot holders, a truly versatile addition to elevate your kitchen textile collection. These pot holders offer a delightful twist with their unique design, allowing you to mix and match them effortlessly to create a playful and vibrant color story in your kitchen. Crafted with both style and functionality in mind, our pot holders are not only visually appealing but also pliable and highly durable. Whether you're using them to handle hot pots and pans or simply displaying them in your kitchen, they bring a touch of charm and character to any culinary space. The attached loop allows for easy hanging, ensuring they're always within reach whenever you need them.`,
        details: ['100% cotton with a polyfill', '7.5” x 7.5"', 'Machine wash gentle, lay flat to dry', 'Due to the nature of handcrafted goods, slight variations are embraced'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/l4Kud7t.png'
    },
    {
        id: 4,
        title: 'Colorful Potholder',
        price: 31.99,
        description: `Thickly padded colorful handwoven potholder with a loop for hanging, solid coordinating color on back. Handmade and fair trade.`,
        details: ['100% cotton with a polyfill', '7.5” x 7.5"', 'Machine wash gentle, lay flat to dry', 'Due to the nature of handcrafted goods, slight variations are embraced'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/dkbewa5.png'
    },
    {
        id: 5,
        title: 'Oven Mitt Mint',
        price: 39.99,
        description: `Oven mitts are double-sided, making them a uniquely versatile addition to our kitchen textile collection. They are perfect for mixing and matching and bring a playful pop to your kitchen color story. Stylish yet pliable and durable, our oven mitts are equally attractive in use or hanging in your kitchen by the attached loop.`,
        details: ['100% cotton with a polyfill', '7.5” x 11.5"', 'Machine wash gentle, lay flat to dry', 'Due to the nature of handcrafted goods, slight variations are embraced'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/K9h9cQa.png'
    },
    {
        id: 6,
        title: 'Oven Mitt Blue Jaspe',
        price: 39.99,
        description: `Oven mitts are double-sided, making them the perfect addition to your kitchen textile collection. Mix and match for a playful touch of color, while enjoying their stylish design and durable functionality. Whether in use or hanging by the attached loop, these oven mitts effortlessly enhance your kitchen aesthetic. Elevate your cooking experience with our chic and reliable oven mitts.`,
        details: ['100% cotton with a polyfill', '7.5” x 11.5"', 'Machine wash gentle, lay flat to dry', 'Due to the nature of handcrafted goods, slight variations are embraced'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/FFx8xrW.png'
    },
    {
        id: 7,
        title: 'Acacia Round Plate',
        price: 21.99,
        description: `These plates are unique and handcrafted for all your woodsy cravings. Made of raw acacia wood this ultra-strong wood gets more beautiful with age. These beautiful plates will add a rustic beauty to your table. Because they are handmade, no two pieces are exactly the same.`,
        details: ['Size: Approx. 10" diameter', 'Handcrafted from raw acacia', 'CARE INSTRUCTIONS: Hand wash with mild soap. Avoid citrus-based detergents or abrasives to preserve unique finish.'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/zOY604k.png'
    },
    {
        id: 8,
        title: 'Wild Grass and Pine Tortilla Basket with Lid',
        price: 31.99,
        description: `This Wild Grass and Pine Needle Tortilla Basket with Lid is perfect for tortillas, snacks or treasures you want to keep covered. The soft green of the native grass will mellow with time into a golden color. Handmade and fair trade.`,
        details: ['Native grass and pine needle', '7"W x 2 1/2"H'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/zOY604k.png'
    },
    {
        id: 9,
        title: 'Green Poncho',
        price: 49.99,
        description: `Wrap yourself in timeless elegance with our green poncho, a perfect blend of comfort and style.`,
        details: ['Open weave', 'Color - Grean Tea', 'Cotton'],
        category: 'Clothing',
        image: 'https://i.imgur.com/zOY604k.png'
    },
    {
        id: 10,
        title: 'Striped Poncho',
        price: 69.99,
        description: `Handcrafted by skilled artisans, this poncho showcases a captivating blend of colors and patterns.`,
        details: ['Color - Blue and Green', 'Cotton and Silk'],
        category: 'Clothing',
        image: 'https://i.imgur.com/RDc9vYW.jpg'
    },
    {
        id: 11,
        title: 'Annabelle Scarf',
        price: 29.99,
        description: `The Annabelle Scarf is the perfect complement to any outfit!  This elegant scarf is handwoven on a traditional backstrap loom by Maya women artisans in San Rafael in Guatemala, then finished with hand-knotted fringe.`,
        details: ['100% rayon', '72" long x 10.5" wide, plus fringe', 'Dual color tones'],
        category: 'Clothing',
        image: 'https://i.imgur.com/XG6q5Cd.png'
    },
    {
        id: 12,
        title: 'Recycled Thread Scarf',
        price: 29.99,
        description: `Lightweight and ethically made, the Recycled Thread Scarf is a perfect addition to any wardrobe!  Combining recycled cotton thread and denim threads spun from denim factory fabric scraps, this scarf is delicately woven on a traditional backstrap loom.`,
        details: ['100% cotton', '72" long x 10.5" wide, plus fringe', 'Hand wash in cold water, line dry'],
        category: 'Clothing',
        image: 'https://i.imgur.com/FrLgZNm.png'
    },
    {
        id: 13,
        title: 'Dotte Bandana',
        price: 44.99,
        description: `Style these beauties with your favorite t-shirt or blouse, or tie up your hair with it. We even like hanging these on the wall as room decor.`,
        details: ['100% cotton', '20” x 20”', 'Handwash, hang dry'],
        category: 'Clothing',
        image: 'https://i.imgur.com/28Xu5vT.png'
    },
    {
        id: 14,
        title: 'Everyday Robe Sage Stripe',
        price: 69.99,
        description: `The Everyday Robe that matches your bedding. Created for anyone and everyone. An oversized, loose-fitting robe with adjustable sash. One size fits most.`,
        details: ['100% cotton', 'Shoulder to bottom hem: 41"', 'Sleeve length: 14.5"', 'Sleeve opening: 12” diameter', 'Shoulder to shoulder: 27"', 'Pockets: 9” x 7"'],
        category: 'Clothing',
        image: 'https://i.imgur.com/28Xu5vT.png'
    },
    {
        id: 15,
        title: 'Wood Escobo Handbroom',
        price: 21.99,
        description: `Made from all natural fibers from vines, roots, and barks. The Escobo Handbroom makes a beautiful decorative piece in the home, and is also fully functional for sweeping.`,
        details: ['Made from escobo and ziricote wood', 'Fibers will loosen and sweep more comfortably over time', '15"d x 10"h'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/zth9VfM.png'
    },
    {
        id: 16,
        title: 'Bandana Cream',
        price: 29.99,
        description: `Style these beauties with your favorite t-shirt or blouse, or tie up your hair with it. We even like hanging these on the wall as room decor.`,
        details: ['100% cotton', '20” x 20”', 'Sleeve length: 14.5"', 'Handwash, hang dry'],
        category: 'Clothing',
        image: 'https://i.imgur.com/fgfS4ba.jpg'
    },
  
];

async function seedDatabase() {
  try {
    await Product.insertMany(products);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database', error);
  } finally { 
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedDatabase();