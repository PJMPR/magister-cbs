# Strona projektu programu

Projekt Jekyll prezentujący założenia programu i sylabusy z katalogu `../sylabusy`. Treści sylabusów pozostają jedynym źródłem danych: podczas budowy Jekyll przetwarza je bez kopiowania.

## Uruchomienie lokalne

Wymagane są Ruby, Bundler i zgodne środowisko Jekyll.

```powershell
$env:BUNDLE_GEMFILE = "page/Gemfile"
bundle install
bundle exec jekyll serve --source . --config page/_config.yml --livereload
```

Serwis będzie dostępny pod adresem `http://127.0.0.1:4000/`.

## Publikacja

Workflow `.github/workflows/pages.yml` buduje serwis i publikuje artefakt w GitHub Pages po zmianie gałęzi `main` albo po ręcznym uruchomieniu. W repozytorium należy włączyć **Settings → Pages → Source: GitHub Actions**.

## Struktura

- `_config.yml` — konfiguracja budowy z katalogu głównego repozytorium;
- `_layouts/` — wspólny układ i widok sylabusa;
- `_includes/` — współdzielone komponenty;
- `assets/` — CSS, JavaScript i grafika SVG;
- `index.html` — panel główny;
- `program.md` — założenia i obszary decyzyjne.

