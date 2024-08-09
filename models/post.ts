import { model, models, Schema } from "mongoose";

const PostSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Post must have a creator"],
  },
  post_description: {
    type: String,
    required: [true, "Description is mandatory"],
  },
  tag: { type: String, required: [true, "Tag is mandatory"] },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
