import React, { useState } from 'react';
import { useClients, type NewClientData } from '../context/ClientContext';

export const AddClientForm: React.FC = () => {
  const { addClient } = useClients();
  const [formData, setFormData] = useState<NewClientData>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
     });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Wypełnij wszystkie pola.');
      return;
    }

    setIsSubmitting(true);

    try {
      addClient(formData);

      setFormData({ name: '', email: '' });

      alert('Klient dodany pomyślnie!');

    } catch (error) {
      console.error('Błąd dodawania klienta:', error);
      alert('Wystąpił błąd podczas dodawania klienta.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
<form onSubmit={handleSubmit} className="p-6 bg-white shadow-xl rounded-lg max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Dodaj Nowego Klienta</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nazwa Klienta</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Acme Corporation"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="kontakt@acme.com"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition duration-150"
      >
        {isSubmitting ? 'Dodawanie...' : 'Dodaj Klienta'}
      </button>
    </form>
  )
}
