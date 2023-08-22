'use client';

import { Menu, Sparkles } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react';
import { UserButton } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ModeToggle from '../ModeToggle/ModeToggle';

const font = Poppins({
  weight: '600',
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1
            className={cn(
              'hidden text-xl font-bold md:block md:text-3xl text-primary',
              font.className,
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size="sm" variant="premium">
          Upgrade
          <Sparkles className="w-4 h-4 ml-2 text-white fill-white" />
        </Button>
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
