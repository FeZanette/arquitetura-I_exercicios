import { Request, Response } from "express";
import { PlaceBusiness } from "../business/PlaceBusiness";

export class PlaceController {
  public getPlaces = async (req: Request, res: Response) => {
    try {
      // modelagem do input
      const input = {
        // por enquanto não tem funcionalidade de busca, apenas GET ALL
      };

      // chamar a business
      const placeBusiness = new PlaceBusiness();
      const output = await placeBusiness.getPlaces(input);

      // devolver resposta
      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };

  public createPlace = async (req: Request, res: Response) => {
    try {
      // modelagem do input
      const input = {
        id: req.body.id,
        nome: req.body.nome,
        latitude: req.body.latitude,
        longitude: req.body.longitude
      };

      // chamar a business
      const placeBusiness = new PlaceBusiness();
      const output = await placeBusiness.createPlace(input);

      // devolver resposta
      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
