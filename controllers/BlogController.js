import blogs from "../model/BlogForm.js";
import fs from "fs";

export const blogPost = async (req, res) => {
  console.log("inside blog post controller", req.file);
  try {
    const newBlog = new blogs({
      topic: req.body.topic,
      content: req.body.content,
      date: req.body.date,
      img: {
        data: fs.readFileSync(req.file.path),
        contentType: req.file.mimetype,
      },
    });

    console.log(req.file);
    newBlog.save();
    res.send("successfully data stored in database");
  } catch (error) {
    console.log(error);
    res.send("error occured");
  }
};

export const updateBlog = async (req, res) => {
  console.log("inside update blog controller", req.body, req.file);

  try {
    // Find the blog by its ID
    const blogId = req.params.id;
    const blog = await blogs.findById(blogId);

    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    // Update the blog data
    blog.topic = req.body.topic;
    blog.content = req.body.content;
    blog.date = req.body.date;

    // If a new image file is provided, update it
    if (req.file) {
      blog.img.data = fs.readFileSync(req.file.path);
      blog.img.contentType = req.file.mimetype;
    }

    // Save the updated blog
    await blog.save();

    res.send("Blog updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while updating blog");
  }
};

export const getBlog = async (req, res) => {
  console.log("reached in get blog controller");

  try {
    const blog = await blogs.find({});

    res.send(blog);
  } catch (error) {
    res.send("error in getting blogs");
  }
};

export const deleteBlog = async (req, res) => {
  console.log("reached inside delete controller", req.params.id);
  try {
    let res = await blogs.deleteOne({ _id: req.params.id });
    res.send("successfully deleted blog");
  } catch (error) {
    res.send("error in deleting blog");
  }
};
