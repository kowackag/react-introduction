> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 

&nbsp;


# Templates

## Wprowadzanie

React umożliwia budowanie stron na podstawie małych części zwanych komponentami.

Będziemy chcieli w tym zadaniu zbudować kilka małych i dużych komponentów, które mają umożliwić nam stworzenie kilku elastycznych szablonów.

Te szablony pozowlą nam szybciej budować strony dzięki wieloktrotnemu ich wykorzystaniu. 

### Małe komponenty

Na początek skupimy się cześciach składowych każdej strony takich jak:

* nagłówek `<Header/>`
    * logo `<Logo />`
    * nawigacja `<Nav/>`
* zawartość `<Content/>`
    * lewa kolumna `<ContentLeft />`
    * prawa kolumna `<ContentRight />`
    * właściwa treść `<ContentMain />`
* stopka `<Footer />`
    * prawa autorskie `<Copyrights />`
    * menu `<Nav />`

Każdy z tych elementów może zawierać inne mniejsze komponenty. To od Ciebie zależy jak bardzo chcesz je podzielić.

Możesz np. dla `<Content/>` przygotować kilka dodatkowych opcji, która mogą być osadzone wedle uznania w poszczególnych kolumnach np.

* Wpis tj. treść artykułu `<Post/>` - przez props otrzymuje informacje o wpisie tj. tutuł, treść, autor, data utworzenia
* Kategoria tj. grupa kilku wpisów `<Category/>`, gdzie przez props przekazujesz tablice zawierające informacje o wpisach - bardzo podobne rozwiązanie jak w `<Menu/>` realizowane w zadaniach do materiałów.
* Galeria - lista zdjęć  `<Gallery/>`- tym razem przez props przekazujemy informacje o zdjęciach w formie obiektów w tablicy, które zawierają adres do zdjęcia, data utworzenia, autora.

> Komponenty również można przekazywać przez props. Mając komponent `<ContentMain/>` można do niego przekazać komponent `<Gallery/>` w taki sposób: `<ContentMain content={ <Gallery/> }>`. Natomiast wew. `<ContentMain/>` możemy się odwołać do niego przez `this.props.content` np:

```
const Gallery = props => {
    return (
        <section>
            {props.content}
        </section>
    )
}
```

### Duże komponenty

Duże komponenty to elementy, które na podstawie mniejszych renderują całą stronę.

Tutaj możemy stworzyć kilka opcji np.

* strona wpisu tj. `<PagePost/>`
* strona z listą wpisów tj. `<PageCategory/>`
* strona z galerią tj. `<PageGallery/>`


Te komponenty renderują mniejsze kmponenty, które w pierwszej kolejności utworzyłeś.

Przykład struktury dla komponentu `<PagePost/>` może prezentować się następująco:

```
const post = {
    title: 'Hello React',
    body: 'Lorem ipsum....',
    author: 'Mirek Lorek',
    created: '2019-01-01 01:02:03'
}

const PagePost = () => {
    return (
        <>
            <Header />
            <Content
                main={ 
                    <Post data={ post } /> 
                }
            />
            <Footer/>
        </>
    );
}
```

Oczywiście poszczególne komponenty mogą wykorzystywać pozostałe komponenty np.

```
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'regulamin', url: '/regulamin'},
];

const Footer = () => {
    return (
        <footer>
            <Copyrights />
            <Nav items={ menuItems } />
        </footer>
    )
}
```


## Implementacja

Początkowo utwórz komponenty, które mają wprowadzone dane "na sztywno" (bez przekazyania danych przez `props`), aby zobaczyć jak się one prezentują i jak wygląda struktura całej strony.

Potem możesz spróbować przekazywać dane przez `props`, co zwiększy elastyczność komponentów i wygodę w ponownym wykorzystaniu. 

Jeśli będziesz miał z tym problem to nie przejmuj się. Ten temat będziemy jeszcze omawiać w następnych materiałach.

Postaraj się jednak wstępnie ostylować komponenty za pomocą atrybutu `style` i obiektów do niego przekazanych.

Możesz to zrobić przekazując odpowiednie informacje przez props np. 

```
<div style={ this.props.styles.row } />
```

Dobrym pomysłem będzie jeśli zdefiniujesz domyślne wartości dla tego props w `PropTypes` lub przez wartości domyślne.

Postaraj się również wszystkie komponenty przetrzymywać w osobnych plikach w katalogu `components` i importować oraz eksportować je w odpowiednich miejscach.

### Webpack

Pamiętaj, że webpack musi być cały czas uruchomiony, aby kod JSX mógł być transpilowany do JS, dzięki czemu będziesz widzieć efekty swojej pracy.

> **Uwaga!** Nie używaj plików graficznych w tym projekcie ponieważ [konfiguracja webpacka](https://www.robinwieruch.de/webpack-images) nie została do tego przygotowana i przy probie ich wykorzystania pojawią się błędy.

## Podsumowanie

To zadanie umożliwi Ci przećwiczenie budowania komponentów co jest niezbędne przy pracy z React. 

Wykorzystuj na przemiennie formę klasową jak również funkcyjną komponentów, aby obie były dla Ciebie zrozumiałe.

Zwróć uwagę jak wygodnie można wielokronie wykorzystywać małe komponenty. Zazwyczaj im są mniejsze tym ułatwiają wielotrotne wykorzystanie.



&nbsp;

> ⭐ ***README** to coś więcej niż opis. Poprzez nie **pokazujesz swoje mocne strony** – swoją dokładność, sposób myślenia i podejście do rozwiązywania problemów. Niech Twoje README pokaże, że masz **świetne predyspozycje do rozwoju!***
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
