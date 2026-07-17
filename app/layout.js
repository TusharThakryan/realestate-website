import "./globals.css";

export const metadata = {
  title: "Whitecollar Realty | Find Your Next Home",
  description: "Browse premium homes and connect with expert agents at Whitecollar Realty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
