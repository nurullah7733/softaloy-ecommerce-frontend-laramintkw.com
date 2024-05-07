import React, { useEffect, useRef, useState } from "react";

const GoogleTranslate = () => {
  const googleTranslateRef = useRef(null);
  useEffect(() => {
    let intervalid;

    const checkGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        clearInterval(intervalid);
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            // includedLanguages: "en,ms,ta,zh-CN",
            includedLanguages: "en,ar,hi", // include this for selected languages
            autoDisplay: false,
            // defaultLanguage: "en",
            // multilanguagePage: true,
          },
          googleTranslateRef.current
        );
      }
    };
    intervalid = setInterval(checkGoogleTranslate, 100);

    // const selectElement = document.querySelector(".goog-te-combo");
    // if (selectElement) {
    //   selectElement.value = "en"; // Set default language to English
    //   selectElement.dispatchEvent(new Event("change")); // Trigger change event to ensure proper initialization
    // }
  }, []);

  return (
    <>
      <div ref={googleTranslateRef}></div>
    </>
  );
};
export default GoogleTranslate;
