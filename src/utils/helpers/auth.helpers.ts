import { compare, hash, hashSync } from 'bcrypt';

export async function generateHash(password: string) {
  const hashedPassword = await hash(password, 10);
  return hashSync(password, hashedPassword);
}

export async function validatePassword(passwordInput: string, passwordBase: string): Promise<boolean> {
  const passwordMatch = await compare(passwordInput, passwordBase);
  return passwordMatch;
}
