import express, { Request, Response } from "express";
import KioskService from "../services/kiosk.service";

const router = express.Router();

router.get("/kiosks", async (req: Request, res: Response) => {
  const kiosks = await KioskService.find({});
  res.status(200).send(kiosks);
});

router.get("/kiosks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const kiosk = await KioskService.findById(id);
    res.status(200).send(kiosk);
  } catch (err) {
    res.sendStatus(400);
  }
});

export default router;