const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder;
    if (file.fieldname === "avatar") {
      folder = "avatars";
    } else if (file.fieldname === "documents") {
      folder = "documents";
    } else {
      folder = "misc";
    }

    return {
      folder: folder,
      allowed_formats: ["jpg", "png"], // Adjust the allowed formats as needed
      public_id: file.originalname, // Use original filename as the public ID
    };
  },
});

const uploadAvatar = multer({ storage });

module.exports = { uploadAvatar };
