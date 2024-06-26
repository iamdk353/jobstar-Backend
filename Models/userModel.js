import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    minLength: [5, "minimum length is 5 please increrase length of your name"],
    required: [true, "user name is required"],
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minLength: [
      8,
      "minimum length is 8 please increrase length of your password",
    ],
    required: [true, "password is required"],
  },
  location: {
    type: String,
    default: "Bengaluru",
  },
  name: {
    type: String,
    trim: true,
    required: [true, "name is required"],
  },
  profile: {
    type: Number,
    default: 1,
  },
});
const user = mongoose.model("USER", userSchema);
export default user;
