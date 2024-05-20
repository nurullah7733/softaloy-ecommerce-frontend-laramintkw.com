import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Its use for react-router-dom v6 use Link to go to another page then scroll to bottom thats why use this hook

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
