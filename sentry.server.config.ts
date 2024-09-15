// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://74345aaed7a61c66aa52a2470a2f3d69@o4507956708114432.ingest.de.sentry.io/4507956711129168",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
