import React from "react";

const Template2 = ({ data }) => {
  const {
    name = "Your Name",
    email = "youremail@example.com",
    phone = "123-456-7890",
    
    summary = "Professional summary goes here...",
    experience = "List your work experience here...",
    education = "List your educational background here...",
    skills = "List your skills here...",
    achievements = "Your achievements...",
    volunteerExperience = "Your volunteer experience...",
    interests = "Your interests...",
    languages = "Your languages...",
    photo = null,
  } = data;

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white p-6 flex-shrink-0 w-full md:w-1/3 rounded-l-lg">
        <div className="text-center">
        <div className="w-24 h-24 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-500 text-sm">Upload a Photo</div>
            )}
          </div>
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
          <p className="text-sm">
            <i className="fas fa-envelope mr-2"></i>
            {email}
          </p>
          <p className="text-sm">
            <i className="fas fa-phone-alt mr-2"></i>
            {phone}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white flex-grow p-6 rounded-r-lg">
        {/* Summary */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">PROFESSIONAL SUMMARY</h3>
          <p className="text-gray-600">{summary}</p>
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">WORK EXPERIENCE</h3>
          <p className="text-gray-600">{experience}</p>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
          <p className="text-gray-600">{education}</p>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">SKILLS</h3>
          <p className="text-gray-600">{skills}</p>
        </div>
        {/* Achievements */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Achievements</h2>
        <p className="text-gray-600">{achievements}</p>
      </div>

      {/* Volunteer Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Volunteer Experience</h2>
        <p className="text-gray-600">{volunteerExperience}</p>
      </div>

      {/* Interests */}
      <div className="mb-6" >
        <h2 className="text-xl font-bold mb-4">Interests</h2>
        <p className="text-gray-600">{interests}</p>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Languages</h2>
        <p className="text-gray-600">{languages}</p>
      </div>
      </div>
    </div>
  );
};

export default Template2;
