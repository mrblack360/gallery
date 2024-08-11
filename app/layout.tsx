import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Gallery",
  description: "Gallery",
};
const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            <Suspense>{children}</Suspense>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
