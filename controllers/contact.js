import contacts from "../model/contactForm.js";

export const contactController = async (req, res) => {
  console.log("entered inside controller");
  let object = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    message: [req.body.message],
  };

  const existingUser = await contacts.findOne({ email: req.body.email });

  if (!existingUser) {
    console.log("user not found");
    try {
      const newContact = new contacts(object);
      newContact.save();
      res.send("message sent successfully from new user");
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  } else {
    console.log("user found");
    await contacts.updateOne(
      { email: req.body.email },
      { $push: { message: req.body.message } }
    );
    return res.send("message sent successfully from existing user");
  }
};

export const getContactController = async (req, res) => {
  console.log("get method called");
  let data = await contacts.find({});
  console.log(data, "dattaaaa");
  return res.send(data);
};
