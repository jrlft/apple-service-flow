import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length > 0) {
          const item = data.data[0];
          setPost({
            id: item.id,
            title: item.attributes.title,
            content: item.attributes.content
          });
        }
      });
  }, [slug]);

  if (!post) return <div className="pt-24">Carregando...</div>;

  return (
    <div className="container pt-24">
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
