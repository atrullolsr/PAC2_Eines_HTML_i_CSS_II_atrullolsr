# Aura Negra: Jornades d'Artesania i Foc 🏺🔥

Aquest projecte és el resultat de la **PAC2** de l'assignatura **Eines HTML i CSS II** del Màster Universitari de Disseny i Desenvolupament Web de la **UOC**. Es tracta d'un lloc web modern, responsive i optimitzat que promociona unes jornades d'artesania i terrissa negra a la vila de Verdú.

---

## 🔗 Enllaços del Projecte

* **URL Netlify:** [https://verduartfangifoc.netlify.app](https://verduartfangifoc.netlify.app)
* **Repositori GitHub:** [https://github.com/atrullolsr/PAC2_Eines_HTML_i_CSS_II_atrullolsr](https://github.com/atrullolsr/PAC2_Eines_HTML_i_CSS_II_atrullolsr)

---

## 🚀 Tecnologies i Eines utilitzades

* **UOC Boilerplate (v3.13.0):** Base del projecte per a un entorn de desenvolupament professional.
* **Sass (SCSS):** Ús avançat de preprocessament amb variables, mixins, funcions, parcials i nesting.
* **Bootstrap 5:** Implementat i personalitzat mitjançant variables Sass per adaptar-lo a la identitat visual de la marca.
* **Parcel:** Bundler per a la gestió d'actius i compilació del codi.
* **Stylelint:** Linter per a la validació d'estils i garantia de qualitat de codi (Clean Code).

---

## 🛠️ Requisits Tècnics Implementats

### 1. Maquetació i Estructura

* **CSS Grid (Home):** La pàgina principal s'ha dissenyat com un pòster promocional utilitzant una graella de 12 columnes. S'ha implementat la directiva `@supports` per oferir un fallback (Flexbox) en navegadors antics.
* **Flexbox (Speakers):** La secció de ponents utilitza una retícula flexible sense dependre de les classes `.col-*` de Bootstrap, complint el requisit de maquetació nativa.
* **Cascading Layers (@layer):** Organització del CSS en capes (`base`, `layouts`, `components`) per a un control total de la prioritat i la cascada.
* **Container Queries:** Implementades per adaptar els components segons la mida del seu contenidor pare i no només del viewport.

### 2. CSS Modern i Selectors

* **Selectors funcionals:** Ús de `:has()`, `:is()` i `:where()` a la pàgina d'article per a una estilització intel·ligent dels elements HTML (`blockquote`, `figure`, llistes).
* **Noves unitats i colors:** Ús de colors en format `oklch()`, l'eina `color-mix()` i unitats de viewport dinàmiques (`svh`, `dvh`).

### 3. Metodologia

S'ha seguit la metodologia **BEM (Block Element Modifier)** per a la nomenclatura de classes i un enfocament **Mobile First** per garantir la total responsivitat del lloc web.

---

## 📂 Estructura de Carpetes

* `/src`: Codi font original (HTML, SCSS, JS).
  * `/assets/styles`: Estils organitzats en parcials de Sass.
  * `/views`: Fitxers HTML parcials (header, footer).
* `/dist`: Codi optimitzat i compilat per a producció (generat mitjançant `npm run build`).

---

## ⚙️ Instruccions d'ús

1. **Instal·lar dependències:**

    ```bash
    npm install
    ```

2. **Mode desenvolupament (Live Server):**

    ```bash
    npm run dev
    ```

3. **Validar estils (Linter):**

    ```bash
    npm run lint
    ```

4. **Compilar per a producció:**

    ```bash
    npm run build
    ```

---

## 📝 Decisions de Disseny

El disseny visual s'ha centrat en el concepte **Aura Negra**, utilitzant una paleta de colors terrosos i foscos que evoquen la ceràmica característica de Verdú. La tipografia combina estils sans-serif moderns amb tocs serif elegants per als títols, buscant un equilibri entre tradició i innovació.

**Autor:** Albert Trullols
**Màster en Disseny i Desenvolupament Web - UOC**
