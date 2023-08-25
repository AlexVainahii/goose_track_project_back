const multer = require("multer");
const path = require("path");
const service = require("@service");
const tempDir = path.join(__dirname, "..", "tmp");

const multerConfig = {
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
};

const uploadAvatar = multer({
  storage: multer.diskStorage(multerConfig),
  limits: { fileSize: 6000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      cb(service.CreateError(400, "Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

module.exports = uploadAvatar;
