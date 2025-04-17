// components/Search.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: number;
  title: string;
  excerpt: string;
  category: string;
}

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  results?: SearchResult[];
  isLoading?: boolean;
  className?: string;
}

export default function Search({
  placeholder = 'Search...',
  onSearch,
  results = [],
  isLoading = false,
  className = ''
}: Readonly<SearchProps>) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    setIsOpen(true);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="pl-8 pr-8"
          aria-label="Search"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (query || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full mt-2 bg-background rounded-lg shadow-lg border"
          >
            <ScrollArea className="max-h-60">
              {isLoading ? (
                <div className="p-4 text-center text-muted-foreground">
                  Searching...
                </div>
              ) : results.length > 0 ? (
                <div className="divide-y">
                  {results.map((result) => (
                    <a
                      key={result.id}
                      href={`/blog/${result.id}`}
                      className="block p-4 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">{result.category}</span>
                      </div>
                      <h3 className="font-medium">{result.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {result.excerpt}
                      </p>
                    </a>
                  ))}
                </div>
              ) : query ? (
                <div className="p-4 text-center text-muted-foreground">
                  No results found
                </div>
              ) : null}
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}