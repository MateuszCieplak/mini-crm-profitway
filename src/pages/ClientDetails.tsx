import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useClients } from '../context/ClientContext';
import { AddProjectForm } from '../components/AddProjectForm';
import { ProjectList } from '../components/ProjectList';

export const ClientDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { clients } = useClients();

  const client = clients.find(c => c.id === id);

  if (!client) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-150 text-sm font-semibold"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Powrót do Dashboardu
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
        Szczegóły Klienta: {client.name}
      </h2>

      <div className="mb-6 space-y-2">
        <p className="text-gray-700">
          <span className="font-semibold">E-mail:</span> {client.email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Pozyskanie:</span> {client.acquisitionDate}
        </p>
      </div>

      <section className="mt-8 pt-4 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Projekty ({client.projects.length})</h3>
        <ProjectList projects={client.projects}/>
        <AddProjectForm clientId={client.id}/>
      </section>
    </div>
  );
};
