'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Network Infrastructure',
    content: `... full blog content ...`,
    author: 'Tariq Ansari',
    date: '2024-03-15',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    slug: 'future-of-network-infrastructure'
  },
  // ... more posts
];

export default function BlogPost({ params }: Readonly<{ params: { slug: string } }>) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) notFound();

  return (
    <PageTransition>
      <main className="min-h-screen pt-[100px]">
        <article className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/blog" className="inline-flex items-center text-blue-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative h-[400px] mb-8 rounded-lg overflow-hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(post.date).toLocaleDateString()}
            <User className="h-4 w-4 ml-4 mr-2" />
            {post.author}
            <Tag className="h-4 w-4 ml-4 mr-2" />
            {post.category}
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </article>
      </main>
    </PageTransition>
  );
}
