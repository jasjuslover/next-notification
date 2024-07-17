"use client";

import useFcmToken from "@/hooks/useFcmToken";

export default function Home() {
  const { token } = useFcmToken();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="w-1/2 mb-3">{token}</p>
      <p>{process.env.FIREBASE_VAPID_KEY}</p>
    </main>
  );
}
