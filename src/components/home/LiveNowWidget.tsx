import { Play, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface LiveMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  minute: number;
  competition: string;
  thumbnail?: string;
}

interface LiveNowWidgetProps {
  match: LiveMatch | null;
}

export function LiveNowWidget({ match }: LiveNowWidgetProps) {
  if (!match) {
    return (
      <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
        <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-muted-foreground" />
          <h3 className="font-display font-bold text-lg text-card-foreground">Live Now</h3>
        </div>
        <div className="p-8 text-center">
          <Clock className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground">No live matches at the moment</p>
          <p className="text-sm text-muted-foreground mt-1">Check back later for live action!</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card rounded-2xl border-2 border-live/30 overflow-hidden shadow-lg"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-border live-gradient flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white live-pulse" />
          <h3 className="font-display font-bold text-lg text-white">Live Now</h3>
        </div>
        <span className="text-sm font-medium text-white/90">{match.minute}'</span>
      </div>

      {/* Match Content */}
      <div className="p-5">
        <div className="text-xs text-muted-foreground mb-4 text-center">{match.competition}</div>
        
        {/* Score Display */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex-1 text-center">
            <p className="font-display font-bold text-lg text-card-foreground mb-1">{match.homeTeam}</p>
            <p className="text-4xl font-display font-black text-live">{match.homeScore}</p>
          </div>
          <div className="text-2xl font-bold text-muted-foreground">-</div>
          <div className="flex-1 text-center">
            <p className="font-display font-bold text-lg text-card-foreground mb-1">{match.awayTeam}</p>
            <p className="text-4xl font-display font-black text-live">{match.awayScore}</p>
          </div>
        </div>

        {/* Watch Button */}
        <Button className="w-full live-gradient text-white hover:opacity-90 font-semibold" size="lg">
          <Play className="w-5 h-5 mr-2 fill-current" />
          Watch Live Stream
        </Button>
      </div>
    </motion.section>
  );
}
