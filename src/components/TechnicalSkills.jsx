import { useState } from "react"

export default function TechnicalSkills({ data, setData }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(formData)
    setEditing(false)
  }

  return (
    <div>
      <div>
        <h2>Technical Skills</h2>
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
          <div>
            <label>Languages</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Frameworks</label>
            <input
              type="text"
              name="frameworks"
              value={formData.frameworks}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Development Tools</label>
            <input
              type="text"
              name="developmentTools"
              value={formData.developmentTools}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Libraries</label>
            <input
              type="text"
              name="libraries"
              value={formData.libraries}
              onChange={handleChange}
              required
            />
          </div>
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
        </form>
      ) : (
        <div>
          <div>
            <span>Languages:</span> {formData.languages}
          </div>
          <div>
            <span>Frameworks:</span> {formData.frameworks}
          </div>
          <div>
            <span>Development Tools:</span> {formData.developmentTools}
          </div>
          <div>
            <span>Libraries:</span> {formData.libraries}
          </div>
        </div>
      )}
    </div>
  )
}