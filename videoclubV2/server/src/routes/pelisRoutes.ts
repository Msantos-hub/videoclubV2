import {Router} from 'express';
import pelisController from "../controllers/pelisController";

class PelisRoutes{
    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void{
        this.router.get('/', pelisController.list);
        this.router.get('/:id', pelisController.getOne)
        this.router.post('/', pelisController.create);
        this.router.delete('/:id',pelisController.delete);
        this.router.put('/:id',pelisController.update);
    }

}

const pelisRoutes = new PelisRoutes();
export default pelisRoutes.router;
