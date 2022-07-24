import React, { createContext } from "react";
export type globalContent = {
    userData: any,
    setUserData: Function
}
export const userContext: any = createContext<globalContent>({
    userData: {},
    setUserData: () => {},
}) 