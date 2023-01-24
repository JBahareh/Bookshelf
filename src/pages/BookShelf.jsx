import NavBar from "../components/Library/NavBar";
import SecondaryNavBar from "../components/Library/SecondaryNavBar";
import SlideShow from "../components/Library/SlideShow";
import DragList from "../components/Library/DragList";
import Footer from "../components/Library/Footer";
import BackToTop from "../components/Library/BackToTop";

export default function BookShelf() {
  return (
    <div style={{ backgroundColor: "#F5F5F5", color: "#333333" }}>
      <BackToTop />
      <NavBar />
      <br /><br />
      <SecondaryNavBar />
      <SlideShow />
      <DragList />
      <Footer />
    </div>
  );
}
