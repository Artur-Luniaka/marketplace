import { Suspense } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-1 bg-1">
      <header className="bg-3 p-3.5 flex justify-between rounded-lg">
        <Navigation />
      </header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
