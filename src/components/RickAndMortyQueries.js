// RickAndMortyQueries.js
import React, { useState } from "react";
import axios from "axios";
import './RickAndMortyQueries.css';

function RickAndMortyQueries() {
  const [queryType, setQueryType] = useState("character"); // Tipo de consulta (personajes, ubicaciones, episodios)
  const [data, setData] = useState(null); // Datos de la API
  const [loading, setLoading] = useState(false); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para realizar la consulta
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/${queryType}`);
      setData(response.data.results);
    } catch (err) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Rick and Morty API Query</h1>
      {/* Select para elegir el tipo de consulta */}
      <select value={queryType} onChange={(e) => setQueryType(e.target.value)}>
        <option value="character">Characters</option>
        <option value="location">Locations</option>
        <option value="episode">Episodes</option>
      </select>

      {/* Botón para realizar la consulta */}
      <button onClick={fetchData} className="button">
        Fetch {queryType}
      </button>

      {/* Muestra el estado de carga */}
      {loading && <p>Loading...</p>}

      {/* Muestra el error si ocurre */}
      {error && <p>{error}</p>}

      {/* Muestra los datos cuando se cargan */}
      <div className="results">
        {data &&
          data.map((item) => (
            <div key={item.id} className="result-item">
              <h3>{item.name}</h3>
              {/* Mostrar información adicional basada en el tipo de consulta */}
              {queryType === "character" && (
                <p>
                  Status: {item.status} - Species: {item.species}
                </p>
              )}
              {queryType === "location" && (
                <p>
                  Type: {item.type} - Dimension: {item.dimension}
                </p>
              )}
              {queryType === "episode" && (
                <p>
                  Episode: {item.episode} - Air date: {item.air_date}
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default RickAndMortyQueries;
