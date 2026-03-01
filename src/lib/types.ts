export interface ExposureTableRow {
    countryCode: string;
    countryName: string;
    nuclearSharePct: number;
    activeReactorCount: number;
    activeNetCapacityMw: number;
}

export interface FeaturedReport {
    id: string;
    badge: string;
    headline: string;
    summary: string;
    factKey: string;
}

export interface FeaturedReportFacts {
    [key: string]: {
        countryName?: string;
        nuclearSharePct?: number;
        activeReactorCount?: number;
        activeNetCapacityMw?: number;
        factText?: string;
    };
}
