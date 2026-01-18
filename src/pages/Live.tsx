import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Play, Clock, Users, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stadium.jpg";

const liveMatches = [
  {
    id: "1",
    homeTeam: "Nyasa Big Bullets",
    awayTeam: "Be Forward Wanderers",
    homeScore: 2,
    awayScore: 1,
    minute: 67,
    competition: "TNM Super League",
    viewers: 12500,
    isLive: true,
  },
];

const upcomingStreams = [
  {
    id: "2",
    homeTeam: "Malawi",
    awayTeam: "Tunisia",
    date: "Sat, Jan 18",
    time: "18:00 CAT",
    competition: "AFCON Qualifiers",
    isFree: false,
  },
  {
    id: "3",
    homeTeam: "Silver Strikers",
    awayTeam: "Mighty Mukuru Wanderers",
    date: "Sun, Jan 19",
    time: "15:30 CAT",
    competition: "TNM Super League",
    isFree: true,
  },
  {
    id: "4",
    homeTeam: "Kamuzu Barracks",
    awayTeam: "Mzuzu City Hammers",
    date: "Sun, Jan 19",
    time: "15:30 CAT",
    competition: "TNM Super League",
    isFree: true,
  },
];

const Live = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Stadium" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background" />
        </div>
        <div className="relative px-6 py-12 lg:px-8 lg:py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full live-gradient text-white text-sm font-semibold mb-6">
              <Radio className="w-4 h-4" />
              <span>LIVE STREAMING</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Watch Live Football
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Stream live Malawian and African football matches in HD quality. Never miss a moment of the action.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="p-6 lg:p-8">
        {/* Live Now Section */}
        {liveMatches.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-live live-pulse" />
              Live Now
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {liveMatches.map((match, index) => (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl border-2 border-live/30 overflow-hidden shadow-lg"
                >
                  {/* Match Header */}
                  <div className="live-gradient px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white">
                      <span className="w-2 h-2 rounded-full bg-white live-pulse" />
                      <span className="font-semibold">{match.minute}'</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Users className="w-4 h-4" />
                      {match.viewers.toLocaleString()} watching
                    </div>
                  </div>

                  {/* Score Display */}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground text-center mb-4">{match.competition}</p>
                    <div className="flex items-center justify-between gap-6 mb-6">
                      <div className="flex-1 text-center">
                        <p className="font-display font-bold text-xl text-card-foreground">{match.homeTeam}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-display font-black text-live">{match.homeScore}</span>
                        <span className="text-2xl font-bold text-muted-foreground">-</span>
                        <span className="text-4xl font-display font-black text-live">{match.awayScore}</span>
                      </div>
                      <div className="flex-1 text-center">
                        <p className="font-display font-bold text-xl text-card-foreground">{match.awayTeam}</p>
                      </div>
                    </div>
                    <Button className="w-full live-gradient text-white font-semibold" size="lg">
                      <Play className="w-5 h-5 mr-2 fill-current" />
                      Watch Live Stream
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Streams */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-muted-foreground" />
            Upcoming Streams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingStreams.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm card-hover"
              >
                <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">{match.competition}</span>
                  {match.isFree ? (
                    <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-medium">Free</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium">Premium</span>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-center mb-4">
                    <p className="font-display font-bold text-lg text-card-foreground">{match.homeTeam}</p>
                    <p className="text-muted-foreground text-sm my-2">vs</p>
                    <p className="font-display font-bold text-lg text-card-foreground">{match.awayTeam}</p>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{match.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>{match.time}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Set Reminder
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Live;
