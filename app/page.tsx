'use client';
import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Next.js</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
