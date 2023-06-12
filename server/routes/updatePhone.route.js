const express = require('express');
const PhoneBook = require('../mongodb/Model/phoneBook');

const router = express.Router();

router.put('/', async(req, res) => {
    try {

        const { id, name, phone } = req.body;

        const updatedPhonebookEntry = await PhoneBook.findByIdAndUpdate(
            id,
            {phone, name},
            { new: true }
        );
  
        res.status(201).json({
            status: "Success",
            data: {
                updatedPhonebookEntry
            }
        });
    } catch(error) {
        res.status(500).json({
            status: "Failed",
            data: {
                error
            }
        });
    }
});

module.exports = router;