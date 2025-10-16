// src/components/DeviceInfo.tsx
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

export default function DeviceInfo() {
  useEffect(() => {
    const parser = new UAParser();
    const uaResult = parser.getResult();

    const payload: any = {
      ua: navigator.userAgent,
      lang: navigator.language,
      platform: navigator.platform,
      vendor: uaResult.device.vendor || null,
      model: uaResult.device.model || null,
      type: uaResult.device.type || "desktop",
      os: uaResult.os.name || null,
      osVersion: uaResult.os.version || null,
      browser: uaResult.browser.name || null,
      browserVersion: uaResult.browser.version || null,
      cpu: uaResult.cpu.architecture || null,
      engine: uaResult.engine.name || null,
      timestamp: new Date().toISOString(),
    };

    // Client Hints (در صورت پشتیبانی)
    if ("userAgentData" in navigator) {
      const uad = (navigator as any).userAgentData;
      uad
        .getHighEntropyValues([
          "architecture",
          "model",
          "platform",
          "platformVersion",
          "uaFullVersion",
          "fullVersionList",
        ])
        .then((hints: any) => {
          payload.ch_architecture = hints.architecture || null;
          payload.ch_model = hints.model || null;
          payload.ch_platform = hints.platform || null;
          payload.ch_platformVersion = hints.platformVersion || null;
          payload.ch_uaFullVersion = hints.uaFullVersion || null;
          payload.ch_fullVersionList = hints.fullVersionList || null;

          sendToServer(payload);
        })
        .catch((err: any) => {
          payload.ch_error = err.message || "Hints denied";
          sendToServer(payload);
        });
    } else {
      payload.ch_error = "Client Hints not supported";
      sendToServer(payload);
    }

    // ---------- ارسال به سرور ----------
    function sendToServer(data: any) {
      fetch("https://tests.fourty7.ir/test/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.text())
        .then((resText) => {
          console.log("✅ Device context sent:", data);
          console.log("📝 Server response:", resText);

          // ذخیره لاگ محلی (اختیاری)
          //   const log = `[${new Date().toISOString()}] ${JSON.stringify(
          //     data
          //   )}\nServer: ${resText}\n\n`;
          //   const blob = new Blob([log], { type: "text/plain" });
          //   const url = URL.createObjectURL(blob);
          //   const a = document.createElement("a");
          //   a.href = url;
          //   a.download = "DEVICE_USER_CONTEXT_HORIZON.log";
          //   a.click();
          //   URL.revokeObjectURL(url);
        })
        .catch((err) => {
          console.error("❌ Failed to send device context:", err);
        });
    }
  }, []);

  return null; // هیچ UI ندارد
}
