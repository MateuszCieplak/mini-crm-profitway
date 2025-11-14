import React, { useState } from 'react';
import { useClients, type NewProjectData } from '../context/ClientContext';

interface Props {
    clientId: string;
}

export const AddProjectForm: React.FC<Props> = ({ clientId }) => {
    const { addProject } = useClients();

    const [formData, setFormData] = useState({ name: '', value: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const projectValue = parseFloat(formData.value);

        if (!formData.name.trim() || isNaN(projectValue) || projectValue <= 0) {
            alert('Wprowadź poprawną nazwę i wartość projektu.');
            return;
        }

        const data: NewProjectData = {
            clientId: clientId,
            name: formData.name,
            value: projectValue,
        };

        addProject(data);
        setFormData({ name: '', value: '' });
        alert(`Projekt "${data.name}" dodany pomyślnie!`);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border border-gray-200 rounded-lg shadow-sm bg-gray-50">
            <h4 className="text-lg font-semibold mb-4 border-b pb-2">Dodaj Nowy Projekt</h4>
            <div className="flex space-x-4 mb-4">
                <div className="flex-1">
                    <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Nazwa</label>
                    <input
                        type="text"
                        name="name"
                        id="projectName"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                </div>
                <div className="flex-1">
                    <label htmlFor="projectValue" className="block text-sm font-medium text-gray-700">Wartość (PLN)</label>
                    <input
                        type="number"
                        name="value"
                        id="projectValue"
                        value={formData.value}
                        onChange={handleChange}
                        min="0.01"
                        step="0.01"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition duration-150"
            >
                Zapisz Projekt
            </button>
        </form>
    );
};
