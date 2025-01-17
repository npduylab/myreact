// src/app/page.js
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - My Next.js Site</title>
        <meta name="description" content="Welcome to the home page of my Next.js site." />
      </Head>
      <main>
        <h1>Welcome to My Next.js Site</h1>
        <p>This is the home page.</p>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
