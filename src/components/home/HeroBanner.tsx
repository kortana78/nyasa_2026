import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stadium.jpg";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-accent/70" />
      </div>

      {/* Content */}
      <div className="relative px-6 py-8 lg:px-8 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          {/* Left Content */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary-foreground mb-2">
                Stream Football Live!
              </h2>
              <p className="text-primary-foreground/90 text-sm lg:text-base max-w-lg">
                Watch live Malawian football matches. Click here to see upcoming games and join the stream.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/live">
                Go to Live Games
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
