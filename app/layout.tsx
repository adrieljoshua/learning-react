import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "React Hooks Explorer",
  description: "Hands-on playgrounds for useState and useEffect",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
