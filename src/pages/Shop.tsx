import { MainLayout } from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "1",
    name: "Flames Home Jersey 2025/26",
    price: "MWK 45,000",
    originalPrice: "MWK 55,000",
    rating: 4.8,
    reviews: 124,
    category: "Jerseys",
    isOnSale: true,
  },
  {
    id: "2",
    name: "Nyasa Big Bullets Away Kit",
    price: "MWK 38,000",
    rating: 4.6,
    reviews: 89,
    category: "Jerseys",
  },
  {
    id: "3",
    name: "Official Match Ball",
    price: "MWK 25,000",
    rating: 4.9,
    reviews: 256,
    category: "Equipment",
  },
  {
    id: "4",
    name: "Super League Scarf",
    price: "MWK 8,000",
    rating: 4.5,
    reviews: 67,
    category: "Accessories",
  },
  {
    id: "5",
    name: "Training Jacket",
    price: "MWK 32,000",
    rating: 4.7,
    reviews: 45,
    category: "Apparel",
  },
  {
    id: "6",
    name: "Supporter Cap",
    price: "MWK 6,500",
    rating: 4.4,
    reviews: 112,
    category: "Accessories",
  },
];

const Shop = () => {
  return (
    <MainLayout>
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
            Official Shop
          </h1>
          <p className="text-muted-foreground text-lg">
            Gear up with official Malawian football merchandise
          </p>
        </div>

        {/* Coming Soon Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 bg-card rounded-2xl border border-border p-8 text-center hero-gradient"
        >
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-white/80" />
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            Full Shop Coming Soon
          </h2>
          <p className="text-white/80 max-w-md mx-auto">
            We're building an amazing shopping experience. Browse our preview below!
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm card-hover cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="aspect-square bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground/30" />
                </div>
                {product.isOnSale && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-destructive text-white text-xs font-semibold flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    SALE
                  </div>
                )}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display font-bold text-lg text-card-foreground">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <Button variant="outline" className="w-full">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
