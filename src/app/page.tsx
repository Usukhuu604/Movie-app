import axios from "axios";
import { FooterContent } from "@/app/_components/footer/FooterContent";
import { HeaderContent } from "@/app/_components/header/HeaderContent";
import { MainPage } from "@/app/_components/MainPage";

import { axiosInstance } from "../lib/axios-instance";

const getPopularMovies = async () => {
  const { data } = await axiosInstance("/movie/popular?language=en-US&page=1");
  return data;
};

const page = async () => {
  const popular = await getPopularMovies();

  console.log("dfbsgsvaf", popular);

  return (
    <div className="h-screen">
      <MainPage />

      {/* <FooterContent /> */}
    </div>
  );
};

export default page;
