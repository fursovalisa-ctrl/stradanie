import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachingSection() {
  return (
    <section>
      <ul>
        {ways.map((way) => (
          <WayToTeach {...way} />
        ))}
      </ul>
    </section>
  );
}
