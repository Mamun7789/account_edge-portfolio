import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const useMode = () => {
    return useContext(AuthContext)
};

export default useMode;
