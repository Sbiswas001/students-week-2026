import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig";

let analytics;
const app = initializeApp(firebaseConfig);

// Initialize analytics only if measurementId is provided and analytics is supported
async function initAnalytics() {
  if (!firebaseConfig.measurementId) return null;
  if (await isSupported()) {
    analytics = getAnalytics(app);
    return analytics;
  }
  return null;
}

initAnalytics().catch(() => {});

export { app, analytics };
