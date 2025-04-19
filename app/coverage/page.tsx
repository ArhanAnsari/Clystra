'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe2, Network, Signal, Check, Clock, Wifi, BarChart } from 'lucide-react';
import EnhancedMap from '@/components/EnhancedMap';
import NewsletterForm from '@/components/NewsLetterForm';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Coverage() {
  const [isLoading, setIsLoading] = useState(true);
  const [pincode, setPincode] = useState('');
  const [checkingCoverage, setCheckingCoverage] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState<'available' | 'coming-soon' | 'unavailable' | null>(null);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const locations = [
    {
      city: 'Nagpur',
      type: 'Headquarters',
      address: 'Flat No. 105, Saraswati Apartment 3, Wanjari Nagar, Medical College, Nagpur',
      services: ['Network Operations Center', 'Data Center', 'Support Hub']
    },
    {
      city: 'Mumbai',
      type: 'Regional Office',
      address: 'Office #305, Tech Park, Andheri East, Mumbai',
      services: ['Sales', 'Technical Support', 'Service Center']
    },
    {
      city: 'Pune',
      type: 'Branch Office',
      address: 'Silicon Plaza, 2nd Floor, Hinjewadi IT Park, Pune',
      services: ['Sales', 'Customer Service']
    }
  ];

  const services = [
    {
      icon: <Network className="h-12 w-12 text-primary" />,
      title: 'Network Coverage',
      description: 'High-speed network infrastructure across major cities'
    },
    {
      icon: <Signal className="h-12 w-12 text-primary" />,
      title: 'Connectivity Solutions',
      description: 'Reliable connectivity options for businesses of all sizes'
    },
    {
      icon: <Globe2 className="h-12 w-12 text-primary" />,
      title: 'Global Reach',
      description: 'International network partnerships for worldwide coverage'
    }
  ];

  const coverageAreas = [
    {
      city: 'Nagpur',
      coordinates: [21.1458, 79.0882] as [number, number],
      coverage: '95%',
      services: ['Fiber', '5G', 'Enterprise'],
      radius: 5000, // 5km radius
      status: 'available'
    }
  ];

  const expansionPlans = [
    
    { phase: 'Phase 1', cities: ['Nagpur'], status: 'Completed', date: 'March 2025' },
    // { phase: 'Phase 2', cities: ['Mumbai', 'Pune'], status: 'In Progress', date: 'Q3 2024' },
    // { phase: 'Phase 3', cities: ['Bangalore', 'Chennai', 'Hyderabad'], status: 'Planned', date: 'Q2 2025' }
  ];

  const handleCheckCoverage = () => {
    if (!pincode) return;
    
    setCheckingCoverage(true);
    
    // Simulate API check with timeout
    setTimeout(() => {
      // Example logic: if pincode starts with '44' (Nagpur), '40' (Mumbai), or '41' (Pune)
      if (pincode.startsWith('44')) {
        setCoverageStatus('available');
      } else if (pincode.startsWith('11') || pincode.startsWith('38') || pincode.startsWith('45') || pincode.startsWith('40') || pincode.startsWith('41')) {
        setCoverageStatus('coming-soon');
      } else {
        setCoverageStatus('unavailable');
      }
      
      setCheckingCoverage(false);
    }, 1500);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background dark:from-primary/20 dark:via-background/70 dark:to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            >
              Network Coverage
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Check our service availability in your area
            </motion.p>
          </div>
        </div>
      </section>

      {/* Coverage Checker */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Check Coverage in Your Area</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter PIN code"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="flex-grow"
                maxLength={6}
              />
              <Button 
                onClick={handleCheckCoverage} 
                disabled={checkingCoverage || !pincode}
                className="whitespace-nowrap"
              >
                {checkingCoverage ? <LoadingSpinner size="sm" className="mr-2" /> : null}
                {checkingCoverage ? 'Checking...' : 'Check Availability'}
              </Button>
            </div>
            
            {coverageStatus && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 p-4 rounded-lg text-center"
              >
                {coverageStatus === 'available' && (
                  <div className="text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <Check className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">Service Available!</h3>
                    <p>We provide high-speed internet in your area. Contact us to get connected.</p>
                    <Button variant="default" className="mt-4">
                      Get Started
                    </Button>
                  </div>
                )}
                
                {coverageStatus === 'coming-soon' && (
                  <div className="text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <Clock className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">Coming Soon!</h3>
                    <p>We're expanding to your area soon. Register your interest to be notified.</p>
                    <Button variant="outline" className="mt-4">
                      Notify Me
                    </Button>
                  </div>
                )}
                
                {coverageStatus === 'unavailable' && (
                  <div className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-xl font-bold">Not Available Yet</h3>
                    <p>We don't currently service your area. We're expanding quickly, so check back later.</p>
                    <Button variant="outline" className="mt-4">
                      Suggest Your Area
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Coverage Map</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our network coverage across different cities and regions
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="h-[600px] rounded-lg overflow-hidden">
              <EnhancedMap coverageAreas={coverageAreas} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 gradient-text"
          >
            Our Locations
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            Visit our offices or reach out to our local teams for assistance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{location.city}</h3>
                    <p className="text-primary">{location.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{location.address}</p>
                <div className="border-t dark:border-gray-700 pt-4">
                  <p className="font-semibold mb-2">Available Services:</p>
                  <ul className="space-y-1">
                    {location.services.map((service) => (
                      <li key={service} className="text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 gradient-text"
          >
            Our Network Services
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            Comprehensive connectivity solutions tailored to your needs
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <Wifi className="h-8 w-8 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-white/80">Cities Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <Network className="h-8 w-8 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Network Points</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <BarChart className="h-8 w-8 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <Clock className="h-8 w-8 mx-auto mb-4 text-white" />
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Areas List */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 gradient-text"
          >
            Coverage Areas
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            Check service availability across different regions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverageAreas.map((area) => (
              <motion.div
                key={area.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{area.city}</h3>
                    <div className="flex items-center mt-1">
                      <span 
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          area.status === 'available' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                            : area.status === 'coming-soon' 
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {area.status === 'available' ? 'Active' : area.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
                      </span>
                      <span className="ml-2 text-primary">{area.coverage} Coverage</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pl-12">
                  <p className="font-semibold text-sm">Available Services:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service) => (
                      <span 
                        key={service} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8 gradient-text"
          >
            Network Expansion Plans
          </motion.h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16">
            Our roadmap for expanding coverage to more cities and regions
          </p>

          <div className="max-w-4xl mx-auto">
            {expansionPlans.map((plan, index) => (
              <motion.div
                key={plan.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col md:flex-row items-start mb-12 relative"
              >
                {/* Connection line */}
                {index < expansionPlans.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-[calc(100%+3rem)] bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                )}
                
                {/* Status circle */}
                <div className={`h-12 w-12 rounded-full flex items-center justify-center shrink-0 ${
                  plan.status === 'Completed'
                    ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
                    : plan.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                } z-10`}>
                  {plan.status === 'Completed' ? (
                    <Check className="h-6 w-6" />
                  ) : plan.status === 'In Progress' ? (
                    <Clock className="h-6 w-6" />
                  ) : (
                    <MapPin className="h-6 w-6" />
                  )}
                </div>
                
                {/* Content */}
                <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{plan.phase}</h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full inline-flex items-center mt-2 md:mt-0 ${
                      plan.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : plan.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {plan.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Target completion: {plan.date}</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <p className="font-medium mb-2">Cities Included:</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.cities.map((city) => (
                        <span 
                          key={city} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-primary/90 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Stay Connected</h2>
            <p className="text-gray-100 mb-8">
              Subscribe to our newsletter for updates on new coverage areas
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}