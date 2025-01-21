import React from 'react';
import Image from 'next/image';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center">
              <Image src="/logo-192x192.png"
                          width={40}
                          height={40}
                          alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">SecureCheck API</span>
            </div>
            <p className="mt-4 text-gray-600">
              Protecting applications from malicious inputs with advanced threat detection.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Features</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">API Reference</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Status</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Guides</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} SecureCheck API. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;