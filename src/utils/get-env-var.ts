export const getEnvVar = (name: string) => {
  const value = process.env[`NEXT_PUBLIC_${name}`];
  if (!value) throw new Error(`Environment variable ${name} not set`);
  return value;
};
