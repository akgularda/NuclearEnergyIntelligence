import React from 'react';
import type { FeaturedReport, FeaturedReportFacts } from '../lib/types';
import './FeaturedReports.css';

interface FeaturedReportsProps {
    reports: FeaturedReport[];
    facts: FeaturedReportFacts;
}

export const FeaturedReports: React.FC<FeaturedReportsProps> = ({ reports, facts }) => {
    return (
        <div className="reports-grid">
            {reports.map((report) => {
                const fact = facts[report.factKey];
                return (
                    <div key={report.id} className="report-card">
                        <span className="report-badge badge--orange">{report.badge}</span>
                        <div className="report-body">
                            <h3 className="report-headline">{report.headline}</h3>
                            {fact && (
                                <div className="report-fact">
                                    {fact.factText}
                                </div>
                            )}
                            <p className="report-summary">{report.summary}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
