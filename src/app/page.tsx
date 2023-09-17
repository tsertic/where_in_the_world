import { getAllCountries } from "@/api/countries";
import { CountriesList } from "@/components/main/CountriesList/CountriesList";
import {
  fetchCountries,
  selectAllCountries,
} from "@/redux/slices/countries.slice";
import { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

/* async function fetchInitialData() {
  const dispatch = useDispatch<any>();
  try {
    await dispatch(fetchCountries());
  } catch (error) {
    console.log(error);
  }
} */

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
