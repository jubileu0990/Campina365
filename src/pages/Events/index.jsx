import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import events from "../../data/events";

export default function Events() {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("campina365_events")) || [];

    setAllEvents([...events, ...savedEvents]);
  }, []);

  function formatDate(date) {
    if (!date) return "Data não informada";

    return new Date(date + "T00:00:00").toLocaleDateString("pt-BR");
  }

  return (
    <MainLayout>
      <h1>Eventos em Campina Grande</h1>
      <p>Confira os principais eventos cadastrados na plataforma Campina365.</p>

      <div className="events-list">
        {allEvents.map((event) => (
          <article key={event.id} className="event-card">
            <h3>{event.title}</h3>

            <p>
              <strong>Período:</strong>{" "}
              {event.startDate || event.endDate
                ? event.startDate === event.endDate || !event.endDate
                  ? formatDate(event.startDate)
                  : `${formatDate(event.startDate)} até ${formatDate(
                      event.endDate
                    )}`
                : formatDate(event.date)}
            </p>

            <p>
              <strong>Horário:</strong> {event.time || "Horário não informado"}
            </p>

            <p>
              <strong>Local:</strong> {event.location || "Local não informado"}
            </p>

            <p>
              <strong>Categoria:</strong>{" "}
              {event.category || "Categoria não informada"}
            </p>

            <p>{event.description}</p>
          </article>
        ))}
      </div>
    </MainLayout>
  );
}