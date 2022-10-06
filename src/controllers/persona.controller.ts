import { Request, Response } from 'express';
import connection from '../db/connection';

export const getPersonas = (req: Request, res: Response) => {
    
    connection.query('SELECT * FROM persona', (err, data)=>{
        if(err)throw err;
        res.json(data)
    })

}

export const getPersona = (req: Request, res: Response) => {
    
    const { id } = req.params;

    connection.query('SELECT * FROM persona WHERE id = ?',id,  (err, data)=>{
        if(err)throw err;
        res.json(data[0])
        
    })    
}

export const deletePersona = (req: Request, res: Response) => {
    
    
    const { id } = req.params;

    connection.query('DELETE FROM persona WHERE id=?',id, (err,)=>{
        if(err){
            throw err
        }else if(id === null){
            return (err)
        }else{
            res.json({
                msj: "Persona Eliminada",
                id: id
            });
        }

       
    })
    
}

export const postPersona = (req: Request, res: Response) => {
    
    
    const { body } = req;

    connection.query('INSERT INTO persona set ?',[body], (err,)=>{
        if(err)
            throw err;
            res.json({
                msj: "Agregado con Exito",
                body: body,
                
            });
        
})
}

export const putPersona = (req: Request, res: Response) => {
    
    console.log(req.body)
    const { body } = req;
    const { id } = req.params;

    connection.query("UPDATE persona set ? WHERE id=?",[body, id],(err)=>{
        if(err)
            throw err;
            res.json({
                msj: "Actualizado con Exito",
                body: body,
                
            });
    })
}