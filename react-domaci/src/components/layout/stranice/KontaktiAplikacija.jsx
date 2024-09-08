import React, { useRef, useEffect } from "react";
import Title from "../../Title";

export default function KontaktiAplikacija() {
  //fokus na polju za pretragu odmah pri ucitavanju stranice
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });

  return (
    <div>
      <Title classes={"title"} text={"Kontakti"} />
      <Title classes={"subtitle"} text={"aplikacija"} />

      <input
        type="text"
        placeholder="Kljuc za pretragu kontakata..."
        className="mb-2"
        style={{ padding: ".5rem 7rem" }}
        ref={inputSearch}
      />

      <section
        className="d-flex"
        style={{ gap: 15, maxWidth: 1600, margin: "auto" }}
      ></section>
    </div>
  );
}
