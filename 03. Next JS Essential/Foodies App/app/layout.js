import MainHeader from "@/components/Header/MainHeader";
import "./globals.css";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen h-full w-screen bg-gray-900 text-white">
     
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
