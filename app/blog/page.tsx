'use client';

import { motion } from 'framer-motion';
import { Calendar, User, Tag } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Network Infrastructure',
    excerpt: 'Exploring upcoming trends in network infrastructure and their impact on businesses.',
    author: 'Tariq Ansari',
    date: '2024-03-15',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    slug: 'future-of-network-infrastructure'
  },
  {
    id: 2,
    title: 'Cloud Computing: A Game Changer',
    excerpt: 'How cloud computing is revolutionizing business operations and scalability.',
    author: 'Danish Sheikh',
    date: '2024-03-10',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    slug: 'cloud-computing-game-changer'
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <PageTransition>
      <main className="min-h-screen pt-[100px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-blue-100">
                Insights, Updates, and Industry Trends
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                      <User className="h-4 w-4 ml-4 mr-2" />
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold mb-3 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm text-blue-600">{post.category}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
