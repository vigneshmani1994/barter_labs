import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://archerwave.in"),
  title: "Archer Wave | Software · AI · Engineering",
  description: "Archer Wave builds software, AI and engineering solutions designed to solve complex problems and turn ideas into working products.",
  icons: {
    icon: "./images/archerwave-symbol.png",
    shortcut: "./images/archerwave-symbol.png",
    apple: "./images/archerwave-symbol.png",
  },
  openGraph: {
    title: "Archer Wave | Software · AI · Engineering",
    description: "We build technology for the real world.",
    url: "https://archerwave.in/",
    siteName: "Archer Wave",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
