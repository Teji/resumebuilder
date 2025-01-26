import React from 'react';

const ProfessionalResumeTemplate = ({ data = {} }) => {
  const {
    name = '',
    email = '',
    phone = '',
    photo = null,
    summary = '',
    experience = '',
    education = '',
    skills = '',
    achievements = "Your achievements...",
    volunteerExperience = "Your volunteer experience...",
    interests = "Your interests...",
    languages = "Your languages...",
  } = data;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
      <div className="flex">
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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600 mb-4">{email} {phone && `| ${phone}`}</p>
          {summary && (
            <section className="mb-4">
              <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700">{summary}</p>
            </section>
          )}
          {experience && (
            <section className="mb-4">
              <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">
                Work Experience
              </h2>
              {experience.split('\n').map((job, index) => (
                <p key={index} className="text-gray-700 mb-1">
                  {job.trim()}
                </p>
              ))}
            </section>
          )}
          {education && (
            <section className="mb-4">
              <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">
                Education
              </h2>
              {education.split('\n').map((degree, index) => (
                <p key={index} className="text-gray-700 mb-1">
                  {degree.trim()}
                </p>
              ))}
            </section>
          )}
          {skills && (
            <section>
              <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">
                Skills
              </h2>
              <p className="text-gray-700">
                {skills.split(',').map(skill => skill.trim()).join(' • ')}
              </p>
            </section>
          )}
          {/* Achievements */}
      <div >
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">Achievements</h2>
        <p className="text-gray-700">{achievements}</p>
      </div>

      {/* Volunteer Experience */}
      <div >
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">Experience</h2>
        <p className="text-gray-700">{volunteerExperience}</p>
      </div>

      {/* Interests */}
      <div >
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">Interests</h2>
        <p className="text-gray-700">{interests}</p>
      </div>

      {/* Languages */}
      <div>
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-2 mb-2">Languages</h2>
        <p className="text-gray-700">{languages}</p>
      </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResumeTemplate;