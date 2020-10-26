# youse front-end test

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

# Approach

To solve the filter problem, I used query string as my states.

## &filter

It's the term that will be filtered
Example: http://localhost:3000/?filter=a
Default: ''

## &page

It's the page that will be rendered
Example: http://localhost:3000/?filter=a&page=1
Default: 0

## &limit

It's how many items will be show
Example: http://localhost:3000/?filter=a&page=1&limit=3
Default: 10
