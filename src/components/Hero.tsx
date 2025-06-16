export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/30 dark:from-primary/5 dark:to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Tested Product Recommendations
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Detailed reviews and comparisons of the best products available in
            the market.
          </p>
        </div>
      </div>

      {/* Abstract shapes for decoration */}
      <div className="hidden md:block absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/5 mix-blend-multiply dark:mix-blend-overlay"></div>
      <div className="hidden md:block absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 mix-blend-multiply dark:mix-blend-overlay"></div>
    </div>
  );
}
