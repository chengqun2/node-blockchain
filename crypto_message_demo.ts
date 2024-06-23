import * as crypto from 'crypto';
const keypair = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

const publicKey = keypair.publicKey
const privateKey = keypair.privateKey

// Function to encrypt a message
const encryptMessage = (message: string): Buffer => {
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
};

// Function to decrypt a message
const decryptMessage = (encryptedMessage: Buffer): string => {
    const decryptedBuffer = crypto.privateDecrypt(privateKey, encryptedMessage);
    return decryptedBuffer.toString('utf8');
};

// Test the encryption and decryption
const message = 'Hello, my name is James, this is a secret message!';
console.log('Original message:', message);

const encryptedMessage = encryptMessage(message);
console.log('Encrypted message:', encryptedMessage.toString('base64'));

const decryptedMessage = decryptMessage(encryptedMessage);
console.log('Decrypted message:', decryptedMessage);