import code from "http-status-codes";
import jwt from "jsonwebtoken";
import user from "../Models/userModel.js";
const verifytoken = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer")) {
      res.status(code.UNAUTHORIZED).json({ msg: "unauthorized" });
      return;
    }
    const token = auth.split(" ")[1];
    const { id } = jwt.decode(token, process.env.JWT_SECRET);
    const found = await user
      .findOne({ _id: id })
      .select("-password")
      .select("-__v");
    if (!found) {
      res
        .status(code.UNAUTHORIZED)
        .json({ msg: "invalid token please sign in" });
      return;
    }
    req.verifiedUser = found;
  } catch (error) {
    res.json(error);
  }
  next();
};
export default verifytoken;
