import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = ["Breaking", "Recent", "Upcoming"] as const;
type TabType = typeof tabs[number];

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  time: string;
  isLive?: boolean;
}

interface NewsSectionProps {
  breakingNews: NewsItem[];
  recentNews: NewsItem[];
  upcomingNews: NewsItem[];
}

export function NewsSection({ breakingNews, recentNews, upcomingNews }: NewsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("Breaking");

  const getNewsForTab = () => {
    switch (activeTab) {
      case "Breaking":
        return breakingNews;
      case "Recent":
        return recentNews;
      case "Upcoming":
        return upcomingNews;
      default:
        return breakingNews;
    }
  };

  const currentNews = getNewsForTab();

  return (
    <section className="py-8 px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-1">
          Nyasa Sport
        </h2>
        <p className="text-muted-foreground">
          Latest Malawian football news, analysis and updates.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-all relative",
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentNews.map((item, index) => (
          <NewsCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-sm border border-border card-hover cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        
        {/* Live Badge */}
        {item.isLive && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full live-gradient text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white live-pulse" />
            LIVE
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{item.time}</span>
          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Read more →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
