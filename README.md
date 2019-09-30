# reddit-client

## Setting up an application that read top 50 entries from Reddit

First things first. You must be an registered user, so please register an account (in case you dont have one)
[https://www.reddit.com/register](https://www.reddit.com/register/)


Once you are logged in, you must create an application. Go to this page for this [https://www.reddit.com/prefs/apps](https://www.reddit.com/prefs/apps)

Write an application `name` and things start to get complicated now...
You must be wondering which [application type](https://github.com/reddit-archive/reddit/wiki/oauth2-app-types) should I choose:

* Web app
* Installed app
* Script

To keep things simple. 
Web app & scripts you must provide a user token (because you are making a request on behalf of a user). 
Installed app can make unauthorized (aka user-less) requests, like fetching top news.

So lets choose `script` and continue with `redirecction url`. In my case I just put `http://localhost:3000/`

## Initial Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
