'use client';

import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, FileText, Settings, 
  Bell, Search, PlusCircle, Edit, Trash2, 
  ChevronDown, Filter, Download, MoreHorizontal, 
  CheckCircle, AlertCircle, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700 fixed">
          <div className="p-6">
            <h2 className="text-2xl font-bold gradient-text mb-1">Admin Portal</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your platform</p>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            <Button
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'}
              className={`w-full justify-start mb-1 ${activeTab === 'dashboard' ? 'bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
            
            <Button
              variant={activeTab === 'users' ? 'default' : 'ghost'}
              className={`w-full justify-start mb-1 ${activeTab === 'users' ? 'bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="mr-2 h-5 w-5" />
              Users
            </Button>
            
            <Button
              variant={activeTab === 'content' ? 'default' : 'ghost'}
              className={`w-full justify-start mb-1 ${activeTab === 'content' ? 'bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              <FileText className="mr-2 h-5 w-5" />
              Content
            </Button>
            
            <Button
              variant={activeTab === 'settings' ? 'default' : 'ghost'}
              className={`w-full justify-start mb-1 ${activeTab === 'settings' ? 'bg-primary text-white' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="mr-2 h-5 w-5" />
              Settings
            </Button>
          </nav>
          
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-semibold text-sm">
                A
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">admin@clystra.com</p>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Mobile sidebar toggle */}
        <div className="md:hidden p-4 flex items-center border-b">
          <Button 
            variant="outline" 
            className="flex items-center"
            onClick={() => setActiveTab(activeTab)}
          >
            {activeTab === 'dashboard' && <LayoutDashboard className="mr-2 h-5 w-5" />}
            {activeTab === 'users' && <Users className="mr-2 h-5 w-5" />}
            {activeTab === 'content' && <FileText className="mr-2 h-5 w-5" />}
            {activeTab === 'settings' && <Settings className="mr-2 h-5 w-5" />}
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Main content */}
        <div className="flex-1 md:ml-64 p-4 md:p-8">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'content' && <ContentTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </div>
    </main>
  );
}

// Dashboard Tab Component
function DashboardTab() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Monitor platform analytics and performance</p>
        </motion.div>
        
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Users', value: '5,243', icon: Users, change: '+12%', color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
          { title: 'Blog Posts', value: '48', icon: FileText, change: '+5%', color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
          { title: 'Services', value: '16', icon: CheckCircle, change: '0%', color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' },
          { title: 'Open Tickets', value: '24', icon: Bell, change: '-8%', color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className="text-sm mt-1">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8"
      >
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { action: 'New user registered', user: 'John Doe', time: '5 minutes ago', icon: Users },
            { action: 'New blog post published', user: 'Admin', time: '2 hours ago', icon: FileText },
            { action: 'User subscription upgraded', user: 'Sarah Johnson', time: '5 hours ago', icon: CheckCircle },
            { action: 'Support ticket created', user: 'Mike Wilson', time: '1 day ago', icon: AlertCircle },
            { action: 'System update completed', user: 'System', time: '2 days ago', icon: Settings }
          ].map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-primary/10 p-2 rounded-full mr-4">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{activity.action}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{activity.user}</span>
                  <span className="mx-2">•</span>
                  <span>{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Users Tab Component
function UsersTab() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'User', status: 'Active', lastLogin: '1 day ago' },
    { id: 3, name: 'Mike Wilson', email: 'mike@example.com', role: 'Editor', status: 'Inactive', lastLogin: '1 week ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', role: 'User', status: 'Active', lastLogin: '3 days ago' },
    { id: 5, name: 'James Brown', email: 'james@example.com', role: 'User', status: 'Pending', lastLogin: 'Never' },
  ];
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage user accounts and permissions</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10" placeholder="Search users" />
          </div>
          <Button className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>
      
      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.role === 'Admin' 
                        ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' 
                        : user.role === 'Editor' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : user.status === 'Inactive' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

// Content Tab Component
function ContentTab() {
  const blogPosts = [
    { id: 1, title: 'The Future of Network Infrastructure', author: 'John Doe', date: '2024-03-15', status: 'Published', views: 1243 },
    { id: 2, title: 'Cloud Computing: A Game Changer', author: 'Sarah Johnson', date: '2024-03-10', status: 'Published', views: 986 },
    { id: 3, title: 'Cybersecurity Best Practices for 2024', author: 'Mike Wilson', date: '2024-03-05', status: 'Draft', views: 0 },
    { id: 4, title: 'The Role of 5G in Digital Transformation', author: 'Emily Davis', date: '2024-02-28', status: 'Published', views: 745 },
    { id: 5, title: 'Optimizing Network Performance', author: 'James Brown', date: 'N/A', status: 'Draft', views: 0 },
  ];
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Content Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage blog posts and website content</p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-4 md:mt-0 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input className="pl-10" placeholder="Search content" />
          </div>
          <Button className="flex items-center">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Post
          </Button>
        </div>
      </div>
      
      {/* Content Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                  <td className="px-6 py-4">
                    <p className="font-medium">{post.title}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                    {post.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'Published' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : post.status === 'Draft' 
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                    {post.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

// Settings Tab Component
function SettingsTab() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">Configure system preferences</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-6">General Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Site Name</label>
                <Input defaultValue="Clystra Networks Admin" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Admin Email</label>
                <Input defaultValue="admin@clystra.com" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Language</label>
                <select className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Time Zone</label>
                <select className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
                  <option>Asia/Kolkata (GMT+5:30)</option>
                  <option>UTC (GMT+0:00)</option>
                  <option>America/New_York (GMT-4:00)</option>
                </select>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6"
          >
            <h2 className="text-xl font-bold mb-6">Security Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 bg-white dark:bg-gray-400 h-4 w-4 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">API Access</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Allow third-party apps to access your account</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 bg-white h-4 w-4 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <Button variant="outline" className="w-full justify-center mt-4">
                  Change Password
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 mb-8"
          >
            <h2 className="text-xl font-bold mb-6">System Information</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Platform Version</p>
                <p className="font-medium">Clystra Admin v1.0.0</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
                <p className="font-medium">June 15, 2024</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Server Status</p>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="font-medium">Operational</p>
                </div>
              </div>
              
              <div>
                <Button variant="outline" className="w-full justify-center mt-4">
                  Check for Updates
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our support team is available 24/7 to assist you with any issues.
            </p>
            <Button variant="default" className="w-full justify-center">
              Contact Support
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
