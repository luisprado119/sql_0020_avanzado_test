import { Database } from "bun:sqlite";

// se exporta la instancia para que los tests puedan reutilizarla
export const db = new Database("./Northwind_small.sqlite");

