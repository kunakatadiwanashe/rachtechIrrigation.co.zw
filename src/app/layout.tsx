import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./index.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });



export const metadata = {
  title: "Borehole Drilling & Irrigation Systems in Zimbabwe | RachTech Irrigation",
  description:
    "Professional borehole drilling, solar borehole installation and irrigation systems in Zimbabwe. Reliable water solutions for farms, homes and businesses.",
  keywords: [
    "borehole drilling Zimbabwe",
    "irrigation systems Zimbabwe",
    "borehole drilling Harare",
    "solar borehole installation Zimbabwe",
    "water drilling company Zimbabwe",
  ],
  openGraph: {
    title: "RachTech Irrigation | Borehole & Irrigation Experts Zimbabwe",
    description:
      "Expert borehole drilling and irrigation solutions across Zimbabwe.",
    url: "https://www.rachtechirrigation.co.zw",
    siteName: "RachTech Irrigation",
    locale: "en_ZW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="google-site-verification" content="IrtV2B7-SJFEb25Mr0y-Km8M7kPGD5-hHM-t-AO-6Wg" />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Whatsapp />
          <Footer />
        </ThemeProvider>




        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "RachTech Irrigation",
      url: "https://www.rachtechirrigation.co.zw",
      description:
        "Borehole drilling and irrigation systems company in Zimbabwe.",
      areaServed: "Zimbabwe",
      serviceArea: {
        "@type": "Country",
        name: "Zimbabwe",
      },
      sameAs: [],
    }),
  }}
/>
      </body>
    </html>
  );
}
