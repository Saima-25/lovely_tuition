import NavBar from "../components/navbar";

export default function Fee() {
  return (
    <div>
      <NavBar />
      <h1>Fee Structure</h1>
      <table>
        <tr>
          <th>Subject</th>
          <th>Monthly Fee</th>
        </tr>
        <tr>
          <td>Maths</td>
          <td>₹2,000</td>
        </tr>
        <tr>
          <td>Physics</td>
          <td>₹2,000</td>
        </tr>
        <tr>
          <td>Computer Science </td>
          <td>₹2,500</td>
        </tr>

        <tr>
          <td>Chemistry</td>
          <td>₹2,500</td>
        </tr>
      </table>
    </div>
  );
}
