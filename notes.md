# Aplikacja Shop:

### posiada frontend :
   - lista produktów + ilość
   - button z decrement
   - dodatkowo pole do wyszykiwania poduktu

# Aplikacja Warehouse:

### posiada frontend :
   - lista produktów + ilość
   - button z increment
   - dodatkowo pole do wyszykiwania poduktu

# Backend :
   - createProduct( name, count ) => Product
   - getAll() => Product[]
   - decrement( productId, count = 1 ) => number
   - increment( productId, count = 1 ) => number



# Baza Danych

### tabela Product
```
{
  "id": number,
  "product": string,
  "count": number
}
```


