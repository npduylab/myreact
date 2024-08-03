// src/app/contact/page.js
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact - My Next.js Site</title>
        <meta name="description" content="Contact us at My Next.js Site." />
      </Head>
      <main>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out!</p>
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
