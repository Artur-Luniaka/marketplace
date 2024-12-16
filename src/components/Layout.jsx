import { Suspense } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-3 p-2.5 flex justify-between">
        <Navigation />
      </header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
