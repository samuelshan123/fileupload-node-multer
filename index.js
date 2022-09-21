var express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
var multer = require('multer');
var sharp = require('sharp');
var fs = require('fs');
var util = require('util');

const unlink = util.promisify(fs.unlink);


app.get('/', (req, res) => {
    res.send("hello");
});

const storage = multer.diskStorage({
  destination:'./uploads',
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
  }
});

// var upload = multer({dest:'uploads/'});
var upload = multer({storage:storage});
app.use(cors());





app.post('/upload', upload.single('file'), async (req, res) => {
  console.log(req.file);
  try {
    // await  sharp(req.file.path)
    // .resize(100, 100)
    // .toFile('./compressed/' + Date.now() + '.jpg')

    //   res.send("uploaded");
    //   unlink(req.file.path);

  }catch(err) {
    res.send(error);
  }

  // rimraf.sync("./uploads")
});

app.listen(port, () => {
    console.log('listening to the port: '+ port);
});
