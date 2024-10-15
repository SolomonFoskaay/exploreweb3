// /components/Guides/GuidesMainContent.tsx
"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const GuidesMainContent = ({ guide, authorName }) => {
  const [contentWithIds, setContentWithIds] = useState(guide.full_content);

  useEffect(() => {
    const addIdsToHeadings = (content) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const headings = doc.querySelectorAll("h1, h2");
      
      headings.forEach((heading) => {
        const textContent = heading.textContent || '';
        const id = textContent
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        heading.id = id;
      });

      return doc.body.innerHTML;
    };

    setContentWithIds(addIdsToHeadings(guide.full_content));
  }, [guide.full_content]);

  const publishedDate = new Date(guide.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const updatedDate = new Date(guide.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="w-full lg:w-1/2 p-4">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-500">{guide.title}</h1>
      <div className="mb-6">
        <p className="text-lg text-gray-400">
          <span className="font-semibold text-purple-500">By {authorName}</span>
        </p>
        <p className="text-md text-gray-500 italic">
          Published on: <span className="text-green-500">{publishedDate}</span> | 
          Updated on: <span className="text-red-500">{updatedDate}</span>
        </p>
      </div>
      <Image
        src={guide.image_url}
        alt={guide.title}
        width={1200}
        height={630}
        className="my-4 w-full h-auto"
      />
      <div className="mt-4">
        <blockquote className="bg-green-100 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-gray-700 italic">{guide.summary_content}</p>
        </blockquote>
        <div dangerouslySetInnerHTML={{ __html: contentWithIds }} />
        <p className="text-sm text-gray-500 mt-4">
          Last updated on {updatedDate}
        </p>
      </div>
    </main>
  );
};

export default GuidesMainContent;