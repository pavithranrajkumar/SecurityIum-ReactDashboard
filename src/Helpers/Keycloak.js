import Keycloak from "keycloak-js";

const keycloakCredentials = new Keycloak({
  url: "https://auth.prosecurity.work",
  realm: "Prosecurity",
  clientId: "web-client",
  onLoad: "login-required",
});

export default keycloakCredentials;
