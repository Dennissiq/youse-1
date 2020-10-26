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

# My idea

To solve the filter problem, I used query string as my states.
I'm doing the pseudo request everytime that the users change the filter, page, or limit. This cause me a little dilema becase everytime that I call the API, it returns a hole new Array of People. So I asked myself if I should just do a single request and save the response on a state or treat like a real API where the database can change everytime, as the response.

As you'll see on the page, I'm taking the second option, where I handle the API as if it was a real API and like it could change anytime (it does hehe). That's the reason why when you go to the page 2 then go to the page 1, the results are different, or when you type somenthing that you are seeing that existis and on the next character it doesn't return anymore, because Faker are generating a new array on every request.

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
