import "./App.css"
import { useState } from "react"
import CaseDetails from "./components/CaseDetails"

function App() {
    
    const [activePage,setActivePage]=useState("dashboard")

if(activePage==="case"){
    return <CaseDetails onBack={()=>setActivePage("dashboard")}/>
}
    return (
        <div className="app">
            <aside className="sidebar">
                <h2 className="logo">CASE<span>ZERO.</span></h2>

                <p className="side-label">INVESTIGATION</p>
                <nav>
                    <a className="active">▣ Dashboard</a>
                    <a>◈ Active Cases</a>
                    <a>⌕ Evidence Room</a>
                    <a>♙ Suspects</a>
                    <a>⌁ Investigation Board</a>
                </nav>

                <div className="agent-card">
                    <div className="agent-avatar">D</div>
                    <div>
                        <strong>Detective</strong>
                        <small>Lead Investigator</small>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <span>INVESTIGATION DIVISION / DASHBOARD</span>
                    <span className="status">● SYSTEM ONLINE</span>
                </header>

                <section className="welcome">
                    <p className="eyebrow">THURSDAY, 12 NOVEMBER 2026</p>
                    <h1>The truth is<br/><span>buried somewhere.</span></h1>
                    <p className="subtitle">
                        Every detail matters. Every suspect has a story.
                        Your investigation starts here.
                    </p>
                </section>

                <section className="stats">
                    <div className="stat-card">
                        <small>ACTIVE CASES</small>
                        <h2>01</h2>
                    </div>
                    <div className="stat-card">
                        <small>EVIDENCE FOUND</small>
                        <h2>00</h2>
                    </div>
                    <div className="stat-card">
                        <small>PERSONS OF INTEREST</small>
                        <h2>05</h2>
                    </div>
                </section>

                <section className="case-section">
                    <div className="section-heading">
                        <div>
                            <p className="eyebrow">PRIORITY INVESTIGATION</p>
                            <h2>Recently Assigned Case</h2>
                        </div>
                        <span className="case-id">CASE #001</span>
                    </div>

                    <div className="featured-case">
                        <div className="case-image">
                            <span>UNSOLVED MYSTERY</span>
                        </div>

                        <div className="case-details">
                            <p className="eyebrow">BLACKWOOD STATION · 11:47 PM</p>
                            <h2>The Last Train</h2>
                            <p>
                                An investigative journalist disappeared
                                aboard the final train from Blackwood Station.
                                The train arrived. The journalist did not.
                            </p>
                            <div className="case-meta">
                                <span>◈ 5 SUSPECTS</span>
                                <span>◈ 12 CLUES</span>
                                <span className="priority">HIGH PRIORITY</span>
                            </div>
                           

                                OPEN CASE <span>↗</span>
                            </button>
                        </div>
                    </div>
                </section>

                <footer>
                    CASE ZERO <span>·</span> THE TRUTH NEVER DISAPPEARS.
                </footer>
            </main>
        </div>
    )
}

export default App
