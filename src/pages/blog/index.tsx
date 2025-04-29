import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  slug: string;
  content: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/posts") // ajuste a URL do Strapi conforme seu ambiente
      .then((res) => res.json())
      .then((data) => setPosts(data.data.map((item: any) => ({
        id: item.id,
        title: item.attributes.title,
        slug: item.attributes.slug,
        content: item.attributes.content
      }))));
  }, []);

  return (
    <div className="container pt-24">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <Link to={`/blog/${post.slug}`} className="text-xl font-semibold text-primary hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
