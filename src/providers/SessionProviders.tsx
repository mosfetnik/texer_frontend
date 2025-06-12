'use client'
import React from "react";



import { SessionProvider as NextAuthSessionProviders } from "next-auth/react";
const SessionProviders = ({ children }: { children: React.ReactNode }) => {
  return <NextAuthSessionProviders>{children}</NextAuthSessionProviders>;
};

export default SessionProviders;
