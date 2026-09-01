// Centralized Mock Data & State Management for Sentinels SportsHub

const SentinelsData = {
    userProfile: {
        name: "Rahul Sharma",
        id: "SSH-ATH-2026-000123",
        role: "Forward",
        team: "Sentinels FC",
        status: "Active",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        stats: {
            totalMatches: 42,
            goalsScored: 27,
            winRate: "87%",
            achievementsCount: 12
        }
    },
    matches: [
        { id: 1, teamA: "Sentinels FC", scoreA: 2, teamB: "Titan United", scoreB: 1, time: "72:31", status: "LIVE", league: "NCAA FB" },
        { id: 2, teamA: "Spartans", scoreA: 88, teamB: "Bulldogs", scoreB: 82, time: "Q4 02:15", status: "LIVE", league: "NCAA BB" },
        { id: 3, teamA: "Knights FC", scoreA: 3, teamB: "Lions FC", scoreB: 0, time: "FT", status: "FINISHED", league: "SOCCER" },
        { id: 4, teamA: "Apex Eagles", scoreA: 24, teamB: "Tigers", scoreB: 17, time: "HALF", status: "LIVE", league: "FOOTBALL" }
    ],
    tournaments: [
        {
            id: 't1',
            title: 'Pune University Football Cup',
            sport: 'football',
            location: 'na',
            status: 'ongoing',
            org: 'Sentinels Regional',
            dates: 'Oct 12 - 24',
            prize: '$50,000',
            teams: 32,
            image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 't2',
            title: 'Global Basketball Invitational 26',
            sport: 'basketball',
            location: 'na',
            status: 'open',
            org: 'Nexus Sports Corp',
            dates: 'Nov 05, 2026',
            prize: '$100,000',
            teams: 64,
            image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 't3',
            title: 'Sentinels Tennis Pro Circuit',
            sport: 'tennis',
            location: 'eu',
            status: 'open',
            org: 'Global Tennis Assoc.',
            dates: 'Closing in 48h',
            prize: '$25,000',
            teams: 16,
            image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80'
        },
        {
            id: 't4',
            title: 'Inter-Collegiate Athletics Championship',
            sport: 'athletics',
            location: 'global',
            status: 'completed',
            org: 'TrackTech System',
            dates: 'Completed Sep 2026',
            prize: '$15,000',
            teams: 48,
            image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80'
        }
    ],
    liveTickerEvents: [
        { time: "72'", icon: "sports_soccer", type: "Goal!", detail: "Sentinels FC. A brilliant strike from outside the box by #10." },
        { time: "65'", icon: "swap_vert", type: "Substitution", detail: "Sentinels FC. Player in: #7, Player out: #11." },
        { time: "55'", icon: "warning", type: "Yellow Card", detail: "Titan United. #4 for a late challenge." },
        { time: "45'", icon: "sports", type: "Half Time", detail: "Score remains 1-1." }
    ]
};
