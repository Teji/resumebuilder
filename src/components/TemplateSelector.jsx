import React from "react";

const TemplateSelector = ({ setSelectedTemplate }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-bold mb-4">Choose Template</h2>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedTemplate("Template1")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Template 1
        </button>
        <button
          onClick={() => setSelectedTemplate("Template2")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Template 2
        </button>
        <button
          onClick={() => setSelectedTemplate("ProfessionalTemplate")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Professional Template
        </button>
        <button
          onClick={() => setSelectedTemplate("Template3")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          3
        </button>

      </div>
    </div>
  );
};

export default TemplateSelector;
