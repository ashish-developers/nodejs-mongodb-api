const multer = require('multer');
const Busboy = require('busboy');
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath('C:\\ffmpeg\\bin\\ffmpeg.exe');
const fs = require('fs');
const path = require("path")
const { getSocketInstance } = require('./../utilities/socket.setting');
const io = getSocketInstance();


const addNewFile = (req, res) => {
  const videoPath = path.join('public/tmp', '04_H265.mp4');
  fs.stat(videoPath, (err, stats) => {
    if (err) {
        console.error(err);
        return res.status(404).send('Video not found');
    }

    const range = req.headers.range;
    if (!range) {
        return res.status(400).send('Requires Range header');
    }

    const videoSize = stats.size;
    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
        'Content-Range': `bytes ${start}-${end}/${videoSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': contentLength,
        'Content-Type': 'video/mp4',
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
  });

}

const uploadFiles = (req, res) => {

  const busboy = Busboy({ headers: req.headers });
  busboy.on('file', (fieldname, file, filename) => {

    const saveTo = path.join('public/tmp', filename.filename);

    file.pipe(fs.createWriteStream(saveTo, { flags: 'a' }));
    file.on('data', (data) => {
      console.log(`Received ${data.length} bytes for ${filename}`);
    });

    file.on('end', () => {
      console.log(`${filename} finished`);
    });
  });
  busboy.on('finish', () => {
    res.send({ message : "File uploaded successfully" });
  });
  req.pipe(busboy);
}

const processVideo = (req, res) => {

  
    // let message = { status : "Active" };
    
    // io.emit('message', message);

    return res.send({ status : true })
    const outputDir = path.join('public/tmp', '1');
    const videoPath = path.join('public/tmp', '04_H265.mp4');
    if (fs.existsSync(videoPath)) {
      console.log(true);
    } else {

    }
    ffmpeg(videoPath).on('filenames', (filenames) => {
        console.log('Will generate ' + filenames.join(', '));
    }).on('end', () => {
        console.log('Screenshots taken');
    }).on('error', (err) => {
        console.error(err);
        res.status(500).send({ error: 'Error processing video' });
    }).screenshots({
        count: 10,
        folder: outputDir,
        size: '320x240',
        filename: 'frame-%i.png'
    });

    const thumbnailPath = path.join(outputDir, 'thumbnail.png');
    
    ffmpeg(videoPath).on('end', () => {
        console.log('Thumbnail created');
        res.send({ message: 'Video processed', thumbnail: thumbnailPath });
    }).on('error', (err) => {
        console.error(err);
        res.status(500).send({ error: 'Error creating thumbnail' });
    }).screenshot({
        timestamps: ['50%'],
        filename: 'thumbnail.png',
        folder: outputDir,
        size: '320x240'
    });
}




module.exports = {
    uploadFiles,
    processVideo,
    addNewFile
}