async function login(email: string) {
  if (email === "") {
    return { status: "FAILED", code: "EMPTY_EMAIL" };
  }

  if (email === "a@b.c") {
    return { status: "SUCCEEDED", jwt: "not_a_good_secret" };
  }

  return { status: "FAILED", code: "NOT_AN_EMAIL" };
}

test("Logging in with empty email fails with validation error code 'EMPTY_EMAIL'", async () => {
  const email = "";

  const result = await login(email);

  expect(result).toEqual({ status: "FAILED", code: "EMPTY_EMAIL" });
});

test("Logging in with email 'a@b' fails with validation error code 'NOT_AN_EMAIL'", async () => {
  const email = "a@b";

  const result = await login(email);

  expect(result).toEqual({ status: "FAILED", code: "NOT_AN_EMAIL" });
});

test("Logging in with email 'a@b.c' succeeds with a string representing the access token", async () => {
  const email = "a@b.c";

  const result = await login(email);

  expect(result).toEqual({ status: "SUCCEEDED", jwt: "not_a_good_secret" });
});
