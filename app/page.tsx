use client;
import DoingList from '../components/DoingList';
import DoingForm from '../components/DoingForm';

export default function Home() {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold mb-4">Doing</h1>
      <DoingForm />
      <DoingList />
    </div>
  );
}