import { Suspense } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto py-1 bg-1 text-1">
      <header className="xs:items-center bg-3 p-3.5 flex justify-between rounded-lg mb-2.5">
        <Navigation />
      </header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
