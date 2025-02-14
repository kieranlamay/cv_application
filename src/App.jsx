// import { useState } from 'react'
import { GeneralInfo } from "./components/general";
import { Education } from "./components/education";
import { Professional } from "./components/professional";
import "./index.css";

function App() {
  return (
    <>
      <GeneralInfo />
      <Education />
      <Professional />
    </>
  );
}

export default App;
