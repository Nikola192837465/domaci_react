import React, { useRef, useEffect, useState } from "react";
import Title from "../../Title";

import Data from "../../../Data.json";
import Kontakt from "./Kontakt";

export function KontaktiAplikacija() {
  //fokus na polju za pretragu odmah pri ucitavanju stranice
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });

  const [pretragaKontakta, setPretragaKontakta] = useState("");

  return (
    <div>
      <Title classes={"title text-center"} text={"Kontakti"} />
      <Title classes={"subtitle text-center"} text={"aplikacija"} />

      <div className="text-center">
        <input
          type="text"
          placeholder="Kljuc za pretragu kontakata..."
          className="text-center"
          style={{ padding: ".5rem 7rem", textAlign: "center" }}
          ref={inputSearch}
          onChange={(e) => setPretragaKontakta(e.target.value)}
        />
      </div>
      <section
        className="d-flex"
        style={{ gap: 15, maxWidth: 1600, margin: "auto", flexWrap: "wrap" }}
      >
        {Data.filter((kontakt) => {
          if (pretragaKontakta === "") {
            return kontakt;
          } else if (
            kontakt.first_name
              .toLocaleLowerCase()
              .includes(pretragaKontakta.toLocaleLowerCase())
          ) {
            return kontakt;
          }
        }).map((kontakt) => (
          <Kontakt kontakt={kontakt} />
        ))}
      </section>
    </div>
  );
}
