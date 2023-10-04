import React, { useEffect, useState } from "react";
import { loadDatas, loadCountries } from "../../services/api";

const StockDatasCountries = () => {
  const [unfiltredData, setUnfiltredData] = useState([]);
  const [filtredData, setFiltredData] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    loadDatas().then((data) => {
      setUnfiltredData(data);
      setFiltredData(data);
    });

    loadCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  const handleChange = (e) => {
    setFiltredData(unfiltredData);
    let dropdownMenuValue = e.target.value;
    let selectedCountryData = unfiltredData.filter((value) =>
      value.states_name_en.includes(dropdownMenuValue)
    );

    dropdownMenuValue === null
      ? setFiltredData(unfiltredData)
      : setFiltredData(selectedCountryData);
  };

  return (
    <>
      <h3>Pratique : Exercices sur les effets de bord d'un composant</h3>
      <h4>Filtrer la liste du patrimoine mondial de l'UNESCO</h4>
      <select onChange={handleChange}>
        <option value=""></option>
        {countries.map((value, index) => {
          return (
            <option key={index} value={value.name}>
              {value.name}
            </option>
          );
        })}
      </select>

      {filtredData.length > 0 ? (
        <div>
          {filtredData.map((value) => {
            return <p key={crypto.randomUUID()}>{value.name_fr}</p>;
          })}
        </div>
      ) : (
        <p>Aucun résultat</p>
      )}
    </>
  );
};

export default StockDatasCountries;
