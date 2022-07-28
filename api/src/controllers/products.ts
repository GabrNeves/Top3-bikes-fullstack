import { Request, Response, NextFunction } from "express";
import ProductServices from "../services/products";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.json(await ProductServices.getProducts()).status(200);
  } catch (error) {
    console.log(error);
  }
};

export const createNewProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(await ProductServices.createProduct(req.body))
  } catch (error) {
    console.log(error)
  }
}