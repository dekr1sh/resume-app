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
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold text-blue-500">Projects</h2>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
          >
            Edit
          </button>
        )}
      </div>
      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formData.map((project, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                type="button"
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Project Name</label>
                  <input
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Technologies</label>
                  <input
                    type="text"
                    name="technologies"
                    value={project.technologies}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Live Link</label>
                  <input
                    type="text"
                    name="liveLink"
                    value={project.liveLink}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Code Link</label>
                  <input
                    type="text"
                    name="codeLink"
                    value={project.codeLink}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                {project.description.map((desc, descIndex) => (
                  <div key={descIndex} className="flex items-center mb-2">
                    <input
                      type="text"
                      value={desc}
                      onChange={(e) => handleDescriptionChange(index, descIndex, e.target.value)}
                      required
                      className="flex-grow border border-gray-300 rounded-md shadow-sm p-2 mr-2"
                    />
                    <button
                      type="button"
                      onClick={() => removeDescriptionItem(index, descIndex)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addDescriptionItem(index)}
                  className="mt-2 px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm"
                >
                  Add Description Item
                </button>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <button
              type="button"
              onClick={addProject}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add Project
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setFormData(data)
                  setEditing(false)
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="border-t border-gray-300 pt-2">
          {formData.map((project, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">
                  {project.name} | {project.technologies}
                </h3>
                <div>
                  <a href={project.liveLink} className="mr-2 underline">
                    Live
                  </a>{" "}
                  |
                  <a href={project.codeLink} className="ml-2 underline">
                    Code
                  </a>
                </div>
              </div>
              <ul className="list-disc pl-6 mt-2">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm">
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