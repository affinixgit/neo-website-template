import localFont from "next/font/local";
import "./globals.css";
import "./custom.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Font Awesome CSS
import "../lib/fontawesome"; // Your Font Awesome configuration
import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "@/components/Header/main-header";
import Footer from "@/components/Footer/main-footer";
import WhatsApp from "@/components/WhatsApp/WhatsApp";
import config from "@/config/config";
import CookieConsent from "@/components/CookieConsent";
import NextTopLoader from "nextjs-toploader";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Async function to fetch header data
async function fetchHeaderData() {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", config.subscriptionId);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(`${config.apiBaseUrl}/website/nav`, requestOptions);
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  return await response.json();
}

export default async function RootLayout({ children }) {
  const headerData = await fetchHeaderData(); // Fetch header data dynamically

  const primaryColor = headerData.businessInfo?.headerColour || "#007bff";
  const secondaryColor = headerData.businessInfo.colors?.secondaryColor || "#6c757d";

  return (
    <html
      lang="en"
      style={{
        "--primary": primaryColor,
        "--secondary": secondaryColor,
      }}

      
    >
       <head>
        {/* Google Tag Manager Script for Head */}
        <script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P945FSGH');`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         {/* Google Tag Manager noscript for Body */}
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P945FSGH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextTopLoader color={primaryColor} />
        <MainHeader headerData={headerData} />
        <main>{children}</main>
        <WhatsApp />
        <CookieConsent />
        <Footer footerData={headerData} />
       
       
      </body>
    </html>
  );
}
