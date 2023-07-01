import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b3211d8404894f93a42d4bdb81f3df17@o4505449629941760.ingest.sentry.io/4505449783623680",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
