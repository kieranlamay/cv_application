import { useState } from "react";

export function Professional({ formData, handleChange, handleSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="professional">
      <div className="section-header">
        <div className="title">Professional Experience</div>
        {isEditing ? null : (
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <form
          action="submit"
          onSubmit={(event) => {
            handleSubmit(event);
            handleEdit();
          }}
        >
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            name="job"
            placeholder="Enter Job title"
            value={formData.job}
            onChange={handleChange}
            required
          />
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter Company"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <label htmlFor="profstartdate">Start Date</label>
          <input
            type="date"
            name="profstartdate"
            id="profstartdate"
            value={formData.profstartdate}
            onChange={handleChange}
            required
          />
          <label htmlFor="profenddate">End Date</label>
          <input
            type="date"
            name="profenddate"
            id="profenddate"
            value={formData.profenddate}
            onChange={handleChange}
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Main tasks"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Save</button>
        </form>
      ) : null}
    </div>
  );
}
