// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://708facc24719ac5c67dfad48fd9442ac@o4510810393673728.ingest.us.sentry.io/4510810398982144",

  integrations: [
    Sentry.vercelAIIntegration({
      // Additional Replay configuration goes here
      recordInputs: true,
      recordOutputs: true,
    }),

    Sentry.consoleLoggingIntegration({
      levels: ["warn", "error", "info"],
    })
  ],
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
