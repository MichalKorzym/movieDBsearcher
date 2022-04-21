# movieDBsearcher
1. Klonujemy repo prze HTTPS https://github.com/MichalKorzym/movieDBsearcher.git. ```git clone https://github.com/MichalKorzym/movieDBsearcher.git ```.
2. Po pobraniu repo wchodzimy do folderu z projektem wykonujemy```npm install```.
3. Kompilacja i obsluga aplikacji ```ng serve ``` , lub na konsoli  cmd ```ng.cmd serve```.
4. Przechodzimy na Development Server, który nasłuchuje domyślnie na porcie 4200 poprzez kliknięcie na adress http wyświetlany w konsoli + ctrl.

Działanie aplikacji, po krótce:

Korzystajac z ngFormsow nasłuchuje zmian na inpucie, po czasie 100ms od zakończenia wykonywania akcji wysyłany jest request z query, pobrana wartość z inputa służy do otrzymania wyników poprzez zapytanie GET do API. Ponadto dodałem funkcje filtrowania otrzymanych filmów pod względem języka. Zaznaczając opcje polish language otrzymamy wyłącznie filmy z językiem polskim, po odznaczeniu powracają pierwotnie znalezione filmy. 
Podczas gdy łącze będzie słabe powinien pojawić się load-spinner, który informuje użytkownika, że akcje są wykonywane.

Dodatkowo dodałem proste menu mające na celu poprawić wygląd projektu oraz przycisk, który przenosi nas na górę strony.
Całość jest "w miarę" responsywna, zamiast korzystać z media queries postanowiłem skorzystać z odwoływania się do  viewport-height oraz viewport-width aby zachować odpowiednie skalowanie obiektów.