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


## Routing 
- Private Folders 
\_folder
- Route Groups 
(dashboard)
- Dynamic Routes 
   - [...folder] - Catch all route segment 
   - [[...folder]] - Optional catch-all route segment

- create test foler app/\_css 
- create app/(dashboard)/auth

- the url is just '/auth'

## Server Actions 
- async server functions that can be called directly from your components 
- typical setup for server state mutations (create, update, delete)

- endpoint on the server (api route on Next.js)
- make request from the front-end 
   - setup form, handle submission etc 

- Next.js server actions allow you to mutate server state directly from within a React Component by defining server-side 
logic alongside client-side interactions

Rules: 
- must be async 
- add 'use server' in function body (only in RSC)
- can use in RCC but only as import 

RSC - React Server Component 
RCC  - React Client Component 
```tsx
export default function ServerComponent() {
    async function myAction(formData) {
        'use server'
    }
    return <form action={myAction}>....</form>
}
```
- or setup in a separate file ('use server' at the top)
  - can use in both (RSC and RCC)

utils/actions 
```tsx
'use server';
export async function myAction() {
    
}
```


Reserved Filenames
As you already learned, there are some reserved filenames when working with NextJS.

Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS - you'll, of course, learn about the important ones throughout this section:

page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

layout.js => Create a new layout that wraps sibling and nested pages

not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions


