'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, FileText, Users, Settings } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <PageTransition>
      <main className="min-h-screen pt-[100px]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('posts')}
                  className={`flex items-center w-full p-2 rounded-lg ${
                    activeTab === 'posts' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Blog Posts
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`flex items-center w-full p-2 rounded-lg ${
                    activeTab === 'users' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Users
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full p-2 rounded-lg ${
                    activeTab === 'settings' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              {activeTab === 'posts' && <BlogPostsManager />}
              {activeTab === 'users' && <UsersManager />}
              {activeTab === 'settings' && <SettingsManager />}
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}

// Blog Posts Manager Component
function BlogPostsManager() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Manage Blog Posts</h3>
      {/* Add blog post management UI here */}
    </div>
  );
}

// Users Manager Component
function UsersManager() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Manage Users</h3>
      {/* Add user management UI here */}
    </div>
  );
}

// Settings Manager Component
function SettingsManager() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Settings</h3>
      {/* Add settings UI here */}
    </div>
  );
}
