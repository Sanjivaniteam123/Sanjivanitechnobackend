import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

import {
  contactController,
  getContactController,
} from "../controllers/contact.js";

import { createUser, loginUser } from "../controllers/userController.js";

import {
  blogPost,
  updateBlog,
  getBlog,
  deleteBlog,
} from "../controllers/BlogController.js";

import { FullStack } from "../controllers/FullStackController.js";

let storage = multer.diskStorage({
  destination: "Assets/images",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: storage,
});

router.post("/api/contactForm", contactController);
router.get("/api/getContactDetails", getContactController);

router.post("/api/createUser", createUser);
router.post("/api/loginUser", loginUser);

router.post("/api/blogPost", upload.single("img"), blogPost);
router.get("/api/getBlog", getBlog);
router.put("/api/updateBlog/:id", upload.single("img"), updateBlog);
router.delete("/api/deleteBlog/:id", deleteBlog);

router.post("/api/PostFullStack", FullStack);

export default router;
