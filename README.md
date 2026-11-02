# Cyberbezpieczeństwo — program referencyjny UCD i projekt adaptacji w Polsce

**Dokument roboczy do projektowania studiów II stopnia na kierunku Informatyka, specjalizacja Cyberbezpieczeństwo**  
**Wzorzec:** University College Dublin (UCD), *MSc Cybersecurity*, kod T380  
**Opracowanie:** 2 listopada 2026 r.  
**Język:** polski (oryginalne nazwy przedmiotów zachowano obok tłumaczeń)

> **Jak czytać dokument?** Sekcje oznaczone **[UCD]** streszczają oficjalne materiały uczelni; sekcje **[PROJEKT PL]** przedstawiają naszą koncepcję, a nie ofertę UCD. Opisy są autorskim polskim opracowaniem treści i efektów uczenia się, nie uwierzytelnionym tłumaczeniem sylabusów. Nie uwzględniono informacji o naborach, terminach rekrutacji ani opłatach.

## 1. Założenia uzgodnione dla polskiego programu [PROJEKT PL]

| Parametr | Ustalenie |
|---|---|
| Poziom | Studia drugiego stopnia (magisterskie) |
| Kierunek | Informatyka |
| Specjalizacja | Cyberbezpieczeństwo |
| Tryb | Niestacjonarny |
| Czas trwania | 2 lata, 4 semestry |
| ECTS studiów | **90** (przyjęty limit projektowy) |
| Charakter | Interdyscyplinarny: absolwenci informatyki i innych kierunków |
| Warunek merytoryczny | Weryfikacja kompetencji informatycznych przed studiami |
| Wyrównanie braków | **Kurs wakacyjny przed I semestrem**, indywidualnie dobrane moduły |
| Punkty kursu przygotowawczego | Nie są wliczane do 90 ECTS programu |
| Fundament merytoryczny | Zachowanie możliwie dużej zgodności z obszarami UCD |
| Ukończenie | Seminarium, praca magisterska i egzamin dyplomowy — według polskich wymogów i regulaminu uczelni |

**Założenie organizacyjne:** moduły wyrównawcze mają doprowadzić kandydatów do wymaganego poziomu wejściowego, a nie zastępować przedmioty magisterskie. Ostateczne reguły przyjęć, warunki ukończenia i sposób zaliczania kursów wymagają weryfikacji prawnej i wewnątrzuczelnianej.

## 2. Charakterystyka programu dublińskiego [UCD]

- **Nazwa:** Master of Science in Cybersecurity (T380).
- **Czas i forma:** 2 lata, part-time, blended learning.
- **Punkty:** 90 ECTS.
- **Organizacja dydaktyki:** wykłady online, materiały do samodzielnego odtworzenia oraz okazjonalne całodniowe warsztaty; część spotkań może odbywać się na żywo online.
- **Profil:** zarówno techniczny, jak i organizacyjno-zarządczy; program opracowywano we współpracy z praktykami branży i służb.
- **Przykładowe role absolwenta:** analityk bezpieczeństwa, inżynier bezpieczeństwa, specjalista ds. bezpieczeństwa IT, menedżer bezpieczeństwa.

### 2.1. Czego uczy program UCD — syntetycznie

Absolwent potrafi analizować ryzyko i dobierać zabezpieczenia, rozumieć modele bezpieczeństwa informacji, stosować wybrane rozwiązania kryptograficzne, oceniać bezpieczeństwo sieci i aplikacji, wyszukiwać podatności oraz proponować poprawki, współorganizować reagowanie na incydenty, interpretować regulacje i komunikować ryzyko kadrze zarządzającej. Zna również ograniczenia technik ochrony i potrafi oceniać nowe trendy oraz prowadzić projekt badawczy lub praktyczny.

### 2.2. Faktyczna konstrukcja 90 ECTS na UCD

**Pierwszy rok (45 ECTS):**

| Oryginalny moduł | Kod | ECTS | Trymestr UCD |
|---|---|---:|---|
| Cyber Risk Assessment and Standards | COMP47900 | 5 | Jesień |
| Information Security | COMP47920 | 10 | Jesień |
| Leadership in Security | COMP47800 | 5 | Wiosna |
| Cybersecurity Law and Regulation | LAW42160 | 10 | Wiosna |
| Applied Cryptography | COMP47890 | 5 | Lato |
| Secure Software Engineering | COMP47910 | 10 | Lato |
| **Razem** | | **45** | |

**Drugi rok — część wspólna (15 ECTS):**

| Oryginalny moduł | Kod | ECTS | Trymestr UCD |
|---|---|---:|---|
| Incident Response | COMP47870 | 5 | Jesień |
| Network Security | COMP47880 | 10 | Jesień |
| **Razem** | | **15** | |

**Drugi rok — wybór 30 ECTS:**

| Oryginalny moduł | Kod | ECTS | Trymestr UCD |
|---|---|---:|---|
| Cybersecurity Professional Project | COMP47820 | 30 | Wiosna–lato |
| Cybersecurity Research Project | COMP47830 | 30 | Wiosna–lato |
| Malware Analysis | COMP47810 | 5 | Wiosna |
| Trends in Cybersecurity | COMP47850 | 5 | Wiosna |
| Ethical Hacking | COMP47860 | 5 | Wiosna |
| Cybersecurity Case Study | COMP47840 | 15 | Lato |

Dostępne schematy końcowe obejmują: **60 ECTS modułów + projekt zawodowy/badawczy 30 ECTS**, albo **75 ECTS modułów + case study 15 ECTS**. Nie należy dodawać do siebie wszystkich modułów z tabeli: są to alternatywy, nie lista 14 obowiązkowych zajęć.

## 3. Pełny katalog 14 modułów — polskie opracowanie [UCD]

### 3.1. Ocena ryzyka cybernetycznego i standardy — Cyber Risk Assessment and Standards (COMP47900, 5 ECTS)

**Czego student się uczy:**
- Identyfikowania zasobów, zagrożeń, podatności i potencjalnych skutków incydentów.
- Wyznaczania granic ocenianego systemu i opracowania planu bezpieczeństwa systemu (*System Security Plan*).
- Szacowania prawdopodobieństwa i skutków naruszenia poufności, integralności i dostępności.
- Stosowania podejść do zarządzania ryzykiem według NIST i ISO.
- Dobierania reakcji na ryzyko, środków kontroli i wskaźników monitorowania.
- Dokumentowania wyników analizy i uzasadniania decyzji.

**Rezultat praktyczny:** zespołowa ocena ryzyka dla organizacji oraz plan zabezpieczeń.  
**Przykład oceny UCD:** egzamin, zadania grupowe i dziennik refleksji.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47900&p_tag=MODULE

### 3.2. Bezpieczeństwo informacji — Information Security (COMP47920, 10 ECTS)

**Czego student się uczy:**
- Modeli bezpieczeństwa i zasad projektowania bezpiecznych systemów.
- Zasady najmniejszych uprawnień, bezpiecznych wartości domyślnych i kontroli dostępu.
- Roli kryptografii i protokołów bezpieczeństwa.
- Typowych podatności oprogramowania i sieci.
- Bezpieczeństwa użytecznego dla człowieka, socjotechniki i czynnika ludzkiego.
- Zależności między ochroną prywatności a nadzorem.
- Analizy rzeczywistych incydentów oraz praktyk organizacyjnych.

**Rezultat praktyczny:** umiejętność oceny architektury systemu z perspektywy bezpieczeństwa i wskazania właściwych mechanizmów ochrony.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47920&p_tag=MODULE

### 3.3. Przywództwo i zarządzanie bezpieczeństwem — Leadership in Security (COMP47800, 5 ECTS)

**Czego student się uczy:**
- Oceny dojrzałości bezpieczeństwa organizacji, identyfikacji luk i priorytetyzacji działań.
- Monitorowania zagrożeń strategicznych i sytuacyjnej świadomości zagrożeń.
- Wykorzystywania ładu bezpieczeństwa (*security governance*) i ram organizacyjnych.
- Przedstawiania ryzyk oraz potrzeb inwestycyjnych kierownictwu.
- Budowania kultury bezpieczeństwa, zarządzania zespołem i współpracy z dostawcami.
- Rozróżniania spełnienia formalnych wymagań (*compliance*) od rzeczywistej odporności organizacji.

**Rezultat praktyczny:** studium przypadku dotyczące przywództwa, zmian organizacyjnych i decyzji opartych na analizie ryzyka.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47800&p_tag=MODULE

### 3.4. Prawo i regulacje cyberbezpieczeństwa — Cybersecurity Law and Regulation (LAW42160, 10 ECTS)

**Czego student się uczy:**
- Rozpoznawania norm prawnych i obowiązków związanych z cyberbezpieczeństwem.
- Rozumienia relacji bezpieczeństwa systemów, prywatności i ochrony danych.
- Analizowania odpowiedzialności organizacji, dostawców i administratorów.
- Oceny obowiązków związanych z incydentami, nadzorem i zgodnością z regulacjami.
- Przekładania obowiązków prawnych na wymagania organizacyjne i techniczne.

**Rezultat praktyczny:** analiza przypadku pokazująca, jak wymagania prawne wpływają na projektowanie i prowadzenie zabezpieczeń.  
**Adaptacja PL:** odrębnie opracować zakres RODO, KSC/NIS2, DORA (tam, gdzie ma zastosowanie) i polskich regulacji sektorowych.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=LAW42160&p_tag=MODULE

### 3.5. Kryptografia stosowana — Applied Cryptography (COMP47890, 5 ECTS)

**Czego student się uczy:**
- Celów mechanizmów kryptograficznych: poufność, integralność, uwierzytelnianie, niezaprzeczalność.
- Szyfrowania symetrycznego i asymetrycznego, funkcji skrótu oraz podpisów cyfrowych.
- Mocnych i słabych stron protokołów, wymiany i zarządzania kluczami.
- Dobierania rozwiązań kryptograficznych do ochrony systemów, oprogramowania i komunikacji.
- Analizy ograniczeń wdrożeniowych oraz ryzyka niewłaściwego użycia kryptografii.

**Rezultat praktyczny:** świadomy dobór i ocena rozwiązań kryptograficznych dla scenariusza bezpieczeństwa.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47890&p_tag=MODULE

### 3.6. Inżynieria bezpiecznego oprogramowania — Secure Software Engineering (COMP47910, 10 ECTS)

**Czego student się uczy:**
- Modelowania zagrożeń i identyfikacji wymagań bezpieczeństwa aplikacji.
- Rozróżniania błędów architektonicznych i implementacyjnych.
- Rozpoznawania klas podatności, w tym OWASP Top 10.
- Testów penetracyjnych aplikacji oraz podejść SAST, DAST i IAST.
- Projektowania zabezpieczeń, przygotowywania poprawek i regresyjnej weryfikacji bezpieczeństwa.
- Praktycznej analizy aplikacji webowych; w materiałach UCD występuje **Spring Boot**.
- Współpracy w zespole nad identyfikacją, odtwarzaniem i usuwaniem podatności.

**Rezultat praktyczny:** demonstracja podatności, raport, poprawka w kodzie i dowód skuteczności poprawki.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47910&p_tag=MODULE

### 3.7. Reagowanie na incydenty — Incident Response (COMP47870, 5 ECTS)

**Czego student się uczy:**
- Etapów przygotowania, wykrywania, analizy, ograniczania skutków i odtwarzania działania.
- Organizacji zespołu reagowania, eskalacji i komunikacji podczas incydentu.
- Gromadzenia danych pozwalających ustalić przebieg zdarzenia i zakres kompromitacji.
- Dokumentowania przebiegu incydentu, decyzji oraz działań po incydencie.
- Wykorzystywania wniosków do doskonalenia procesów bezpieczeństwa.

**Rezultat praktyczny:** scenariusz reagowania na incydent, raport oraz plan usprawnień.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47870&p_tag=MODULE

### 3.8. Bezpieczeństwo sieci — Network Security (COMP47880, 10 ECTS)

**Czego student się uczy:**
- Analizowania zagrożeń i słabości komunikacji sieciowej.
- Zabezpieczania architektury sieci, usług i protokołów internetowych.
- Stosowania kontroli dostępu, segmentacji i mechanizmów ochrony transmisji.
- Rozumienia monitorowania, wykrywania ataków i systemów IDS/IPS.
- Oceny konfiguracji i odporności infrastruktury sieciowej, w tym nowoczesnych protokołów.

**Rezultat praktyczny:** analiza zagrożeń i zabezpieczeń przykładowej infrastruktury sieciowej.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47880&p_tag=MODULE

### 3.9. Analiza złośliwego oprogramowania — Malware Analysis (COMP47810, 5 ECTS; do wyboru)

**Czego student się uczy:**
- Identyfikowania typów złośliwego oprogramowania i jego zachowań.
- Bezpiecznego przygotowania środowiska do analizy.
- Obserwowania wskaźników kompromitacji i skutków działania próbek.
- Formułowania wniosków wspierających wykrywanie i reagowanie.

**Rezultat praktyczny:** raport z analizy próbki lub scenariusza infekcji w izolowanym środowisku.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47810&p_tag=MODULE

### 3.10. Trendy w cyberbezpieczeństwie — Trends in Cybersecurity (COMP47850, 5 ECTS; do wyboru)

**Czego student się uczy:**
- Samodzielnego rozpoznawania i krytycznej oceny nowych technologii i badań.
- Analizy wybranych zagadnień, np. blockchain, ransomware, LLM w bezpieczeństwie, Secure SDLC/DevSecOps, bezpieczeństwo IoT, adversarial ML.
- Oceniania zalet, ograniczeń i zastosowań rozwiązań.
- Prezentowania aktualnego problemu badawczego oraz argumentacji na podstawie literatury.

**Rezultat praktyczny:** prezentacja trendu i opracowanie krytycznej analizy tematu.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47850&p_tag=MODULE

### 3.11. Etyczny hacking — Ethical Hacking (COMP47860, 5 ECTS; do wyboru)

**Czego student się uczy:**
- Metodycznego i autoryzowanego sprawdzania bezpieczeństwa systemów.
- Rozpoznania powierzchni ataku, walidacji podatności i określania ich wpływu.
- Dokumentowania technicznych ustaleń w formie raportu z rekomendacjami.
- Przestrzegania zasad etyki oraz granic prawnych testowania.

**Rezultat praktyczny:** raport z testu środowiska laboratoryjnego.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47860&p_tag=MODULE

### 3.12. Studium przypadku z cyberbezpieczeństwa — Cybersecurity Case Study (COMP47840, 15 ECTS; opcja końcowa)

**Czego student się uczy:**
- Samodzielnego sformułowania i zbadania rzeczywistego problemu bezpieczeństwa.
- Doboru metod poznanych podczas zajęć, ich praktycznego zastosowania i oceny skuteczności.
- Krytycznej analizy ograniczeń zastosowanych rozwiązań.
- Sporządzenia spójnego raportu obejmującego problem, metody, wdrożenie, wyniki i wnioski.

**Rezultat praktyczny:** indywidualny raport ze studium przypadku. W UCD moduł ten może wystąpić jako część wariantu z dodatkowymi modułami nauczanymi.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47840&p_tag=MODULE

### 3.13. Zawodowy projekt cyberbezpieczeństwa — Cybersecurity Professional Project (COMP47820, 30 ECTS; alternatywa)

**Czego student się uczy:**
- Samodzielnego rozwiązania rozbudowanego problemu bezpieczeństwa o charakterze zawodowym.
- Planowania prac, uzasadniania doboru metod i komunikowania wyników interesariuszom.
- Łączenia kompetencji technicznych, organizacyjnych i analitycznych.

**Rezultat praktyczny:** rozbudowany projekt praktyczny, potencjalnie realizowany przy współpracy z branżą. To alternatywa dla modułów wybieralnych i case study, a nie dodatkowe 30 ECTS.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47820&p_tag=MODULE

### 3.14. Badawczy projekt cyberbezpieczeństwa — Cybersecurity Research Project (COMP47830, 30 ECTS; alternatywa)

**Czego student się uczy:**
- Formułowania pytania badawczego, przeglądu literatury i planowania metodyki.
- Prowadzenia prac eksperymentalnych lub analitycznych.
- Oceny rezultatów i ograniczeń badania.
- Opracowania i obrony wniosków w formie naukowej.

**Rezultat praktyczny:** samodzielny projekt badawczy pod opieką akademicką. To alternatywa dla projektu zawodowego oraz wariantu z case study.  
**Źródło:** https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47830&p_tag=MODULE

## 4. Przyjmowanie absolwentów różnych kierunków [PROJEKT PL]

**Założenie:** dopuszczamy absolwentów m.in. informatyki, automatyki, telekomunikacji, elektroniki, matematyki, a także prawa i zarządzania, o ile wykażą wymagane kompetencje. Dyplom z określonego kierunku sam w sobie nie gwarantuje przyjęcia ani zwolnienia z weryfikacji.

### 4.1. Model weryfikacji kompetencji

1. **Analiza dokumentów:** ukończone przedmioty, projekty, certyfikaty, doświadczenie zawodowe.
2. **Diagnostyka wiedzy:** zadania obejmujące programowanie, sieci, systemy, bazy danych i infrastrukturę.
3. **Część praktyczna:** proste zadania w środowisku Linux, analiza ruchu i konfiguracji sieci oraz niewielki skrypt.
4. **Indywidualna decyzja:** brak braków / zestaw kursów wyrównawczych / brak spełnienia wymagań wejściowych.
5. **Ponowna weryfikacja:** zaliczenie konkretnych efektów uczenia się po wakacyjnym przygotowaniu.

**Propozycja minimalnych umiejętności wejściowych:**
- Czytanie i pisanie prostych skryptów, instrukcje warunkowe, iteracja, funkcje, podstawowe struktury danych.
- Poruszanie się w powłoce Linux, zarządzanie plikami i uprawnieniami, podstawowa diagnostyka procesów.
- Znajomość TCP/IP, adresacji, DNS, HTTP(S), routingu i podstaw diagnostyki sieci.
- Proste zapytania SQL, podstawy modelowania danych.
- Rozumienie wirtualizacji, kontenerów i architektury klient–serwer.

### 4.2. Kurs wakacyjny — projekt modułów wyrównawczych

| Moduł | Zakres i wynik praktyczny | Proponowany sposób zaliczenia |
|---|---|---|
| W1. Programowanie i algorytmika | Python; skrypt przetwarzający pliki i logi; podstawowe struktury danych | Zadanie programistyczne |
| W2. Systemy operacyjne i Linux | Powłoka, procesy, usługi, prawa dostępu, podstawy automatyzacji | Laboratorium na VM |
| W3. Sieci komputerowe | TCP/IP, subnetting, DNS, HTTP(S), podstawy diagnostyki | Analiza ruchu i konfiguracji |
| W4. Bazy danych | SQL, klucze, relacje, bezpieczny dostęp do danych | Zadania SQL |
| W5. Infrastruktura IT | Maszyny wirtualne, Docker, klient–serwer, podstawy usług | Uruchomienie środowiska testowego |

**Organizacja:** lipiec–wrzesień przed I semestrem; nauka online/asynchroniczna, konsultacje i warsztaty praktyczne; przydział tylko brakujących modułów. **Kurs nie zabiera punktów z 90 ECTS**. Liczbę godzin oraz kryteria zaliczenia ustalić po diagnozie minimalnych kompetencji i możliwości organizacyjnych.

### 4.3. Różnica wobec UCD

UCD zasadniczo oczekuje wykształcenia w informatyce lub kierunku pokrewnym (przewidując indywidualną ocenę kwalifikacji). **Szeroka rekrutacja międzykierunkowa oraz wakacyjna ścieżka wyrównawcza są naszym rozwiązaniem**, nie elementem oryginalnej konstrukcji MSc Cybersecurity.

## 5. Robocza siatka czterech semestrów na 90 ECTS [PROJEKT PL]

> To **propozycja adaptacji**, a nie oficjalny rozkład zajęć UCD. UCD ma trzy trymestry w roku i odrębną strukturę modułów końcowych. W polskiej wersji celowo przenosimy część przedmiotów między semestrami, by zachować zależności merytoryczne i wyodrębnić pracę magisterską.

### Semestr I — 25 ECTS

| Przedmiot | Powiązanie z UCD | ECTS |
|---|---|---:|
| Bezpieczeństwo informacji | COMP47920 | 10 |
| Ocena ryzyka cybernetycznego i standardy | COMP47900 | 5 |
| Przywództwo i zarządzanie bezpieczeństwem | COMP47800 | 5 |
| Kryptografia stosowana | COMP47890 | 5 |
| **Razem** | | **25** |

### Semestr II — 20 ECTS

| Przedmiot | Powiązanie z UCD | ECTS |
|---|---|---:|
| Prawo i regulacje cyberbezpieczeństwa | LAW42160 | 10 |
| Inżynieria bezpiecznego oprogramowania | COMP47910 | 10 |
| **Razem** | | **20** |

### Semestr III — 25 ECTS

| Przedmiot | Powiązanie z UCD | ECTS |
|---|---|---:|
| Bezpieczeństwo sieci | COMP47880 | 10 |
| Reagowanie na incydenty | COMP47870 | 5 |
| Analiza złośliwego oprogramowania | COMP47810 | 5 |
| Etyczny hacking | COMP47860 | 5 |
| **Razem** | | **25** |

### Semestr IV — 20 ECTS

| Przedmiot | Powiązanie z UCD | ECTS |
|---|---|---:|
| Trendy w cyberbezpieczeństwie | COMP47850 | 5 |
| Seminarium i praca magisterska — blok dyplomowy | Inspiracja: COMP47840 / COMP47830 | 15 |
| **Razem** | | **20** |

**Suma: 25 + 20 + 25 + 20 = 90 ECTS.**

**Ważny kompromis:** siatka utrzymuje 60 ECTS wspólnych treści UCD (45 ECTS z pierwszego roku + 15 ECTS z drugiego), trzy moduły wybieralne UCD (15 ECTS), a 15 ECTS przeznacza na pracę magisterską. Nie oznacza to, że 15 ECTS automatycznie wystarczy na wymagane polskimi przepisami seminarium i pracę; tę wartość trzeba zweryfikować podczas konstruowania formalnego programu, a prace przygotowawcze do magisterium mogą zacząć się wcześniej. Możliwa będzie korekta bilansu, np. przez inne rozmieszczenie seminarium.

### 5.1. Stopień zgodności z UCD

| Element | Ocena zgodności |
|---|---|
| Główne obszary kompetencji | Wysoka: zachowany pełny rdzeń 60 ECTS |
| Bezpieczeństwo techniczne i zarządzanie | Zachowane obydwa filary |
| Forma niestacjonarna | Podobna funkcja; lokalna organizacja zjazdów będzie inna |
| Punktacja | 90 ECTS w obu programach |
| Sekwencja zajęć | Zmodyfikowana z trymestrów na semestry |
| Moduły wybieralne | W roboczej siatce wybrane 3 moduły po 5 ECTS; ostatecznie można zapewnić studentom wybór |
| Projekt końcowy | Zmieniony na wymagania polskiej pracy magisterskiej |
| Przyjęcia i wyrównanie braków | Nasze własne rozwiązanie organizacyjne |

## 6. Co jeszcze wymaga decyzji [PROJEKT PL]

1. **Efekty kierunkowe dla Informatyki II stopnia:** mapowanie do PRK 7 oraz wymagań dla właściwego profilu studiów.
2. **Rozkład seminariów i pracy dyplomowej:** prawdopodobnie prace nad tematem i metodologią warto rozpocząć przed IV semestrem.
3. **Tryb zaoczny:** liczba godzin kontaktowych, proporcja wykładów i laboratoriów, liczba zjazdów, praca własna studenta.
4. **Wybieralność:** sprawdzenie wymaganej puli przedmiotów do wyboru i wprowadzenie rzeczywistych wariantów.
5. **Kompetencje wejściowe:** konkretne progi i zadania diagnostyczne oraz formalna zgodność procedury rekrutacji.
6. **Regulacje polskie:** aktualizacja treści prawnych i organizacyjnych, bez mechanicznego kopiowania irlandzkich rozwiązań.
7. **ECTS a nakład pracy:** ostateczna alokacja punktów musi wynikać z rzeczywistego nakładu pracy, nie tylko z symetrii tabeli.

## 7. Referencje — oficjalne źródła UCD

- [MSc Cybersecurity — opis programu i lista modułów (T380)](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MAJR=T380&p_tag=COURSE)
- [Information Security](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47920&p_tag=MODULE)
- [Cyber Risk Assessment and Standards](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47900&p_tag=MODULE)
- [Secure Software Engineering](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47910&p_tag=MODULE)
- [Leadership in Security](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47800&p_tag=MODULE)
- [Trends in Cybersecurity](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47850&p_tag=MODULE)
- [Cybersecurity Case Study](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47840&p_tag=MODULE)

---

**Status dokumentu:** punkt wyjścia do projektowania polskiej specjalizacji, nie gotowy sylabus wymagający jedynie zatwierdzenia. Wszystkie propozycje dla Polski oznaczono **[PROJEKT PL]**, aby nie przypisywać ich UCD.
