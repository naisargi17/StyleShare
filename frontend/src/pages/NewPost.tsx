import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { tokenState } from "../store/atoms/auth";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const token = useRecoilValue(tokenState);
  const navigate = useNavigate();
  // const [error, setError] = useState({
  //   title: "",
  //   description: "",
  //   codeSnippet: "",
  //   tags: "",
  //   message: "",
  // });
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddTag = () => {
    if (tagInput.length > 0 && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      title,
      description,
      codeSnippet,
      tags,
    };

    try {
      const response = await axios.post("/api/v1/posts", newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(response.data.message)
      navigate(`/app/posts/${response.data?.post?.id}`);
    } catch (e) {
      const axiosError = e as AxiosError<{
        error: {
          message: string;
        };
      }>;
      setErrorMessage(
        axiosError?.response?.data?.error.message ||
          "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="border rounded p-6 text-white max-w-screen-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create New Post</h2>
      <p className="mt-4">{errorMessage}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full bg-gray-600 border border-gray-600 rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 p-2 w-full bg-gray-600 border border-gray-600 rounded"
          ></textarea>
        </div>
        <div>
          <label htmlFor="codeSnippet" className="block text-sm font-medium">
            Code Snippet
          </label>
          <textarea
            id="codeSnippet"
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
            className="mt-1 p-2 w-full bg-gray-600 border border-gray-600 rounded"
          ></textarea>
        </div>
        <div>
          <label htmlFor="tags" className="block text-sm font-medium">
            Tags
          </label>
          <div className="mt-1 mb-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-gray-700 text-sm rounded"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                  className="ml-2 text-gray-300 hover:text-white"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          <input
            type="text"
            id="tagInput"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="p-2 bg-gray-600 border border-gray-600 rounded w-full"
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="mt-2 p-2 bg-blue-600 hover:bg-blue-700 rounded text-white w-full"
          >
            Add Tag
          </button>
        </div>
        <button
          type="submit"
          className="mt-4 m-2 p-2 w-full bg-green-600 hover:bg-green-700 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
