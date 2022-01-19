See src/container/Home for the use of graphql on the front end.

# directories
public

Used to store the root html and css files, favicon, etc. Note: You cannot import assets from this directory as it is outside of src
src

The main directory. Used to store all javascript files
App.js

The root component. Any resources that need to be accessed by the whole app (like redux, theme provider, apollo provider, etc.) must be stored here. We try to keep this file light, so only put work here if it is absolutely necessry
config.js

Used to store constants that are important to the functionality of the app (like api urls, api keys, query limits, etc.)
theme.js

Used to store constants that are important to style (like colors, fonts, widths, heights, etc.). This is also where we load our fonts.
containers

Used to store the different "Pages" of the app. Note: Pages are determined by url. If you can reach a component by going to a specific url and that component is the root of that url, then it should go into containers.
components

The top level components folder is used to store components that will be used throughout the app. If a component is used in more than one container, then it should be in this folder.
