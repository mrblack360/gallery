import "@styles/globals.css";

export const metadata = {
  title: "Gallery",
  description: "Gallery",
};
const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
