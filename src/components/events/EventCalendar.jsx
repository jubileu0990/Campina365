import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import events from "../../data/events";

export default function EventCalendar() {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("campina365_events")) || [];

    const allEvents = [...events, ...savedEvents];

    const formattedEvents = allEvents.map((event) => {
      const start = event.startDate || event.date;
      const end = event.endDate || event.startDate || event.date;

      if (!start) {
        return null;
      }

      const finalDate = new Date(end + "T00:00:00");
      finalDate.setDate(finalDate.getDate() + 1);

      return {
        id: String(event.id),
        title: event.title,
        start: start,
        end: finalDate.toISOString().split("T")[0],
        allDay: true,
      };
    });

    setCalendarEvents(formattedEvents.filter(Boolean));
  }, []);

  return (
    <div className="calendar-container">
      <h2>Calendário de Eventos</h2>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        locale="pt-br"
        height="auto"
      />
    </div>
  );
}