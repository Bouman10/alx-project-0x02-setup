import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to ALX Next.js Project</h1>
      </main>
    </>
  );
}
