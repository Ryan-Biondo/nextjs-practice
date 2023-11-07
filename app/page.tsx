import Image from 'next/image';
import napoleon from '@/public/images/napoleon.gif';

export default function Home() {
  return (
    <>
      <main className="relative h-screen">
        <Image
          src="https://bit.ly/react-cover"
          alt="cloudimg"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority
        />
      </main>
      <Image
        src={napoleon}
        alt="hero"
        width={200}
        height={200}
        style={{ zIndex: 100 }}
      />
    </>
  );
}
