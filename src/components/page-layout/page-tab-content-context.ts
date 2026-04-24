import { createContext, useContext } from "react";

export const PageTabContentContext = createContext(false);

export function usePageTabContentContext() {
	return useContext(PageTabContentContext);
}
