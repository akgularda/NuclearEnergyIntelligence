import type { FeaturedReport } from "../lib/types";

export const featuredReports: FeaturedReport[] = [
    {
        id: "france-anchor",
        badge: "Highest Exposure",
        headline: "France Still Sits At The Top Of The Exposure Table",
        summary:
            "France remains the clearest example of national dependence on nuclear generation. It is not only the most exposed country in the current snapshot, but also one of the few countries combining very high exposure with very large operating scale.",
        factKey: "france"
    },
    {
        id: "concentration",
        badge: "Concentration Risk",
        headline:
            "In Several High-Exposure Countries, National Dependence Concentrates In A Tiny Site Base",
        summary:
            "The table should not read like a broad fleet map alone. In several countries, nuclear exposure is tied to a small number of operating reactors serving immense national grids, which creates a different strategic profile.",
        factKey: "concentration"
    },
    {
        id: "scale-vs-exposure",
        badge: "Reading The Table",
        headline: "The Biggest Fleets Are Not Always The Most Exposed",
        summary:
            "Readers should be able to distinguish absolute nuclear scale from national nuclear dependence. This report frames that split directly so the table does not get mistaken for a capacity leaderboard.",
        factKey: "scale"
    }
];
