'use client';
import Image from 'next/image';
import napoleon from '@/public/images/napoleon.gif';

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello World</h1>
        <button
          onClick={async () => {
            const _ = (await import('lodash')).default;
            const users = [{ name: 'c' }, { name: 'b' }, { name: 'a' }];
            _.orderBy(users, ['name']);
          }}>
          Show
        </button>
        <Image
          src={napoleon}
          alt="hero"
          width={200}
          height={200}
          style={{ zIndex: 100 }}
        />
      </main>
    </>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: 'product.description',
//   };
// }
