function CaseDetails({ onBack }) {
    return (
        <div className="case-page">
            <header className="case-page-header">
                <button onClick={onBack} className="back-btn">
                    ← BACK TO DASHBOARD
                </button>
                <span>CASE FILE / #001</span>
            </header>

            <div className="case-banner">
                <p className="eyebrow">CONFIDENTIAL INVESTIGATION</p>
                <h1>The Last Train</h1>
                <p>Blackwood Station · 11:47 PM</p>
            </div>

            <div className="case-layout">
                <section className="case-report">
                    <p className="eyebrow">INCIDENT REPORT</p>
                    <h2>What happened?</h2>

                    <p>
                        On the night of October 17, investigative journalist
                        Adrian Cole boarded the final train departing
                        Blackwood Station at 11:47 PM.
                    </p>

                    <p>
                        According to the railway records, the train reached
                        its destination. However, Adrian was nowhere to be
                        found. His luggage remained inside the compartment.
                    </p>

                    <p>
                        Five individuals were connected to the journalist
                        during the final hours before his disappearance.
                        Each has a different account of that night.
                    </p>

                    <div className="incident-warning">
                        WARNING: Some statements may be misleading.
                        Verify every detail before drawing conclusions.
                    </div>
                </section>

                <aside className="case-summary">
                    <p className="eyebrow">CASE INFORMATION</p>

                    <div>
                        <small>CASE NUMBER</small>
                        <strong>#001</strong>
                    </div>

                    <div>
                        <small>VICTIM</small>
                        <strong>Adrian Cole</strong>
                    </div>

                    <div>
                        <small>LAST KNOWN LOCATION</small>
                        <strong>Blackwood Station</strong>
                    </div>

                    <div>
                        <small>CASE STATUS</small>
                        <strong className="case-open">● OPEN</strong>
                    </div>

                    <div>
                        <small>PERSONS OF INTEREST</small>
                        <strong>05</strong>
                    </div>
                </aside>
            </div>

            <section className="objectives">
                <p className="eyebrow">YOUR OBJECTIVES</p>
                <h2>Investigation Checklist</h2>

                <div className="objective">
                    <span>01</span>
                    <p>Examine all available evidence</p>
                </div>

                <div className="objective">
                    <span>02</span>
                    <p>Interview the five suspects</p>
                </div>

                <div className="objective">
                    <span>03</span>
                    <p>Reconstruct the timeline</p>
                </div>

                <div className="objective">
                    <span>04</span>
                    <p>Identify the person responsible</p>
                </div>
            </section>
        </div>
    )
}

export default CaseDetails
