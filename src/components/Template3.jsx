import React from "react";

const Template3 = ({ data }) => {
  const {
    name = "Your Name",
    email = "youremail@example.com",
    phone = "123-456-7890",
    address = "Your Address",
    linkedin = "linkedin.com/in/your-profile",
    summary = "Professional summary goes here...",
    workExperience = "Your work experience...",
    skills = "Your skills...",
    education = "Your education...",
    achievements = "Your achievements...",
    volunteerExperience = "Your volunteer experience...",
    interests = "Your interests...",
    languages = "Your languages...",
    photo = null,
  } = data;

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-6 rounded-t-lg flex items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 mr-6"></div>
        <div>
          {photo && (
            <div className="w-1/3 pr-6">
              <img 
                src={photo} 
                alt={`${name}'s profile`} 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          )}
          <div className={`${photo ? 'w-2/3' : 'w-full'}`}>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-600">{email} | {phone}</p>
            <p className="text-gray-600">{address}</p>
            <p className="text-blue-600">{linkedin}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
        <p>{summary}</p>
      </div>

      {/* Work Experience */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        <p>{workExperience}</p>
      </div>

      {/* Skills */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <p>{skills}</p>
      </div>

      {/* Education */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p>{education}</p>
      </div>

      {/* Achievements */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Achievements</h2>
        <p>{achievements}</p>
      </div>

      {/* Volunteer Experience */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Volunteer Experience</h2>
        <p>{volunteerExperience}</p>
      </div>

      {/* Interests */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Interests</h2>
        <p>{interests}</p>
      </div>

      {/* Languages */}
      <div className="bg-white p-6 mt-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">Languages</h2>
        <p>{languages}</p>
      </div>
    </div>
  );
};

export default Template3;
