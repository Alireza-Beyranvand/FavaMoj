import localFont from 'next/font/local';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/src/utils/theme";
import Supports from '@/src/helpers/Supports/Supports';
import ScrollTop from '@/src/common/FabsScroll/ScrollTop';
import { Box } from '@mui/material';

import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Navbar from "@/src/components/navbar/navbarContainer/Navbar";
import Footer from '@/src/components/footer/Footer';
import ScrollBottom from "@/src/common/FabsScroll/ScrollBottom";
import selectLanguages from './setLanguage';
import { Toaster } from 'react-hot-toast';

// themeColor url
export const viewport = {
  themeColor: "#ec8d10",
}

// metaData
export const metadata = {
  title: {
    default: "فاواموج",
    template: "فاواموج | %s",
  },
  description: "شرکت فاو موج",
  icons: {
    url: "/favicon.ico"
  }
};

// locale font
const vazir = localFont({
  src: "/font/Vazir.ttf",
  display: "swap"
})


// NextAuth sessionProviser

import NextAuthProvider from './NextAuthProvider';


export default async function RootLayout({ children, params }) {
  // diagnosis language by params.Languages
  const Languages = params.Languages;
  // select and send package (Language) to componens as props
  const Language = await selectLanguages(params.Languages);

  return (
    <html lang={Languages} dir={Languages === "en-us" ? "rtl" : "ltr"}>
      <body className={vazir.className}>
        <NextAuthProvider>
          <ThemeProvider theme={theme}>
            <Toaster
              position="bottom-rigth"
              reverseOrder={false}
            />
            <ScrollTop />
            <Navbar Language={Language} dict={Languages} />
            <Box sx={{ mt: "20vh" }}>
              {children}
            </Box>
            <Footer Language={Language} dict={Languages} />
            <Supports Language={Language} dict={Languages} />
            <ScrollBottom />
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
