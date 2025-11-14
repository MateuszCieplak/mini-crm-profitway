export type ProjectStatus = 'open' | 'in progress' | 'done';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  value: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  acquisitionDate: string;
  projects: Project[];
}

export const initialClientData: Client[] = [
  {
    id: 'c-1',
    name: 'Tech Solutions Inc.',
    email: 'info@techsol.com',
    acquisitionDate: '2024-05-01',
    projects: [
      { id: 'p-1', name: 'Wdrożenie ERP', status: 'in progress', value: 85000 },
      { id: 'p-2', name: 'Audyt SEO', status: 'done', value: 5000 },
    ],
  },
];
