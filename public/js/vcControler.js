document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generarVC");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    try {
      // Conectamos MetaMask
      if (typeof window.ethereum === 'undefined') {
        alert("MetaMask no está instalado");
        return;
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const userAddress = accounts[0];

      // Recolectar datos del formulario
      const nombre = document.getElementById("nombre").value;
      const dni = document.getElementById("dni").value;
      const email = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const asistentes = document.getElementById("asistentes").value;
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;

      // Extraer info del evento desde el HTML
      const eventoJSON = document.getElementById("evento-data").textContent;
      const evento = JSON.parse(eventoJSON);

      // Payload a firmar
      const vcPayload = {
        id: `did:example:${dni}`,
        nombre,
        email,
        telefono,
        fechaNacimiento,
        asistentes,
        evento
      };

      // Esquema EIP-712 para firma
const domain = {
  name: "DApp VC Issuer",
  version: "1",
  chainId: 1,
  verifyingContract: "0x0000000000000000000000000000000000000000"
};

const types = {
  VC: [
    { name: "id", type: "string" },
    { name: "nombre", type: "string" },
    { name: "email", type: "string" }
  ]
};

const message = {
  id: `did:example:${dni}`,
  nombre: String(nombre),
  email: String(email)
};

const typedData = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" }
    ],
    VC: types.VC
  },
  domain,
  primaryType: "VC",
  message
};

const signature = await ethereum.request({
  method: "eth_signTypedData_v4",
  params: [userAddress, JSON.stringify(typedData)]
});

      // Construir la Verifiable Credential con prueba
      const vc = {
        "@context": ["https://www.w3.org/2018/credentials/v1"],
        type: ["VerifiableCredential", "EventAttendanceCredential"],
        issuer: userAddress,
        issuanceDate: new Date().toISOString(),
        credentialSubject: vcPayload,
        proof: {
          type: "EthereumEip712Signature2021",
          created: new Date().toISOString(),
          proofPurpose: "assertionMethod",
          verificationMethod: userAddress,
          signature: signature
        }
      };

      // Guardar VC firmada en localStorage
      let wallet = JSON.parse(localStorage.getItem("wallet")) || [];
      wallet.push(vc);
      localStorage.setItem("wallet", JSON.stringify(wallet));

      alert("VC firmada y guardada en tu wallet");
    } catch (err) {
      console.error("Error al generar y firmar la VC:", err);
      alert("Ocurrió un error al generar o firmar la credencial.");
    }
  });
});