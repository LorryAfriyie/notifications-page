# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Below are screenshots of the challenge in desktop and mobile view

[Notification Page desktop screenshot](./public/images/screenshots/notification_page-desktop_screenshot.jpeg)

[Notification Page mobile screenshot](./public/images/screenshots/notification_page-mobile_screenshot.jpeg)

Below are sceenshots of the challenge where there is an interaction with the page

[Notification Page desktop interaction screenshot](./public/images/screenshots/notification_page-desktop_interaction_screenshot.jpeg)

[Notification Page mobile screenshot](./public/images/screenshots/notification_page-mobile_interaction_screenshot.jpeg)

### Links

- Solution URL: [notifications-page solution URL](https://github.com/LorryAfriyie/notifications-page)
- Live Site URL: [notifications-page live site URL](https://lorryafriyie.github.io/notifications-page/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev/) - Frontend Tooling

### What I learned

Below is a snippet of scss code related to attribute selectors where I was able to target the list tag of an unordered list which contains the attribute class with the name "new".

```scss
ul {
  li[class="new"] {
    background-color: hsl(210, 60%, 98%);
    border-radius: 10px;
  }
}
```

### Useful resources

- [How To Select HTML Elements Using ID, Class, and Attribute Selectors in CSS](https://www.digitalocean.com/community/tutorials/how-to-select-html-elements-using-id-class-and-attribute-selectors-in-css) - I mainly used this post to learn about attribute selectors in order to select an HTML tag along with an associated attritube assigned to the tag to be able to target it with a specific styling preference.

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)
