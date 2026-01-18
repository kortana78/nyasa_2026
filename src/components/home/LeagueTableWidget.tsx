import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface Team {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

interface LeagueTableWidgetProps {
  teams: Team[];
  leagueName: string;
}

export function LeagueTableWidget({ teams, leagueName }: LeagueTableWidgetProps) {
  return (
    <section className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-5 py-4 border-b border-border bg-muted/30 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-warning" />
        <h3 className="font-display font-bold text-lg text-card-foreground">{leagueName}</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/20">
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">#</th>
              <th className="py-3 px-4 text-left font-medium text-muted-foreground">Team</th>
              <th className="py-3 px-4 text-center font-medium text-muted-foreground">P</th>
              <th className="py-3 px-4 text-center font-medium text-muted-foreground">GD</th>
              <th className="py-3 px-4 text-center font-medium text-muted-foreground">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {teams.slice(0, 6).map((team, index) => (
              <motion.tr
                key={team.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="hover:bg-muted/30 transition-colors cursor-pointer"
              >
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                      team.position <= 2
                        ? "bg-success/10 text-success"
                        : team.position >= 5
                        ? "bg-destructive/10 text-destructive"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {team.position}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium text-card-foreground">{team.name}</td>
                <td className="py-3 px-4 text-center text-muted-foreground">{team.played}</td>
                <td className="py-3 px-4 text-center">
                  <span className={team.gd > 0 ? "text-success" : team.gd < 0 ? "text-destructive" : "text-muted-foreground"}>
                    {team.gd > 0 ? `+${team.gd}` : team.gd}
                  </span>
                </td>
                <td className="py-3 px-4 text-center font-bold text-card-foreground">{team.points}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Full Table */}
      <div className="px-5 py-3 bg-muted/30 text-center border-t border-border">
        <a
          href="/competitions"
          className="text-sm font-medium text-primary hover:underline"
        >
          View full table →
        </a>
      </div>
    </section>
  );
}
