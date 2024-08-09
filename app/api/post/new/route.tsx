import Post from "@models/post";
import { connectToDB } from "@utils/database";

export const POST = async (req: any, res: any) => {
  const { userID, description, tag } = await req.json();

  try {
    await connectToDB();
    const body = {
      creator: userID,
      post_description: description,
      tag: tag,
    };
    console.log(body);

    const newPost = new Post(body);
    await newPost.save();
    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a post", { status: 500 });
  }
};
