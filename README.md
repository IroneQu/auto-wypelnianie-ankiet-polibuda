# 🚀 Automatyczny Wypełniacz Ankiet EHMS

Kompleksowe narzędzie automatyzujące proces wypełniania ankiet EHMS. Skrypt samodzielnie odnajduje odpowiednie pola formularza, błyskawicznie je zaznacza i podsumowuje wynik, oszczędzając Twój czas.

Narzędzie oferuje dwie niezależne metody działania do wyboru:
1. **Rozszerzenie do przeglądarki** (wygodny panel na dole ekranu, wymaga instalacji plików).
2. **Skryptozakładka / Bookmarklet** (najszybsza metoda, działa na telefonach, używa czystego kodu ukrytego w zakładce).

---

## 🛠️ METODA 1: Rozszerzenie do przeglądarki

Rozszerzenie wstrzykuje półprzezroczysty, pływający panel na dole strony, który uaktywnia się wyłącznie po wejściu w formularz ankiety.

### 💻 Instalacja na komputerze (Chrome, Edge, Brave, Opera)
1. Pobierz folder z plikami rozszerzenia (`manifest.json`, `content.js`) i zapisz go w bezpiecznym miejscu na dysku.
2. Otwórz przeglądarkę i w pasku adresu wpisz `chrome://extensions/` (lub `edge://extensions/` dla przeglądarki Edge).
3. W prawym górnym rogu włącz **Tryb dewelopera** (Developer mode).
4. Kliknij przycisk **Załaduj rozpakowane** (Load unpacked).
5. Wskaż pobrany folder z plikami.

### 📱 Instalacja na telefonie (Android - wymaga Kiwi Browser)
Standardowy Google Chrome na Androidzie nie obsługuje rozszerzeń.
1. Spakuj pliki rozszerzenia do archiwum `.zip` i prześlij na swój telefon.
2. Pobierz darmową aplikację **Kiwi Browser** ze sklepu Google Play.
3. W Kiwi Browser wejdź w menu (trzy kropki) i wybierz **Rozszerzenia**.
4. Włącz **Tryb dewelopera**.
5. Kliknij **+ (from .zip/.crx/.user.js)** i wybierz przygotowany plik `.zip`.

### 🖱️ Jak używać rozszerzenia?
Zaloguj się do systemu EHMS i wejdź w dowolną ankietę. Na dole ekranu samoczynnie pojawi się panel. Kliknij **Wypełnij Ankietę**. Jeśli zaznaczysz checkbox "Od razu wyślij", skrypt sam zatwierdzi i wyśle formularz.

---

## 🔖 METODA 2: Skryptozakładka (Bookmarklet)

Opcja idealna, jeśli nie chcesz pobierać i utrzymywać żadnych plików. Kod jest przechowywany w formie zwykłej zakładki w przeglądarce. Działa świetnie zarówno na komputerach, jak i na domyślnym Google Chrome w smartfonach.

### 📜 Kod Skryptozakładki (Niezaszyfrowany)
Skopiuj w całości poniższy kod (od `javascript:` aż do samego końca):

```javascript
javascript:(function(){const urlParams=new URLSearchParams(window.location.search);if(!urlParams.has('tab')||!urlParams.has('ankID')){alert('To nie jest strona ankiety EHMS!');return;}const bazowePola=[[0,1],[1,1],[2,1],[3,1],[5,1],[6,4]];let ilosc=0;for(let g=0;g<10;g++){bazowePola.forEach(p=>{let el=document.getElementById(`pole_${p[0]+g*7}_${p[1]}`);if(el){el.checked=true;el.dispatchEvent(new Event('change',{bubbles:true}));ilosc++;}});}alert(`Gotowe! Zaznaczono ${ilosc} pól. Możesz wysłać formularz.`);})();
```

### 💻 Tworzenie zakładki na komputerze
1. Włącz Pasek zakładek w przeglądarce (skrót na klawiaturze: Ctrl + Shift + B).
2. Kliknij prawym przyciskiem myszy na pasek i wybierz Dodaj stronę... (lub Dodaj zakładkę).
3. W polu Nazwa wpisz cokolwiek, np. AnkietyEHMS.
4. W polu Adres URL wklej cały skopiowany wcześniej kod.
5. Kliknij Zapisz.

### 📱 Tworzenie zakładki na telefonie (np. Chrome Android)
1. Wejdź na dowolną stronę w przeglądarce (np. google.com).
2. Rozwiń menu (trzy kropki) i dodaj stronę do zakładek klikając w ikonę gwiazdki.
3. Wejdź w Zakładki (lub kliknij "Edytuj" na komunikacie u dołu ekranu) i zacznij edytować przed chwilą dodaną stronę.
4. W polu Nazwa wpisz cokolwiek, np. AnkietyEHMS.
5. W polu Adres URL usuń stary link i wklej cały skopiowany kod skryptozakładki.
6. Zapisz zmiany.

### 🚀 Jak używać skryptozakładki?
1. Zaloguj się do EHMS i wejdź w docelową ankietę.
2.1. Na komputerze: Kliknij w przycisk Wypełnij EHMS widoczny na pasku zakładek.
2.2. Na telefonie: W pasku adresu przeglądarki (tam, gdzie wpisujesz linki) zacznij wpisywać tekst AnkietyEHMS. Z wyświetlonej listy podpowiedzi wybierz swoją zakładkę z ikonką gwiazdki.
3. Skrypt natychmiast zaznaczy wszystkie pola i pokaże alert z podsumowaniem. Zamknij go i kliknij "Wyślij" na dole strony.
