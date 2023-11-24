export const sendVerificationEmail = async ({ id, email, username }) => {
  const token = tokenService.signToken(id, 'email');
  await mailerService.sendVerificationEmail(email, username, token);
};
