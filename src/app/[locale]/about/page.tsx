'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function AboutPage() {
  const tCommon = useTranslations('common');
  const tAbout = useTranslations('about');
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
            <Link href="/en/about" className="text-blue-600 hover:text-blue-800 font-bold">
              {tHeader('nav.about')}
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800">
              {tHeader('nav.contact')}
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {tAbout('title')}
          </h2>
          <p className="text-xl mb-6 text-gray-600">
            {tAbout('subtitle')}
          </p>
          <p className="text-lg mb-8 text-gray-700">
            {tAbout('description')}
          </p>

          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {tAbout('mission')}
            </h3>
            <p className="text-lg text-gray-700">
              {tAbout('missionText')}
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {tAbout('team')}
            </h3>
            <p className="text-lg text-gray-700">
              {tAbout('teamDescription')}
            </p>
          </div>

          {/* Translation Test Section */}
          <div className="bg-gray-50 p-4 rounded-lg">
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
