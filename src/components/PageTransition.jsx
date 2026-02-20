import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [display, setDisplay] = useState(children);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // start fade out
    setFade(false);

    const timeout = setTimeout(() => {
      // change page content
      setDisplay(children);
      // fade in
      setFade(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [location, children]);

  return (
    <div
      className={`transition-all duration-300 ${
        fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {display}
    </div>
  );
}
