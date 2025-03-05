import { useState } from "react"

export default function PersonalInfo({ data, setData }) {
  // `data` and `setData` are passed as props from the parent component 
  // so that I have the OG value saved somewhere even when I am changing the value of `formData' while editing.
  // This helps to implement the functionality of something like `cancel` button which needs to revert the form back to the OG data.

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
    e.preventDefault();
    setData(formData);
    setEditing(false);
  }

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn Link</label>
              <input
                type="text"
                name="linkedinLink"
                value={formData.linkedinLink}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>GitHub Link</label>
              <input
                type="text"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                required
              />
            </div>
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
            <div>
              <h1>{formData.name}</h1>
              <p>{formData.location}</p>
            </div>
            <button
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          </div>
          <div>
            <p>
              {formData.phone} 
              | <a href={`mailto:${formData.email}`} target="_self" rel="noreferrer">{formData.email}</a> 
              | <a href={formData.linkedinLink} target="_self" rel="noreferrer">LinkedIn</a> 
              | <a href={formData.githubLink} target="_self" rel="noreferrer">GitHub</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
