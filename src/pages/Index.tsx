import { MainLayout } from "@/components/layout/MainLayout";
import { HeroBanner } from "@/components/home/HeroBanner";
import { NewsSection } from "@/components/home/NewsSection";
import { FixturesWidget } from "@/components/home/FixturesWidget";
import { LeagueTableWidget } from "@/components/home/LeagueTableWidget";
import { LiveNowWidget } from "@/components/home/LiveNowWidget";

import newsCelebration from "@/assets/news_celebration.jfif";
import newsFootball from "@/assets/news_football.jfif";
import newsCoach from "@/assets/news_coach.jpeg";

// Sample data
const breakingNews = [
  {
    id: "1",
    title: "Flames Squad Announced for AFCON Qualifiers",
    excerpt: "Coach Meck Mwase has named a strong 25-man squad for the upcoming AFCON 2025 qualifiers against Tunisia and Namibia.",
    image: newsCoach,
    category: "National Team",
    time: "2 hours ago",
    isLive: false,
  },
  {
    id: "2",
    title: "Nyasa Big Bullets Extend Unbeaten Run to 12 Games",
    excerpt: "The defending champions continued their dominant form with a 3-1 victory over Silver Strikers at Kamuzu Stadium.",
    image: newsCelebration,
    category: "Super League",
    time: "4 hours ago",
    isLive: true,
  },
  {
    id: "3",
    title: "Transfer Window: Top Signings This Season",
    excerpt: "A look at the most impactful transfers in the TNM Super League as clubs strengthen their squads for the title race.",
    image: newsFootball,
    category: "Transfers",
    time: "6 hours ago",
    isLive: false,
  },
  {
    id: "10",
    title: "Super League Preview: Title Race Heats Up",
    excerpt: "With only 5 matches remaining, the battle for the championship trophy is more exciting than ever.",
    image: newsCelebration,
    category: "Analysis",
    time: "8 hours ago",
    isLive: false,
  },
];

const recentNews = [
  {
    id: "4",
    title: "Be Forward Wanderers Sign New Striker",
    excerpt: "The nomads complete the signing of talented forward from Zambian Premier League club.",
    image: newsCelebration,
    category: "Transfers",
    time: "1 day ago",
    isLive: false,
  },
  {
    id: "5",
    title: "Youth Development: Malawi U-20 Camp Begins",
    excerpt: "The junior Flames gather for intensive training ahead of COSAFA Youth Championship.",
    image: newsCoach,
    category: "Youth",
    time: "2 days ago",
    isLive: false,
  },
  {
    id: "6",
    title: "Stadium Renovations Update: Bingu National Stadium",
    excerpt: "Latest progress on the major infrastructure upgrade at the national stadium in Lilongwe.",
    image: newsFootball,
    category: "Infrastructure",
    time: "3 days ago",
    isLive: false,
  },
];

const upcomingNews = [
  {
    id: "7",
    title: "Preview: Flames vs Tunisia - What to Expect",
    excerpt: "Everything you need to know ahead of Malawi's crucial AFCON qualifier against the Eagles of Carthage.",
    image: newsFootball,
    category: "Preview",
    time: "Tomorrow",
    isLive: false,
  },
  {
    id: "8",
    title: "Super League Matchday 18 Preview",
    excerpt: "All eyes on the top-of-the-table clash between Nyasa Big Bullets and Be Forward Wanderers.",
    image: newsCelebration,
    category: "Super League",
    time: "This Weekend",
    isLive: false,
  },
  {
    id: "9",
    title: "Women's Football: Super League Kicks Off",
    excerpt: "The inaugural women's professional league is set to begin with 12 teams competing.",
    image: newsCoach,
    category: "Women's Football",
    time: "Next Week",
    isLive: false,
  },
];

const fixtures = [
  {
    id: "1",
    homeTeam: "Nyasa Big Bullets",
    awayTeam: "Be Forward Wanderers",
    homeScore: 2,
    awayScore: 1,
    time: "15:30",
    date: "Today",
    venue: "Kamuzu Stadium",
    competition: "TNM Super League",
    isLive: true,
  },
  {
    id: "2",
    homeTeam: "Silver Strikers",
    awayTeam: "Mighty Mukuru Wanderers",
    time: "15:30",
    date: "Tomorrow",
    venue: "Silver Stadium",
    competition: "TNM Super League",
    isUpcoming: true,
  },
  {
    id: "3",
    homeTeam: "Malawi",
    awayTeam: "Tunisia",
    time: "18:00",
    date: "Sat, Jan 18",
    venue: "Bingu National Stadium",
    competition: "AFCON Qualifiers",
    isUpcoming: true,
  },
  {
    id: "4",
    homeTeam: "Kamuzu Barracks",
    awayTeam: "Mzuzu City Hammers",
    homeScore: 0,
    awayScore: 0,
    time: "FT",
    date: "Yesterday",
    venue: "Civo Stadium",
    competition: "TNM Super League",
  },
];

const leagueTable = [
  { position: 1, name: "Nyasa Big Bullets", played: 17, won: 14, drawn: 2, lost: 1, gf: 42, ga: 12, gd: 30, points: 44 },
  { position: 2, name: "Silver Strikers", played: 17, won: 12, drawn: 3, lost: 2, gf: 35, ga: 15, gd: 20, points: 39 },
  { position: 3, name: "Be Forward Wanderers", played: 17, won: 11, drawn: 4, lost: 2, gf: 32, ga: 14, gd: 18, points: 37 },
  { position: 4, name: "Kamuzu Barracks", played: 17, won: 9, drawn: 4, lost: 4, gf: 28, ga: 18, gd: 10, points: 31 },
  { position: 5, name: "Mzuzu City Hammers", played: 17, won: 6, drawn: 5, lost: 6, gf: 22, ga: 24, gd: -2, points: 23 },
  { position: 6, name: "Mighty Mukuru Wanderers", played: 17, won: 5, drawn: 6, lost: 6, gf: 19, ga: 22, gd: -3, points: 21 },
];

const liveMatch = {
  id: "live-1",
  homeTeam: "Nyasa Big Bullets",
  awayTeam: "Be Forward Wanderers",
  homeScore: 2,
  awayScore: 1,
  minute: 67,
  competition: "TNM Super League - Matchday 18",
};

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 p-6 lg:p-8">
        {/* Main Content - 2/3 width on large screens */}
        <div className="xl:col-span-2 space-y-8">
          <NewsSection
            breakingNews={breakingNews}
            recentNews={recentNews}
            upcomingNews={upcomingNews}
          />
        </div>

        {/* Sidebar - 1/3 width on large screens */}
        <aside className="space-y-6">
          <LiveNowWidget match={liveMatch} />
          <FixturesWidget matches={fixtures} />
          <LeagueTableWidget teams={leagueTable} leagueName="TNM Super League" />
        </aside>
      </div>
    </MainLayout>
  );
};

export default Index;
