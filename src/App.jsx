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
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("ran");
  };

  return (
    <div className="app-container">
      <GeneralInfo formData={formData} handleChange={handleChange} />
      <CV formData={formData} />
      <Education />
      <Professional />
    </div>
  );
}

export default App;
