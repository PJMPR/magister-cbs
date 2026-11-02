---
layout: syllabus
title: Analiza złośliwego oprogramowania
code: COMP47810
ects: 5
semester: III
status: wybieralny
order: 9
---

# Analiza złośliwego oprogramowania

## Informacje podstawowe

| Pole | Wartość |
|---|---|
| Nazwa angielska | Malware Analysis |
| Moduł źródłowy UCD | COMP47810 |
| Punkty ECTS | 5 |
| Status | wybieralny |
| Zalecany semestr | III |
| Język | polski |

## Cel modułu

Przygotowanie do bezpiecznej, podstawowej analizy statycznej i dynamicznej złośliwego oprogramowania oraz tworzenia użytecznych raportów, wskaźników kompromitacji i rekomendacji detekcyjnych.

## Wymagania wstępne

Systemy operacyjne, sieci, podstawy programowania, asemblera i reagowania na incydenty. Gotowość do pracy w ściśle izolowanym laboratorium.

## Efekty uczenia się

Po ukończeniu modułu student:

- `W01` klasyfikuje rodziny i zachowania złośliwego oprogramowania;
- `W02` wyjaśnia ograniczenia analizy statycznej, dynamicznej i automatycznej;
- `U01` przygotowuje i weryfikuje izolowane środowisko analityczne;
- `U02` pozyskuje metadane, ciągi znaków, importy i artefakty pliku;
- `U03` obserwuje procesy, pliki, rejestr i komunikację sieciową próbki;
- `U04` opracowuje IOC, mapowanie zachowań i raport wspierający detekcję;
- `K01` przestrzega zasad bezpieczeństwa, legalności i odpowiedzialnego obchodzenia się z próbkami.

## Treści programowe

1. Typy malware, modele infekcji i cykl kampanii.
2. Bezpieczeństwo laboratorium, snapshoty, sieć izolowana i procedury awaryjne.
3. Hashe, formaty plików, metadane, strings i importy.
4. Podstawy analizy kodu i asemblera.
5. Analiza dynamiczna procesów, systemu plików i rejestru.
6. Analiza komunikacji sieciowej i emulacja usług.
7. Obfuskacja, pakowanie, anty-debugging i ograniczenia narzędzi.
8. IOC, reguły YARA/Sigma i mapowanie MITRE ATT&CK.
9. Raportowanie wyników i rekomendacje dla zespołu obrony.
10. Projekt indywidualny na bezpiecznym artefakcie szkoleniowym.

## Metody i formy kształcenia

Wykłady, demonstracje, trzy warsztaty laboratoryjne, analiza kierowana, projekt indywidualny i prezentacja.

## Nakład pracy studenta

| Aktywność | Godziny |
|---|---:|
| Wykłady | 18 |
| Laboratoria | 24 |
| Konsultacje | 4 |
| Samodzielne ćwiczenia | 29 |
| Projekt indywidualny | 40 |
| Quiz i prezentacja | 10 |
| **Razem** | **125** |

## Weryfikacja efektów i ocena

| Składnik | Udział | Efekty |
|---|---:|---|
| Projekt: propozycja, analiza, raport i prezentacja | 60% | U01–U04, K01 |
| Quiz/egzamin online | 40% | W01–W02, U02–U03 |

Oba składniki muszą być zaliczone na co najmniej 50%. Zabronione jest wynoszenie próbek poza laboratorium, analizowanie ich na prywatnym sprzęcie lub uruchamianie bez izolacji.

## Literatura i źródła

- Michael Sikorski, Andrew Honig, *Practical Malware Analysis*.
- Bruce Dang i in., *Practical Reverse Engineering*.
- MITRE ATT&CK, aktualna baza technik.
- Dokumentacja narzędzi używanych w laboratorium.
- [Oficjalna karta modułu COMP47810 w UCD](https://hub.ucd.ie/usis/!W_HU_MENU.P_PUBLISH?MODULE=COMP47810&p_tag=MODULE).

## Uwagi adaptacyjne

Projekt i quiz zachowują proporcje 60/40 z UCD. Próbki mogą zostać zastąpione nieszkodliwymi symulatorami, jeśli infrastruktura nie gwarantuje pełnej izolacji.
