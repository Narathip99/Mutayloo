import React from "react";

import { Instagram } from "lucide-react";
import hastag1 from "@/assets/images/hastag-1.jpg";
import hastag2 from "@/assets/images/hastag-2.jpg";
import hastag3 from "@/assets/images/hastag-3.jpg";
import hastag4 from "@/assets/images/hastag-4.jpg";

const Hastag: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container flex flex-col">
        <h2 className="text-center leading-tight">#mutayloojewelry</h2>
        <p className="text-center text-base-800">
          Show off your style! Share your photos wearing our jewelry with
          <span className="font-semibold"> #mutayloojewelry</span> and get
          featured.
        </p>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={hastag1} alt="" className="w-full" />
            <div className="flex justify-center items-center gap-2">
              <Instagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img src={hastag2} alt="" className="w-full" />
            <div className="flex justify-center items-center gap-2">
              <Instagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img src={hastag3} alt="" className="w-full" />
            <div className="flex justify-center items-center gap-2">
              <Instagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
          <div>
            <img src={hastag4} alt="" className="w-full" />
            <div className="flex justify-center items-center gap-2">
              <Instagram className="w-6 h-6" />
              <p className="my-4">@ABCDE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hastag;
