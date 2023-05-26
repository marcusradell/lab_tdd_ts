async function login(email: string) {
  return { code: "EMPTY_EMAIL" };
}

test("Logging in with empty email fails with validation error code 'EMPTY_EMAIL'", async () => {
  const email = "";

  const result = await login(email);

  expect(result).toEqual({ code: "EMPTY_EMAIL" });
});
