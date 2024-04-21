import { errorHandler } from "./errors";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
    errorHandler('REACT_APP_API_BASE_URL is not defined');
  
export const APPLICATION_BASE_URL =
  process.env.REACT_APP_APPLICATION_BASE_URL ||
  errorHandler('REACT_APP_APPLICATION_BASE_URL is not defined');

export const IMAGE_URL =
  'https://yolongbrewtech.com/wp-content/uploads/2018/06/24HL-micro-brewery.jpg';
export const ITEMS_PER_PAGE = 12;