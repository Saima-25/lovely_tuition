import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to Lovely Tuition</h1>
      <p>Empowering Students for a Bright Future</p>

      <img src="
      https://tse4.mm.bing.net/th?id=OIP.u_a6FdGWay8cnRSgMtJ5fwHaFE&pid=Api&P=0&h=220.jpeg" alt="Lovely Tuition" width="200" height="200" />
    </div>
  );
}
