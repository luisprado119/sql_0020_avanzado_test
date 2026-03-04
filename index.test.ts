import { expect, test, afterAll } from "bun:test";
import { db } from "./index"; // uso de la base de datos exportada

// los comentarios originales del laboratorio se conservan y al final se
// agregan notas con las respuestas obtenidas durante la ejecución de las
// consultas.

// prueba 1: contar clientes
// el nombre de la tabla en esta base de datos es "Customer" (singular).
// la consulta previa en otro entorno devolvía 91, y comprobamos aquí también
// que existan 91 registros.
test("contar los clientes", () => {
    // act - ejecutamos la consulta SQL usando el nombre correcto
    const query = db.query<any, any>("select count(*) contador from Customer");

    // assert - comparamos con el valor obtenido.
    expect(query.all()[0].contador).toBe(91); // 91 registros en la tabla Customer
});

// prueba 2: contar productos
// la tabla se llama "Product". Ejecutamos la consulta y verificamos
// que el total coincida con el valor obtenido manualmente (77 productos).
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


