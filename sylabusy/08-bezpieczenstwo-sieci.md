---
layout: syllabus
title: Bezpieczeństwo sieci
code: CYB08
ects: 10
semester: III
status: obowiązkowy
order: 8
---

# Bezpieczeństwo sieci

## Informacje podstawowe

| Pole | Wartość |
|---|---|
| Punkty ECTS | 10 |
| Status | obowiązkowy |
| Zalecany semestr | III |
| Język | polski |

## Cel modułu

Rozwinięcie umiejętności analizowania zagrożeń komunikacji sieciowej, projektowania odpornych architektur oraz konfigurowania, monitorowania i oceniania mechanizmów ochrony sieci.

## Wymagania wstępne

TCP/IP, routing, DNS, HTTP(S), administracja Linux i podstawy kryptografii oraz bezpieczeństwa informacji.

## Efekty uczenia się

Po ukończeniu modułu student:

- `W01` wyjaśnia zagrożenia dla protokołów i usług na poszczególnych warstwach sieci;
- `W02` charakteryzuje zapory, IDS/IPS, VPN, segmentację i mechanizmy ochrony transmisji;
- `U01` projektuje segmentację, strefy zaufania i reguły kontroli ruchu;
- `U02` analizuje przechwycony ruch i rozpoznaje symptomy ataku;
- `U03` wdraża i waliduje mechanizm wykrywania w środowisku laboratoryjnym;
- `U04` ocenia konfigurację i odporność infrastruktury, dokumentując ryzyko;
- `K01` prowadzi testy wyłącznie w autoryzowanym zakresie i rzetelnie komunikuje wyniki.

## Treści programowe

1. Model TCP/IP, granice zaufania i modelowanie zagrożeń sieci.
2. Ataki na warstwę łącza, ARP, DHCP i sieci bezprzewodowe.
3. IP, routing, ICMP, spoofing i ochrona infrastruktury routingu.
4. DNS, poczta, HTTP(S) i bezpieczeństwo usług internetowych.
5. TLS, VPN, IPsec i bezpieczny dostęp zdalny.
6. Zapory, ACL, segmentacja, mikrosegmentacja i Zero Trust.
7. Telemetria, NetFlow, logi, IDS/IPS i reguły detekcji.
8. DoS/DDoS, botnety i strategie ograniczania skutków.
9. Sieci chmurowe, kontenery i nowoczesne protokoły.
10. Zespołowy projekt detekcji ataku i ocena architektury.

## Metody i formy kształcenia

Wykłady, laboratoria sieciowe, ćwiczenia formatywne, analiza pakietów, projekt zespołowy i konsultacje.

## Nakład pracy studenta

| Aktywność | Godziny |
|---|---:|
| Wykłady | 30 |
| Laboratoria | 42 |
| Konsultacje i opieka projektowa | 10 |
| Samodzielne ćwiczenia | 58 |
| Projekty i raport | 80 |
| Przygotowanie do egzaminu | 30 |
| **Razem** | **250** |

## Weryfikacja efektów i ocena

| Składnik | Udział | Efekty |
|---|---:|---|
| Indywidualna analiza problemu sieciowego | 20% | W01–W02, U04 |
| Zespołowy projekt architektury i detekcji | 50% | U01–U03, K01 |
| Egzamin praktyczno-teoretyczny | 30% | W01–W02, U02, U04 |

Warunkiem zaliczenia jest co najmniej 50% łącznie oraz oddanie projektu. Aktywne testy mogą dotyczyć tylko infrastruktury laboratoryjnej lub jawnie autoryzowanej.

## Literatura i źródła

- William Stallings, *Network Security Essentials*, aktualne wydanie.
- NIST SP 800-207, *Zero Trust Architecture*.
- NIST SP 800-41 Rev. 1, *Guidelines on Firewalls and Firewall Policy*.
- Dokumentacja Wireshark, Suricata/Snort i użytych platform sieciowych.
## Uwagi programowe

Referat i egzamin uzupełnia spójny projekt grupowy dotyczący wykrywania ataków. Łączny nakład wynosi 250 godzin.
