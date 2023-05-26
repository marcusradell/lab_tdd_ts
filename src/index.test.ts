async function login(email: string) {
  if (email === "") {
    return { status: "FAILED", code: "EMPTY_EMAIL" };
  }

  return { status: "FAILED", code: "NOT_AN_EMAIL" };
}

test("Logging in with empty email fails with validation error code 'EMPTY_EMAIL'", async () => {
  const email = "";

  const result = await login(email);

  expect(result).toEqual({ status: "FAILED", code: "EMPTY_EMAIL" });
});

test("Logging in with email 'a' fails with validation error code 'NOT_AN_EMAIL'", async () => {
  const email = "a";

  const result = await login(email);

  expect(result).toEqual({ status: "FAILED", code: "NOT_AN_EMAIL" });
});
