import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { Play, Clock, Eye } from "lucide-react";
import newsCelebration from "@/assets/news-celebration.jpg";
import newsFootball from "@/assets/news-football.jpg";
import newsCoach from "@/assets/news-coach.jpg";

const highlights = [
  {
    id: "1",
    title: "Nyasa Big Bullets 3-1 Silver Strikers | All Goals & Highlights",
    duration: "8:45",
    views: "45.2K",
    thumbnail: newsCelebration,
    competition: "TNM Super League",
    date: "2 hours ago",
  },
  {
    id: "2",
    title: "Malawi 2-0 Mozambique | COSAFA Cup Semi-Final Highlights",
    duration: "12:30",
    views: "128K",
    thumbnail: newsFootball,
    competition: "COSAFA Cup",
    date: "1 day ago",
  },
  {
    id: "3",
    title: "Top 10 Goals of the Week | TNM Super League Matchday 17",
    duration: "5:20",
    views: "32.8K",
    thumbnail: newsCoach,
    competition: "Super League",
    date: "3 days ago",
  },
  {
    id: "4",
    title: "Be Forward Wanderers 2-2 Kamuzu Barracks | Full Highlights",
    duration: "9:15",
    views: "28.5K",
    thumbnail: newsCelebration,
    competition: "TNM Super League",
    date: "4 days ago",
  },
  {
    id: "5",
    title: "Flames Training Camp | Behind the Scenes",
    duration: "15:00",
    views: "18.2K",
    thumbnail: newsCoach,
    competition: "National Team",
    date: "5 days ago",
  },
  {
    id: "6",
    title: "Goal of the Month | December 2025",
    duration: "3:45",
    views: "52.1K",
    thumbnail: newsFootball,
    competition: "Super League",
    date: "1 week ago",
  },
];

const Highlights = () => {
  return (
    <MainLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
            Highlights
          </h1>
          <p className="text-muted-foreground text-lg">
            Watch the best moments from Malawian and African football
          </p>
        </div>

        {/* Featured Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-card rounded-2xl border border-border overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <img
                src={highlights[0].thumbnail}
                alt={highlights[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full hero-gradient flex items-center justify-center shadow-hero group hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </button>
              </div>
              <div className="absolute bottom-4 right-4 px-2 py-1 rounded bg-foreground/80 text-white text-sm font-medium">
                {highlights[0].duration}
              </div>
            </div>
            <div className="p-6 lg:p-8 flex flex-col justify-center">
              <span className="text-sm font-medium text-primary mb-2">{highlights[0].competition}</span>
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground mb-4">
                {highlights[0].title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {highlights[0].views} views
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {highlights[0].date}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.slice(1).map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm card-hover cursor-pointer group"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-foreground/80 text-white text-xs font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-primary">{video.competition}</span>
                <h3 className="font-display font-semibold text-card-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {video.views}
                  </span>
                  <span>{video.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Highlights;
