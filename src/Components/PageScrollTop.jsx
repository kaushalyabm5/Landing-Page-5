import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // පිටුවක් මාරු වෙන හැම වෙලාවකම Auto උඩටම Scroll කරනවා
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; 
};

export default PageScrollTop;