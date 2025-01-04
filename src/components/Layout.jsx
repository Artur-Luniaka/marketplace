import { Suspense } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto py-1 bg-1 text-1 flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1 flex flex-col w-full justify-center">
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
