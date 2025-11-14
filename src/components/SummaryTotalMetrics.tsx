import React from 'react';
import { useTotalMetrics } from '../hooks/useTotalMetrics';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
  }).format(value);
};

export const SummaryTotalMetrics: React.FC = () => {
  const metrics = useTotalMetrics();

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">🚀 Podsumowanie Biznesowe</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-indigo-500">
          <p className="text-sm font-medium text-gray-500">Łączna Wartość Projektów</p>
          <p className="text-3xl font-extrabold text-indigo-700 mt-1">
            {formatCurrency(metrics.totalProjectValue)}
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500">
          <p className="text-sm font-medium text-gray-500">Łączna Liczba Projektów</p>
          <p className="text-3xl font-extrabold text-blue-700 mt-1">
            {metrics.totalCountProjects}
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-500">Liczba Klientów</p>
          <p className="text-3xl font-extrabold text-green-700 mt-1">
            {metrics.totalCountClients}
          </p>
        </div>

      </div>
    </div>
  );
};
