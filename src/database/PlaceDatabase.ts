import { PlaceDB } from "../models/Place";
import { BaseDatabase } from "./BaseDatabase";

export class PlaceDatabase extends BaseDatabase {
  public static TABLE_PLACES = "places";

  public findPlaces = async (): Promise<PlaceDB[]> => {
    const result: PlaceDB[] = await BaseDatabase.connection(
      PlaceDatabase.TABLE_PLACES
    ).select();

    return result;
  };

  public insertPlace = async (newPlaceDB: PlaceDB): Promise<void> => {
    await BaseDatabase.connection(PlaceDatabase.TABLE_PLACES).insert(
      newPlaceDB
    );
  };
}
