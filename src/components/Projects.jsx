import { useState } from "react"

export default function Projects({ data, setData }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    setFormData(formData.map((item, i) => (i === index ? { ...item, [name]: value } : item)));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(formData)
    setEditing(false)
  }

  const addProject = () => {
    setFormData([
      ...formData,
      {
        name: "",
        technologies: "",
        liveLink: "",
        codeLink: "",
        description: [""],
      },
    ])
  }

  const removeProject = (index) => {
    setFormData(formData.filter((_, i) => i !== index))
  }

  const handleDescriptionChange = (projIndex, descIndex, value) => {
    setFormData(
      formData.map((proj, i) =>
        i === projIndex
          ? {
              ...proj,
              description: proj.description.map((desc, j) => (j === descIndex ? value : desc)),
            }
          : proj,
      ),
    )
  }

  const addDescriptionItem = (index) => {
    setFormData(
      formData.map((proj, i) =>
        i === index
          ? {
              ...proj,
              description: [...proj.description, ""],
            }
          : proj,
      ),
    )
  }

  const removeDescriptionItem = (projIndex, descIndex) => {
    setFormData(
      formData.map((proj, i) =>
        i === projIndex
          ? {
              ...proj,
              description: proj.description.filter((_, j) => j !== descIndex),
            }
          : proj,
      ),
    )
  }

  return (
    <div>
      <div>
        <h2>Projects</h2>
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
          {formData.map((project, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => removeProject(index)}
              >
                ✕
              </button>
              <div>
                <div>
                  <label>Project Name</label>
                  <input
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Technologies</label>
                  <input
                    type="text"
                    name="technologies"
                    value={project.technologies}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Live Link</label>
                  <input
                    type="text"
                    name="liveLink"
                    value={project.liveLink}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
                <div>
                  <label>Code Link</label>
                  <input
                    type="text"
                    name="codeLink"
                    value={project.codeLink}
                    onChange={(e) => handleChange(index, e)}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Description</label>
                {project.description.map((desc, descIndex) => (
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
              onClick={addProject}
            >
              Add Project
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
          {formData.map((project, index) => (
            <div key={index}>
              <div>
                <h3>
                  {project.name} | {project.technologies}
                </h3>
                <div>
                  <a href={project.liveLink}>
                    Live
                  </a>{" "}
                  |
                  <a href={project.codeLink}>
                    Code
                  </a>
                </div>
              </div>
              <ul>
                {project.description.map((desc, i) => (
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