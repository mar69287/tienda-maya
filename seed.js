require('dotenv').config();
require('./config/database');
const Product = require('./models/product');
const mongoose = require('mongoose');

const products = [
    {
        id: 17,
        title: 'Valley Bag Ripple',
        price: 79.99,
        description: `Meet your new favorite multi-use bag! The Valley Bag brings forward the ease and function of a weekender bag. Take it on your next day trip, farmer's market run or as your everyday-bag. It really is that versatile!. Featuring a button clasp and a large pocket on the outside for easy access.`,
        details: ['11" x 22" w/ 10.5" straps', '100% cotton', 'Machine wash gentle, tumble dry low or lay flat to dry'],
        category: 'Accessories',
        image: 'https://i.imgur.com/HTYDHhS.jpg'
    },
    {
        id: 18,
        title: 'Placemat Iris',
        price: 24.49,
        description: `A bright and beautiful addition to your tabletop. The Panalito Placemat in Iris is our newest and brightest colorway, perfect for layering with our napkins and runners. Reversible - one side is lighter and one side is darker- and full of texture!`,
        details: ['14" x 18"', '100% cotton', 'Handwash cold, hang dry. Do not wring.'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/ZIE3ZyJ.png'
    },
    {
        id: 19,
        title: 'Itza Wood Salad Server',
        price: 19.99,
        description: `Itza Wood kitchen + dining items are crafted with care by local artisans from the Peten region of Guatemala. This utensil set brings the perfect touch of warmth when serving a fresh, bright green salad.`,
        details: ['Sustainably harvested ziricote wood', '12" l', 'Handwash only'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/NCr1y1O.png'
    },
    {
        id: 20,
        title: 'Itza Wood Medium Hand Turned Bowl Mahogany',
        price: 34.99,
        description: `This mahogany bowl brings a beautiful warmth to a neutral tablescape.`,
        details: ['Sustainably harvested mahagony wood', '9"d x 4"h', 'Handwash only'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/DHGPbYY.png'
    },
    {
        id: 21,
        title: 'Itza Wood Coffee Scoop Pixi',
        price: 14.99,
        description: `This pixi scooper offers a beautiful touch to any kitchen for serving your coffee.`,
        details: ['Sustainably harvested pixi wood', '5.5" x .75"', 'Handwash only'],
        category: 'Kitchen',
        image: 'https://i.imgur.com/D1det95.png'
    },
    {
        id: 22,
        title: 'Handwoven Men`s Shirt',
        price: 44.99,
        description: `Woven by hand, crude cotton is transformed into a shirt by Belarmino Alvarez. Strands of green, rose and grey form narrow paths down the front of the cool, short sleeve design. With its open collar and easy fit openings at each side, the shirt buttons with disks of coconut shell.`,
        details: ['100% cotton', 'Dry in the shade', 'Features a button closure'],
        category: 'Clothing',
        image: 'https://i.imgur.com/R7bu47Y.png'
    },
    {
        id: 23,
        title: 'Men`s Retro Shirt',
        price: 34.99,
        description: `This beautiful blue shirt is perfect for summer weather. Lightweight and breathable for any outdoor occassion.`,
        details: ['100% rayon', 'Fit is loose', 'Print matched, hand painted buttons'],
        category: 'Clothing',
        image: 'https://i.imgur.com/EPqhGwT.png'
    },
    {
        id: 24,
        title: 'Harness Bag',
        price: 79.99,
        description: `Completely modular and multifunctional, it works like a vest bag, one side bag, or you can use its pockets to wear them with a belt. An adjustable shoulder harness allows you to wear it on the skin or above a jacket for any occasion.`,
        details: ['Genuine cow leather and Mayan brocade fabrics', 'Unisex'],
        category: 'Accessories',
        image: 'https://i.imgur.com/5wavkdn.png'
    },
    {
        id: 25,
        title: 'INFINITY HOOD - Honey & Geometry',
        price: 49.99,
        description: `This piece features a big protection hood with a crystal grid design and sacred Mayan geometry patterns clustered together for a unique style. Truly a multifunctional piece, the infinity hood is perfect for a traveling lifestyle, or anyone who wants to have freedom within their wardrobe.`,
        details: ['From up-cycled cotton/lycra and traditional Mayan weavings', '8 in 1: Four tops, scarf, vest, dust mask, bag.'],
        category: 'Accessories',
        image: 'https://i.imgur.com/VUua7P0.png'
    },
    {
        id: 26,
        title: '2 in 1 Fringe Skirt',
        price: 54.99,
        description: `Shrouding and practical, it fits like a second skin. Our Fringe Skirt is the perfect choice to dance freely and reconnect with tribal rhythm.`,
        details: ['Upcycled rayon, elastic suede', 'Handwoven'],
        category: 'Clothing',
        image: 'https://i.imgur.com/xHvsl8S.png'
    },
    {
        id: 27,
        title: 'Shaman Dress',
        price: 64.99,
        description: `Sexy, comfortable, unique and sacred, the open back on this dress is symmetrical with just the right amount of tribal roots added to an elegant design.`,
        details: ['Rayon with a touch of Jaspe Mayan fabric', 'Handwash clothes on a cool or cold wash setting'],
        category: 'Clothing',
        image: 'https://i.imgur.com/33KPJUR.png'
    },
    {
        id: 28,
        title: 'Everyday Robe Stripes Clay',
        price: 74.99,
        description: `Gender neutral robes that match your bedding. Created for anyone and everyone. An oversized, loose-fitting robe with adjustable sash. One size fits most.`,
        details: ['100% Cotton', 'Shoulder to bottom hem: 41"', 'Sleeve length: 14.5"', 'Pockets: 9” x 7"', 'Sash: 2.5” x 66"'],
        category: 'Clothing',
        image: 'https://i.imgur.com/6hBxLSq.png'
    },
    {
        id: 29,
        title: 'Remnant Scrunchie',
        price: 10.00,
        description: `The Remnant Scrunchie brings together design, function and intention. An ode to reimagining waste streams in small incremental ways, each piece is made using handwoven textile remnants produced from custom design projects.`,
        details: ['100% handwoven cotton shell with elastic band.', 'One Size', 'Sustainable design: reuse of materials minimizes waste', 'Machine washable, flat dry for best results.'],
        category: 'Accessories',
        image: 'https://i.imgur.com/TLxEqmi.png'
    },
    {
        id: 30,
        title: 'Crosshatch Necklace',
        price: 56.99,
        description: `The Crosshatch Necklace is the perfect everyday necklace. Excellent for layering and unique enough to stand out on its own.`,
        details: ['18" gold filled chain ', 'One Size', '8 mm gold filled pendant', 'spring ring clasp', 'to prolong the life of gold-filled pieces, please remove before entering water'],
        category: 'Clothing',
        image: 'https://i.imgur.com/nopLTxV.jpg'
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