import { useEffect, useState } from "react";

export default function GaleriaDriveConTitulo() {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    fetch(
      "https://opensheet.elk.sh/1oqYBBJ3G3ToT8nZ8Q-6bDM49hH4vGQvTn6m53BXgmYs/Hoja1"
    )
      .then((res) => res.json())
      .then((data) => setImagenes(data))
      .catch((err) => console.error("Error al cargar imágenes:", err));
  }, []);

  function convertirDriveLink(url) {
    const match = url.match(/\/d\/(.*?)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url; // fallback
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>Galería desde Drive + Títulos</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {imagenes.map((item, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              textAlign: "center",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={convertirDriveLink(item.imagenes)}
              alt={`imagen ${index}`}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />

            <h4 style={{ marginTop: "0.5rem" }}>{item.titulo}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
