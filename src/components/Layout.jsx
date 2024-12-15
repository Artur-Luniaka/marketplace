import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
