import Cart from "../components/Library/Cart";
import Footer from "../components/Library/Footer";
import NavBar from "../components/Library/NavBar";
import SecondaryNavBar from "../components/Library/SecondaryNavBar";

export default function BookCart() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <NavBar />
            <br /><br />
            <SecondaryNavBar />
            <Cart />
            <Footer />
        </div>
    );
}