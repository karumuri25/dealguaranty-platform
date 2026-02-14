import { apiGet } from "./api";

export function getHealthStatus() {
  return apiGet("/health");
}

