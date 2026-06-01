import { useState } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../ui/Modal";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";

export default function MainLayout({ children }) {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const navStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#2563eb" : "#111",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          borderRight: "1px solid #e5e7eb",
          padding: "32px 24px",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            color: "#2563eb",
            fontSize: "28px",
            marginBottom: "48px",
          }}
        >
          Campina365
        </h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            fontSize: "18px",
          }}
        >
          <NavLink to="/" style={navStyle}>
            Home
          </NavLink>

          <NavLink to="/eventos" style={navStyle}>
            Eventos
          </NavLink>

          <NavLink to="/adicionar-evento" style={navStyle}>
            Adicionar Evento
          </NavLink>

          <NavLink to="/alertas" style={navStyle}>
            Alertas
          </NavLink>

          <span
            onClick={() => setOpenLogin(true)}
            style={{ cursor: "pointer", color: "#111" }}
          >
            Login
          </span>

          <span
            onClick={() => setOpenRegister(true)}
            style={{ cursor: "pointer", color: "#111" }}
          >
            Register
          </span>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main style={{ flex: 1, background: "#f8fafc" }}>
        <header
          style={{
            height: "74px",
            borderBottom: "1px solid #e5e7eb",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 36px",
          }}
        >
          <h3 style={{ fontSize: "24px", margin: 0 }}>Painel Inteligente</h3>
          <span style={{ fontSize: "18px" }}>Administrador</span>
        </header>

        <section style={{ padding: "48px 36px" }}>{children}</section>
      </main>

      {/* MODALS */}
      <Modal isOpen={openLogin} onClose={() => setOpenLogin(false)}>
        <LoginForm />
      </Modal>

      <Modal isOpen={openRegister} onClose={() => setOpenRegister(false)}>
        <RegisterForm />
      </Modal>
    </div>
  );
}