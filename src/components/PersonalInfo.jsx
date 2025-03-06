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
    <div className="mb-8">
      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GitHub Link</label>
              <input
                type="text"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
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
        <div>
          <div className="relative">
            <div className="text-center">
              <h1 className="text-4xl font-bold">{formData.name}</h1>
              <p className="text-lg">{formData.location}</p>
            </div>
            <button
              onClick={() => setEditing(true)}
              className="absolute top-0 right-0 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
            >
              Edit
            </button>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm">
              {formData.phone} 
              | <a href={`mailto:${formData.email}`} target="_self" rel="noreferrer" className="underline">{formData.email}</a> 
              | <a href={formData.linkedinLink} target="_self" rel="noreferrer" className="underline">LinkedIn</a> 
              | <a href={formData.githubLink} target="_self" rel="noreferrer" className="underline">GitHub</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
