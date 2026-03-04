import sqlite3
conn=sqlite3.connect('Northwind_small.sqlite')
c=conn.cursor()
c.execute("select name from sqlite_master where type='table';")
print('tables', c.fetchall())
c.execute('select count(*) from customers')
print('customers', c.fetchone()[0])
try:
    c.execute('select count(*) from products')
    print('products', c.fetchone()[0])
except Exception as e:
    print('error products', e)
try:
    c.execute('select count(*) from Product')
    print('Product', c.fetchone()[0])
except Exception as e:
    print('error Product', e)
