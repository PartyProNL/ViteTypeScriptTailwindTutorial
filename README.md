# Vite + TypeScript + TailwindCSS Setup test
Hier uitgelegd hoe je deze boel allemaal moet klaarmaken en kunt devven

## 1. Setup Vite
Voer het volgende commando uit in de map waar je het project wilt aanmaken:

```
npm create vite@latest
```

Kies een naam, selecteer `Vanilla` als framework en selecteer dan `TypeScript` als variant.

## 2. Git en setup
Open de aangemaakte map in bijvoorbeeld Visual Studio code, en regel de setup van Git

```
git init
```

Commit ook gelijk de nodige bestanden, en regel mogelijk setup van Fork (File -> Open Repository... -> Selecteer de aangemaakte map). Vervolgens kunnen we de setup afmaken door dit commando uit te voeren:

```
npm install
```

En daarna kan de DEV-server gestart worden door dit commando uit te voeren:

```
npm run dev
```

## 3. TailwindCSS setup
Je kunt de DEV-server weer stoppen (CTRL+C in terminal). 

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Maak een bestand aan met de naam `tailwind.config.js` in de root-folder en plaats daar de volgende inhoud in:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Voeg de volgende inhoud toe aan het CSS bestand dat bij je HTML hoort:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Installeer vervolgens de `Tailwind CSS IntelliSense` plugin op Visual Studio Code, en daarna de `PostCSS Language Support` plugin.