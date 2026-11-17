function EvidenceRoom({ onBack }) {
    const evidence = [
        {
            id: "E-01",
            name: "Unclaimed Briefcase",
            detail: "A leather briefcase found beneath seat 14.",
            type: "PHYSICAL EVIDENCE"
        },
        {
            id: "E-02",
            name: "Last Train Ticket",
            detail: "A ticket stamped at 11:32 PM.",
            type: "DOCUMENT"
        },
        {
            id: "E-03",
            name: "Station Photograph",
            detail: "A blurred figure near platform three.",
            type: "PHOTOGRAPH"
        }
    ]

    return (
        <div className="case-page">
            <header className="case-page-header">
                <button className="back-btn" onClick={onBack}>
                    ← BACK TO DASHBOARD
                </button>
                <span>EVIDENCE ROOM / #001</span>
            </header>

            <div className="case-banner">
                <p className="eyebrow">INVESTIGATION ARCHIVE</p>
                <h1>Evidence Room</h1>
                <p>Every object may hold an answer.</p>
            </div>

            <h2 className="evidence-count">3 Pieces of Evidence</h2>

            <div className="evidence-grid">
                {evidence.map(item => (
                    <article className="evidence-card" key={item.id}>
                        <span className="evidence-id">{item.id}</span>
                        <h3>{item.name}</h3>
                        <p>{item.detail}</p>
                        <small>{item.type}</small>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default EvidenceRoom
