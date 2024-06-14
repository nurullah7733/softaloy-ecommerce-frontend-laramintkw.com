import React, { useEffect, useRef } from "react";

const GoogleTranslate = () => {
  const googleTranslateRef = useRef(null);

  useEffect(() => {
    // Function to dynamically load the Google Translate script
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js";
      script.async = true;
      document.body.appendChild(script);
    };

    // Function to initialize the Google Translate element
    const initializeGoogleTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,ar,hi", // include this for selected languages
            autoDisplay: false,
          },
          googleTranslateRef.current
        );
      }
    };

    // Check if the script is already added, if not, add it
    if (!window.google || !window.google.translate) {
      addGoogleTranslateScript();
    }

    // Retry mechanism to ensure the script is fully loaded before initialization
    const intervalId = setInterval(() => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        initializeGoogleTranslate();
        clearInterval(intervalId);
      }
    }, 100);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <div ref={googleTranslateRef}></div>;
};

export default GoogleTranslate;
