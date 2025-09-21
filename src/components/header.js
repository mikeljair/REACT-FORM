import React from "react";

function Header() {
  return (
    <header className="bg-dark text-white text-center py-5" style={{ background: "#0b0b2f" }}>
      <h1 className="display-3 fw-bold">PlayStation</h1>
      <p className="lead fs-4">Vive la experiencia gaming definitiva</p>
      <a href="#register" className="btn btn-primary btn-lg mt-3">
        Regístrate Ahora
      </a>
    </header>
  );
}

export default Header;
