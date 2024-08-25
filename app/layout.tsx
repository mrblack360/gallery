import Nav from "@components/Nav";
import Provider from "@components/Provider";

import "@styles/globals.css";
import { Suspense } from "react";
import Providers from "./store/provider";

export const metadata = {
  title: "Gallery",
  description: "Maswi's Next Js playground, gallery",
};
const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Providers>
            <div className="main">
              <div className="gradient"></div>
            </div>

            <main className="app">
              <Nav />
              <Suspense>{children}</Suspense>
            </main>
          </Providers>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
