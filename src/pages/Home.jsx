import React, { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import TemplateSelector from "../components/TemplateSelector";
import ResumePreview from "../components/ResumePreview";

const Home = () => {
  const [resumeData, setResumeData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState("Template1");

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Resume Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeForm setResumeData={setResumeData} />
        <div>
          <TemplateSelector setSelectedTemplate={setSelectedTemplate} />
          <ResumePreview
            resumeData={resumeData}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
