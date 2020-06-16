import React, {useContext} from 'react';

import Contexto from '../../../../contexto'

const Profile = () => {

    const {usuario, numero} = useContext(Contexto);
    
    return (
        <>
            <h1>Page Profile</h1>
        </>
    );

};

export default Profile;