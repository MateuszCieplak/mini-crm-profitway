import React, { createContext, useContext, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { type Client, initialClientData } from '../types/crm';

export interface NewClientData {
  name: string;
  email: string;
}

interface ClientContextType {
  clients: Client[];
  addClient: (data: NewClientData) => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export const ClientProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clients, setClients] = useLocalStorage<Client[]>('crmClients', initialClientData);

  const addClient = (data: NewClientData) => {
    const newClient: Client = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      acquisitionDate: new Date().toISOString().split('T')[0],
      projects: [],
    };

    setClients(prevClients => [...prevClients, newClient]);
  };

  return (
    <ClientContext.Provider value={{ clients, addClient }}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClients = () => {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClients must be used within a ClientProvider');
  }
  return context;
};
