// services/vcSigner.js
import * as vc from '@digitalbazaar/vc';
import { Ed25519KeyPair } from '@digitalbazaar/ed25519-verification-key-2020';
import { Ed25519Signature2020 } from '@digitalbazaar/ed25519-signature-2020';
import { v4 as uuidv4 } from 'uuid';

export async function createIssuer() {
  const keyPair = await Ed25519KeyPair.generate();

  // Calculamos el DID del emisor a partir del publicKeyMultibase
  const controller = `did:key:${keyPair.publicKeyMultibase}`;
  keyPair.controller = controller;
  keyPair.id = `${controller}#${keyPair.publicKeyMultibase}`;

  const didDoc = {
    id: controller,
    verificationMethod: [await keyPair.export({ publicKey: true })],
  };

  return { key: keyPair, didDoc };
}

export async function issueVC(subject, keyPair, issuerDid) {
  const credential = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    id: `urn:uuid:${uuidv4()}`,
    type: ['VerifiableCredential'],
    issuer: issuerDid,
    issuanceDate: new Date().toISOString(),
    credentialSubject: subject,
  };

  const signedVC = await vc.issue({
    credential,
    suite: new Ed25519Signature2020({
      key: keyPair,
    }),
    documentLoader: customDocumentLoader,
  });

  return signedVC;
}

// Cargar el contexto base de las VCs (esto evita errores en entornos sin acceso a red)
const customDocumentLoader = async url => {
  if (url === 'https://www.w3.org/2018/credentials/v1') {
    return {
      contextUrl: null,
      documentUrl: url,
      document: await import('vc/data/contexts/credentials-v1.js').then(mod => mod.default),
    };
  }

  throw new Error(`No se puede cargar el contexto: ${url}`);
};
