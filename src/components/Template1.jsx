import React from "react";

const Template1 = ({ data }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p>{data.email} | {data.phone}</p>
      <p className="mt-4">{data.summary}</p>
      <h2 className="text-xl font-bold mt-4">Work Experience</h2>
      <p>{data.experience}</p>
      <h2 className="text-xl font-bold mt-4">Education</h2>
      <p>{data.education}</p>
      <h2 className="text-xl font-bold mt-4">Skills</h2>
      <p>{data.skills}</p>
    </div>
  );
};

export default Template1;
