import { useState } from "react";
export function GeneralInfo({ formData, handleChange, handleSubmit }) {
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="general-info">
      <div className="section-header">
        <div className="title">General Information</div>
        {isEditing ? null : (
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
        )}
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your full name"
            value={formData.name} // what??? should be name
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Save</button>
        </form>
      ) : null}
    </div>
  );
}
