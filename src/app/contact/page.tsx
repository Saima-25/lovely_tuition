import Link from "next/link";
import NavBar from "../components/navbar";
export default function Contact() {
  return (
    <div>
      <NavBar />
      <h1>Contact Us</h1>
      <strong>WhatsApp:</strong>
      <Link href="https://wa.me/+923123456789" target="_blank"></Link>
      <button>Contact us on WhatsApp</button>
    </div>
  );
}
