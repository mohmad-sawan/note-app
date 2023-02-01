import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title, dir }) {
  return (
    <div>
      <Head>
        <title>{title ? title + ' - Note App' : 'Note App'}</title>
        <meta
          name="description"
          content="Note Application for manage your Note"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 px-4 justify-between items-center shadow-sm">
            <Link href={'/'} className="text-lg font-bold">
              LiveStrem
            </Link>
            <div>
              <Link href={'/login'} className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main dir={dir} className="container m-auto mt-4 px-4">
          {children}
        </main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright &#169; 2023 Note App | Mohammed Sawan
        </footer>
      </div>
    </div>
  );
}
