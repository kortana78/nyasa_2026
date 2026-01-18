import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Ticket, Calendar, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stadium.jpg";

const upcomingMatches = [
  {
    id: "1",
    homeTeam: "Malawi",
    awayTeam: "Tunisia",
    date: "Saturday, January 18, 2026",
    time: "18:00 CAT",
    venue: "Bingu National Stadium, Lilongwe",
    competition: "AFCON Qualifiers",
    priceFrom: "MWK 5,000",
    availability: "Limited",
    featured: true,
  },
  {
    id: "2",
    homeTeam: "Nyasa Big Bullets",
    awayTeam: "Be Forward Wanderers",
    date: "Sunday, January 19, 2026",
    time: "15:30 CAT",
    venue: "Kamuzu Stadium, Blantyre",
    competition: "TNM Super League",
    priceFrom: "MWK 2,000",
    availability: "Available",
  },
  {
    id: "3",
    homeTeam: "Silver Strikers",
    awayTeam: "Mighty Mukuru Wanderers",
    date: "Sunday, January 19, 2026",
    time: "15:30 CAT",
    venue: "Silver Stadium, Lilongwe",
    competition: "TNM Super League",
    priceFrom: "MWK 1,500",
    availability: "Available",
  },
  {
    id: "4",
    homeTeam: "Malawi",
    awayTeam: "Namibia",
    date: "Tuesday, January 21, 2026",
    time: "18:00 CAT",
    venue: "Bingu National Stadium, Lilongwe",
    competition: "AFCON Qualifiers",
    priceFrom: "MWK 5,000",
    availability: "Selling Fast",
    featured: true,
  },
];

const Tickets = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-white text-sm font-semibold mb-6 border border-accent/30">
              <Ticket className="w-4 h-4" />
              <span>E-TICKETING</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Buy Match Tickets
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Secure your seat at the stadium. Fast, easy, and secure online booking.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="p-6 lg:p-8">
        {/* Upcoming Matches */}
        <section>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">
            Available Tickets
          </h2>
          <div className="space-y-6">
            {upcomingMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl border overflow-hidden shadow-sm ${
                  match.featured ? "border-primary/30" : "border-border"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
                  {/* Match Info */}
                  <div className="lg:col-span-2">
                    <span className="text-sm font-medium text-primary mb-2 block">
                      {match.competition}
                    </span>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-display font-bold text-xl text-card-foreground">
                        {match.homeTeam}
                      </span>
                      <span className="text-muted-foreground font-medium">vs</span>
                      <span className="font-display font-bold text-xl text-card-foreground">
                        {match.awayTeam}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {match.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {match.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <MapPin className="w-4 h-4" />
                      {match.venue}
                    </div>
                  </div>

                  {/* Price & Availability */}
                  <div className="flex flex-col justify-center">
                    <span className="text-sm text-muted-foreground">From</span>
                    <span className="font-display font-bold text-2xl text-card-foreground">
                      {match.priceFrom}
                    </span>
                    <span className={`text-sm font-medium ${
                      match.availability === "Limited" || match.availability === "Selling Fast"
                        ? "text-warning"
                        : "text-success"
                    }`}>
                      {match.availability}
                    </span>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-end">
                    <Button
                      size="lg"
                      className={match.featured ? "hero-gradient text-white" : ""}
                      variant={match.featured ? "default" : "outline"}
                    >
                      <Ticket className="w-5 h-5 mr-2" />
                      Buy Tickets
                    </Button>
                  </div>
                </div>

                {match.featured && (
                  <div className="px-6 py-3 hero-gradient flex items-center justify-center gap-2">
                    <Users className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">
                      High demand match - Book early!
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Tickets;
