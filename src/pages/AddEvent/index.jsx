import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

export default function AddEvent() {
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    category: "",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setEvent({
      ...event,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const savedEvents = JSON.parse(localStorage.getItem("campina365_events")) || [];

    const newEvent = {
      id: Date.now(),
      ...event,
      endDate: event.endDate || event.startDate,
    };

    const updatedEvents = [...savedEvents, newEvent];

    localStorage.setItem("campina365_events", JSON.stringify(updatedEvents));

    alert("Evento cadastrado com sucesso!");

    navigate("/eventos");
  }

  return (
    <MainLayout>
      <h1>Adicionar Evento</h1>
      <p>Cadastre um novo evento no Campina365.</p>

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nome do evento"
          value={event.title}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="startDate"
          value={event.startDate}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="endDate"
          value={event.endDate}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Local do evento"
          value={event.location}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria: Show, Cultura, Feira..."
          value={event.category}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descrição do evento"
          value={event.description}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastrar Evento</button>
      </form>
    </MainLayout>
  );
}