export function Education({ formData, handleChange, handleSubmit }) {
  return (
    <div className="education">
      <div className="title">Education Experience</div>
      <form action="submit" onSubmit={handleSubmit}>
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
          required
        />

        <label htmlFor="educenddate">End Date</label>
        <input
          type="date"
          name="educenddate"
          id="enddate"
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
