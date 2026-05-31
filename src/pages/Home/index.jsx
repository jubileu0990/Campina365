import MainLayout from "../../components/layout/MainLayout";
import EventCalendar from "../../components/events/EventCalendar";

export default function Home() {
  return (
    <MainLayout>
      <section className="hero-section">
        <h1>Campina365</h1>
        <p>
          Plataforma inteligente para acompanhar eventos, turismo, comércio e
          oportunidades em Campina Grande durante todo o ano.
        </p>
      </section>

      <section className="dashboard-cards">
        <div className="card">
          <h3>Eventos</h3>
          <p>Calendário atualizado com atrações, shows, feiras e eventos da cidade.</p>
        </div>

        <div className="card">
          <h3>Turismo</h3>
          <p>Informações úteis para visitantes, moradores e empreendedores locais.</p>
        </div>

        <div className="card">
          <h3>Comércio</h3>
          <p>Dados e oportunidades para hotéis, bares, restaurantes e lojas.</p>
        </div>
      </section>

      <EventCalendar />
    </MainLayout>
  );
}