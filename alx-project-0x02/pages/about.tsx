import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-6 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>

        <div className="space-x-4">
          <Button label="Small" size="small" shape="rounded-sm" />
          <Button label="Medium" size="medium" shape="rounded-md" />
          <Button label="Large" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
