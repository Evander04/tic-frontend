import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard!</p>
      </main>
    </div>
  );
}
