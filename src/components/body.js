import React from "react";
import god_of_war from "../assets/image/gow_4.jpg";
import horizon_forbidden_west from "../assets/image/hfw.jpeg";
import spiderman from "../assets/image/spiderman.jpg";
import ps from "../assets/image/ps.jpg";
import Form from "./form"; // Imagen de PlayStation

function Body() {
  const games = [
    { name: "God of War", img: god_of_war },
    { name: "Horizon Forbidden West", img: horizon_forbidden_west },
    { name: "Spider-Man", img: spiderman },
  ];

  return (
    <main className="container my-5">
      <section className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="mb-3">Explora el Universo PlayStation</h2>
          <p>
            Únete a millones de gamers y disfruta de títulos exclusivos, experiencias
            online y promociones especiales. Vive la emoción de los juegos como nunca antes.
          </p>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">🎮 Juegos exclusivos</li>
            <li className="list-group-item">💻 Comunidad online</li>
            <li className="list-group-item">🚀 Lanzamientos y novedades</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img
            src={ps}
            alt="PlayStation"
            className="img-fluid"
            style={{ maxHeight: "250px" }}
          />
        </div>
      </section>

      <section className="mb-5">
        <h3 className="text-center mb-4">Juegos Destacados</h3>
        <div className="row g-4">
          {games.map((game, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm h-100 hover-scale">
                <img src={game.img} className="card-img-top" alt={game.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{game.name}</h5>
                  <button className="btn btn-primary mt-2">Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="register" className="row justify-content-center">
        <div className="col-md-6">
          <Form />
        </div>
      </section>
    </main>
  );
}

export default Body;
