import { apiGet } from "./api";

export function getServices() {
  return apiGet("/services");
}

