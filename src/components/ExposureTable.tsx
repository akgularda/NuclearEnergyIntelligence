import React from 'react';
import type { ExposureTableRow } from '../lib/types';
import './ExposureTable.css';

interface ExposureTableProps {
    rows: ExposureTableRow[];
}

export const ExposureTable: React.FC<ExposureTableProps> = ({ rows }) => {
    return (
        <div className="exposure-wrapper">
            <table className="exposure-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                        <th>Exposure</th>
                        <th>Reactors</th>
                        <th>Active Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={row.countryCode}>
                            <td className="mono">{index + 1}</td>
                            <td className="country-cell">{row.countryName}</td>
                            <td className="mono accent-text">{(row.nuclearSharePct).toFixed(1)}%</td>
                            <td className="mono">{row.activeReactorCount}</td>
                            <td className="mono">{(row.activeNetCapacityMw / 1000).toFixed(1)} GW</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
