import React, { useEffect, useState } from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

export default function AuthStateApp() {
  const [authState, setAuthState] = useState<AuthState>();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignIn && user ? (
    <div>
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
}
