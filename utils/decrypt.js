const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

if (!process.env.SECRET_KEY) {
  throw new Error('SECRET_KEY is missing');
}

const SECRET_KEY = crypto
  .createHash('sha256')
  .update(process.env.SECRET_KEY)
  .digest();

function decrypt(encryptedText) {
  if (!encryptedText || !encryptedText.includes(':')) {
    throw new Error('Encrypted password must be in iv:encrypted format');
  }

  const [ivHex, encrypted] = encryptedText.split(':');

  const iv = Buffer.from(ivHex, 'hex');
  
  if (iv.length !== 16) {
    throw new Error(`Invalid IV length: ${iv.length}. Expected 16 bytes.`);
  }

  const decipher = crypto.createDecipheriv(algorithm, SECRET_KEY, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

module.exports = { decrypt };
