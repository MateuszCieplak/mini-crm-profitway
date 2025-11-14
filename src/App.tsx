import React from 'react';
import { HomePage } from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import { ClientDetails } from './pages/ClientDetails';
import { SummaryTotalMetrics } from './components/SummaryTotalMetrics';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">Mini CRM Dashboard</h1>
      </header>

      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={
            <>
              <SummaryTotalMetrics />
              <HomePage />
            </>
          } />
          <Route path="/client/:id" element={<ClientDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
