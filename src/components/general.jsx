export function GeneralInfo() {
    return (
        <div className="general-info">
            <div className="title">General Information</div>
            <form action="">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name"/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email"/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Phone"/>
            </form>
        </div>
    )
}