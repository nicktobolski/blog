import React from "react";
import { MixpanelProvider } from "../contexts/mixpanel.context";
import Script from "next/script";
import * as snippet from "@segment/snippet";
import FullStory from "react-fullstory";
function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY || "DEFAULT_WRITE_KEY",
    // note: the page option only covers SSR tracking.
    // Page.js is used to track other events using `window.analytics.page()`
    page: true,
  };

  if (process.env.NODE_ENV === "development") {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}
function MyApp({ Component, pageProps }) {
  return (
    <div>
      {process.env.ENVIRONMENT !== "development" && (
        <>
          <FullStory org={process.env.NEXT_PUBLIC_FULL_STORY_ORG_ID} />
        </>
      )}
      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />
      <MixpanelProvider>
        <Component {...pageProps} />
      </MixpanelProvider>
    </div>
  );
}

export default MyApp;
