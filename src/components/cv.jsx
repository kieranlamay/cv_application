export function CV({ formData }) {
  return (
    <div className="cv">
      <div className="cv-name">{formData.name}</div>
      <div className="cv-email">{formData.email}</div>
      <div className="cv-phone">{formData.phone}</div>
    </div>
  );
}
