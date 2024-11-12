import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { Providers } from "../components/Provider";
import ToastComponent from "../components/toaster/ToastComponent";

export const metadata = {
  title: "Communication solutions",
  description: "Individual and corporate communication solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <ToastComponent />
        </Providers>
      </body>
    </html>
  );
}

// import "@styles/globals.css";

// import Nav from "@components/layout/Navbar";
// import Provider from "@components/Provider";

// export const metadata = {
//   title: "Support Women Aid (SWA)",
//   description: "South Sudan National Non Government Organization",
// };

// const RootLayout = ({ children }) => (
//   <html lang="en">
//     <body>
//       <Provider>
//         <div className="main">
//           <div className="gradient" />
//         </div>

//         <main className="app">
//           <Nav />
//           {children}
//         </main>
//       </Provider>
//     </body>
//   </html>
// );

// export default RootLayout;
