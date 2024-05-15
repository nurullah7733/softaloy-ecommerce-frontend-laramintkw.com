import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-5xl lg:w-full px-4 py-10 mx-auto">
      <div>
        <h1 className="text-2xl uppercase text-center">Contact Us</h1>
      </div>
      {/* contact inof */}
      <div className="grid lg:grid-cols-1 grid-cols-2   justify-between gap-5  pt-10">
        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/contact/1.webp"
              alt=""
              className="min-w-[100px] min-h-[100px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-600 pb-1">
              Inaya Medical Center
            </h3>
            <p className="text-gray-600 font-semibold">
              Salmiya, Block 5, Street 1, Bldg. 17, Opposite Salmiya Police
              Station, Salmiya, Kuwait 22085
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/contact/2.webp"
              alt=""
              className="min-w-[100px] min-h-[100px] object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 font-semibold">
              Telephone No. : +965 60010797
            </p>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <img
              src="/contact/3.webp"
              alt=""
              className="min-w-[100px] min-h-[100px] object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600 font-semibold">
              Email : web@inaya.com.kw
            </p>
          </div>
        </div>
      </div>

      {/* location google map */}
      <div className="pt-10">
        <p className="text-gray-600 text-lg">Location Map</p>
        <iframe
          style={{ width: "100%" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13912.585869389919!2d48.0819737!3d29.336703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdac1abdeada632b9!2sInaya+Medical+Center!5e0!3m2!1sen!2skw!4v1552894444480"
          width="600"
          height="450"
          frameborder="0"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
