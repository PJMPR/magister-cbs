---
layout: syllabus
title: Kryptografia stosowana
code: COMP47890
ects: 5
semester: I
status: obowiązkowy
order: 5
---

# Kryptografia stosowana

## Informacje podstawowe

| Pole | Wartość |
|---|---|
| Nazwa angielska | Applied Cryptography |
| Moduł źródłowy UCD | COMP47890 |
| Punkty ECTS | 5 |
| Status | obowiązkowy |
| Zalecany semestr | I |
| Język | polski |

## Cel modułu

Wykształcenie umiejętności świadomego doboru, użycia i oceny mechanizmów kryptograficznych w systemach informatycznych, z naciskiem na modele zagrożeń, zarządzanie kluczami i błędy wdrożeniowe.

## Wymagania wstępne

Podstawy matematyki dyskretnej, programowania i bezpieczeństwa informacji.

## Efekty uczenia się

Po ukończeniu modułu student:

- `W01` wyjaśnia cele, założenia i ograniczenia podstawowych prymitywów kryptograficznych;
- `W02` opisuje szyfrowanie symetryczne i asymetryczne, funkcje skrótu, MAC, podpis i wymianę kluczy;
- `U01` dobiera algorytmy, tryby pracy i parametry do zadanego modelu zagrożeń;
- `U02` wykorzystuje bezpieczne biblioteki i protokoły bez implementowania własnych prymitywów;
- `U03` identyfikuje błędy zarządzania kluczami, losowości, nonce i walidacji certyfikatów;
- `K01` ocenia rozwiązania ostrożnie, jawnie opisując założenia i ograniczenia.

## Treści programowe

1. Cele kryptografii, modele bezpieczeństwa i zasada Kerckhoffsa.
2. Entropia, generatory losowe, funkcje skrótu i MAC.
3. Szyfry blokowe i strumieniowe, tryby pracy, AEAD.
4. Kryptografia klucza publicznego i podstawy problemów trudnych obliczeniowo.
5. Wymiana kluczy, podpis cyfrowy i infrastruktura PKI.
6. TLS i przykłady protokołów uwierzytelnionych.
7. Hasła, funkcje wyprowadzania kluczy i przechowywanie sekretów.
8. Zarządzanie cyklem życia kluczy i moduły HSM.
9. Ataki boczne, błędy użycia API i antywzorce.
10. Kryptografia postkwantowa — przegląd i kryteria migracji.

## Metody i formy kształcenia

Wykłady, tutoriale rachunkowe, krótkie laboratoria z bibliotekami kryptograficznymi, quizy i analiza przypadków awarii.

## Nakład pracy studenta

| Aktywność | Godziny |
|---|---:|
| Wykłady | 20 |
| Tutoriale/laboratoria | 20 |
| Konsultacje | 3 |
| Samodzielne ćwiczenia i lektura | 47 |
| Zadanie praktyczne | 20 |
| Przygotowanie i quizy | 15 |
| **Razem** | **125** |

## Weryfikacja efektów i ocena

| Składnik | Udział | Efekty |
|---|---:|---|
| Quizy cząstkowe | 35% | W01–W02, U01 |
| Zadanie: projekt i analiza użycia kryptografii | 40% | U01–U03, K01 |
| Kolokwium końcowe | 25% | W01–W02, U03 |

Warunkiem zaliczenia jest co najmniej 50% łącznie. Rozwiązania muszą wykorzystywać zatwierdzone biblioteki; generatywna AI nie może zastępować samodzielnego uzasadnienia bezpieczeństwa.

## Literatura i źródła

- Jean-Philippe Aumasson, *Serious Cryptography*, aktualne wydanie.
- David Wong, *Real-World Cryptography*.
- NIST, *Cryptographic Standards and Guidelines*, aktualne publikacje.
- OWASP, *Cryptographic Storage Cheat Sheet*.
- [Oficjalna karta modułu COMP47890 w UCD](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47890&p_tag=MODULE).

## Uwagi adaptacyjne

UCD stosuje cotygodniowe quizy. W polskiej adaptacji dodano oceniane zadanie praktyczne i zwiększono nakład do 125 godzin zgodnie z przyjętym przelicznikiem ECTS.
