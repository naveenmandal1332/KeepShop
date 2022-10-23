import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Naveen Mandal',
            email: 'nvnv1332@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Vishal Puri',
            email: 'vishalpuri45@gmail.com',
            password: bcrypt.hashSync('1234565'),
            isAdmin: false,
        }
    ],
    products: [
        // 1st product:
        {
            // _id: '1',
            name: "Nike Slim shirt",
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.3,
            numReviews: 10,
            description: 'high quality shirt'
        },
       // 2st product:
        {
           // _id: '2',
            name: "Peter England Slim shirt",
            slug: 'Peter-England-slim-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 1200,
            countInStock: 18,
            brand: 'Peter England',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality shirt'
        },
        //3rd product:
        {
            //_id: '3',
            name: "Louis Phillipe shirt",
            slug: 'Louis-Phillipe-slim-shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 1100,
            countInStock: 10,
            brand: 'Louis Phillipe',
            rating: 4.2,
            numReviews: 10,
            description: 'high quality shirt'
        },
        //4th product:
        {
            //_id: '4',
            name: "Park Avenue Slim pant",
            slug: 'Park-Avenue-slim-pant',
            category: 'Shirts',
            image: '/images/p4.jpg',
            price: 1100,
            countInStock: 15,
            brand: 'Park Avenue',
            rating: 4.9,
            numReviews: 10,
            description: 'high quality shirt'
        },
    ],
};

export default data;