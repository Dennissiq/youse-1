# youse front-end test

Link: https://youse-paulo.netlify.app/

Hi! I hope you like my test!
I decided to maintain it simple, adding just the necessary for a clean and understandable code.

# 🧶 How to use

## Setup

```sh
$ git clone https://github.com/paulpetone/youse.git && cd youse && yarn
```

## Local development

`$ yarn start`

## Static build

`$ yarn build`

## Serve static folder after build

#### Install serve globaly

`$ yarn global add serve`

#### Serve static folder

`$ serve -s build`

# 💡 My idea

## About faker

To solve the filter problem, I used query string as my states.
I'm doing the pseudo request everytime that the users change the filter, page, or limit. This cause me a little dilema becase everytime that I call the API, it returns a hole new Array of People. So I asked myself if I should just do a single request and save the response on a state or treat like a real API where the database can change everytime, as the response.

As you'll see on the page, I'm taking the second option, where I handle the API as if it was a real API and like it could change anytime (it does hehe). That's the reason why when you go to the page 2 then go to the page 1, the results are different, or when you type somenthing that you are seeing that existis and on the next character it doesn't return anymore, because Faker are generating a new array on every request.

---

## ⚛️ Stack and libs

I choosed to use typescript, styled-components, react-paginate for pagination and react-transition-group to animate the list.

---

## 👨‍💻 userIsTyping

I created a state that defines if the user is typing. If so, I'll wait a few moments after the last char before send the pseudo request. I did this because if it was a real API, it could cause some problems with a lot of requests going on for each char typed.

---

## Query String

### &filter

It's the term that will be filtered

Example: https://youse-paulo.netlify.app/?filter=a

Default: ''

### &page

It's the page that will be rendered

Example: https://youse-paulo.netlify.app/?filter=a&page=1

Default: 0

### &limit

It's how many items will be shown

Example: https://youse-paulo.netlify.app/?filter=a&page=1&limit=3

Default: 10

---

# 📁 Folder structure

I like to let every .tsx file just with the markup. Every kind of logic, interfaces, styles, etc, I like to separate from the .tsx element to let it simple to read.

## src/components

Here you'll find every component that I'm using. Inside each component folder, I let the style file:
`style.ts`

The hooks folder (only if needed, take a look at src/helpers/composeEnhancer):
`hooks/index.ts`

And the component file:
`index.tsx`

---

## src/constants

Here you'll find a single file that exports constants values that are reusable, like the color yellow and the default itemsPerPage.

---

## src/helpers

### composeEnhancer

I love to use this helper on every react16+ project, it allows me to merge hooks using the props from the previous one. Here's an example to understand better:

```javascript
/*
This helper allows u to compose your hooks, passing to the next layer your old props and the new ones!
It should always be a function that returns a object. Example:
*/

// > component/hooks/index.ts

import composeEnhancer from 'helpers/composeEnhancer'

export default composeEnhancer(
  () => {
    return {
      newProp: 'hi, i'm a new prop'
    }
  },
  ({ newProp }) => {
    console.log(newProp, 'I got this prop from the previous hook')
    return {}
  }
)


// > component/index.tsx

import enhancer from './hooks'

const myComponent = ({ newProp }) =>
  <>
    hi all, I also have the { newProp } here
  </>

export default enhancer(myComponent)
```

### url

A simple helper that allows me to update query strings without refresh the screen and get values from querystring.

---

## src/interfaces

This folder contains every complex interfaces used on the typescript, allowing us to reuse.

---

## src/services

I didn't modify this folder too much, I just added one more item to the response called everyPeopleThatMatchesFilter. It's helping me to know how many pages I have.

---

## src/styles

Here I have only global styles that it's beeing imported on src/components/App.tsx
