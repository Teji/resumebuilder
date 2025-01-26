import React from "react";
import Template1 from "./Template1";
import Template2 from "./Template2";
import ResumePDF from "./ResumePDF";
import ProfessionalTemplate from "./ProfessionalTemplate";
import ProfessionalResumeTemplate from "./ProfessionalResumeTemplate";
import Template3 from "./Template3";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ResumePreview = ({ resumeData, selectedTemplate }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
      {selectedTemplate === "Template1" && <Template1 data={resumeData} />}
      {selectedTemplate === "Template2" && <Template2 data={resumeData} />}
      {selectedTemplate === "ProfessionalTemplate" && <ProfessionalTemplate data={resumeData} />}
      {selectedTemplate === "ProfessionalResumeTemplate" && <ProfessionalResumeTemplate data={resumeData} />}
      {selectedTemplate === "Template3" && <Template3 data={resumeData} />}
      
      <div className="mt-4">
        <PDFDownloadLink
          document={<ResumePDF data={resumeData} />}
          fileName="resume.pdf"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {({ loading }) => (loading ? "Preparing PDF..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ResumePreview;
