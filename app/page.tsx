"use client";
import React, { useState } from "react";
import {
  Zap,
  Lock,
  CheckCircle2,
  Server,
  AlertTriangle,
  Check,
  Clipboard,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const copyToClipboard = () => {
    const code = document.getElementById("curl-code")?.textContent;
    if (code) {
      navigator.clipboard.writeText(code);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center flex flex-col items-center">
            <Image src={'/logo-192x192.png'} width={80} height={80} alt="logo" className="mb-4" />
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Detect Malicious Input</span>
              <span className="block text-blue-600">In Real-Time</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Protect your applications with our advanced threat detection API.
              Instantly analyze inputs for malicious content, SQL injection, XSS
              attacks, and more.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href={"/dashboard"}>
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Try it Free
                  </button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  View Docs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                Real-Time Detection
              </h3>
              <p className="mt-2 text-gray-600">
                Instant analysis with response times under 100ms
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Lock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                Advanced Security
              </h3>
              <p className="mt-2 text-gray-600">
                Multiple threat detection algorithms and ML models
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Server className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">
                99.9% Uptime
              </h3>
              <p className="mt-2 text-gray-600">
                Enterprise-grade reliability and scalability
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Snippet Section */}
      <div id="docs" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Try it yourself
              </h3>
              <div
                className="p-1 hover:cursor-pointer"
                onClick={() => {
                  copyToClipboard();
                }}
              >
                <div className="p-2 rounded-lg hover:bg-gray-100">
                  {!copiedToClipboard && (
                    <Clipboard className="w-5 h-5 text-gray-600" />
                  )}
                  {copiedToClipboard && (
                    <Check className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm text-gray-800 border border-gray-200">
              <pre className="whitespace-pre-wrap" id="curl-code">
                {`curl -X POST https://api.securecheck.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"input": "SELECT * FROM users"}'`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-16" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
              <p className="mt-4 text-gray-600">Perfect for small projects</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                $9
                <span className="text-lg font-normal text-gray-600">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">10,000 API calls/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Basic threat detection</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
            <div className="border rounded-lg p-8 bg-blue-50 border-blue-200 relative">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-sm">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Professional (Coming Soon)
              </h3>
              <p className="mt-4 text-gray-600">For growing businesses</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                $29
                <span className="text-lg font-normal text-gray-600">/mo</span>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">50,000 API calls/month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">
                    Advanced threat detection
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Detailed analytics</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Enterprise (Coming Soon)
              </h3>
              <p className="mt-4 text-gray-600">For large organizations</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">Custom</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Unlimited API calls</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">Custom ML models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-600">SLA guarantee</span>
                </li>
              </ul>
              <button className="mt-8 w-full border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-lg hover:bg-blue-50 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* API Demo */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold text-gray-900">
                Try it yourself
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                See how our API detects malicious content in real-time. Enter
                any text to test:
              </p>
              <div className="mt-6">
                <textarea
                  className="w-full h-32 p-4 border rounded-lg outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter text to analyze..."
                />
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Analyze Text
                </button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:col-span-7">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 text-yellow-600 mb-4">
                  <AlertTriangle className="h-5 w-5" />
                  <span className="font-medium">
                    Potential Threats Detected
                  </span>
                </div>
                <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-800">
                    {`{
  "status": "warning",
  "threats": [
    {
      "type": "sql_injection",
      "confidence": 0.92,
      "position": [15, 28]
    }
  ],
  "analysis_time": "0.045s"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
