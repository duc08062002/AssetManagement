import { CONFIG } from "./config";
import { PATHS } from "./path";

export const ENDPOINTS = {
  USER: CONFIG.API_URL + PATHS.USER,
  LOGIN: CONFIG.API_URL + PATHS.AUTH + PATHS.LOGIN,
  CATEGORIES: CONFIG.API_URL + PATHS.CATEGORIES,
  ASSETS: CONFIG.API_URL + PATHS.ASSETS,
  ASSIGNMENTS: CONFIG.API_URL + PATHS.ASSIGNMENTS,
  RETURNINGS: CONFIG.API_URL + PATHS.RETURNINGS,
  REPORTS: CONFIG.API_URL + PATHS.REPORTS,
};