import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function requestPermission() {
  console.log("Requesting permission...");

  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }
}

export async function requestForToken(setTokenFound) {
  try {
    requestPermission();
    const token = await getToken(messaging, {
      vapidKey:
        "BAquQqAp_beE0fpXRDNKdHRvdTB6r-rHyDKC7FoO122ikgWKLaELYfWoAnzxeEqvf_CRARaEtK_nFolYw6O1XhM",
    });
    console.log(token);
    setTokenFound(true);
    return token;
  } catch (error) {
    setTokenFound(false);
    console.log(error);
  }
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
