import Hero from "@/components/Hero/Hero";
import Review from "@/components/HomeSection/Review/Review";
import Services from "@/components/HomeSection/Services/Services";

const HomePage = () => {
  return (
    <main>
      <Hero/>
      <Services/>
      <Review/>
    </main>
  );
};

export default HomePage;