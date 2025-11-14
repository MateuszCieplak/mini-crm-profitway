import React from 'react';
import {AddClientForm} from './components/AddClientForm';
import {ClientList} from './components/ClientList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Mini CRM Dashboard</h1>
      </header>

      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <AddClientForm />
            </div>

            <div>
              <ClientList />
            </div>
        </div>
      </main>
    </div>
  )
}

export default App
