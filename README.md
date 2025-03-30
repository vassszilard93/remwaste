# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


#### Remwaste Skip Selection Page - React Implementation

### Project Overview

This project is a fully responsive and dynamic skip selection page built in React. It replicates and improves upon the existing skip selection step at wewantwaste.co.uk, offering an enhanced user experience and modern architecture. The focus is on clean code, component modularity, mobile-first design, and UI/UX clarity.

### Tech Stack

React (via Create React App)

Tailwind CSS for styling (utility-first, mobile-first responsive framework)

React i18next for internationalization

Custom hooks for data fetching

Atomic component structure (atoms, components)

### Why Tailwind CSS?

We chose Tailwind for:

Rapid prototyping and development with utility classes

Built-in responsive and dark mode support

Customization and consistency without custom CSS bloat

Easier integration with a design system

Tailwind is configured directly in the tailwind.config.js and supports mobile-first breakpoints and theming.

### Data Fetching

We retrieve dynamic skip data from:

https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

### Fetch Implementation:

A custom hook useSkips() abstracts the fetch logic

Error handling and loading states are included

Data is filtered and sorted after fetch based on user options

The hook is located in src/Hooks/useSkips.js

### Component Architecture

The application follows an atomic design structure:

###### Pages:

SkipSelectPage.jsx: The main page with skip selection grid and filters

###### Components:

SkipCard: The full card for each skip option

###### SkipCardHeader: Image + label

###### SkipCardBody: Price + badges

###### SkipCardFooter: Select/deselect button + tooltip

###### SkipSummaryBar: Fixed bottom bar showing total price and continue/back buttons

###### SkipFilters: Toggle checkboxes for filtering skip types

###### Badge: Atomic label component (road/heavy waste)

###### Button: Custom styled atomic button

Each component receives props for flexibility and isolates logic per concern.

### SkipCard Logic & Interactivity

A skip card can be selected or deselected by clicking

Once selected, all other cards become disabled

The selected card shows a "Deselect this skip" option (only this is clickable)

Cards have hover effects (shadow, ring, and border transitions)

Skip image is displayed dynamically and scales to match the width of the button

### Mobile-First & Responsive Design

All components use Tailwind’s mobile-first utility classes:

flex, grid, gap-x, gap-y, sm: and lg: breakpoints

Button and badge sizes adapt for screen size

Cards use a responsive column layout (1 -> 2 -> 3 columns)

The entire interface remains accessible and usable on small devices

### Translations with i18next

Internationalization is handled with react-i18next.

Setup:

i18n.js initialized in src

Translations stored in src/locales/en.json

All UI text is dynamic, using t('key')

Examples:

{t('labels.yardSkip', { size })}
{t('buttons.select')}

### UI/UX Enhancements

Visual hover feedback on cards

Accessible keyboard focus and hover states

Strong color contrasts for dark background accessibility

Total price bar is always visible (sticky footer)

### Assets & Images

Skip images are stored in src/assets/images/skipRem.png (would be better use if we could get the images from the API)

All images have alt text and rounded corners for modern appearance

### Summary

This project demonstrates:

Component-based thinking

Data-driven rendering

Smooth UI interactions

Internationalization-ready interface

Clean folder structure and scalable codebase

It is designed to be maintainable, performant, and user-friendly, whether viewed on desktop or mobile.
