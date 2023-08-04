# My First Next.js App

## Description

This is my first basic Next.js application. It serves as a starting point for learning and exploring Next.js features and best practices.

## Installation

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine using `git clone https://github.com/your-username/my-first-nextjs-app.git`.
3. Navigate to the project directory using `cd my-first-nextjs-app`.
4. Install the dependencies using `npm install`.

## Usage

To start the development server, run:

The application will be available at `http://localhost:3000`.

## Technologies Used

- Next.js
- React
- CSS Modules

## Features

- Home Page
- About Page
- Contact Page

## Contributing

Contributions are welcome! Feel free to open pull requests or report issues.

## License

This project is licensed under the MIT License.

---

## Next.js Interview Questions & Answers

**Q: What is Next.js?**
A: Next.js is a React framework that enables server-side rendering, static site generation, and other optimizations to improve performance and SEO. It simplifies building React applications and provides features like automatic code splitting and hot module replacement.

**Q: What are the benefits of using Next.js?**
A: Next.js offers several benefits, including server-side rendering for improved performance, SEO optimization, automatic code splitting, file-based routing, and easy deployment. It also supports static site generation and serverless functions.

**Q: How do you create a new page in Next.js?**
A: To create a new page in Next.js, you need to add a new file inside the `pages` directory. The file's name will become the URL path for that page. For example, creating a file named `about.js` in the `pages` folder will create an `/about` page.

**Q: What is getStaticProps in Next.js?**
A: `getStaticProps` is a Next.js function used for static site generation. It allows you to fetch data at build time and pass it as props to a page. The data is then rendered statically and remains the same for all users until the page is regenerated.

**Q: How can you fetch data on the server-side in Next.js?**
A: You can use `getServerSideProps` or `getInitialProps` for server-side data fetching in Next.js. These functions run on the server and provide the fetched data as props to the page component.

**Q: How do you implement client-side routing in Next.js?**
A: Next.js provides a built-in `Link` component to implement client-side routing. By using the `Link` component and specifying the target URL as its `href`, Next.js handles the routing without a full page reload.

**Q: What is the difference between `getServerSideProps` and `getStaticProps`?**
A: `getServerSideProps` fetches data on every request on the server-side, providing real-time data. In contrast, `getStaticProps` fetches data at build time and generates a static page that is served to all users until the page is regenerated.

**Q: How do you deploy a Next.js application?**
A: Next.js applications can be deployed to various platforms like Vercel, Netlify, or AWS Amplify. You can use the `npm run build` command to generate a production build, and then use a hosting platform to deploy the build files.
