import React, { useState } from "react";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    imageLink: "",
    gender: "",
    skills: [],
  });
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "radio") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        skills: [...prevFormData.skills, name],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        skills: prevFormData.skills.filter((skill) => skill !== name),
      }));
    }
  };

  const handleEnroll = () => {
    setEnrolledStudents((prevEnrolledStudents) => [
      ...prevEnrolledStudents,
      {
        name: formData.name,
        email: formData.email,
        website: formData.website,
        imageLink: formData.imageLink,
        gender: formData.gender,
        skills: formData.skills,
      },
    ]);
    setFormData({
      name: "",
      email: "",
      website: "",
      imageLink: "",
      gender: "",
      skills: [],
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      website: "",
      imageLink: "",
      gender: "",
      skills: [],
    });
    setEnrolledStudents([]);
  };

  return (
    <>
      <div className="registration-form-container">
        <div className="form-container">
          <form>
            <div className="wrapper">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
              <label>
                Website:
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
              <label>
                Image Link:
                <input
                  type="text"
                  name="imageLink"
                  value={formData.imageLink}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
              <label className="gender-label">
                Gender:
                <div className="gender">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="radio-button"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="radio-button"
                    />
                    Female
                  </label>
                </div>
              </label>
              <label className="skills-label">Skills:</label>
              <div className="skills">
                <label>
                  <input
                    type="checkbox"
                    name="java"
                    checked={formData.skills.includes("java")}
                    onChange={handleCheckboxChange}
                    className="checkbox"
                  />
                  Java
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="javascript"
                    checked={formData.skills.includes("javascript")}
                    onChange={handleCheckboxChange}
                    className="checkbox"
                  />
                  JavaScript
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="python"
                    checked={formData.skills.includes("python")}
                    onChange={handleCheckboxChange}
                    className="checkbox"
                  />
                  Python
                </label>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  onClick={handleEnroll}
                  className="enroll-button"
                >
                  Enroll
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="clear-button"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="enrolled-students-container">
          {enrolledStudents.map((student, index) => (
            <div key={index} className="enrolled-student">
              <img
                src={student.imageLink}
                alt={student.name}
                id="image-of-student"
              />
              <center>
                <div className="student-details">
                  <h3>{student.name}</h3>
                  <p>Email: {student.email}</p>
                  <p>Website: {student.website}</p>
                  <p>Gender: {student.gender}</p>
                  <p>Skills: {student.skills.join(", ")}</p>
                </div>
              </center>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
