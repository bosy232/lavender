import React from 'react';
import { FileText } from 'lucide-react';

const Documents = () => {
  const documents = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of our achievements and milestones',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'Research Papers',
      description: 'Collection of published research papers and studies',
      type: 'PDF',
      size: '5.1 MB'
    },
    {
      title: 'Guidelines & Policies',
      description: 'Official guidelines and policy documents',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'Conference Proceedings',
      description: 'Documentation from our latest conference',
      type: 'PDF',
      size: '3.2 MB'
    }
  ];

  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Document Center</h2>
          <p className="mt-4 text-lg text-gray-600">Access and download important documents</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{doc.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{doc.type} • {doc.size}</span>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;