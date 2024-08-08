import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "User already exist"],
    require: [true, "Email is mandatory"],
  },
  username: {
    type: String,
    require: [true, "Username is mandatory"],
  },
  image: { type: String },
});

const User = models.User || model("User", userSchema);

export default User;
