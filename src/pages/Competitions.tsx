import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Trophy, ChevronRight } from "lucide-react";

const competitions = [
  {
    id: "1",
    name: "TNM Super League",
    country: "Malawi",
    teams: 16,
    currentMatchday: 18,
    leader: "Nyasa Big Bullets",
    featured: true,
  },
  {
    id: "2",
    name: "AFCON Qualifiers",
    country: "Africa",
    teams: 48,
    currentMatchday: 4,
    leader: "Group stages",
    featured: true,
  },
  {
    id: "3",
    name: "FDH Bank Cup",
    country: "Malawi",
    teams: 32,
    currentMatchday: "Quarter Finals",
    leader: "Knockout stage",
  },
  {
    id: "4",
    name: "COSAFA Cup",
    country: "Southern Africa",
    teams: 14,
    currentMatchday: "July 2026",
    leader: "Upcoming",
  },
  {
    id: "5",
    name: "CAF Champions League",
    country: "Africa",
    teams: 48,
    currentMatchday: "Group Stage",
    leader: "Al Ahly",
  },
  {
    id: "6",
    name: "CAF Confederation Cup",
    country: "Africa",
    teams: 48,
    currentMatchday: "Group Stage",
    leader: "Various",
  },
];

const Competitions = () => {
  return (
    <MainLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
            Competitions
          </h1>
          <p className="text-muted-foreground text-lg">
            Follow all major African and Malawian football competitions
          </p>
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-card rounded-2xl border overflow-hidden shadow-sm card-hover cursor-pointer ${
                competition.featured ? "border-primary/30" : "border-border"
              }`}
            >
              {/* Header */}
              <div className={`px-5 py-4 border-b border-border ${
                competition.featured ? "hero-gradient" : "bg-muted/30"
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    competition.featured ? "bg-white/20" : "bg-warning/10"
                  }`}>
                    <Trophy className={`w-5 h-5 ${
                      competition.featured ? "text-white" : "text-warning"
                    }`} />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold ${
                      competition.featured ? "text-white" : "text-card-foreground"
                    }`}>
                      {competition.name}
                    </h3>
                    <p className={`text-sm ${
                      competition.featured ? "text-white/80" : "text-muted-foreground"
                    }`}>
                      {competition.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Teams</span>
                  <span className="text-sm font-medium text-card-foreground">{competition.teams}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Stage</span>
                  <span className="text-sm font-medium text-card-foreground">{competition.currentMatchday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Leader</span>
                  <span className="text-sm font-medium text-primary">{competition.leader}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="px-5 py-3 bg-muted/30 border-t border-border flex items-center justify-between">
                <span className="text-sm font-medium text-primary">View details</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Competitions;
