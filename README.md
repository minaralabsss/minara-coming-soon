# Minara Labs

Premium wellness technology. Thoughtfully engineered devices designed to elevate everyday rituals.

## About

Minara Labs is a Saudi luxury wellness technology company creating premium devices for beauty and wellness. This is the first version of the website, serving as a premium "Coming Soon" experience during development.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
minara-labs/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section component
│   └── EmailForm.tsx       # Email subscription form
├── public/
│   ├── favicon.ico         # Website icon
│   ├── apple-touch-icon.png # iOS home screen icon
│   ├── robots.txt          # Search engine crawler rules
│   └── sitemap.xml         # XML sitemap
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # This file
```

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Built for high Lighthouse scores (95+)
- **Accessibility**: Semantic HTML and WCAG compliance
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Animations**: Subtle, intentional Framer Motion animations
- **Form Validation**: Email validation with visual feedback
- **TypeScript**: Full type safety
- **Minimal Design**: Premium aesthetic with generous whitespace

## Design Philosophy

- Elegant typography as the hero
- Generous whitespace
- Subtle animations
- No unnecessary elements
- Sophisticated, quiet confidence
- Premium feel without flashiness

## Color Palette

- **Background**: #FFFFFF (Pure White)
- **Text**: #111111 (Almost Black)
- **Secondary Text**: #666666 (Gray)
- **Accent**: #8B0000 (Deep Red)

## Email Form

The email form includes:
- Email validation
- Error messaging
- Loading state
- Success state animation
- Local state management (no backend required for MVP)

## Performance Optimizations

- Next.js Image optimization
- Automatic code splitting
- CSS-in-JS with Tailwind
- Production-ready security headers
- No unnecessary dependencies

## Future Enhancements

- Backend integration for email subscriptions
- Product showcase section
- Blog/content section
- E-commerce functionality
- Analytics integration

## Customization

### Update Brand Assets
- Replace `/public/favicon.ico` with your favicon
- Replace `/public/apple-touch-icon.png` with a 180x180px PNG

### Update Colors
- Edit color values in `tailwind.config.ts`
- Update `app/globals.css` for any additional styling

### Update Content
- Edit text in `components/Hero.tsx`
- Update metadata in `app/layout.tsx`

## Deployment

This project is ready for deployment to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

Private project for Minara Labs.

## Support

For questions or issues, contact the development team.
