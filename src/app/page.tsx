import axios from "axios";
import { FooterContent } from "@/components/FooterContent";
import { HeaderContent } from "@/components/HeaderContent";
import { MainPage } from "@/components/MainPage";

const testingArr = new Array(1000);
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
      <FooterContent />
    </div>
  );
};

export default page;
