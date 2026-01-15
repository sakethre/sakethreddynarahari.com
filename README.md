# Portfolio - Saketh Reddy Narahari

This is my personal <a href="https://sakethreddynarahari.com" target="_blank">website</a> built with <a href="https://nextjs.org/" target="_blank">NextJs 13</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, <a href="https://mdxjs.com/">MDX</a> and <a href="https://vercel.com" target="_blank">Vercel</a>.

![Banner](./public/github-cover.png)

# Overview

This is my personal website built using NextJs, Tailwind CSS, Supabase and Vercel. I'll try to use this website to share my goals, learnings and thoughts. 

Feel free to fork and customize it for your own use. If you find any issues in the website, feel free to open an issue and if you want, you can open a pull request for it too. I tried to learn Prisma and use it but for most personal websites scale we don't need it. 

## Main folder structure

- `app/*`- All the static pages
- `pages/api/views/*`- API for handling blog views
- `components/*`- All the components like Navbar, Footer, etc are here
- `content/*`- It contains all the mdx files for blog

# Running locally

```bash
# Clone this repository
git clone https://github.com/sakethre/sakethreddynarahari.com.git

# Go into the repository folder
cd sakethreddynarahari.com

# Install dependencies
yarn

# Run
yarn dev
```

Create a `.env.local` file similar to `.env.example` with the values in it. But is not absolutely necessary thing to do to run the website locally. Plugin your own Supabase/DB.

- `DATABASE_URL` - DB URL for tracking the blog's view

# Built using

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Contentlayer](https://contentlayer.dev)
- [MDX](https://mdxjs.com/)
- [Vercel](https://vercel.com)
