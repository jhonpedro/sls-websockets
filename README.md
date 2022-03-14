# Serverless Websockets

Simple project with websockets.

This is just the base project, in the future (maybe, I always forget my personal projects) we'll increment this and make some cool stuffs with it.

## How to use

- First, install [wscat](https://www.npmjs.com/package/wscat) globally
- Second, you can either deploy or run offline, both you will need to run in your cmd de following command:

  Offline, run the server first with `sls offline` and then `wscat -c ws://localhost:3001` to connect with it.

  In production you'll have to get your url but follows the same idea = `wscat -c <url_here>`.
