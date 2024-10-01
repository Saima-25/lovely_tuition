
import NavBar from "../components/navbar";

export default function FAQ() {
  return (
    <div>
      <h1>FAQ</h1>

      <NavBar />
      <ul>
        <li>
          <strong>
            Q: Is there an entrance exam for admission to Lovely Tuition?
          </strong>
          <p>
            A: No, there is no entrance exam for admission to Lovely Tuition.
          </p>
        </li>
        <li>
          <strong>Q: Is the fee refundable at Lovely Tuition?</strong>
          <p>A: No, the fee is non-refundable at Lovely Tuition.</p>
        </li>
        <li>
          <strong>Q: What classes are offered at Lovely Tuition?</strong>
          <p>A: Lovely Tuition offers classes from 9th to 10th standard.</p>
        </li>
        <li>
          <strong>Q: What subjects are taught at Lovely Tuition?</strong>
          <p>
            A: Lovely Tuition offers Maths, Physics, and Computer Science
            classes.
          </p>
        </li>
      </ul>
    </div>
  );
}
