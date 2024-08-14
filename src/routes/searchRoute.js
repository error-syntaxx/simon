import Hyper from "hyper-express";
import Axios from "axios";

import { Controller } from "../services/Anroll.js";

const Router = new Hyper.Router();

Router.get("/search", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) return res.status(400).send("Parametro 'q' obrigatorio");

    const Response = await Axios.get(Controller.search(query));
    res.send(JSON.stringify(Response.data));
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar dados");
  }
});

export default Router;
