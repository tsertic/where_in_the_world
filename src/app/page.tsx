import { CountriesList } from "@/components/main/CountriesList/CountriesList";

const Home = async () => {
  return (
    <main className=" text-center">
      <section>FilterForm</section>
      <section>
        <CountriesList />
      </section>
    </main>
  );
};

export default Home;
