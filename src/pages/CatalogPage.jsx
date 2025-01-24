import { useEffect, useState } from "react";
import CatalogGoods from "../components/CatalogGoods";
import WebFilter from "../components/WebFilter";

const CatalogPage = () => {
  const [webFilter, setWebFilter] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setWebFilter(true);
      } else {
        setWebFilter(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center xl:flex-row-reverse">
      <CatalogGoods />
      {webFilter && <WebFilter />}
    </div>
  );
};

export default CatalogPage;
