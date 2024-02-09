import {Inter} from 'next/font/google';
import MainLayout from '@/layouts/MainLayout';
import BarChart from '@/components/charts/BarChart';
import {useEffect, useState} from 'react';
import axios from 'axios';
import PieChart from '@/components/charts/PieChart';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://redesigned-space-pancake-765966gr74qcw6j4-4000.app.github.dev/energy-insights',
      )
      .then(response => {
        setData(response.data.slice(0, 20));
      })
      .catch(console.log);
  }, []);
  return (
    <div className="flex bg-gray-500">
      <MainLayout />
      <div className="flex-col gap-5  w-[800px] border-2 bg-gray-600 ">
        <PieChart data={data} />
        <BarChart data={data} />
      </div>
    </div>
  );
}
