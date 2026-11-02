# Strona projektu programu

Projekt Jekyll prezentujący założenia programu, efekty uczenia się, mapowanie PRK, wakacyjny kurs przygotowawczy i sylabusy z katalogu `../sylabusy`. Pliki źródłowe pozostają jedynym źródłem danych: podczas budowy Jekyll przetwarza je bez kopiowania.

## Uruchomienie lokalne

Wymagane są Ruby, Bundler i zgodne środowisko Jekyll.

```powershell
$env:BUNDLE_GEMFILE = "page/Gemfile"
bundle install
bundle exec jekyll serve --source . --config page/_config.yml --livereload
```

Serwis będzie dostępny pod adresem `http://127.0.0.1:4000/`.

## Publikacja

Workflow `.github/workflows/pages.yml` buduje serwis i publikuje artefakt w GitHub Pages po zmianie projektu strony, sylabusów, kursu przygotowawczego, efektów kierunkowych lub matrycy PRK na gałęzi `main`, albo po ręcznym uruchomieniu. W repozytorium należy włączyć **Settings → Pages → Source: GitHub Actions**.

## Struktura

- `_config.yml` — konfiguracja budowy z katalogu głównego repozytorium;
- `_layouts/` — wspólny układ i widok sylabusa;
- `_includes/` — współdzielone komponenty;
- `assets/` — CSS, JavaScript i grafika SVG;
- `index.html` — panel główny;
- `program.md` — założenia i obszary decyzyjne.
- `../Kurs_przygotowawczy.md` — pełna treść kursu dostępna pod adresem `/kurs-przygotowawczy/`.
- `../Efekty_kierunkowe.md` — efekty kierunkowe dostępne pod adresem `/efekty-uczenia/`.
- `../Mapowanie_PRK.md` — pełna matryca dostępna pod adresem `/mapowanie-prk/`.

