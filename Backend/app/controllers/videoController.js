const { Video } = require('../models/Video');

exports.uploadVideo = async (req, res) => {
  try {
    const { title, hashtags, userId } = req.body;
    const videoUrl = req.file.location; // Assuming video URL is passed after upload
    const video = await Video.create({ title, url: videoUrl, hashtags, userId });
    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
