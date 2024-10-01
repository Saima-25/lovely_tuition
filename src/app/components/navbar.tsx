import Link from "next/link";
export default function NavBar() {
  return (
    <div>
      <Link href="/about">About</Link>
      <br />
      <Link href="/contact">Contact Us</Link>
      <br />
      <Link href="/faq">FAQ</Link>
      <br />
      <Link href="/fee">Fee Structure</Link>
      <br />
      <Link href="/registration">Registration Form</Link>
      <br />
      <Link href="/">Home</Link>
    </div>
  );
}
