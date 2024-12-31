## Nested Routes 
- app/info/contact/page.tsx
- if no page.tsx in a degment it will result in 404 

# Server Components vs Client Components in Next.js

Next.js provides **Server Components** and **Client Components** to optimize the rendering and data handling of your application. Below is an explanation of each, their benefits, and how to use them together.

## Server Components

### What are Server Components?
- **Server Components** are components that render on the server side before sending HTML to the client.
- These components allow you to fetch data, execute server-side logic, and handle tasks that should not run on the client (e.g., accessing a database or sensitive data).

### Benefits:
1. **Improved Performance**: Reduces the amount of JavaScript sent to the client, leading to smaller bundle sizes.
2. **SEO Friendly**: Since the page is pre-rendered on the server, it’s ready for search engine crawlers.
3. **Reduced Client-Side JavaScript**: No need to send JavaScript for parts of the UI that don’t require interactivity.

### Usage:
Server components can fetch data directly on the server side and render HTML.

Example:
```js
// app/page.js (Server Component)
import { getData } from './data'; // a function to fetch data

export default async function Page() {
    const data = await getData();
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
}
```
### Fetching Data in Server Components
- create tours/page.tsx 
- just add async and start using await 
- the same for db 
 - Next.tsx extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics

 ```tsx
 const url = 'https://www.course-api.com/react-tours-project'
 type Tour = { 
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
 };
 async function ToursPage() {
  const response = await fecth(url);
  const data: Tour[] = await response.json();
  console.log(data)
 }
  ```
