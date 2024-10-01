import NavBar from "../components/navbar";

export default function Registration() {
  return (
    <div>
      <NavBar />
      <h2>Registration Form</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="tel" placeholder="Phone" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
