import { Database } from "bun:sqlite";
const db = new Database("./Northwind_small.sqlite");
console.log('tables', db.query<any, any>("select name from sqlite_master where type='table'").all());
// intento con nombre plural que falla
try {
    console.log('customers', db.query<any, any>("select count(*) as cnt from customers").all());
} catch (e) {
    console.error('error customers', e);
}
// nombre correcto singular
try {
    console.log('Customer', db.query<any, any>("select count(*) as cnt from Customer").all());
} catch (e) {
    console.error('error Customer', e);
}
// ahora también contamos productos
try {
    console.log('Product', db.query<any, any>("select count(*) as cnt from Product").all());
} catch (e) {
    console.error('error Product', e);
}
