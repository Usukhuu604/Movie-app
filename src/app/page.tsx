import { FooterContent } from "./_components/footer/FooterContent";
import { MainPage } from "./_components/main/MainPage";

const page = () => {
  return (
    <div className="h-screen">
      <MainPage />
      <FooterContent />
    </div>
  );
};

export default page;
