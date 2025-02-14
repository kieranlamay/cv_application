export function Professional() {
  return (
    <div className="professional">
      <div className="title">Professional Experience</div>

      <label htmlFor="job-title">Job Title</label>
      <input type="text" id="job-title" placeholder="Enter Job title" />

      <label htmlFor="company">Company</label>
      <input type="text" id="company" placeholder="Enter Company" />

      <label htmlFor="start-date">Start Date</label>
      <input type="date" name="start-date" id="start-date" />

      <label htmlFor="end-date">End Date</label>
      <input type="date" name="end-date" id="end-date" />

      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        placeholder="Main tasks"
      ></textarea>
    </div>
  );
}
