import React from 'react';
import { AddClientForm } from "../components/AddClientForm";
import { ClientList } from "../components/ClientList";

export const HomePage: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <AddClientForm />
    </div>
    <div>
      <ClientList />
    </div>
  </div>
);
