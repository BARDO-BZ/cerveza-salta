// src/Components/Pages/ComerciantesAmigos.tsx

import React, { useState } from "react";
import "./styles.css";

const ComerciantesAmigos: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convertir a URLSearchParams para evitar CORS
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxcBdHuCwLnCJhadGd0h9Lhj3BJJsmYqp3Af_4L2LfPTr5MQWVuLTdlFEP5IX8C3FyqoQ/exec",
        {
          method: "POST",
          body: params, // Enviar como URLSearchParams
        }
      );

      if (!res.ok) throw new Error("Error en el envío");

      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="banner-comerciantes">
        <img src="/images/comerciantes/frame-2.png" alt="comerciantes amigos" />
      </div>

      <div className="form-container">
        <h1 className="form-title">Comerciantes amigos</h1>
        <p className="form-subtitle">
          Completá el formulario para participar de la acción.
        </p>
        <form className="comerciantes-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              NOMBRE
              <input type="text" name="nombre" required />
            </label>

            <label>
              APELLIDO
              <input type="text" name="apellido" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              NÚMERO DE TELÉFONO
              <input type="tel" name="telefono" required />
            </label>

            <label>
              MAIL
              <input type="email" name="mail" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              CUIT
              <input type="text" name="cuit" required />
            </label>

            <label>
              NRO DE FACTURA
              <input type="text" name="nroFactura" required />
            </label>
          </div>

          <div className="form-row">
            <label className="full-width">
              DIRECCIÓN DEL COMERCIO
              <input type="text" name="direccionComercio" required />
            </label>
          </div>

          <div className="form-row checkbox-row">
            <label className="checkbox-label">
              <input type="checkbox" name="aceptaBases" required />
              <span>
                Acepto las{" "}
                <a
                  href="https://drive.google.com/tu-link-a-bases-y-condiciones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bases y condiciones
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Participar"}
          </button>

          {status === "ok" && (
            <p className="form-message success">
              ¡Listo! Ya estás participando. Te enviamos un mail de
              confirmación.
            </p>
          )}
          {status === "error" && (
            <p className="form-message error">
              Hubo un problema al enviar el formulario. Probá de nuevo en unos
              minutos.
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ComerciantesAmigos;
