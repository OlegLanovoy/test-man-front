import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { postSchema } from "@/validation-schemas/post-schemas";
import { FormFieldTitle } from "./create-post-components/inputs/FormFieldTitle";
import { FormFieldText } from "./create-post-components/inputs/FormFieldText";
import { FormFieldCategory } from "./create-post-components/inputs/FormFieldCategory";
import { FormFieldTags } from "./create-post-components/inputs/FormFieldTags";
import { PostPreview } from "./create-post-components/Preview";
import { postCreate } from "@/requests/PostRequest";
import { useNavigate } from "react-router-dom";

export interface Post {
  id: string;
  title: string;
  text: string;
  category: string;
  tags: string[];
}

export default function CreatePost() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      text: "",
      date: new Date(),
      authorName: "",
      category: "",
      tags: [],
    },
  });

  const postData = async () => {
    try {
      const values = form.getValues(); // ← получаем значения формы

      const response = await postCreate("create", {
        title: values.title,
        text: values.text,
        category: values.category, // если это число
        tags: values.tags,
      });
      navigate("/");

      const data = response.data;
      console.log(data);
      return data;
    } catch (err) {
      console.error(err instanceof Error ? err.message : "Unknown Error");
    }
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        const newTags = [...tags, tagInput.trim()];
        setTags(newTags);
        form.setValue("tags", newTags);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(newTags);
    form.setValue("tags", newTags);
  };

  const onSubmit = async () => {};

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldTitle form={form} />
          <FormFieldText form={form} />
          <FormFieldCategory form={form} />
          <FormFieldTags
            form={form}
            tags={tags}
            setTags={setTags}
            tagInput={tagInput}
            setTagInput={setTagInput}
            removeTag={removeTag}
            handleTagKeyDown={handleTagKeyDown}
          />

          <PostPreview form={form} tags={tags} />

          <Button type="submit" className="w-full md:w-auto" onClick={postData}>
            Create Post
          </Button>
        </form>
      </Form>
    </div>
  );
}
