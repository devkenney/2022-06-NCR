# React-Router Stock App Details

This is to be done in a *new* react app.

This version of the application you will be making will use *hard-coded* data, which follows:

```
const stocks = [
  {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
  {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
  {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
  {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
  {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
  {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
]

export default stocks
```

You can feel free to copy and paste that into a file in the *root* of your project called `data.js`. This file will then need to be imported into your `App.js` file with `import data from './data'`.

---

## Routes Needed:
  - Home route
    - path: `/`
    - Renders: `This is the Homepage Page`
    - Component Name: `Home`
  - About route
    - path: `/about`
    - Renders: `This is the About page`
    - Component Name: `About`
  - Stock route
    - path: `/stocks/:symbol` -- remember the `useParams` hook for this one -- this is your show route
    - Renders: `All the information about a single stock`
    - Component Name: `Stock`
  - Dashboard route
    - path: `/stocks` -- this is your index route
    - Renders: `Some basic information about all of the stocks in your list`
    - Component Name: `Dashboard`

---

## Home Route

---

All that should be on this page is the words: "This is the Homepage"

---

## About Route

---

All that should be on this page is the words: "This is the About page"

---

## Stock Route

---

This page should have all of the information about a single stock, that is specified with the route param of `:symbol`. You can use the `useParams()` hook in React to grab the route parameters used inside of the URL bar. The info that should be displayed is as follows:

```
{
  name: "Apple Inc.",
  symbol: "AAPL",
  lastPrice: 140.64,
  change: -0.280000000000001,
  high: 141.74,
  low: 140.35,
  open: 141.5
}
```

---

## Dashboard Route

---

This route is your *index* route and should have some basic information about each of the stocks in your data file. The info that would make the most sense to put here would probably be just the `name` and the `symbol` from the dataset. Each of these items on the page should have a link to the *show* page for that stock. You can use `<Link to="/stocks/AAPL">Apple</Link>` to get to Apple's page for example.

---

## Navigation

---

No matter where you are on your website, you should have a navigation bar present at the top of your screen so that you can get to all of the different pages you have on your site. The pages you should include in your navbar are the **Homepage**, **About Page**, and the **Dashboard**. The **Stock** page, for displaying a single stock should only be accessed through the index (**Dashboard**) page.

---

## Recommended Order:

---

1. Create all of your page files inside of a *pages* folder in your *src* directory
2. `npm i react-router-dom`
3. insert your BrowserRouter into your `index.js` file
4. set up your routes inside of your `App.js`
5. put the boilerplate inside of all of your page files
6. work on index page first (Dashboard)
7. then work on show page (Stock)