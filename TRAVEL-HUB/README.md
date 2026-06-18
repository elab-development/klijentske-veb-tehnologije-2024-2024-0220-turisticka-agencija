# TravelHub

---

<div align="left">
  <span style="font-size: 48px;">✈️</span>
</div>

**TravelHub** je veb aplikacija za turističku agenciju koja omogućava korisnicima pregled, filtriranje i rezervaciju turističkih aranžmana.

Aplikacija podržava različite tipove ponuda, popuste, last minute aranžmane, čuvanje omiljenih ponuda u wishlist listu, pregled profila korisnika i prikaz vremenskih uslova za izabranu destinaciju.

---

## Tehnologije

- React + TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- OpenWeather API
- Git / GitHub

---

## Funkcionalnosti

- **Prijava korisnika** – korisnik može da se prijavi u aplikaciju.
- **Registracija korisnika** – omogućeno je kreiranje novog korisničkog naloga.
- **Resetovanje lozinke** – korisnik može da unese novu lozinku i potvrdi je.
- **Početna stranica** – prikaz osnovnih informacija i istaknutih ponuda.
- **Pregled aranžmana** – prikaz dostupnih turističkih ponuda.
- **Filtriranje ponuda** – korisnik može da filtrira aranžmane po kriterijumima kao što su popust, last minute ponude, država ili destinacija.
- **Detalji aranžmana** – prikaz slike, naziva, lokacije, opisa, tipa aranžmana, cene i popusta.
- **Kombinovanje ponude** – korisnik može da doda dodatne dane, aerodromski transfer i organizovane izlete.
- **Računanje ukupne cene** – ukupna cena se menja u zavisnosti od izabranih dodatnih opcija.
- **Wishlist lista** – korisnik može da sačuva aranžmane koji su mu interesantni.
- **Rezervacije** – korisnik može da rezerviše izabrani aranžman.
- **Profil korisnika** – prikaz ličnih podataka, rezervacija i sačuvanih ponuda.
- **Vremenska prognoza** – na stranici detalja prikazuju se trenutni vremenski uslovi za destinaciju pomoću OpenWeather API-ja.
- **Responsive dizajn** – aplikacija je prilagođena za desktop, tablet i mobilne uređaje.

---

## Pokretanje na lokalnoj mašini

### Preduslovi

- Node.js
- npm

### Koraci

```bash
# 1. Kloniranje repozitorijuma
git clone https://github.com/korisnicko-ime/travel-hub.git

# 2. Ulazak u folder projekta
cd travel-hub

# 3. Instaliranje zavisnosti
npm install

# 4. Pokretanje razvojnog servera
npm run dev
```

Aplikacija će biti dostupna na:

```bash
http://localhost:5173
```

---

## Rute u aplikaciji

```bash
/login          # Stranica za prijavu korisnika
/register       # Stranica za registraciju korisnika
/verify         # Verifikacija email adrese
/reset          # Resetovanje lozinke
/home           # Početna stranica
/offers         # Stranica sa ponudama
/details/:id    # Detalji pojedinačnog aranžmana
/wishlist       # Wishlist stranica
/profile        # Profil korisnika
```

---

## Autori

- Jovan Orlović
- Petar Pejović
- Ilija Pavlović