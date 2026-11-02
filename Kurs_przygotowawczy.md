---
layout: course
title: Wakacyjny kurs przygotowawczy
description: Indywidualna ścieżka wyrównawcza przed studiami magisterskimi z cyberbezpieczeństwa.
permalink: /kurs-przygotowawczy/
body_class: course-page
---

# Wakacyjny kurs przygotowawczy do studiów II stopnia – Informatyka, specjalizacja Cyberbezpieczeństwo

> **Status dokumentu:** projekt programu kursu wyrównawczego dla uczelni w Polsce; materiał do opracowania sylabusów i zasobów wiedzy.
>
> **Cel:** umożliwić absolwentom różnych kierunków rozpoczęcie czterosemestralnych, niestacjonarnych studiów II stopnia (100 ECTS) z cyberbezpieczeństwa na wspólnym, odpowiednio wysokim poziomie. Kurs jest odrębną ścieżką przygotowawczą i nie stanowi części programu magisterskiego.

## 1. Założenia organizacyjne

| Parametr | Propozycja |
|---|---|
| Okres | Lipiec–wrzesień, **przed** pierwszym semestrem |
| Grupa docelowa | Kandydaci po informatyce i kierunkach nieinformatycznych, u których zidentyfikowano luki kompetencyjne |
| Wymiar pełnej ścieżki | **120 godzin nakładu pracy uczestnika**, w tym ok. 35 h zajęć prowadzonych na żywo oraz 85 h pracy własnej i ćwiczeń |
| Organizacja | Asynchroniczna baza wiedzy + konsultacje online + zdalne laboratoria + kontrolowane sprawdziany praktyczne |
| Przydział | Indywidualny na podstawie diagnozy; można zaliczyć wybrane moduły bez uczęszczania na nie |
| Punkty ECTS | **Poza podstawowymi 100 ECTS** programu magisterskiego; brak automatycznego zaliczania do studiów |
| Język | Polski; dokumentacja techniczna i część zasobów w języku angielskim |
| Warunek ukończenia | Potwierdzenie minimalnych kompetencji we wszystkich wymaganych obszarach |

**Uwaga formalna:** szczegółowy status kursu (przed rekrutacją, po warunkowym zakwalifikowaniu lub jako odrębna usługa edukacyjna), opłaty, dostępność, zasady wydawania zaświadczeń i wpływ wyników na przyjęcie na studia wymagają odrębnych decyzji uczelni oraz weryfikacji prawnej. Ukończenie kursu nie zastępuje formalnych wymagań przyjęcia na studia II stopnia.

## 2. Kompetencje wejściowe i diagnoza

### 2.1. Co sprawdzamy?

1. **Programowanie i myślenie algorytmiczne:** zmienne, warunki, pętle, funkcje, kolekcje, prosty debug.
2. **Linux i systemy operacyjne:** pliki, procesy, użytkownicy i uprawnienia, terminal.
3. **Sieci komputerowe:** adresacja IP, DNS, TCP/UDP, HTTP/HTTPS, podstawowe diagnozowanie połączeń.
4. **Bazy danych:** tabela, klucz, relacja, SELECT/JOIN, podstawy kontroli dostępu.
5. **Infrastruktura:** klient–serwer, usługi, maszyny wirtualne, kontenery, podstawy Git.

### 2.2. Proponowana procedura

- Ankieta i analiza dotychczasowego wykształcenia/doświadczenia – informacyjnie, bez automatycznego zwalniania z weryfikacji.
- Test diagnostyczny online (60–75 min): 30 pytań sytuacyjnych oraz krótkie zadania praktyczne.
- Krótki sprawdzian w środowisku laboratoryjnym (60 min): odczyt logu, prosty skrypt, diagnoza HTTP i jedno zapytanie SQL.
- Informacja zwrotna: kompetencje potwierdzone, obszary do uzupełnienia, zalecane moduły.

**Roboczy próg:** 70% punktów w każdym obszarze i poprawne wykonanie zadania praktycznego o znaczeniu krytycznym (np. uprawnienia plików). Nie stosujemy wyłącznie średniej, która pozwoliłaby ukryć duży brak w jednym obszarze. Próg i forma powinny zostać przetestowane na reprezentatywnej grupie kandydatów.

## 3. Mapa modułów i obciążenie

| Kod | Moduł | Nakład pracy | Zajęcia na żywo | Rezultat |
|---|---|---:|---:|---|
| W01 | Programowanie i automatyzacja w Pythonie | 30 h | 9 h | Skrypt do analizy danych tekstowych i logów |
| W02 | Linux i podstawy systemów operacyjnych | 25 h | 8 h | Konfiguracja kont, uprawnień i usług w VM |
| W03 | Sieci komputerowe i usługi internetowe | 30 h | 8 h | Diagnostyka przepływu DNS → TCP → HTTP(S) |
| W04 | SQL i podstawy modelowania danych | 15 h | 4 h | Model danych i bezpieczne zapytania SQL |
| W05 | Infrastruktura IT, Git i kontenery | 20 h | 6 h | Uruchomienie i dokumentacja lokalnego środowiska |
| **Razem** | | **120 h** | **35 h** | |

Nakład godzinowy to **propozycja** do pilotażu. Uczestnik z zaliczonymi obszarami realizuje jedynie brakującą część.

## 4. Szczegółowy program modułów

### W01. Programowanie i automatyzacja w Pythonie (30 h)

**Cel:** osiągnięcie zdolności samodzielnego pisania, uruchamiania i testowania małych skryptów przydatnych na zajęciach z cyberbezpieczeństwa.

**Zakres wiedzy:**

1. Uruchamianie Pythona, instalacja, środowisko wirtualne, `pip`, podstawy IDE.
2. Typy, operatory, formatowanie napisów, wejście/wyjście.
3. Instrukcje warunkowe i pętle; rozwiązywanie prostych problemów algorytmicznych.
4. Funkcje, zakres zmiennych, parametry, wyjątki.
5. Listy, słowniki, zbiory; filtrowanie i agregacja danych.
6. Pliki tekstowe, CSV i JSON; kodowanie UTF-8; praca ze ścieżkami.
7. Wyrażenia regularne; analiza rekordów logów.
8. Podstawy HTTP klienta i obsługi JSON (wyłącznie w środowisku ćwiczeniowym).
9. Czytelny kod, `assert`, proste testy automatyczne i Git.

**Ćwiczenia:** parser pliku logów logowania; policzenie nieudanych prób według adresu IP; wykrycie błędnych formatów danych; eksport raportu JSON/CSV.

**Efekty (uczestnik potrafi):** napisać skrypt z funkcjami, zastosować kolekcje, przetworzyć plik, obsłużyć błąd, przetestować podstawową logikę i opisać sposób uruchomienia.

**Zaliczenie:** skrypt przyjmujący ścieżkę do lokalnego pliku logu, generujący podsumowanie i co najmniej 4 testy; repozytorium lub paczka ZIP + instrukcja.

**Zasoby:** [Python Tutorial](https://docs.python.org/3/tutorial/), [Python Standard Library](https://docs.python.org/3/library/), [pytest – Getting Started](https://docs.pytest.org/en/stable/getting-started.html).

### W02. Linux i podstawy systemów operacyjnych (25 h)

**Cel:** sprawna praca w terminalu oraz rozumienie mechanizmów istotnych dla bezpieczeństwa systemu.

**Zakres wiedzy:**

1. Czym jest system operacyjny; jądro, proces, pamięć, system plików.
2. Terminal i powłoka; `pwd`, `ls`, `cd`, `find`, `grep`, `cat`, `less`, potoki i przekierowania.
3. Użytkownicy, grupy i uprawnienia `rwx`; `chmod`, `chown`, `sudo`; zasada najmniejszych uprawnień.
4. Procesy i usługi: `ps`, `top`, `systemctl`, sygnały.
5. Pakiety, aktualizacje, zmienne środowiskowe, podstawy Bash.
6. Logi i diagnostyka: `journalctl`, przykładowe logi aplikacyjne.
7. Porty i procesy nasłuchujące: `ss`; lokalny firewall – pojęcia.
8. Konta, klucze SSH, bezpieczne uwierzytelnienie – na poziomie wprowadzającym.

**Ćwiczenia:** stworzenie użytkownika testowego i grupy; ustanowienie praw dostępu do katalogu; lokalne uruchomienie usługi; odczyt logów i opis błędu konfiguracji.

**Efekty:** uczestnik rozpoznaje problem z uprawnieniami, rozumie proces/usługę, potrafi znaleźć log i wykonać podstawową diagnostykę.

**Zaliczenie:** 6 zadań w przygotowanej maszynie wirtualnej i krótki raport zawierający komendy, wyniki oraz uzasadnienie nadanych uprawnień.

**Zasoby:** [Linux Foundation – Introduction to Linux](https://training.linuxfoundation.org/training/introduction-to-linux/), [Ubuntu Server Documentation](https://documentation.ubuntu.com/server/), [The Linux Command Line – W. Shotts](https://linuxcommand.org/tlcl.php).

### W03. Sieci komputerowe i usługi internetowe (30 h)

**Cel:** zrozumienie przepływu danych i diagnozowanie typowych problemów sieciowych przed nauką bezpieczeństwa sieci.

**Zakres wiedzy:**

1. Warstwy TCP/IP i OSI – zastosowanie praktyczne.
2. IPv4, adres/maska, brama, adres prywatny/publiczny, NAT.
3. TCP i UDP, porty, gniazda; zestawianie połączenia.
4. DNS: nazwy, rekordy A/AAAA/CNAME/MX, zapytania i cache.
5. HTTP i HTTPS: żądanie, odpowiedź, metody, kody, nagłówki, ciasteczka, sesja.
6. Podstawy TLS: certyfikat, tożsamość serwera, szyfrowanie transmisji – bez szczegółów kryptografii.
7. DHCP, routing i podstawowe elementy infrastruktury.
8. Diagnostyka: `ping`, `traceroute`/`tracert`, `nslookup`/`dig`, `curl`, `ss`.
9. Podstawy przechwytywania ruchu w **własnym środowisku laboratoryjnym**; rozpoznawanie DNS, TCP i HTTP (bez analizy cudzych sieci).

**Ćwiczenia:** rozpisanie ścieżki wejścia na stronę; analiza lokalnego żądania HTTP; zdiagnozowanie błędnego DNS, bramy lub portu; zapis krótkiego śladu pakietów w odizolowanym labie.

**Efekty:** uczestnik wyjaśnia kolejność zdarzeń od nazwy domeny do odpowiedzi HTTP, potrafi zinterpretować podstawowe wyniki narzędzi sieciowych.

**Zaliczenie:** trzy scenariusze diagnostyczne i krótka analiza lokalnego pliku PCAP dostarczonego przez prowadzącego.

**Zasoby:** [Cisco Networking Academy](https://www.netacad.com/), [Cloudflare Learning Center – Networking](https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/), [MDN – HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), [Wireshark User’s Guide](https://www.wireshark.org/docs/wsug_html_chunked/).

### W04. SQL i podstawy modelowania danych (15 h)

**Cel:** rozumienie reprezentacji i przetwarzania danych aplikacji, ważne dla bezpieczeństwa aplikacji i kontroli dostępu.

**Zakres wiedzy:**

1. Relacyjny model danych: tabela, wiersz, kolumna, typ danych.
2. Klucz główny i obcy, integralność referencyjna, relacje.
3. `SELECT`, `WHERE`, `ORDER BY`, `GROUP BY`, agregacje.
4. `JOIN`, wstawianie i modyfikowanie danych.
5. Transakcje i podstawowe pojęcie ACID.
6. Użytkownicy, role i uprawnienia bazodanowe – wprowadzenie.
7. Zapytania parametryzowane jako obrona przed SQL injection – demonstracja defensywna.

**Ćwiczenia:** baza zdarzeń bezpieczeństwa z tabelami `users`, `devices`, `events`; raport zdarzeń na użytkownika; wybrane agregacje i kontrola uprawnień.

**Efekty:** uczestnik rozumie schemat, tworzy proste zapytania i wskazuje, dlaczego składanie SQL z danych użytkownika jest niebezpieczne.

**Zaliczenie:** model 3 tabel oraz 6 zapytań, w tym JOIN i agregacja, wraz z wyjaśnieniem bezpiecznej parametryzacji.

**Zasoby:** [PostgreSQL – Official Tutorial](https://www.postgresql.org/docs/current/tutorial.html), [SQLBolt – interactive exercises](https://sqlbolt.com/), [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html).

### W05. Infrastruktura IT, Git i kontenery (20 h)

**Cel:** przygotowanie własnego, powtarzalnego środowiska do przyszłych laboratoriów specjalizacyjnych.

**Zakres wiedzy:**

1. Architektura klient–serwer, trzy warstwy aplikacji, REST API – pojęcia.
2. Maszyna fizyczna, wirtualna, kontener; różnice i zastosowania.
3. Docker: obraz, kontener, wolumen, port, zmienne środowiskowe.
4. Docker Compose: uruchomienie 2 usług w lokalnej sieci kontenerów.
5. Git: commit, branch, `clone`, `pull`, `push`, repozytorium, README.
6. Pliki konfiguracyjne, sekrety i zmienne środowiskowe; zasada nieumieszczania sekretów w repozytorium.
7. Podstawy obserwowalności: logi, stan usługi, kody odpowiedzi HTTP.
8. Dokumentowanie konfiguracji i odtwarzalność środowiska.

**Ćwiczenia:** uruchomienie lokalnej aplikacji demonstracyjnej i bazy danych w Docker Compose, weryfikacja połączenia, wgląd w logi, opis elementów i granic zaufania.

**Efekty:** uczestnik potrafi uruchomić otrzymany projekt, sprawdzić jego działanie i wyjaśnić rolę każdej usługi.

**Zaliczenie:** repozytorium z plikiem Compose, przykładowym `.env.example` (bez sekretów), README, komendami start/stop i dowodem poprawnego uruchomienia.

**Zasoby:** [Docker – Get Started](https://docs.docker.com/get-started/), [Docker Compose](https://docs.docker.com/compose/), [Git Book](https://git-scm.com/book/en/v2), [Pro Git – wersja polska (wybrane rozdziały)](https://git-scm.com/book/pl/v2).

## 5. Zintegrowany projekt końcowy: „Mini-SOC w laboratorium”

**Założenie:** prowadzący dostarcza całkowicie lokalny, sztuczny zbiór logów aplikacyjnych i demonstracyjną usługę webową. Uczestnik nie skanuje żadnych zewnętrznych systemów ani nie korzysta z danych osobowych.

**Zadania:**

1. Uruchom środowisko demonstracyjne w Docker Compose (W05).
2. Zlokalizuj usługę i logi, sprawdź jej stan i uprawnienia do plików (W02).
3. Wykonaj i opisz żądanie HTTP do lokalnego API oraz wskaż port i nazwę hosta (W03).
4. Napisz w Pythonie skrypt analizujący dostarczone logi: liczba zdarzeń, najczęstsze błędy, rozkład w czasie (W01).
5. Zapisz zdarzenia w lokalnej bazie SQL i wykonaj zapytanie agregujące (W04).
6. Przygotuj raport 2–3 strony: architektura, wyniki, ograniczenia analizy, podstawowe rekomendacje dotyczące ochrony danych i uprawnień.

**Rezultat:** jeden repozytoryjny projekt integrujący kompetencje techniczne potrzebne do dalszych zajęć magisterskich.

**Bezpieczeństwo:** materiały i ruch wyłącznie w środowisku laboratoryjnym, dane syntetyczne, bez udostępniania usług do Internetu. Nie wymagamy testów penetracyjnych ani atakowania działających serwisów.

## 6. Propozycja harmonogramu (10 tygodni)

| Tydzień | Temat przewodni | Kamień milowy |
|---|---|---|
| 0 | Diagnoza i przydział | Indywidualna ścieżka |
| 1–2 | Python I | Podstawowe programy i funkcje |
| 3 | Python II | Parser logów |
| 4–5 | Linux | Użytkownicy, uprawnienia, logi |
| 6–7 | Sieci | Raport diagnostyczny HTTP/DNS |
| 8 | SQL | Zapytania i model relacyjny |
| 9 | Infrastruktura | Działający stack Compose |
| 10 | Integracja i weryfikacja | Projekt + sprawdzian końcowy |

Harmonogram to wzorzec pełnej ścieżki; dla uczestników z częściowymi zwolnieniami ustala się krótsze ścieżki. Dopuszczalny jest start z wyprzedzeniem w lipcu i ukończenie do września.

## 7. System zaliczenia i kryteria oceny

**Propozycja modelu kompetencyjnego (zaliczenie/niezaliczenie):**

- Każdy wskazany moduł: zaliczenie praktyczne oparte na rubryce, np. **minimum 70%** oraz wykonanie wymagań krytycznych.
- Projekt integracyjny: obowiązkowy dla uczestników pełnej ścieżki; dla osób z częściowymi zwolnieniami może pełnić funkcję wspólnej walidacji umiejętności.
- Możliwość poprawy na podstawie informacji zwrotnej i ponownego podejścia.
- Uczelnia potwierdza wyniki na poziomie poszczególnych kompetencji, nie tylko jedną ocenę całkowitą.

### Rubryka projektu końcowego

| Kryterium | Waga |
|---|---:|
| Uruchomienie i odtwarzalność środowiska | 20% |
| Skrypt Python: poprawność i testy | 25% |
| Linux i diagnostyka sieci | 20% |
| Model danych i SQL | 15% |
| Dokumentacja, analiza i bezpieczeństwo pracy | 20% |
| **Razem** | **100%** |

**Wymagania krytyczne:** nieumieszczanie prawdziwych danych/sektretów w repozytorium, wykonanie zadań wyłącznie w labie, poprawne wyjaśnienie podstawowego przepływu HTTP i uprawnień systemowych. Niespełnienie kryterium krytycznego wymaga poprawy niezależnie od liczby punktów.

## 8. Zasób wiedzy — proponowana struktura portalu

Wszystkie moduły powinny mieć analogiczną strukturę, co ułatwi automatyczne przygotowanie materiałów oraz naukę własnym tempem:

```text
kurs-wyrownawczy-cyber/
├── README.md                      # cel, harmonogram, wymagania, diagnoza
├── 00-start/
│   ├── instalacja.md              # Windows / macOS / Linux; WSL2 lub VM
│   ├── zasady-bezpieczenstwa.md
│   └── diagnostyka.md
├── 01-python/
│   ├── lekcje/                   # 01..09: teoria + mini-przykłady
│   ├── laboratoria/              # zadania z testami
│   ├── quizy/
│   └── projekt/
├── 02-linux/
├── 03-sieci/
├── 04-sql/
├── 05-infrastruktura/
├── 06-projekt-koncowy/
│   ├── opis.md
│   ├── dane-syntetyczne/
│   ├── starter/
│   └── rubryka.md
├── 07-egzaminy/
└── dla-prowadzacych/
    ├── kryteria-oceniania.md
    ├── odpowiedzi/                # dostęp ograniczony
    └── mapa-kompetencji.md
```

### Szablon pojedynczej lekcji

Każda lekcja powinna zawierać: (1) cel i wiedzę wymaganą, (2) 10–20 minut materiału teoretycznego, (3) przykład wykonywany krok po kroku, (4) dwa zadania samodzielne, (5) krótki quiz, (6) częste błędy i wskazówki diagnostyczne, (7) linki do dokumentacji źródłowej, (8) kryterium opanowania umiejętności.

### Zalecane rodzaje materiałów

- Teksty Markdown z przykładami i diagramami (np. Mermaid), obsługiwane przez repozytorium Git.
- Krótkie nagrania demonstracyjne (5–12 min), z transkrypcją.
- Środowiska ćwiczeniowe w Compose lub maszynie wirtualnej, uruchamiane lokalnie.
- Quizy z natychmiastową informacją zwrotną.
- Testy automatyczne dla Pythona i SQL; checklisty dla Linux i sieci.
- „Ścieżka minimum” dla kandydata przygotowanego oraz „ścieżka od podstaw” dla pozostałych.

## 9. Minimalne wyposażenie i wsparcie

- Komputer z 8 GB RAM (zalecane 16 GB), dostępem do Internetu i możliwością uruchomienia WSL2/VM lub kontenerów; uczelnia powinna przygotować wariant zdalnego laboratorium dla osób, których sprzęt nie spełnia wymagań.
- Python 3, Git, klient SQL, Linux w VM/WSL2, środowisko kontenerowe oraz edytor kodu.
- Instrukcje instalacyjne osobno dla Windows i pozostałych systemów; pakiet diagnostyczny do weryfikacji środowiska.
- Forum pytań, konsultacje dyżurowe, wspólne zasady terminów poprawkowych i obsługa dostępności cyfrowej.

## 10. Powiązanie z przyszłymi przedmiotami magisterskimi

| Kompetencja przygotowawcza | Do czego przygotowuje w programie cyberbezpieczeństwa |
|---|---|
| Python i automatyzacja | Analiza incydentów, przetwarzanie logów, automatyzacja działań bezpieczeństwa |
| Linux | Bezpieczeństwo systemów, konfiguracja usług, zarządzanie tożsamością |
| Sieci i HTTP | Bezpieczeństwo sieci, testy bezpieczeństwa aplikacji, analiza ruchu |
| SQL | Bezpieczeństwo aplikacji, dostęp do danych, audyt systemów |
| Infrastruktura/Git/Docker | Bezpieczna inżynieria oprogramowania, środowiska laboratoryjne, bezpieczeństwo usług |

Kurs **nie jest skróconą specjalizacją**: nie obejmuje zaawansowanej kryptografii, testów penetracyjnych, analizy malware ani zarządzania incydentami na poziomie magisterskim. Te treści pozostają w zasadniczym programie studiów.

## 11. Elementy do ustalenia przez uczelnię przed uruchomieniem

- Status prawny i moment realizacji kursu względem formalnej rekrutacji na studia II stopnia.
- Minimalne wymagania wstępne, sposób dokumentowania kompetencji i zasady uznawania doświadczenia zawodowego.
- Dokładna liczba godzin dydaktycznych, koszt udziału i organizacja konsultacji.
- Narzędzie do egzaminów i zapewnienia samodzielności wykonywania zadań.
- Dostępność cyfrowa materiałów oraz bezpieczny dostęp do repozytoriów i laboratoriów.
- Pilotaż diagnostyki i progów zaliczenia; zapewnienie spójności z kierunkowymi efektami uczenia się.

## 12. Bibliografia i repozytorium źródeł

Materiały do wykorzystania jako **zasób referencyjny**, z zachowaniem licencji i warunków udostępniania (linkowanie nie oznacza automatycznej możliwości kopiowania zawartości):

1. Python Software Foundation, *The Python Tutorial* — https://docs.python.org/3/tutorial/
2. The Linux Foundation, *Introduction to Linux (LFS101)* — https://training.linuxfoundation.org/training/introduction-to-linux/
3. Ubuntu, *Ubuntu Server Documentation* — https://documentation.ubuntu.com/server/
4. Cisco Networking Academy — https://www.netacad.com/
5. MDN, *HTTP* — https://developer.mozilla.org/en-US/docs/Web/HTTP
6. Wireshark, *User’s Guide* — https://www.wireshark.org/docs/wsug_html_chunked/
7. PostgreSQL, *Official Tutorial* — https://www.postgresql.org/docs/current/tutorial.html
8. OWASP, *SQL Injection Prevention Cheat Sheet* — https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html
9. Docker, *Get Started* — https://docs.docker.com/get-started/
10. Git, *Pro Git* — https://git-scm.com/book/pl/v2

---

**Wersja:** 1.0 — projekt roboczy, 2 listopada 2026 r.  
**Przeznaczenie:** planowanie wakacyjnego kursu przygotowawczego poprzedzającego studia II stopnia „Informatyka — Cyberbezpieczeństwo”.
