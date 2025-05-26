document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("walletContainer");
  const wallet = JSON.parse(localStorage.getItem("wallet")) || [];

  if (wallet.length === 0) {
    container.innerHTML = "<p>No tienes ninguna credencial almacenada.</p>";
    return;
  }

  wallet.forEach((vc, index) => {
    const evento = vc.credentialSubject.evento;
    const credHTML = `
      <div class="vc-card">
        <h2>Evento: ${evento.name}</h2>
        <h3>Datos del evento</h3>
        <p><strong>Descripción:</strong> ${evento.description}</p>
        <p><strong>Fecha:</strong> ${evento.date}</p>
        <p><strong>Hora:</strong> ${evento.hour}</p>
        <p><strong>Sitio:</strong> ${evento.site}</p>
        <h3>Datos del usuario</h3>
        <p><strong>Asistente:</strong> ${vc.credentialSubject.nombre}</p>
        <p><strong>Email:</strong> ${vc.credentialSubject.email}</p>
        <p><strong>DNI:</strong> ${vc.credentialSubject.id.replace("did:example:", "")}</p>
        <p><strong>Emitido por:</strong> ${vc.issuer}</p>
        <p><strong>Fecha emisión:</strong> ${new Date(vc.issuanceDate).toLocaleString()}</p>
        <hr>
      </div>
    `;
    container.innerHTML += credHTML;
  });
});
