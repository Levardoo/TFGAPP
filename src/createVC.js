import * as vc from '@digitalbazaar/vc'; // importa todo como vc
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';
import { customLoader } from './customDocumentLoader.js';
import fs from 'fs';


// Paso 1: Generar clave y configurar metadatos
const keyData = JSON.parse(fs.readFileSync('./keys/issuer-key.json'));
const keyPair = await Ed25519VerificationKey2020.from(keyData);

const suite = new Ed25519Signature2020({ key: keyPair });

// Paso 2: Crear credencial
const credential = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  id: 'http://example.edu/credentials/3732',
  type: ['VerifiableCredential', 'EventAttendanceCredential'],
  issuer: keyPair.controller,
  issuanceDate: new Date().toISOString(),
'@context': [
  'https://www.w3.org/2018/credentials/v1',
  'https://schema.org/'
],
credentialSubject: {
  id: 'did:example:holder123',
  eventName: 'Conferencia de IA 2025',
  location: 'Madrid',
  startDate: '2025-04-20',
  pricePaid: '80 EUR',
  theme: 'Usos de la IA en ciberseguridad'
}

};

// Paso 3: Emitir (firmar) la credencial
const verifiableCredential = await vc.issue({
  credential,
  suite,
  documentLoader: customLoader
});

fs.writeFileSync('./credentials/vc.json', JSON.stringify(verifiableCredential, null, 2));
console.log('✅ VC emitida y guardada en ./credentials/vc.json');

// paso 4: convertirlo en priv