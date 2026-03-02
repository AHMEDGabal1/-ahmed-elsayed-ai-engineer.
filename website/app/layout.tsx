import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Elsayed | AI Engineer & Intelligent Systems Builder",
  description:
    "AI Engineer specializing in LLMs, AI agents, and intelligent automation systems that help businesses think, learn, and scale.",
  icons: {
    icon: "/favicon.ico"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-slate-100">
        <div className="min-h-screen bg-gradient-mesh">
          {children}
        </div>
      </body>
    </html>
  );
}

