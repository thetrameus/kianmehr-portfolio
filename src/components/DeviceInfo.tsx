// src/utils/DeviceInfo.tsx
import { useEffect } from "react";
import { UAParser } from "ua-parser-js";

export default function DeviceInfo() {
  useEffect(() => {
    const parser = new UAParser();
    const uaResult = parser.getResult();

    // --- ۱) User-Agent سنتی ---
    console.group("📱 Device Info (User-Agent)");
    console.log("Brand :", uaResult.device.vendor || "Unknown");
    console.log("Model :", uaResult.device.model || "Unknown");
    console.log("Type  :", uaResult.device.type || "Desktop");
    console.log("OS    :", uaResult.os.name || "Unknown");
    console.log("UA    :", navigator.userAgent);
    console.groupEnd();

    // --- ۲) Client Hints (مدل دقیق در صورت پشتیبانی) ---
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
          console.group("🎯 Device Info (Client Hints)");
          console.log("Architecture :", hints.architecture || "—");
          console.log("Model        :", hints.model || "—");
          console.log("Platform     :", hints.platform || "—");
          console.log("Plat Version :", hints.platformVersion || "—");
          console.log("Full UA      :", hints.uaFullVersion || "—");
          console.log(
            "Brands       :",
            hints.fullVersionList
              ?.map((b: any) => `${b.brand} ${b.version}`)
              .join(" | ") || "—"
          );
          console.groupEnd();
        })
        .catch((err: any) => {
          console.warn("❌ Client Hints denied or not supported:", err);
        });
    } else {
      console.warn("⚠️ Client Hints not available in this browser.");
    }
  }, []);

  return null; // هیچ UI ندارد
}
