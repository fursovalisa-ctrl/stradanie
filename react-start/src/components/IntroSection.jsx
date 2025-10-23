import React from "react";

export default function IntroSection() {
  return React.createElement("section", null, [
    React.createElement(
      "h1",
      { key: 1, style: { display: "flex", justifySelf: "center" } },
      "Result University"
    ),
    React.createElement(
      "h3",
      { key: 2, style: { color: "#666" } },
      "Университет разработки и программирования"
    ),
  ]);
}
