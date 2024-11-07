import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import '../lib/fontawesome'; // Your Font Awesome configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "@/components/Header/main-header";
import Footer from "@/components/Footer/Footer";

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

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const response = await fetch("http://localhost:3006/api/v1/website/nav", requestOptions);

if (!response.ok) {
  throw new Error("Failed to fetch services");
}

const headerData = await response.json();

export const metadata = {
  title: headerData.businessInfo.businessName,
  description: headerData.businessInfo.metaDescription,
  keywords: headerData.businessInfo.metaKeywords,
  ogTitle: headerData.businessInfo.businessName,
  alternates: {
    canonical:headerData.businessInfo.websiteUrl ,
},
};


export default function RootLayout({ children }) {
  const primaryColor = headerData.businessInfo.colors?.headerColour || "#007bff";
  const secondaryColor = headerData.businessInfo.colors?.headerColour || "#6c757d";

  return (
    <html lang="en"  style={{
      "--primary": primaryColor,
      "--secondary": secondaryColor,
    }}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainHeader headerData={headerData} />
        <main>{children}</main>
        <Footer footerData={headerData} /> {/* Footer with data */}
      </body>
    </html>
  );
}
