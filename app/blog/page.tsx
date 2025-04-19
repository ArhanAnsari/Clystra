'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '@/components/NewsLetterForm';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
  {
    id: 3,
    title: 'Cybersecurity Best Practices for 2024',
    excerpt: 'Essential security measures every organization should implement this year.',
    author: 'Neha Kumar',
    date: '2024-03-05',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200',
    slug: 'cybersecurity-best-practices-2024'
  },
  {
    id: 4,
    title: 'The Role of 5G in Digital Transformation',
    excerpt: 'How 5G technology is accelerating digital transformation across industries.',
    author: 'Vikram Mehta',
    date: '2024-02-28',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=1200',
    slug: 'role-of-5g-in-digital-transformation'
  }
];

const categories = [
  'All',
  'Technology',
  'Cloud',
  'Security',
  'Business',
  'Infrastructure'
];

export default function Blog() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen pt-[100px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Blog</h1>
              <p className="text-xl text-white/90 mb-8">
                Insights, Updates, and Industry Trends
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 pr-4 w-full bg-white/10 backdrop-blur-sm text-white border-white/20 focus:border-white/50 focus:ring-primary"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full ${activeCategory === category ? 'bg-primary text-white' : 'hover:text-primary'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/30">
          <div className="container mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 dark:text-gray-300">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-52">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                        <User className="h-4 w-4 ml-4 mr-2" />
                        {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-semibold mb-3 hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-medium hover:underline"
                      >
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-primary/90 text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Updated</h2>
              <p className="text-gray-100 mb-8">
                Subscribe to our newsletter for the latest updates and insights
              </p>
              <NewsletterForm />
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}