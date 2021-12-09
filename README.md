# Movie React App project

Une application qui affiche une liste de films sous forme de cartes.\
Les données sont récupérées à partir d'un fichier local `movies.js`.\
Visualiser le projet dans ce lien `` https://mymovies-application.netlify.app/ ``

## Langages et outils

React (creact react app)
JavaScript, HTML5, CSS3 et Media query
Bootstrap v5.1.3
Font-awesome v4.7.0
Validateur W3Schools

## Lancement de projet

A la racine du dossier `movie_app` exécuter la commande:
`npm install` puis
`npm start`

## react-interview: l'énoncé de projet

1. Lister les films dans des cartes avec: le titre en gras, la catégorie et une jauge type Youtube indiquant le ratio likes/dislikes. Les cartes doivent être côtes à côtes et responsive. Càd que lorsque la fenêtre se réduit, les cartes sautent à la ligne suivante.

2. Ajouter un bouton dans les cartes permettant de supprimer celle-ci

3. Ajouter un bouton toggle like/dislike

4. Ajouter un filtre par catégorie (de type multiselect) en supposant qu'on ne les connaisse pas à l'avance (il faut donc les récupérer dynamiquement depuis les films). Si tous les films d'une catégorie sont supprimés, celle-ci ne doit plus appraître.

5. Ajouter un système de pagination avec les fonctionnalités suivantes:
    * Boutons précédent/suivant
    * Choix du nombre d'élements affichés par page (4, 8 ou 12).

Prennez des initiatives, il y a des points bonus si

* C'est jolie
* Vous utilisez correctement REDUX
* Il y a une attention aux détails

/!\ La suppression du comportement asynchrone dans `movies.js` entraînera une annulation du test.

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Ci dessous partie du Readme généré lors de la création de react app

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
