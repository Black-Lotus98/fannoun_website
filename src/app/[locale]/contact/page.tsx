'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ContactPage() {
  const tCommon = useTranslations('common');
  const tContact = useTranslations('contact');
  const tHeader = useTranslations('header');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            {tHeader('logo')}
          </h1>
          <nav className="flex justify-center space-x-6 mt-4">
            <Link href="/en" className="text-blue-600 hover:text-blue-800">
              {tHeader('nav.home')}
            </Link>
            <Link href="/en/about" className="text-blue-600 hover:text-blue-800">
              {tHeader('nav.about')}
            </Link>
            <Link href="/en/contact" className="text-blue-600 hover:text-blue-800 font-bold">
              {tHeader('nav.contact')}
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {tContact('title')}
          </h2>
          <p className="text-xl mb-6 text-gray-600">
            {tContact('subtitle')}
          </p>
          <p className="text-lg mb-8 text-gray-700">
            {tContact('description')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.name')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={tContact('form.name')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={tContact('form.email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.subject')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={tContact('form.subject')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {tContact('form.message')}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={tContact('form.message')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {tContact('form.submit')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">{tContact('info.address')}</h4>
                  <p className="text-gray-600">123 Main Street, City, Country</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{tContact('info.phone')}</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{tContact('info.email')}</h4>
                  <p className="text-gray-600">info@fannoun.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{tContact('info.hours')}</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Translation Test Section */}
          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Translation Test</h3>
            <p className="text-lg mb-2">{tCommon('hello')}</p>
            <p className="text-lg mb-2">{tCommon('goodbye')}</p>
            <p className="text-sm text-gray-600">
              {tCommon('currentLocale', { locale: 'en' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
