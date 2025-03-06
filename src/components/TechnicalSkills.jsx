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
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Languages</label>
            <input
              type="text"
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Frameworks</label>
            <input
              type="text"
              name="frameworks"
              value={formData.frameworks}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Development Tools</label>
            <input
              type="text"
              name="developmentTools"
              value={formData.developmentTools}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Libraries</label>
            <input
              type="text"
              name="libraries"
              value={formData.libraries}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="flex justify-end space-x-2">
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
        </form>
      ) : (
        <div className="border-t border-gray-300 pt-2 grid grid-cols-1 gap-2">
          <div>
              <div className="inline font-bold text-gray-900">Languages:</div> 
              <span className="text-sm"> {data.languages}</span>
              
            </div>
            <div>
              <div className="inline font-bold text-gray-900">Frameworks:</div>
              <span className="text-sm"> {data.frameworks}</span>
            </div>
            <div>
              <div className="inline font-bold text-gray-900">Development Tools:</div>
              <span className="text-sm"> {data.developmentTools}</span>
            </div>
            <div>
              <div className="inline font-bold text-gray-900">Libraries:</div>
              <span className="text-sm"> {data.libraries}</span>
            </div>
        </div>
      )}
    </div>
  )
}