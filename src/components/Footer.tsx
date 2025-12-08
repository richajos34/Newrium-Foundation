'use client'
import React from 'react';
import { Mail, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-7 px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-none mx-auto">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Newrium<br />Foundation Inc.
            </h2>
            <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Transforming our humanity together.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/bookshelf" className="text-gray-400 hover:text-white transition-colors">Bookshelf</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p>Email: placeholder@company.org</p>
              <p>Phone: 999-999-9999</p>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Be the first to get the latest updates from us!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-white text-black text-sm focus:outline-none font-light"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              />
              <button 
                className="px-6 py-2 rounded-r-full text-sm font-medium transition-colors active:scale-96 active:duration-75"
                style={{ backgroundColor: '#55A5BC', fontFamily: 'Poppins, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#444444'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#55A5BC'}
              >
                Submit
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 font-light" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Copyright © 2025 Newrium Foundation, Inc. - All Rights Reserved.
          </p>

          {/* Social Icons — still <a> because they are external */}
          <div className="flex gap-3">
            <a 
              href="mailto:placeholder@company.org"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors active:scale-96 active:duration-75"
              style={{ backgroundColor: '#55A5BC' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#444444'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#55A5BC'}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors active:scale-96 active:duration-75"
              style={{ backgroundColor: '#55A5BC' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#444444'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#55A5BC'}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;