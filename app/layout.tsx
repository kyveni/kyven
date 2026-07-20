import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kyven.xyz"),
  title: { default: "Kyven — Community Launchpad", template: "%s | Kyven" },
  description: "Build, launch, and grow community-driven projects with Kyven.",
  applicationName: "Kyven",
  keywords: ["Kyven", "community launchpad", "Robinhood", "web3 community"],
  openGraph: {
    title: "Kyven — Community Launchpad",
    description: "Launch the next community on Robinhood.",
    type: "website",
    siteName: "Kyven",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyven — Community Launchpad",
    description: "Launch the next community on Robinhood.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
