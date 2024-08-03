// src/app/blog/page.js
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - My Next.js Site</title>
        <meta name="description" content="Read our latest blog posts on My Next.js Site." />
      </Head>
      <main>
        <h1>Blog</h1>
        <p>Welcome to our blog. Here are our latest posts:</p>
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
