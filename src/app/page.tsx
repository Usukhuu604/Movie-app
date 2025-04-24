import axios from "axios";
import { FooterContent } from "@/app/_components/footer/FooterContent";
import { HeaderContent } from "@/app/_components/header/HeaderContent";
import { MainPage } from "@/app/_components/MainPage";

import { FetchData } from "./_components/FetchData";

const page = () => {
  // useEffect(() => {
  //     const movieApiKey = process.env.API_KEY;
  //     const movieApiToken = process.env.API_TOKEN

  //     const response = async () => {
  //       try {
  //         const { data } = await axios(
  //           `https://`
  //         );
  //         (data);
  //         console.log(data);
  //       } catch (error) {
  //         console.error("api weatherKey error: ", );
  //       }
  //     };
  //     response();
  //   }, []);

  return (
    <div className="h-screen">
      <HeaderContent />
      <MainPage />
      <FetchData />

      {/* <FooterContent /> */}
    </div>
  );
};

export default page;
