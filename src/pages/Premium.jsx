import "./Premium.css"

const plans = [
    {
        id: "free",
        name: "Free",
        price: "0 Rs",
        features: [
            "Up to 4 active plugins",
            "Essential plugin features",
            "Standard notifications",
            "Extra plugin: 99 Rs each",
        ],
        button: "Switch to Free",
        featured: false,
    },
    {
        id: "premium",
        name: "Premium",
        price: "599 Rs",
        features: [
            "10 active plugins",
            "Complete features in every plugin",
            "Premium-only plugins",
            "Priority and smart notifications",
            "Extra plugins: 49 Rs each"
        ],
        button: "Choose Premium",
        featured: true,
    },
]

export default function Premium({ isPremium }) {

    const currentId = isPremium ? "premium" : "free"

    return (
        <div className="page">
            <div className="premium__header">
                <div className="premium__eyebrow">REMINDIT PREMIUM</div>
                <h1 className="premium__title">More room for what matters</h1>
                <p className="premium__subtitle">
                    Activate every plugin and unlock the complete toolkit without changing how you work.
                </p>
            </div>
            <div className="premium__plans">
                {plans.map((plan) => (
                    <div className={plan.featured ? "plan plan--featured" : "plan"} key={plan.id}>
                        <div className="plan__top">
                            <h2 className="plan__name">{plan.name}</h2>
                            {plan.features && <span className="plan__badge">Best value</span>}
                        </div>

                        <div className="plan__features">
                            {plan.price} <span className="plan__period">per month</span>
                        </div>

                        <ul className="plan__features">
                            {plan.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>

                        <button className="plan__button" disabled={plan.id === currentId}>
                            {plan.id === currentId ? "Current plan" : plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}