import { useState } from "react"

export default function Education({ data, setData }){
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(formData.map((item, i) => (i === index ? { ...item, [name]: value } : item)));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);
    setEditing(false);
  }

  const addEducation = () => {
    setFormData([
      ...formData,
      {
        institution: "",
        location: "",
        degree: "",
        dateRange: "",
        cgpa: "",
      },
    ])
  }

  const removeEducation = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div>
        <h2>Education</h2>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          {formData.map((edu, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => removeEducation(index)}
              >
                ✕
              </button>
              <div>
                <div>
                  <label>Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={edu.location}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Date Range</label>
                  <input
                    type="text"
                    name="dateRange"
                    value={edu.dateRange}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>CGPA</label>
                  <input
                    type="text"
                    name="cgpa"
                    value={edu.cgpa}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
              </div>
            </div>
          ))}
          <div>
            <button
              type="button"
              onClick={addEducation}
            >
              Add Education
            </button>
            <div>
              <button
                type="button"
                onClick={() => {
                  setFormData(data)
                  setEditing(false)
                }}
              >
                Cancel
              </button>
              <button type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          {formData.map((edu, index) => (
            <div key={index}>
              <div>
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
                <p>CGPA: {edu.cgpa}</p>
              </div>
              <div>
                <p>{edu.location}</p>
                <p>{edu.dateRange}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}