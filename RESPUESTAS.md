# Reporte de Respuestas

Este archivo muestra el contenido de los archivos relevantes antes y después de
completar el laboratorio. Se mantuvieron los comentarios originales y se añadieron
notas con las respuestas.

---

## index.ts

### Antes
```typescript
import { Database } from "bun:sqlite";
const db = new Database("./Northwind_small.sqlite");
```

### Después
```typescript
import { Database } from "bun:sqlite";

// se exporta la instancia para que los tests puedan reutilizarla
export const db = new Database("./Northwind_small.sqlite");
```

---

## index.test.ts

### Antes
```typescript
import { expect, test, afterAll } from "bun:test";
import {  } from "./index";
```

### Después
```typescript
import { expect, test, afterAll } from "bun:test";
import { db } from "./index"; // uso de la base de datos exportada

// los comentarios originales del laboratorio se conservan y al final se
// agregan notas con las respuestas obtenidas durante la ejecución de las
// consultas.

// prueba 1: contar clientes
// el nombre correcto de la tabla es "Customer" y contiene 91 registros.
// la cifra fue verificada ejecutando un script auxiliar.
test("contar los clientes", () => {
    // act - ejecutamos la consulta SQL usando el nombre correcto
    const query = db.query<any, any>("select count(*) contador from Customer");
    // assert
    expect(query.all()[0].contador).toBe(91); // 91 registros en la tabla Customer
});

// prueba 2: contar productos
// la tabla se llama "Product" y contiene exactamente 77 registros según
// el script auxiliar query_test.ts.
test("contar los productos", () => {
    // act
    const query = db.query<any, any>("select count(*) contador from Product");
    const total = query.all()[0].contador;
    // assert
    expect(total).toBe(77); // 77 registros en la tabla Product
    // respuesta: total de productos = " + total;
});

// cerramos la conexión al terminar todos los tests
afterAll(() => {
    db.close();
});
```

---

> **Nota:** Todos los archivos originales conservan sus comentarios; las nuevas
> líneas con las soluciones están claramente identificadas.
