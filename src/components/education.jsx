import { useState } from "react";

export function Education({ formData, handleChange, handleSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="education">
      <div className="section-header">
        <div className="title">Education Experience</div>{" "}
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
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Enter Degree / Field of Study"
            value={formData.degree}
            onChange={handleChange}
            required
          />

          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Enter a school / university"
            value={formData.school}
            onChange={handleChange}
            required
          />

          <label htmlFor="educstartdate">Start Date</label>
          <input
            type="date"
            name="educstartdate"
            id="startdate"
            onChange={handleChange}
            value={formData.educstartdate}
            required
          />

          <label htmlFor="educenddate">End Date</label>
          <input
            type="date"
            name="educenddate"
            id="enddate"
            onChange={handleChange}
            value={formData.educenddate}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : null}
    </div>
  );
}
