"use client";

import React from "react";
import { blogPosts } from "./constants";


// @ts-expect-error yes
export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const paragraphs = post.fullContent.split("\n\n");

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-6 w-full mt-8">
      <div className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-4">
          <span>{post.author}</span> |{" "}
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="text-gray-300 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
