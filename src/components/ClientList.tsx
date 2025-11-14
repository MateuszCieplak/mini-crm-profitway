import React from 'react';
import { useClients } from '../context/ClientContext';
import { type Client } from '../types/crm';
import { ClientItem } from './ClientItem';

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
            <ClientItem key={client.id} client={client}/>
          ))}
        </ul>
      )}
    </div>
  )
}
