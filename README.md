### install dependencies
`npm install --save-dev typescript ts-node @types/node`

### start the project
`npm start`

### SHA256
Generates a fixed-length `hash value` from input data. And produces the same hash for the same input.
Primarily used for data integrity verification.

### RSA
RSA uses a pair of keys (public and private). Data encrypted with the public key can only be decrypted with the private key and vice versa.
Used for secure data transmission and digital signatures.

### crypto message demonstrate
`tsc` then `node dist/crypto_demo.js` to demonstrate the message encryption and decryption