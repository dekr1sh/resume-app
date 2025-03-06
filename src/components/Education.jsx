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
    <div className="mb-8">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-2xl font-bold">Education</h2>
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
          {formData.map((edu, index) => (
            <div key={index} className="border p-4 rounded-md relative">
              <button
                type="button"
                onClick={() => removeEducation(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={edu.institution}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={edu.location}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Degree</label>
                  <input
                    type="text"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date Range</label>
                  <input
                    type="text"
                    name="dateRange"
                    value={edu.dateRange}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CGPA</label>
                  <input
                    type="text"
                    name="cgpa"
                    value={edu.cgpa}
                    onChange={(e) => handleChange(index, e)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <button
              type="button"
              onClick={addEducation}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add Education
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
          {formData.map((edu, index) => (
            <div key={index} className="mb-6 flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{edu.institution}</h3>
                <p className="text-sm">{edu.degree}</p>
                <p className="text-sm">CGPA: {edu.cgpa}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">{edu.location}</p>
                <p className="text-sm">{edu.dateRange}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}