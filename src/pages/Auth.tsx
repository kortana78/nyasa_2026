import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { LogIn, UserPlus, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isRegister = searchParams.get("mode") === "register";
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(!isRegister);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-100px)] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
            {/* Header */}
            <div className="hero-gradient p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                {isLogin ? (
                  <LogIn className="w-8 h-8 text-white" />
                ) : (
                  <UserPlus className="w-8 h-8 text-white" />
                )}
              </div>
              <h1 className="text-2xl font-display font-bold text-white">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-white/80 text-sm mt-1">
                {isLogin
                  ? "Sign in to access your account"
                  : "Join Nyasa Sport today"}
              </p>
            </div>

            {/* Form */}
            <div className="p-6 space-y-4">
              {!isLogin && (
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Full Name
                  </label>
                  <Input placeholder="Enter your name" className="h-12" />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-12 pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <Button className="w-full h-12 hero-gradient text-white font-semibold" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-primary font-medium hover:underline"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Auth;
