import PortfolioSection from '@/components/portfolioSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">William Anderson</h1>
          <p className="mt-4 text-xl font-semibold">Software Portfolio</p>
        </div>
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>
    </div>
  );
}