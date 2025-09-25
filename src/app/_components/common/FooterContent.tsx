import { Mail, Phone } from "lucide-react";
import { PageTitleMovieZ } from "./PageTitleMovieZ";

export const FooterContent = () => {
  return (
    <footer className="w-full mt-12 p-6 bg-[#4338CA] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 md:col-span-1 text-center md:text-left">
            <PageTitleMovieZ />
            <p className="mt-4 text-sm opacity-90">© 2025 Movie Z. All rights reserved.</p>
          </div>

          <div className="hidden md:block"></div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} />
                <span className="text-sm">support@movie.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} />
                <span className="text-sm">+976 12345678</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                Facebook
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Instagram
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Twitter
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
