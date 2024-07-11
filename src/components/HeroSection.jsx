const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.png')" }}>
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold">Welcome to Memecoin on Solana</h1>
        <p className="mt-4 text-xl">The funniest and most decentralized memecoin on Solana.</p>
        <a href="https://solana.com" className="mt-6 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg">Buy Now</a>
      </div>
    </section>
  );
};

export default HeroSection;