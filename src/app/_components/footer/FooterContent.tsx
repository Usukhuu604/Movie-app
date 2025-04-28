import React from "react";
import { Mail, Phone, Film } from "lucide-react";
import { PageTitleMovieZ } from "../common/PageTitleMovieZ";

export const FooterContent = () => {
  return (
    <div className="grid grid-cols-4 gap-3 w-full text-center text-white bg-[#4338CA] relative bottom-0 mt-12">
      <div className="col-start-1 ">
        <PageTitleMovieZ />
        <p>© 2025 Movie Z. All rights reserved.</p>
      </div>

      <div className="col-start-3">
        <p>Contact information</p>
        <ul>
          <li className="flex">
            <div>
              <Mail />
              Email
            </div>
            <p>support@movie.com</p>
          </li>
          <li className="flex">
            <p>
              <Phone />
              Phone
            </p>
            <p>+976 12345678</p>
          </li>
        </ul>
      </div>

      <div className="col-start-4">
        <p>Follow us</p>
        <p>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
        </p>
      </div>
    </div>
  );
};
