import { Request, Response } from "express";
import { PlaceDatabase } from "../database/PlaceDatabase";
import { Place, PlaceDB } from "../models/Place";

export class PlaceBusiness {
  public getPlaces = async (input: any) => {
    // modelagem do input
    const {} = input;

    // fazer as regras de negócios

    // conexão com o database
    const placeDatabase = new PlaceDatabase();
    const placesDB = await placeDatabase.findPlaces();

    const places: Place[] = [];

    for (const placeDB of placesDB) {
      const place = new Place(
        placeDB.id,
        placeDB.nome,
        placeDB.latitude,
        placeDB.longitude
      );

      places.push(place);
    }

    // devolver resposta para a controller
    const output = {
      message: "Sucess",
      places,
    };
    return output;
  };

  public createPlace = async (input: any) => {
    // modelagem do input
    const { id, nome, latitude, longitude } = input;

    // fazer as validações (se id é string...)

    // instanciar para usar as informações
    const newPlace = new Place(id, nome, latitude, longitude);

    const newPlaceDB: PlaceDB = {
      id: newPlace.getId(),
      nome: newPlace.getNome(),
      latitude: newPlace.getLatitude(),
      longitude: newPlace.getLongitude(),
    };

    // conexão com o database
    const placeDatabase = new PlaceDatabase();
    const placesDB = await placeDatabase.insertPlace(newPlaceDB);

    
    // devolver resposta para a controller
    const output = {
      message: "Local cadastrado com sucesso",
      place: newPlace,
    };
    return output;
  };
}
