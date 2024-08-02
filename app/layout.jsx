import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Nextgen Manager",
  description: "A tool for the discerning manager",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  );
};

export default RootLayout;
