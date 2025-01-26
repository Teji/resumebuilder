import React, { useState } from "react";

const ResumeForm = ({ setResumeData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    summary: "",
    workExperience: "",
    skills: "",
    education: "",
    achievements: "",
    volunteerExperience: "",
    interests: "",
    languages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setResumeData({ ...formData, [name]: value });
  };
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const newFormData = { ...formData, photo: reader.result };
      setFormData(newFormData);
      setResumeData(newFormData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Resume Form</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="w-full border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="workExperience"
          placeholder="Work Experience"
          value={formData.workExperience}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={formData.education}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="achievements"
          placeholder="Achievements"
          value={formData.achievements}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="volunteerExperience"
          placeholder="Volunteer Experience"
          value={formData.volunteerExperience}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="interests"
          placeholder="Interests"
          value={formData.interests}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <textarea
          name="languages"
          placeholder="Languages"
          value={formData.languages}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </form>
    </div>
  );
};

export default ResumeForm;
