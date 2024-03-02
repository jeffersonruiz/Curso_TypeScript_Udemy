import { Router } from "express";

const router = Router();

type Usuario = {
    id: number,
    name: string
}

router.get("/", (req, res) => {
    res.send("Hola mundo");
});

router.post("/", (req, res) => {
    const { name } = req.body as Usuario;
    console.log(name);
    
    res.send("ok");
})

export default router;