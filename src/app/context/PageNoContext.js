"use client";
import { createContext, useContext, useState } from 'react';

const MyPageNoContext = createContext({pageNo:0, setPageNo:()=>{}, pageSize:3, setPageSize:()=>{}});
// const MyPageNoContext = createContext();

export function PageNoContextProvider({children}){
    const [pageNo, setPageNo] = useState(0);
    const [pageSize, setPageSize] = useState(4);

    return(
        <MyPageNoContext.Provider value={{pageNo: pageNo, setPageNo: setPageNo, pageSize: pageSize, setPageSize: setPageSize}}>
            {children}
        </MyPageNoContext.Provider>
    )

}

export function usePageNo(){
    return useContext(MyPageNoContext);
}