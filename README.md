# Opis Projektu:
> Program składa się z 3 programów: Aplikacji sklepu, magazynu i api.

> Główny punkt to aplikacja api, która ma jako jedyna połączona jest z bazą danych. To ta aplikacja udosępnia REST Api, a klientami są aplikacja sklepu i magazynu.

> Projekt ma na celu pomóc synchronizować sklep z magazynem. Strona magazynu posiada specjalny widok w który umożliwia tworzenie nowego produktu i wyswietlaja wszystkie produkty, w raz z ich ilością. Przycisk "INCREMENT" zwiększa ilość dostępnych produktów.
Strona sklepu posiada widok w którym wyświetlone są wszystkie produkty, w raz z ich ilością. Dostępny przycisk "DECREMENT" zmniejsza ilość dostępnych produktów.


# Aplikacja Shop:
### Hostuje pliki frontendu dla sklepu :
   - lista produktów + ilość
   - przycisk decrement

# Aplikacja Warehouse:
### Hostuje pliki forntentu dla magazynu :
   - lista produktów + ilość
   - przycisk increment

# Backend 
1. Backend udostępnia REST Api z którego korzytają zarówno witryny sklep i magazyn
2. ENDPOINTY:
   - GET /api/products -> zwraca listę wszystkich produktów
   - PUT /api/product/decrement?id=1&count=1 -> endpoint dla aplikacji sklepu, pozwala na zmniejszenie ilości produktów, np gdy klient dokonał zakupów
    - PUT /api/product/increment?id=1&count=1 -> endpoint dla aplikacji magazynu, pozwala na zwiększenie ilości produktów, np gdy przyjechała dostawa
    - POST /api/product/new -> endpoint dla magazynu, możemy dodać nowy produkt.
    </br>
    Przesyłamy poniższy objekt w request body
    ```json
    {
       "name": "kawa rozpuszczalna inka",
       "count": "5"
    }
    ```


# Baza Danych
Baza danych posiada tylko 1 tabelę.
### Tabela - Product 
```
{
  "id": number,
  "createdAt": date,
  "updatedAt": date,
  "product": string,
  "count": number
}
```


