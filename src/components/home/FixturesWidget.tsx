import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  time: string;
  date: string;
  venue: string;
  competition: string;
  isLive?: boolean;
  isUpcoming?: boolean;
}

interface FixturesWidgetProps {
  matches: Match[];
  title?: string;
}

export function FixturesWidget({ matches, title = "Fixtures & Results" }: FixturesWidgetProps) {
  return (
    <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border bg-muted/30">
        <h3 className="font-display font-bold text-lg text-card-foreground">{title}</h3>
      </div>

      {/* Matches List */}
      <div className="divide-y divide-border">
        {matches.map((match, index) => (
          <MatchItem key={match.id} match={match} index={index} />
        ))}
      </div>

      {/* View All Link */}
      <div className="px-5 py-3 bg-muted/30 text-center">
        <a
          href="/competitions"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all fixtures →
        </a>
      </div>
    </section>
  );
}

function MatchItem({ match, index }: { match: Match; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="p-4 hover:bg-muted/30 transition-colors cursor-pointer"
    >
      {/* Competition & Status */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground">{match.competition}</span>
        {match.isLive && (
          <span className="px-2 py-0.5 rounded-full live-gradient text-white text-xs font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white live-pulse" />
            LIVE
          </span>
        )}
        {match.isUpcoming && (
          <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
            Upcoming
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-medium text-card-foreground">{match.homeTeam}</span>
          <span className={`font-display font-bold text-lg ${match.isLive ? 'text-live' : 'text-card-foreground'}`}>
            {match.homeScore ?? '-'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium text-card-foreground">{match.awayTeam}</span>
          <span className={`font-display font-bold text-lg ${match.isLive ? 'text-live' : 'text-card-foreground'}`}>
            {match.awayScore ?? '-'}
          </span>
        </div>
      </div>

      {/* Match Info */}
      <div className="mt-3 pt-3 border-t border-border/50 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {match.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {match.time}
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {match.venue}
        </span>
      </div>
    </motion.div>
  );
}
