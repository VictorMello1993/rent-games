import { hash, hashSync } from 'bcrypt';

export async function generateHash(password: string) {
  const hashedPassword = await hash(password, 10);
  return hashSync(password, hashedPassword);
}
