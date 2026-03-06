import "./globals.css";

export const metadata = {
  title: "React Hooks Explorer",
  description: "Hands-on playgrounds for useState and useEffect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
