import React, {createContext, useContext} from 'react';

const Store = createContext();

const useStore = ()=>{
    return useContext(Store);
}

export {Store, useStore};