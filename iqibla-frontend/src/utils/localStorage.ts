/**
 * Utility functions for safely accessing localStorage in both client and server environments
 */

/**
 * Safely get an item from localStorage
 * @param key The key to retrieve from localStorage
 * @param defaultValue Optional default value if key doesn't exist or localStorage is unavailable
 * @returns The value from localStorage or defaultValue if not found/available
 */
export const getItem = <T>(key: string, defaultValue?: T): T | null | undefined => {
  if (typeof window === 'undefined') {
    return defaultValue ?? null;
  }
  
  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue ?? null;
    }
    
    try {
      // Try to parse as JSON first
      return JSON.parse(item) as T;
    } catch {
      // If parsing fails, return as string
      return item as unknown as T;
    }
  } catch (error) {
    console.error(`Error getting item '${key}' from localStorage:`, error);
    return defaultValue ?? null;
  }
};

/**
 * Safely set an item in localStorage
 * @param key The key to set in localStorage
 * @param value The value to store (objects will be JSON stringified)
 * @returns true if successful, false otherwise
 */
export const setItem = (key: string, value: unknown): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    const valueToStore = typeof value === 'object' ? JSON.stringify(value) : String(value);
    localStorage.setItem(key, valueToStore);
    return true;
  } catch (error) {
    console.error(`Error setting item '${key}' in localStorage:`, error);
    return false;
  }
};

/**
 * Safely remove an item from localStorage
 * @param key The key to remove from localStorage
 * @returns true if successful, false otherwise
 */
export const removeItem = (key: string): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing item '${key}' from localStorage:`, error);
    return false;
  }
};

/**
 * Safely clear all items from localStorage
 * @returns true if successful, false otherwise
 */
export const clear = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};