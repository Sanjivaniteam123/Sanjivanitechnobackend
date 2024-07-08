import User from "../model/User.js";
export const createUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    const newUser = new User(req.body);
    try {
      newUser.save();
      res.send("User registered successfully");
    } catch (error) {
      return res.status(400).send(error);
    }
  } else {
    return res.status(400).send("User Already Registered");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,

        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).send("User login failed");
    }
  } catch (error) {
    return res.status(400).json({ message: "User login failed" });
  }
};
