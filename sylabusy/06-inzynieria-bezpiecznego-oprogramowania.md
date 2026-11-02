---
layout: syllabus
title: Inżynieria bezpiecznego oprogramowania
code: IBO
ects: 10
semester: II
status: obowiązkowy
order: 6
---

# Inżynieria bezpiecznego oprogramowania

## Informacje podstawowe

| Pole | Wartość |
|---|---|
| Punkty ECTS | 10 |
| Status | obowiązkowy |
| Zalecany semestr | II |
| Język | polski |

## Cel modułu

Przygotowanie do projektowania, implementowania, testowania i utrzymywania bezpiecznego oprogramowania w całym cyklu SDLC oraz do praktycznego wykrywania, demonstrowania i usuwania podatności aplikacji.

## Wymagania wstępne

Programowanie obiektowe, aplikacje webowe, systemy rozproszone, Git, HTTP i podstawy baz danych. Zalecana znajomość Java/Spring Boot lub porównywalnego stosu.

## Efekty uczenia się

Po ukończeniu modułu student:

- `W01` wyjaśnia Secure SDLC, modelowanie zagrożeń i zasady bezpiecznego projektowania;
- `W02` charakteryzuje klasy podatności aplikacji, w tym OWASP Top 10;
- `U01` identyfikuje wymagania bezpieczeństwa i tworzy model zagrożeń;
- `U02` stosuje SAST, DAST, analizę zależności i testy manualne;
- `U03` odtwarza podatność w kontrolowanym środowisku i dokumentuje jej wpływ;
- `U04` projektuje poprawkę oraz potwierdza jej skuteczność testem regresyjnym;
- `K01` współpracuje w zespole, odpowiedzialnie ujawniając i priorytetyzując podatności.

## Treści programowe

1. Secure SDLC, wymagania bezpieczeństwa i kryteria akceptacji.
2. Modelowanie zagrożeń: aktywa, granice zaufania, STRIDE i drzewa ataków.
3. Zasady bezpiecznej architektury i wzorce projektowe.
4. Walidacja danych, kodowanie wyjścia, iniekcje i XSS.
5. Uwierzytelnianie, sesje, autoryzacja i kontrola dostępu.
6. Bezpieczne API, obsługa błędów, logowanie i sekrety.
7. SAST, DAST, IAST, SCA i bezpieczeństwo potoku CI/CD.
8. Testy penetracyjne aplikacji w środowisku laboratoryjnym.
9. Ocena ryzyka podatności, raportowanie i zarządzanie poprawkami.
10. Projekt: rozwój funkcji, demonstracja podatności, poprawka i regresja.

## Metody i formy kształcenia

Odwrócona klasa, wykłady nagrane, laboratoria, code review, praca projektowa, fora dyskusyjne i konsultacje.

## Nakład pracy studenta

| Aktywność | Godziny |
|---|---:|
| Wykłady i tutoriale | 30 |
| Laboratoria | 36 |
| Konsultacje/code review | 8 |
| Samodzielna nauka | 56 |
| Trzy etapy projektu | 105 |
| Przygotowanie prezentacji | 15 |
| **Razem** | **250** |

## Weryfikacja efektów i ocena

| Składnik | Udział | Efekty |
|---|---:|---|
| Rozbudowa aplikacji i model zagrożeń | 20% | W01, U01, K01 |
| Ocena podatności i demonstracja | 40% | W02, U02–U03 |
| Poprawki i testy regresyjne | 40% | U04, K01 |

Warunkiem zaliczenia jest co najmniej 50% łącznie i oddanie każdego etapu. Testy wolno prowadzić wyłącznie w udostępnionym lub jednoznacznie autoryzowanym środowisku.

## Literatura i źródła

- OWASP, *Application Security Verification Standard* i *Web Security Testing Guide*, aktualne wersje.
- Adam Shostack, *Threat Modeling: Designing for Security*.
- NIST SP 800-218, *Secure Software Development Framework (SSDF)*.
- SEI CERT, standardy bezpiecznego programowania dla używanego języka.
## Uwagi programowe

Projekt obejmuje trzy etapy: rozwój funkcjonalności aplikacji, ocenę podatności i ich usunięcie. Łączny nakład wynosi 250 godzin.
