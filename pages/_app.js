import "@/node_modules/react-modal-video/css/modal-video.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";

import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { useEffect, useState, createContext, useContext } from "react";

export const AppContext = createContext({ menuIsOpen: false });

function MyApp({ Component, pageProps }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <AppContext.Provider value={{ menuIsOpen, setMenuIsOpen }}>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <div className="preloader">
          <span className="loader"></span>
        </div>
      )}
    </AppContext.Provider>
  );
}

export default MyApp;
