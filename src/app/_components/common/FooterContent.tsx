import { Mail, Phone } from "lucide-react";
import { PageTitleMovieZ } from "./PageTitleMovieZ";

export const FooterContent = () => {
  return (
    <footer className="w-full mt-auto bg-[#4338CA] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center md:text-left">
            <PageTitleMovieZ />
            <p className="mt-3 text-sm opacity-90">© 2025 Movie Z. All rights reserved.</p>
          </div>

          <div className="hidden lg:block"></div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3 sm:mb-4">Contact Information</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <span className="text-sm">support@movie.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-sm">+976 12345678</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-3 sm:mb-4">Follow Us</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 lg:gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity text-sm px-1">
                Facebook
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity text-sm px-1">
                Instagram
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity text-sm px-1">
                Twitter
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity text-sm px-1">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
