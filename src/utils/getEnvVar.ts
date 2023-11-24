export const getEnvVar = (name: string, isPublic?: boolean) => {
  const envVar = process.env[`${isPublic ? 'NEXT_PUBLIC_' : ''}${name}`];
  if (!envVar) throw new Error(`Environment variable with name: ${name} does not exist`);
  return envVar;
};
