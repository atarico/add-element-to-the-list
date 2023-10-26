import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useItem } from "../hooks/useItems";

describe('useItems hook', () => {
    test('should add amd remove items', () => {
        const { result } = renderHook(()=> useItem())

        expect(result.current.items.length).toBe(0)

        act(()=>{
            result.current.addItem('Jugar a videojuegos')
            result.current.addItem('ir a correr')
        })
        expect(result.current.items.length).toBe(2)

        act(()=>{
            result.current.removeItem(result.current.items[0].id)
        })
        expect(result.current.items.length).toBe(1)
    })
})