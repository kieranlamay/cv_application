export function CV({ tempData }) {
  if (tempData != undefined) {
    return (
      <div className="cv">
        <div className="cv-name">{tempData.name}</div>
        <div className="subheader">
          <div className="cv-email">{tempData.email}</div>
          <div className="cv-phone">{tempData.phone}</div>
        </div>

        <div className="education-section">
          {tempData.degree != "" ? (
            <>
              <div className="section-title">Education</div>
              <hr></hr>
              <div className="section-inline">
                <div className="cv-school">{tempData.school}</div>
                <div className="cv-educ-dates">
                  {tempData.educstartdate + " to " + tempData.educenddate}
                </div>
              </div>
              <div className="cv-degree">{tempData.degree}</div>
            </>
          ) : null}
        </div>

        {tempData.job != "" ? (
          <>
            <div className="section-title">Professional Experience</div>
            <hr></hr>
            <div className="cv-job">{tempData.job}</div>
            <div className="section-inline">
              <div className="cv-company">{tempData.company}</div>
              <div className="cv-prof-start-date">
                {tempData.profstartdate + " to " + tempData.profenddate}
              </div>
            </div>
            <div className="cv-description">
              {"Description: " + tempData.description}
            </div>
          </>
        ) : null}
      </div>
    );
  } else {
    return <div className="cv"></div>;
  }
}
