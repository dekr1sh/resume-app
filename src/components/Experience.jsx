import { useState } from "react"

export default function Experience({ data, setData}) {
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

  const addExperience = () => {
    setFormData([
      ...formData, 
      {
        position: "",
        location: "",
        company: "",
        dateRange: "",
        description: [""],
      },
    ])
  }

  const removeExperience = (index) => {
    setFormData(formData.filter((_, i) => i !== index));
  }

  const handleDescriptionChange = (expIndex, descIndex, value) => {
    setFormData(
      formData.map((exp, i) =>
        i === expIndex
          ? {
              ...exp,
              description: exp.description.map((desc, j) => (j === descIndex ? value : desc)),
            }
          : exp,
      ),
    )
  }

  const addDescriptionItem = (index) => {
    setFormData(
      formData.map((exp, i) =>
        i === index
          ? {
              ...exp,
              description: [...exp.description, ""],
            }
          : exp,
      ),
    )
  }

  const removeDescriptionItem = (expIndex, descIndex) => {
    setFormData(
      formData.map((exp, i) =>
        i === expIndex
          ? {
              ...exp,
              description: exp.description.filter((_, j) => j !== descIndex),
            }
          : exp,
      ),
    )
  }

  return (
    <div>
      <div>
        <h2>Experience</h2>
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
          {formData.map((exp, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => removeExperience(index)}
              >
                ✕
              </button>
              <div>
                <div>
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    value={exp.position}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    value={exp.location}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Date Range</label>
                  <input
                    type="text"
                    name="dateRange"
                    value={exp.dateRange}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Description</label>
                {exp.description.map((desc, descIndex) => (
                  <div key={descIndex}>
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) => handleDescriptionChange(index, descIndex, e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeDescriptionItem(index, descIndex)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addDescriptionItem(index)}
                >
                  Add Description Item
                </button>
              </div>
            </div>
          ))}
          <div>
            <button
              type="button"
              onClick={addExperience}
            >
              Add Experience
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
          {formData.map((exp, index) => (
            <div key={index}>
              <div>
                <div>
                  <h3>{exp.position}</h3>
                  <p>{exp.company}</p>
                </div>
                <div>
                  <p>{exp.location}</p>
                  <p>{exp.dateRange}</p>
                </div>
              </div>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}