const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">About Memecoin</h2>
        <p className="mt-4 text-lg">Memecoin is a fun and decentralized cryptocurrency on the Solana blockchain. Inspired by The Simpsons, it aims to bring humor and innovation to the crypto world.</p>
        <img src="/about-image.png" alt="About Memecoin" className="mx-auto object-cover w-full h-[400px] mt-6" />
      </div>
    </section>
  );
};

export default AboutSection;