import { useMemo } from 'react';
import { useClients } from '../context/ClientContext';

interface TotalMetrics {
  totalCountClients: number;
  totalCountProjects: number;
  totalProjectValue: number;
}

export const useTotalMetrics = (): TotalMetrics => {
  const { clients } = useClients();

  const totalMetrics = useMemo(() => {
    let totalCountProjects = 0;
    let totalProjectValue = 0;

    clients.forEach(client => {
      totalCountProjects += client.projects.length;

      client.projects.forEach(project => {
        totalProjectValue += project.value || 0;
      });
    });

    return {
      totalCountClients: clients.length,
      totalCountProjects,
      totalProjectValue
    }
  }, [clients])

  return totalMetrics;
}
