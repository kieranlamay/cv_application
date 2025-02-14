export function GeneralInfo({ formData, handleChange }) {
  return (
    <div className="general-info">
      <div className="title">General Information</div>
      <form action="">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name"
          value={formData.fullname}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
