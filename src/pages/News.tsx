import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import newsCelebration from "@/assets/news_celebration.jpg";
import newsFootball from "@/assets/news_football.jpg";
import newsCoach from "@/assets/news_coach.jpg";

const newsArticles = [
  {
    id: "1",
    title: "Flames Squad Announced for AFCON Qualifiers",
    excerpt: "Coach Meck Mwase has named a strong 25-man squad for the upcoming AFCON 2025 qualifiers against Tunisia and Namibia. The squad features experienced players and exciting young talent.",
    image: newsCoach,
    category: "National Team",
    author: "John Banda",
    date: "January 16, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "2",
    title: "Nyasa Big Bullets Extend Unbeaten Run to 12 Games",
    excerpt: "The defending champions continued their dominant form with a 3-1 victory over Silver Strikers at Kamuzu Stadium.",
    image: newsCelebration,
    category: "Super League",
    author: "Mary Chisale",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Transfer Window: Top Signings This Season",
    excerpt: "A look at the most impactful transfers in the TNM Super League as clubs strengthen their squads for the title race.",
    image: newsFootball,
    category: "Transfers",
    author: "Peter Mwanza",
    date: "January 14, 2026",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "Be Forward Wanderers Sign New Striker",
    excerpt: "The nomads complete the signing of talented forward from Zambian Premier League club.",
    image: newsCelebration,
    category: "Transfers",
    author: "Grace Phiri",
    date: "January 13, 2026",
    readTime: "3 min read",
  },
  {
    id: "5",
    title: "Youth Development: Malawi U-20 Camp Begins",
    excerpt: "The junior Flames gather for intensive training ahead of COSAFA Youth Championship.",
    image: newsCoach,
    category: "Youth",
    author: "James Mtonga",
    date: "January 12, 2026",
    readTime: "4 min read",
  },
  {
    id: "6",
    title: "Stadium Renovations Update: Bingu National Stadium",
    excerpt: "Latest progress on the major infrastructure upgrade at the national stadium in Lilongwe.",
    image: newsFootball,
    category: "Infrastructure",
    author: "Lucy Tembo",
    date: "January 11, 2026",
    readTime: "5 min read",
  },
];

const News = () => {
  const featuredArticle = newsArticles.find((a) => a.featured);
  const otherArticles = newsArticles.filter((a) => !a.featured);

  return (
    <MainLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
            News
          </h1>
          <p className="text-muted-foreground text-lg">
            Latest updates from Malawian and African football
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 bg-card rounded-2xl border border-border overflow-hidden shadow-lg cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full hero-gradient text-white text-sm font-medium">
                  {featuredArticle.category}
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{featuredArticle.author}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm card-hover cursor-pointer group"
            >
              <div className="relative aspect-[16/10]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium">
                  {article.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium">{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default News;
