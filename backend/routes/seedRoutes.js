import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async(req, res) =>{
    //This is for product routing:
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    //This is for user-info routing:
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({createdProducts , createdUsers});
});

export default seedRouter;