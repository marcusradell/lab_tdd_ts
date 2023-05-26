# Testlist for Passwordless Login

- Logging in with empty email fails with validation error code 'EMPTY_EMAIL'
- Logging in with email 'a' fails with validation error code 'NOT_AN_EMAIL'
- Logging in with email 'a@b' fails with validation error code 'NOT_AN_EMAIL'
- Logging in with email 'a@b.c' succeeds with a string representing the access token
