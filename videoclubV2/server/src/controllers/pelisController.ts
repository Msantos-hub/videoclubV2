import {request, Request, Response} from 'express';

import pool from "../database";

class PelisController{

    public async list (req:Request, res:Response){
       const pelis = await pool.query('SELECT * FROM peliculas');
       res.json(pelis);
    }
    public async getOne (req:Request, res:Response){
       const{id} = req.params;
       const pelis = await pool.query('SELECT * FROM peliculas WHERE codPelicula = ?', [id]);
       if(pelis.length > 0 ){
           return res.json(pelis[0]);
       }
       res.status(404).json({text: 'Pelicula encontrada '});

    }

    public async create (req:Request, res:Response){
        await pool.query('INSERT INTO peliculas set ?',[request.body])
        res.json({message: 'pelicula guardada'});
    }

    public delete (req:Request, res:Response){
        res.json({text: 'eliminando pelicula ' + req.params.id});
    }
    public update (req:Request, res:Response){

        res.json({text: 'modificando pelicula ' + req.params.id});
    }

}

const pelisController = new PelisController();
export default pelisController;
