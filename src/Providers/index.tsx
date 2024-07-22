"use client";
import { AuthProvider } from "@/contexts/auth";
import { store, persistor } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default Providers;
