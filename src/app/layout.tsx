import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ConditionalLayout from "@/components/layout/conditional-layout";
import ChatwootWidget from "@/components/chatwoot-widget";
import SmoothScroll from "@/components/layout/smooth-scroll";
import CookieConsent from "@/components/ui/cookie-consent";

export const metadata: Metadata = {
  title: "SoniqFlow — AI Audio Workflow & Sound Automation Platform",
  description:
    "SoniqFlow is a premium platform for intelligent audio workflow management and sound automation. Orchestrate your professional audio projects with GPU-accelerated AI.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        <ChatwootWidget />
        <SmoothScroll>
          <ConditionalLayout>{children}</ConditionalLayout>
        </SmoothScroll>
        <CookieConsent />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
