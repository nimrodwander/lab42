import { errorHandler } from "./errors";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
    errorHandler('REACT_APP_API_BASE_URL is not defined');
  
export const APPLICATION_BASE_URL =
  process.env.REACT_APP_APPLICATION_BASE_URL ||
  errorHandler('REACT_APP_APPLICATION_BASE_URL is not defined');

export const ITEMS_PER_PAGE =
  process.env.REACT_APP_ITEMS_PER_PAGE ||
  errorHandler('REACT_APP_ITEMS_PER_PAGE is not defined');