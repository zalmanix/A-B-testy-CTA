"use client";
import React from "react";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 sposobów na przyspieszenie komputera",
      slug: "speed-up-computer",
      description:
        "Dowiedz się, jak w prosty sposób zwiększyć wydajność swojego komputera dzięki kilku sprawdzonym metodom.",
      image: "/images/blog/speed-up-computer.webp",
      date: "2024-12-07",
      author: "TechFix Team",
    },
    {
      title: "Najlepsze laptopy do pracy zdalnej w 2024 roku",
      slug: "best-laptops-2024",
      description:
        "Przedstawiamy listę najlepszych laptopów, które idealnie nadają się do pracy zdalnej. Sprawdź nasz ranking!",
      image: "/images/blog/best-laptops-2024.webp",
      date: "2024-12-05",
      author: "TechFix Team",
    },
    {
      title: "Jak bezpiecznie przechowywać dane?",
      slug: "data-security",
      description:
        "Poznaj najlepsze praktyki dotyczące przechowywania danych, aby zapewnić ich bezpieczeństwo w każdej sytuacji.",
      image: "/images/blog/data-security.webp",
      date: "2024-12-03",
      author: "TechFix Team",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white p-6 my-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString("pl-PL")}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
