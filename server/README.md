# Local proxy server for OpenAI requests

This small Express server proxies requests to the OpenAI API using an API key read from the environment. Do NOT commit your API key to the repository.

Setup (PowerShell):

1. Install dependencies:

   npm install

2. Temporarily set the API key for the session:

   $env:OPENAI_API_KEY = "sk-..."

3. Or create a `server/.env` file with the following content (gitignored):

   OPENAI_API_KEY=sk-...

4. Start the proxy:

   npm start

When running, POST to `http://localhost:3000/v1/chat/completions` from your client instead of the OpenAI endpoint.
