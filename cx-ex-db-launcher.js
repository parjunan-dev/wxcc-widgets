(function () {
  function init() {
    if (!window.WebexCCDesktop) {
      setTimeout(init, 500);
      return;
    }

    WebexCCDesktop.routing.subscribe((event) => {
      if (
        event &&
        event.type === "navigation" &&
        event.data &&
        event.data.path &&
        event.data.path.includes("cx-ex-dashboard")
      ) {
        window.open(
          "https://shared-wfe.verint.live",
          "verint-cxex",
          "noopener,noreferrer"
        );
      }
    });
  }

  init();
})();
