This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Skip Card Improvements

### Enhanced UI/UX

- The Skip Card component was redesigned for a modern, visually appealing look, including:
  - A glowing hover effect for better interactivity.
  - Clearer layout with skip size, price, hire period, and feature chips.
  - Use of color-coded chips and icons for quick information scanning.
  - Responsive card sizing and improved spacing.
- When a skip is selected, a detailed popup modal appears, providing a focused review and action flow for the user.

### Functionality

- The core functionality of selecting a skip and viewing its details remains intact.
- State management was added to allow users to select a skip and view details in a modal, with easy navigation back to the grid.
- The details card includes clear "Back" and "Continue" actions, improving the booking flow.

### User Experience

- The UI is more intuitive and visually engaging, making it easier for users to compare and select skips.
- The modal popup prevents context loss and keeps the user focused on their selection.
- Accessibility and responsiveness were considered in the redesign.
