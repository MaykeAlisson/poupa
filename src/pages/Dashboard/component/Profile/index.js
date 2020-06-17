import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import useStyles from "./styles";

const Profile = () => {
    
    const classes = useStyles();

    const {usuario, numero} = useContext(Contexto);
    
    return (
        <>
            <h1>Page Profile</h1>
        </>
    );

};

export default Profile;