const express = require('express');
const router = express.Router();
const {createUser,postJob,getJobPost} = require('../controllers/userControllers');

router.get('/getJobPost',getJobPost);
router.post('/createUser', createUser);
router.post('/postJob',postJob);


module.exports = router;