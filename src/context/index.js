"use client"
import React, { createContext } from 'react'

export const GlobalContext = createContext(null)

export const GlobalState = ({ children }) => {
	return (
		<GlobalContext.Provider value={{}}>
			{children}
		</GlobalContext.Provider>
	)
}