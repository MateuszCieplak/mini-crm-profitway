import React from 'react';
import { useClients } from '../context/ClientContext';
import { type Client } from '../types/crm';

export const ClientList: React.FC = () => {
  const {clients} = useClients();

  return (
    <div className="p-6 bg-white shadow-xl rounded-lg max-w-4xl mx-auto mt-8 md:mt-0">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">📋 Lista Klientów ({clients.length})</h2>
      {clients.length === 0 ? (
        <p className="text-gray-500 italic p-4 text-center">Brak klientów do wyświetlenia. Dodaj pierwszego klienta za pomocą formularza.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {clients.map((client: Client) => (
            <li
              key={client.id}
              className="py-4 px-2 flex items-center justify-between hover:bg-gray-50 transition duration-150 cursor-pointer"
            >
              <div>
                <p className="text-lg font-semibold text-blue-600">{client.name}</p>
                <p className="text-sm text-gray-500">{client.email}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">Projekty: <span className="font-bold">{client.projects.length}</span></p>
                <p className="text-xs text-green-600">
                  Pozyskanie: {client.acquisitionDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
