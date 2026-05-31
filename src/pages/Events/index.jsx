import MainLayout from "../../components/layout/MainLayout";
import events from "../../data/events";

export default function Events() {
  return (
    <MainLayout>
      <h1>Eventos em Campina Grande</h1>
      <p>Confira os principais eventos cadastrados na plataforma Campina365.</p>

      <div className="events-list">
        {events.map((event) => (
          <article key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>
              <strong>Data:</strong> {event.date}
            </p>
            <p>
              <strong>Horário:</strong> {event.time}
            </p>
            <p>
              <strong>Local:</strong> {event.location}
            </p>
            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </MainLayout>
  );
}