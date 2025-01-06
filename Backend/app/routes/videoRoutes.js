const express = require('express');
const multer = require('multer');
const { uploadVideo, listVideos } = require('../controllers/videoController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // Temporary storage, replace with cloud storage logic

router.post('/upload', upload.single('video'), uploadVideo);
router.get('/', listVideos);

module.exports = router;
