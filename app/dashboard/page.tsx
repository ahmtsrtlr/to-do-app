"use client";

import { getMockSubscriptions } from "@/types/subscriptionService";
import { groupByPlan } from "@/utils/dashboard-logic";
import { MetricCard } from "@/components/MetricCard";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { Subscription } from "@/types/subcription";

export default function DashboardPage() {
  const [data, setData] = useState<Subscription[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  useEffect(() => {
    // Veriyi asenkron bir fonksiyon içinde çekiyoruz
    const loadData = async () => {
      try {
        // Gerçek bir API çağrısını simüle etmek için küçük bir gecikme (opsiyonel)
        // await new Promise(resolve => setTimeout(resolve, 100));

        const mockData = getMockSubscriptions(50);
        setData(mockData);
      } catch (error) {
        console.error("Veri yüklenirken hata oluştu:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    loadData();
  }, []); // Boş bağımlılık dizisi: Sadece sayfa ilk açıldığında çalışır.
  const stats = groupByPlan(data);
  const chartData = Object.entries(stats).map(([name, value], index) => ({
    name,
    value,
    fill: COLORS[index % COLORS.length], // Recharts 'fill' anahtarını otomatik tanır
  }));
  // Veri yüklenene kadar boş bir state veya skeleton dönebiliriz
  if (!isLoaded) return <div className="p-8">Yükleniyor...</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-black">SaaS Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Toplam Abone"
          value={data.length}
          description="+12% bu ay"
        />
        <MetricCard title="Pro Planlar" value={stats["Pro"] || 0} />
        <MetricCard title="Enterprise" value={stats["Enterprise"] || 0} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm h-100 md:h-120 min-w-0">
        <h2 className="text-lg font-semibold mb-[-1vh] text-black">
          Plan Dağılımı
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label={(entry) => entry.name}
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
