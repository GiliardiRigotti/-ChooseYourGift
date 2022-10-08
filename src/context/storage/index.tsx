import React, { createContext, useState, useCallback } from "react"

interface GameContextData {
    life: string[]
    getLife(): string[]
    addLife(): void
    subLife(): void
    resetLife(): void
}

export const GameContext = createContext({} as GameContextData)

export function GameProvider({ children }: any) {
    const [life, setLife] = useState<string[]>(["❤️", "❤️", "❤️", "❤️", "❤️"])

    function addLife() {
        life.push("❤️")
        setLife(life)
    }

    function subLife() {
        life.pop()
        setLife(life)
        console.log('Menos um coração')
    }

    function getLife() {
        return life
    }

    const resetLife = useCallback(() => {
        setLife(["❤️", "❤️", "❤️", "❤️", "❤️"])
    }, [life])

    return (
        <GameContext.Provider value={{ addLife, subLife, resetLife, life, getLife }}>
            {children}
        </GameContext.Provider>
    )
}