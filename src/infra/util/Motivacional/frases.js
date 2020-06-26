import Typography from "@material-ui/core/Typography";
import React from "react";

const frases = [
    {id: 1, frese: 'A disciplina é a mãe do êxito. \n Ésquilo', autor: 'Ésquilo'},
    {id: 2, frese: 'Frase 2', autor: 'Autor2'},
    {id: 3, frese: 'Frase 3', autor: 'Autor3'},
    {id: 4, frese: 'Frase 4', autor: 'Autor4'},
    {id: 5, frese: 'Frase 5', autor: 'Autor5'},
    {id: 6, frese: 'Frase 6', autor: 'Autor6'},
    {id: 7, frese: 'Frase 7', autor: 'Autor7'},
    {id: 8, frese: 'Frase 8', autor: 'Autor8'},
    {id: 9, frese: 'Frase 9', autor: 'Autor9'},
    {id: 10, frese: 'Frase 10', autor: 'Autor10'},
    {id: 11, frese: 'Frase 11', autor: 'Autor11'},
];

class Motivacional {

    static getFrase(){
        let position = Math.floor(Math.random() * frases.length);
        return (
            <Typography key={`${frases[position].id}_frase`} variant="body2" component="p">
                {`"${frases[position].frese}"`}
                <br/>
                {`'${frases[position].autor}'`}
            </Typography>
        )
    }
    
    
}

export default Motivacional;

