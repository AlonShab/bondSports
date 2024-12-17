# Bondsports Demo 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# How to run
In order to run the application, just run npm instasll and then npm start (regular create-react-app configuratrion).

# breackdown of components
The application is a basic application for searching and viewing SW characters and being able to save and remove favourites. 
the component are segragated to appWrappers (everything we want our application to use (context, themes, errorboundries, logging services, etc...)) and app (actual logic of application).
every component that uses child component have a components folder in its directory and components are location in relation to components use (direct childs will be directly under father components folder)

the application itself is built with context for shared data across applications (CharacterContext) (saving favourites) and is implemented in the standard context way.

the favourite list is notting to speacial only a short unorderd list that show favourits and let you remove characters from list.

the CharacterSearch component is the most complex part of the application, the uses a debounced filter value from an input (only sending search results when user stops typing, no need to fetch on every key stroke, will only overload the server). 
the components uses a virtual list to only render items showing on screen (no need to calculate all N items when only a handful can show on the users screen. when we fetch new characters we cache in the components plantes that were alredy pulled to prevent fetching and storing duplicate data.

The component levrage the network service which keep request code DRY and have a singleton instance to be used accross the app.

the characters are rendered in row that each hold a character card, when clicking on the name of the character a modal opens using a portal to render it while avoiding stacking context issues.

the application itself could use more optimazation however for the scale of the data set and time and constraints of the exercise I stopped here and only added minimal styles)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

