import "./Dashboard.css"

export default function Dashboard() {

    const reminders = [
        { id: 1, title: 'Submit "Urban Ecology" essay', meta: "Student Assignments due in 4 hours", tag: "Overdue soon", urgent: true },
        { id: 2, title: "Renew internet + streaming bundle", meta: "Subscriptions tomorrow, 9:00 AM", tag: "Tomorrow", urgent: false },
        { id: 3, title: "Dentist follow-up · Dr. Halvorsen", meta: "Appointments Thu, 11:30 AM", tag: "This week", urgent: false },
        { id: 4, title: "Electricity bill · Cycle 07", meta: "Bills & Utilities due Fri, 16 May", tag: "Friday", urgent: false },
    ];

    const plugins = [
        { id: 1, name: "Vehicle document renewals", installs: "20k", rating: "4.8", status: "Active" },
        { id: 2, name: "Student assignments & exams", installs: "12k", rating: "4.7", status: "Active" },
        { id: 3, name: "Subscription & bill tracker", installs: "31k", rating: "4.9", status: "Free" },
        { id: 4, name: "Medication & health", installs: "8k", rating: "4.6", status: "Premium" },
    ];

    const userName = "Pujithran";

    const now = new Date();
    const weekday = now.toLocaleDateString("en-GB", { weekday: "long" });
    const dayMonth = now.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
    const dateLabel = weekday + " · " + dayMonth;

    const hour = now.getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

    const activeCount = plugins.filter((plugin) => plugin.status === "Active").length;

    const notifications = [
        { id: 1, text: "Urban Ecology essay due in 4 hours", urgent: true },
        { id: 2, text: "Road tax renews in 6 days", urgent: false },
    ];

    return (
        <div className="dashboard">

            <div className="dashboard__header">
                <div className="dashboard__greeting">
                    <div className="dashboard__date">{dateLabel}</div>
                    <h1>{greeting}, {userName}</h1>
            </div>

            <div className="dashboard__stats">
                <span className="dashboard__stat dashboard__stat--overdue">2 overdue</span>
                <span className="dashboard__stat">7 upcoming</span>
                <span className="dashboard__stat">{activeCount} active</span>
            </div>
        </div>

            <div className="dashboard__body">
                <div className="dashboard__main">
                    <div className="hero-card">
                        <div className="hero-card__label">NEXT UP · VEHICLE DOCUMENT RENEWALS</div>
                        <h2 className="hero-card__title">Vehicle insurance policy renews</h2>
                        <div className="hero-card__days">
                            <span className="hero-card__days-number">02</span>
                            <span className="hero-card__days-label">days left</span>
                        </div>
                        <div className="hero-card__progress">
                            <div className="hero-card__progress-fill" style={{ width: "85%" }}></div>
                        </div>
                        <button className="hero-card__button">Open plugin</button>
                    </div>
                    <div className="today">
                        <div className="today__header">
                            <h3 className="today__title">Today &amp; overdue</h3>
                            <a className="today__link" href="#">View all</a>
                        </div>

                        {reminders.map((item) => (
                            <div className="today__row" key={item.id}>
                                <div className="today__check"></div>
                                <div className="today__info">
                                    <div className="today__name">{item.title}</div>
                                    <div className="today__meta">{item.meta}</div>
                                </div>
                                <span className={item.urgent ? "today__tag today__tag--urgent" : "today__tag"}>
                                    {item.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="plugin-card">
                        <div className="plugin-card__top">
                            <h3 className="plugin-card__title">Vehicle document renewals</h3>
                            <span className="plugin-card__badge">Free · 2/4</span>
                        </div>

                        <p className="plugin-card__text">
                            Track insurance, road tax, and service dates in one place.
                        </p>

                        <div className="plugin-card__bottom">
                            <div className="plugin-card__stats">
                                <span className="plugin-card__stat plugin-card__stat--overdue">1 overdue</span>
                                <span className="plugin-card__stat">2 upcoming</span>
                            </div>
                            <button className="plugin-card__button">Open plugin</button>
                        </div>
                    </div>

                </div>
                <div className="dashboard__sidebar">
                    <div className="premium-card">
                        <div className="premium-card__top">
                            <span className="premium-card__label">FREE PLAN</span>
                            <span className="premium-card__count">2 / 4 plugins</span>
                        </div>

                        <h3 className="premium-card__title">Unlock unlimited plugins</h3>
                        <p className="premium-card__text">
                            Get every reminder system plus three premium plugins included.
                        </p>

                        <button className="premium-card__button">👑 Go premium</button>
                    </div>
                    <div className="market">
                        <div className="market__header">
                            <h3 className="market__title">Plugin marketplace</h3>
                            <a className="market__link" href="#">Browse all</a>
                        </div>

                        {plugins.map((plugin) => (
                            <div className="market__row" key={plugin.id}>
                                <div className="market__icon">{plugin.name[0]}</div>
                                <div className="market__info">
                                    <div className="market__name">{plugin.name}</div>
                                    <div className="market__meta">{plugin.installs} installs · ★ {plugin.rating}</div>
                                </div>
                                <span className={"market__tag market__tag--" + plugin.status.toLowerCase()}>
                                    {plugin.status}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="notes">
                        <h3 className="notes__title">Notifications</h3>

                        {notifications.map((note) => (
                            <div className="notes__row" key={note.id}>
                                <span className={note.urgent ? "notes__dot notes__dot--urgent" : "notes__dot"}></span>
                                <span className="notes__text">{note.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}