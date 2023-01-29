import BackToTop from "../components/Library/BackToTop";
import BookCard from "../components/Library/BookCard";
import Footer from "../components/Library/Footer";
import NavBar from "../components/Library/NavBar";
import SecondaryNavBar from "../components/Library/SecondaryNavBar";

export default function BookFile() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#333333" }}>
      <BackToTop />
      <NavBar />
      <br /><br />
      <SecondaryNavBar />
      <BookCard />
      <Footer />
    </div>
  );
}
