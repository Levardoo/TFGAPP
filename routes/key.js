const { Ed25519VerificationKey2020 } = require('@digitalbazaar/ed25519-verification-key-2020');

async function cargarClave() {
  return await Ed25519VerificationKey2020.from({
    id: 'did:example:issuer#keys-1',
    controller: 'did:example:issuer',
    publicKeyMultibase: 'z6MkpEXAMPLEPUBLICKEY...',
    privateKeyMultibase: 'zrv3tEXAMPLEPRIVATEKEY...'
  });
}

module.exports = cargarClave;
