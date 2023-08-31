import{ useState } from 'react';
import { blog_data } from '@/data_samples/blog_list';

const CreateBlogForm = ({ onSave, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [blogImage, setBlogImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      description,
      selectedCategories,
      blogImage,
    };
    onSave(formData);
  };


  const handleBlogImageChange = (e) => {
    setBlogImage(e.target.files[0]);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Blog Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Blog Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            />
          </div>
          <div className="mb-4">
            <label>Select Categories:</label>
            <select
              multiple
              value={selectedCategories}
              onChange={(e) =>
                setSelectedCategories(Array.from(e.target.selectedOptions, (option) => option.value))
              }
              className="border rounded-lg p-2 w-full"
            >
              {blog_data[0].categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="blogImage">Blog Image:</label>
            <input
              type="file"
              id="blogImage"
              accept="image/*"
              onChange={handleBlogImageChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;