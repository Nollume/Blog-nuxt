# Blog_NUXT3

## Zadanie čo som mal spraviť
* #### Prerobiť do Nuxt3
Projekt som prerobil do Nuxt3 snažil som sa využiť čo najviac vecí z Nuxt čo poznám a však ešte viem že v nuxte mám stále medzeri. 
* #### Typescript by sa dal pouzit detailnejsie, napr. halvna metoda GetImages nema otypovanu navratovu hodnotu, v components/Blog.vue computed nemaju typy
Snažil som sa všetko čo sa dalo otypovať. Akurát som tam použil nuxt server a nevedel som si tam importovať typy ani cez require() mi to nešlo tak som ich tam dal priamo do súboru.
Typescript ešte používam krátku dobu tak sa mi stane že niekde zabudnem dať typ ale postupne sa v tom zlepšujem.
* #### https://api.unsplash.com/photos sa pouziva na viacerych miestach - treba byt lenivy :)
Bol som viac lenivý:) Dal som to do environment variable.
* #### CSS selectory zalozene na konkretnych elementoch - vykon
Prerobil som všetko iba niečo ostalo BlogList.vue componente pretože tam som si ten class preposlal cez props. Nevedel som že to ovplyvňuje výkon, niečo nové som sa naučil.
* #### Organizacia CSS
Snažil som sa CSS spraviť čitatelnejšie.
* #### include pisma
Netuším aká je správna možnosť includnutia písma, dal som ho tam cez nuxt.config. Alebo som mal stiahnuť font a načítať ho lokálne? 
* #### Optimalizacia Core web vitals - napr. responzivne obrazky, jeden obrazok pre vsetky rozlisenia
Tieto optimalizácie ešte velmi neovládam kedy je čo výhodnejšie a tak. Aj kvôli tomu sa snažím si nájsť prácu aby som sa naučil lepšie performance. Použil som resolution switching na tie obrázky.
* #### Chyba pokrocilejsia logika - napr. si mohol riesit strankovanie, dynamicky nacitavat obsah a podobne, vyhladavanie…
Spravil som stránkovanie kde sa aktuálna stránka uloží do query aby aj po refreshi stránky zostala na tej istej stránke. Dorobil som aj vyhladávanie (vyhladáva podla usera pretože vela obrázkov nemalo description, tiež som do obrázka vložil názov usera aby ho bolo vidno) akurát pri vyhladávaní tam ostal SearchedResult.vue component nie je nikde použitý som ho tam nechal že ako som sa to snažil spraviť najskôr, chcel som aby zostal ten pôvodný grid a v nom by sa filtrovali obrázky je tam ukázaná taká pokročilejšia logika (aj ked neviem či by to bolo správne) no hádzalo mi to tam občas nejakú chybu (ohladom :key attributu) a nemal som už čas prísť na to že prečo.
Takže som vytvoril SearchedImages.vue component namiesto toho tam to funguje správne akurát tam ten grid nevyzerá ako na pôvodnej stránke.

Trochu som sa natrápil nad deploymentom, nakoniec som zistil že v jednom env. variable som mal úvodzovku na viac, zaujímavé že pri developmente to išlo :)

---
---

## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

