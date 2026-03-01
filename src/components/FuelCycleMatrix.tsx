import React from 'react';
import uraniumData from '../data/uranium_cycle.json';

const FuelCycleMatrix: React.FC = () => {
    return (
        <div className="intelligence-panel">
            <div className="panel-header" style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Uranium Fuel Cycle Chokepoints</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, maxWidth: '600px' }}>
                    The nuclear fuel supply chain is highly concentrated. While Western nations operate the majority of the reactor fleet, enrichment (SWU) and conversion capacity remains heavily dependent on Russian state-owned infrastructure.
                </p>
            </div>

            <div className="fuel-cycle-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--sp-5)' }}>
                {uraniumData.map((stage, i) => (
                    <div key={stage.process} className="fuel-stage-card" style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        padding: 'var(--sp-5)',
                        borderTop: i === 2 ? '3px solid var(--red)' : '3px solid var(--accent)'
                    }}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{stage.process}</h4>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                            Metric: {stage.unit}
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                            {stage.description}
                        </p>

                        <div className="stage-bars" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {stage.leaders.map(leader => (
                                <div key={leader.entity} className="stage-bar-item">
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                                        <span style={{ color: 'var(--text)' }}>{leader.entity}</span>
                                        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{leader.sharePct}%</span>
                                    </div>
                                    <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                                        <div style={{
                                            height: '100%',
                                            width: `${leader.sharePct}%`,
                                            background: leader.entity.includes('Russia') ? 'var(--red)' : 'var(--accent)',
                                            borderRadius: '3px'
                                        }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FuelCycleMatrix;
