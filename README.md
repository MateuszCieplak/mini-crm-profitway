# 🚀 Mini CRM - Zarządzanie Klientami i Projektami

## Cel Projektu

Prosta aplikacja **Mini CRM** stworzona w ramach Zadania Rekrutacyjnego, przeznaczona do zarządzania bazą klientów oraz ich projektami. Kluczowym celem było zaimplementowanie **działającej logiki stanu**, **trwałości danych** oraz **czystej struktury kodu** z wykorzystaniem nowoczesnych technologii frontendowych.

## Technologie

* **Frontend Framework:** React
* **Język:** TypeScript
* **Bundler:** Vite
* **Stylizacja:** Tailwind CSS
* **Zarządzanie Stanem:** React Context API + Custom Hook (`useLocalStorage`)
* **Routing:** React Router DOM

## Główne Funkcje

Aplikacja zaimplementowała następujące wymagania:

1.  **Dashboard:** Podsumowanie metryk biznesowych (łączna wartość PLN, łączna liczba projektów, liczba klientów).
2.  **Klienci:** Lista z możliwością dodawania nowych klientów.
3.  **Szczegóły Klienta:** Widok szczegółów klienta z listą projektów.
4.  **Projekty:** Możliwość dodawania nowych projektów do konkretnego klienta.
5.  **Trwałość Danych:** Wszystkie dane są automatycznie zapisywane w **Local Storage** przeglądarki.

## 🛠️ Uruchomienie Projektu

Aby uruchomić projekt lokalnie, wykonaj poniższe kroki w terminalu:

### 1. Klonowanie Repozytorium

```bash
git clone [ADRES_TWOJEGO_REPOZYTORIUM]
cd mini-crm-frontend
```
### 2. Instalacja Zależności

Zainstaluj wszystkie wymagane pakiety Node.js

```
npm install
```
### 3. Uruchamianie Aplikacji

Uruchom serwer deweloperski. Aplikacja będzie dostępna pod adresem http://localhost:5173/ (lub innym adresem wskazanym przez Vite).

```
npm run dev
```
##📝 Uwagi dla Recenzenta

* **Git Hygiene:** Zastosowano konwencję Conventional Commits (feat:, fix:, refactor:) w celu utrzymania czytelnej historii zmian.
* **Architektura** Logika zarządzania stanem jest odseparowana (Context/Hooks) od komponentów UI.
