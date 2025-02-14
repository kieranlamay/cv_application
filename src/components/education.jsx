export function Education() {
    return (
        <div className="education">
            <div className="title">Education Experience</div>
            <form action="">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" placeholder="Enter Degree / Field of Study"/>

                <label htmlFor="school">School</label>
                <input type="text" id="school" placeholder="Enter a school / university"/>

                <label htmlFor="start-date">Start Date</label>
                <input type="date" name="start-date" id="start-date" />

                <label htmlFor="end-date">End Date</label>
                <input type="date" name="end-date" id="end-date" />
            </form>
        </div>
    )
}