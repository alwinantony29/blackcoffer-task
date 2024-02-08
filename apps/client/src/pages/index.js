import {Inter} from 'next/font/google';
import MainLayout from '@/layouts/MainLayout';
import BarChart from '@/components/charts/BarChart';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <div className="flex">
      <MainLayout />
      <div className="flex h-[503px] border-2">
        <BarChart />
      </div>
    </div>
  );
}
