import React from 'react';
import { Link } from 'react-router-dom';
import type { Client } from '../types/crm';

interface Props {
  client: Client,
}

export const ClientItem: React.FC<Props> = ({ client }) => {
  return (
    <Link key={client.id} to={`/client/${client.id}`} className="block">
      <li
        className="py-4 px-2 flex items-center justify-between hover:bg-gray-50 transitduration-150 cursor-pointer"
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
    </Link>
  )
}
