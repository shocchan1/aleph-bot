// @ts-check
const mongoose = require('mongoose');

async function connectDatabase() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('[MONGODB] Connected to MongoDB Atlas.');
};

module.exports = { connectDatabase };