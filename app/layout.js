import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Font Awesome CSS
import '../lib/fontawesome'; // Your Font Awesome configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "@/components/Header/main-header";



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
  redirect: "follow"
};

const response = await fetch("http://localhost:3006/api/v1/navMenu", requestOptions);

if (!response.ok) {
  throw new Error('Failed to fetch services');
}

const headerData = await response.json();
export const metadata = {
  title: headerData.businessInfo.businessName,
  description: headerData.businessInfo.businessDescription,
};

// Async function to fetch menu data from your server or API
// async function getMenuData() {
//   const response = await fetch('https://your-api-url.com/menu'); // Replace with your API endpoint
//   if (!response.ok) {
//     throw new Error('Failed to fetch menu data');
//   }
//   return response.json();
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <MainHeader headerData ={headerData}></MainHeader>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
