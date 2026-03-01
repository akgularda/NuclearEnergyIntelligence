import React from 'react';

const TurkiyeDossier: React.FC = () => {
    return (
        <div className="intelligence-panel" style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius)', background: 'var(--bg-card)' }}>
            <div style={{ padding: 'var(--sp-6)', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--sp-3)' }}>
                    <span className="badge badge--red">TARGET DOSSIER</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>MCT-GEO-044</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', margin: '0 0 0.5rem 0', color: 'var(--text)' }}>
                    Türkiye's Nuclear Vector
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    Analyzing the strategic shift from energy dependency to heavy industrial baseload anchoring via the Akkuyu mega-project and future state-backed negotiations.
                </p>
            </div>

            <div style={{ padding: 'var(--sp-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--sp-6)' }}>
                {/* Status Column */}
                <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 'var(--sp-4)', color: 'var(--red)' }}>Current Operations: Akkuyu</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
                        The Akkuyu Nuclear Power Plant in Mersin province represents the world's largest nuclear construction site. Utilizing the unique Build-Own-Operate (BOO) model financed by Russian state entity Rosatom.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>REACTOR MODEL</span>
                            <span style={{ color: 'var(--text)' }}>VVER-1200 (x4)</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>CAPACITY YIELD</span>
                            <span style={{ color: 'var(--text)' }}>4,800 MW net</span>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', paddingBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>EXPECTED GRID SHARE</span>
                            <span style={{ color: 'var(--text)' }}>~10% (National)</span>
                        </li>
                    </ul>
                </div>

                {/* Strategy Column */}
                <div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 'var(--sp-4)', color: 'var(--accent)' }}>Strategic Forecasting</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 'var(--sp-4)' }}>
                        To hit the 2053 net-zero targets and secure industrial sovereignty, Ankara explicitly targets 20 GW of nuclear capacity via conventional mega-projects and Small Modular Reactors (SMRs).
                    </p>
                    <div style={{ background: 'var(--bg-elevated)', padding: 'var(--sp-4)', borderRadius: 'var(--radius)' }}>
                        <strong style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>PENDING EXPANSION VECTORS:</strong>
                        <ul style={{ fontSize: '0.85rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                            <li><strong style={{ color: 'var(--text-secondary)' }}>Sinop Project:</strong> Negotiations active with Rosatom and Korean entities (KEPCO).</li>
                            <li><strong style={{ color: 'var(--text-secondary)' }}>Thrace Project:</strong> Advanced dialogue with China (SPIC/CNNC) for a third 4-unit site.</li>
                            <li><strong style={{ color: 'var(--text-secondary)' }}>SMR Integration:</strong> Discussions with US and UK vendors for localized district heating and industrial off-grid deployment.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TurkiyeDossier;
