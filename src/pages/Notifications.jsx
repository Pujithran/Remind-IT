import "./Notifications.css"

export default function Notifications({ reminders }) {

    const active = reminders.filter((item) => item.status !== "completed");
    const overdue = active.filter((item) => item.status === "overdue");
    const upcoming = active.filter((item) => item.status === "upcoming");
    const items = [...overdue, ...upcoming];

    return (
        <div className="page">
            <div className="notifications__header">
                <div className="notifications__eyebrow">STAY IN THE LOOP</div>
                <h1 className="notifications__title">Notifications</h1>
                <p className="notifications__subtitle">
                    Timely updates from the reminders that matter most.
                </p>
            </div> 

            <div className="notifications__list">
                {items.length === 0 && (
                    <div className="notifications__empty">You're all caught up.</div>
                )}

                {items.map((item) => (
                    <div className="notifications__row" key={item.id}>
                        <span className={
                            item.status =="overdue"
                                ? "notifications__dot notifications__dot--urgent"
                                : "notifications__dot"
                        }
                        ></span>
                        <div className="notifications__info">
                            <div className="notifications__name">{item.title}</div>
                            <div className="notifications__text">{item.meta}</div>
                        </div>
                        <span className="notifications__time">{item.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}