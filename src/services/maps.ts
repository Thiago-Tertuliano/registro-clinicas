/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves map information for a given location.
 *
 * @param location The location for which to retrieve map data.
 * @returns A promise that resolves to a URL of a map.
 */
export async function getMapUrl(location: Location): Promise<string> {
  // TODO: Implement this by calling an API.

  return 'https://www.example.com/map';
}
