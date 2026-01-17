import "@/app/_styles/globals.css";
import "leaflet/dist/leaflet.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { getAllCompanySettings, getLiveChatScript } from "./_lib/data-service";
import ClientLayout from "./ClientLayout";
import Providers from "./Providers";
import AOSWrapper from "./_components/AOSWrapper";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const metadata = {
  description: "Track your shipments in real-time and enjoy smooth delivery worldwide and beyond with Tesla Express Cargo.",
  keywords: ["Tesla-express-cargo", "tesla", "shipment", "port", "logistics", "shipping", "delivery", "cargo", "freight", "tracking"],
  openGraph: {
    title: "Tesla-Express-Cargo Logistics",
    description: "Reliable international shipping and real-time cargo tracking.",
    url: "https://tesla-express-cargo.com",
    siteName: "Tesla Express Cargo",
    images: [
      {
        url: "/tesla-express-cargo-favicon.png",
        width: 1200,
        height: 630,
        alt: "Tesla Express Cargo preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/tesla-express-cargo-favicon.png",
    apple: "/tesla-express-cargo-favicon.png",
  },
};

export default async function RootLayout({ children }) {
  const allSettings = await getAllCompanySettings();

  const liveChatScript = allSettings?.liveChatScript;

  return (
    <html lang="en">
      <body className={`min-h-screen bg-primary-50 text-primary-950 ${montserrat.className}`}>
        <Script id="liveChatID" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: liveChatScript }} />

        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Script id="google-translate" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  includedLanguages: 'en,fr,es,de,ar,it,pt,ru,zh-CN,ja,ko,hi,tr,nl,pl,sv,th,vi,id',
                },
                'google_translate_element'
              );
            }
          `}
        </Script>

        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />

        <Providers>
          <ClientLayout>
            <AOSWrapper>{children}</AOSWrapper>

            <Toaster
              position="top-center"
              gutter={12}
              toastOptions={{
                className: "text-sm sm:text-base max-w-md px-4 py-3 bg-white text-gray-800 shadow-xl rounded-xl w-[90%] sm:w-auto",

                success: {
                  duration: 3000,
                  className: "border-l-4 border-emerald-500",
                },

                error: {
                  duration: 5000,
                  className: "border-l-4 border-red-500",
                },
              }}
            />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
