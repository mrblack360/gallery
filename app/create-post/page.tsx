"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);

  const [post, setPost] = useState({
    description: "",
    tag: "",
  });

  const createPost = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/post/new", {
        method: "POST",
        body: JSON.stringify({
          description: post.description,
          tag: post.tag,
          userID: session?.user?.id,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
