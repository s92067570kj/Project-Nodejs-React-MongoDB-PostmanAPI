const express = require('express');
const cors = require('cors');
const connectDb = require('./mongodb/connect');
require('dotenv').config();

// Import the routes
const getPhoneRouter = require('./routes/getPhone.route')
const deletePhoneRouter = require('./routes/deletePhone.route')
const newPhoneRouter = require('./routes/addPhone.route');
const updatePhoneRouter = require('./routes/updatePhone.route');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

connectDb(process.env.MONGODB_URL);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use('/add-phone', newPhoneRouter);
app.use('/update-phone', updatePhoneRouter);
app.use('/get-phone', getPhoneRouter);
app.use('/delete-phone', deletePhoneRouter);