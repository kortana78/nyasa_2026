import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Trophy,
  Play,
  Video,
  Newspaper,
  Ticket,
  ShoppingBag,
  Info,
  Mail,
  LogIn,
  UserPlus,
  DollarSign,
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const mainNav: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Trophy, label: "Competitions", href: "/competitions" },
  { icon: Play, label: "Live Matches", href: "/live" },
  { icon: Video, label: "Highlights", href: "/highlights" },
  { icon: Newspaper, label: "News", href: "/news" },
  { icon: Ticket, label: "Tickets", href: "/tickets" },
  { icon: ShoppingBag, label: "Shop", href: "/shop" },
];

const secondaryNav: NavItem[] = [
  { icon: LogIn, label: "Sign in", href: "/auth" },
  { icon: UserPlus, label: "Register", href: "/auth?mode=register" },
  { icon: DollarSign, label: "Pricing", href: "/pricing" },
];

export function AppSidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsCollapsed(true)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-sidebar text-sidebar-foreground shadow-lg"
      >
        {isCollapsed ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 0 : 280,
          x: isCollapsed ? -280 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          "fixed left-0 top-0 h-screen z-50 sidebar-gradient border-r border-sidebar-border",
          "flex flex-col overflow-hidden",
          "lg:relative lg:translate-x-0",
          isCollapsed && "lg:w-0"
        )}
      >
        <div className="flex flex-col h-full w-[280px]">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center shadow-hero">
                <Play className="w-5 h-5 text-accent-foreground fill-current" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-sidebar-primary-foreground">
                  Nyasa Sport
                </h1>
                <p className="text-xs text-sidebar-muted">Live Football</p>
              </div>
            </Link>
          </div>

          {/* Search */}
          <div className="px-4 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-muted" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-sidebar-accent text-sidebar-foreground placeholder:text-sidebar-muted text-sm border border-sidebar-border focus:border-sidebar-primary focus:outline-none focus:ring-1 focus:ring-sidebar-primary transition-all"
              />
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 px-3 py-2 overflow-y-auto scrollbar-hide">
            <div className="space-y-1">
              {mainNav.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group",
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 transition-transform group-hover:scale-110",
                        active && "drop-shadow-lg"
                      )}
                    />
                    <span>{item.label}</span>
                    {active && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Secondary Navigation */}
          <div className="px-3 py-4 border-t border-sidebar-border">
            <div className="space-y-1">
              {secondaryNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-sidebar-muted text-center">
              © 2026 Nyasa Sport. All rights reserved.
            </p>
          </div>
        </div>
      </motion.aside>

      {/* Desktop Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={cn(
          "hidden lg:flex fixed z-50 top-6 items-center justify-center",
          "w-8 h-8 rounded-full bg-card border border-border shadow-md",
          "text-muted-foreground hover:text-foreground transition-all",
          isCollapsed ? "left-4" : "left-[268px]"
        )}
      >
        <ChevronRight
          className={cn(
            "w-4 h-4 transition-transform",
            !isCollapsed && "rotate-180"
          )}
        />
      </button>
    </>
  );
}
