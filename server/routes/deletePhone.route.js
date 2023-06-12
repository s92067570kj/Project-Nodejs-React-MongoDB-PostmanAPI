const express = require('express');
const PhoneBook = require('../mongodb/Model/phoneBook');

const router = express.Router();

router.delete('/', async(req, res) => {
    try {

        const { id } = req.body;

        const deletedPhonebookEntry = await PhoneBook.findByIdAndDelete(id);
  
        res.status(201).json({
            status: "Success",
            data: {
                deletedPhonebookEntry
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