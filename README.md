# chat-app
Welcome to a global chat app, including user authentication and message synchronization, handled by PocketBase.
The UI was created using Svelte and backend handling is done by TypeScript. The concept was inspired by 
**[Fireship's $5 chat app](https://www.youtube.com/watch?v=gUYBFDPZ5qk)**.

### Showcase
[![](http://img.youtube.com/vi/3cmLE6xXWS0/0.jpg)](https://youtu.be/3cmLE6xXWS0)

### Installation 

- Fork this project.
- **[Install PocketBase](https://pocketbase.io/)** and run a local server.
- Open the **[PocketBase dashboard](http://127.0.0.1:8090/_/#/settings/import-collections)**
  and copy the contents of the **[`pocketbase.json` file](https://github.com/Efnilite/chat-app/blob/main/pocketbase.json)**
  into the `Collections` area. To add, hit review.
- Run `npm install` and `npm run dev` in the folder in which this project was forked. 
  This will return a url at which the app is available.
