const mongoose = require('mongoose');

const conn = () => {
    // connect to database
    try {
        mongoose.connect(process.env.MONGO_URI);
        mongoose.connection.once('open', () => {
            console.log('Connected to mongodb!');
        });
    } catch (error) {
        console.log(`Could not connect to mongodb: ${error.message}`);
    };
};

module.exports = conn;