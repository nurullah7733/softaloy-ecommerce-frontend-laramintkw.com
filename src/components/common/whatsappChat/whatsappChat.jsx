import React from "react";

const WhatsappChat = () => {
  return (
    <>
      <a
        aria-label="Chat on WhatsApp"
        target="_blank"
        href="https://wa.me/+96550073108?text=Hi"
        style={{
          position: "fixed",
          padding: "5px 5px",

          fontSize: "20px",
          bottom: "30px",
          right: "-3px",

          color: "#fff",
          textAlign: "center",
          zIndex: 100,
        }}
      >
        <img alt="Chat on WhatsApp" src="/WhatsAppButtonGreenMedium.svg" />
      </a>
    </>
  );
};

export default WhatsappChat;
