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

// NextAuth sessionProviser
import NextAuthProvider from './NextAuthProvider';

// store provider
import { StoreProvider } from '@/store/StoreProvider';
import { cookies } from 'next/headers';
import { store } from '@/store/store';
import { useAppDispatch } from '@/store/hooks/hooks';
import { LanguageProvider } from './LanguageProvider';


// themeColor url
export const viewport = {
  themeColor: "#ec8d10",
}


export const metadata = {
  applicationName: "FavaMojApp",
  title: {
    template: "%s",
  },
  description: "pwa app",
  manifest: "/manifest.json"
};

// locale font
const vazir = localFont({
  src: "/font/Vazir.ttf",
  display: "swap"
})



export default async function RootLayout({ children }) {

  // set Language by cookie
  const cookie = cookies();
  const LanguageCookie = cookie.get("Language")
  const lang = LanguageCookie ? LanguageCookie?.value : "fa"

  return (
    <StoreProvider>
      <html lang={lang} dir={lang === "en-us" ? "rtl" : "ltr"}>
        <body className={vazir.className}>
          <NextAuthProvider>
            <ThemeProvider theme={theme}>
              <Toaster
                position="bottom-rigth"
                reverseOrder={false} />
              <LanguageProvider lang={lang}>
                <ScrollTop />
                <Navbar />
                <Box sx={{ mt: "20vh" }}>
                  {children}
                </Box>
                <Footer />
                <Supports />
              </LanguageProvider>
              <ScrollBottom />
            </ThemeProvider>
          </NextAuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
