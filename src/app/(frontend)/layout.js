import Footer from "@/Components/FrontEndComponents/Footer/Footer";
import NavigationMenuItems from "@/Components/FrontEndComponents/NavigationMenu/NavigationMenu";




export default function FrontEndLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationMenuItems/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
