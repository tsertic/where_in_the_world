import { CountriesList } from "@/components/main/CountriesList/CountriesList";
import { Filter } from "@/components/main/Filter/Filter";

const Home = async () => {
  return (
    <main className=" text-center">
      <section className="mt-[24px] mb-[32px] lg:my-[48px]">
        <Filter />
      </section>
      <section>
        <CountriesList />
      </section>
    </main>
  );
};

export default Home;
