import Hero from "@/components/Hero/Hero";
import Review from "@/components/HomeSection/Review/Review";
import Services from "@/components/HomeSection/Services/Services";
import Preview from "@/components/sohag/Preview";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Review />
      <Preview></Preview>
    </main>
  );
};

export default HomePage;
