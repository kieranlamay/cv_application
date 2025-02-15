// import { useState } from 'react'
import { GeneralInfo } from "./components/general";
import { Education } from "./components/education";
import { Professional } from "./components/professional";
import { CV } from "./components/cv";
import "./index.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    school: "",
    educstartdate: "",
    educenddate: "",
    job: "",
    company: "",
    profstartdate: "",
    profenddate: "",
    description: "",
  });

  const [tempData, setTempData] = useState(formData);
  const handleSubmit = (e) => {
    setTempData(formData);
    e.preventDefault();
    console.log("submit ran");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log("ran");
  };

  return (
    <div className="app-container">
      <CV tempData={tempData} />
      <div className="section-container">
        <GeneralInfo
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
        <Education
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Professional
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
