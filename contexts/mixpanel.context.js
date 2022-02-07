import React from "react";
import mixpanel from "mixpanel-browser";
const MixpanelContext = React.createContext();

function MixpanelProvider({ children }) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN, { debug: true });
  return (
    <MixpanelContext.Provider value={mixpanel}>
      {children}
    </MixpanelContext.Provider>
  );
}

function useMixpanel() {
  const context = React.useContext(MixpanelContext);
  if (context === undefined) {
    throw new Error("useMixpanel must be used within a MixpanelProvider");
  }
  return context;
}
export { MixpanelProvider, useMixpanel };
