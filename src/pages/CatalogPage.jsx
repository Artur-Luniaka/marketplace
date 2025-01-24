import CatalogGoods from "../components/CatalogGoods";
import WebFilter from "../components/WebFilter";

const CatalogPage = () => {
  return (
    <div className="flex flex-row-reverse">
      <CatalogGoods />
      <WebFilter />
    </div>
  );
};

export default CatalogPage;
