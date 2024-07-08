import fullstack from "../model/FullStackForm.js";

export const FullStack = async (req, res) => {
  console.log("reached inside fullstack controller", req.body);
  const user = await fullstack.findOne({ email: req.body.email });
  if (!user) {
    console.log("user not fount", user);
    try {
      let response = new fullstack({
        ...req.body,
        about: [req.body.about],
        lookingFor: [req.body.lookingFor],
      });
      response.save();
      console.log("successfully sent data");
      res.send("successfully data sent");
    } catch (error) {
      res.send("error in sending data");
    }
  } else {
    await fullstack.updateOne(
      { email: req.body.email },
      { $push: { lookingFor: req.body.lookingFor, about: req.body.about } }
    );
    return res.send("message sent successfully from existing user");
  }
};
