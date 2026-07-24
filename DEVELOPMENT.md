# Development Guide

This document provides guidelines for developing Minara Labs website.

## Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/minaralabs/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## Project Structure

```
minara-labs/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── EmailForm.tsx     # Email subscription form
│   └── index.ts          # Component exports
├── lib/                   # Utility functions and constants
│   ├── utils.ts          # Helper utilities
│   ├── types.ts          # TypeScript types
│   ├── constants.ts      # App constants
│   ├── analytics.ts      # Analytics setup
│   ├── hooks/            # Custom React hooks
│   │   ├── useEmailForm.ts
│   │   └── index.ts
│   └── index.ts          # Lib exports
├── public/                # Static assets
├── .github/               # GitHub configuration
│   └── workflows/         # CI/CD workflows
└── [config files]         # Next.js, TypeScript, Tailwind configs
```

## Code Style

### TypeScript
- Use strict mode (enforced by tsconfig)
- Type all component props
- Avoid `any` types
- Use proper type inference where possible

### React Components
- Use functional components with hooks
- Use "use client" directive for client-side components
- Keep components small and focused
- Export default component at the end

Example:
```tsx
"use client";

import { ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
  className?: string;
}

export default function Component({ children, className }: ComponentProps) {
  return <div className={className}>{children}</div>;
}
```

### Styling
- Use Tailwind CSS for styling
- Prefer utility classes over custom CSS
- Use theme values from tailwind.config.ts
- Follow the existing color palette

### Naming Conventions
- Components: PascalCase (e.g., `EmailForm.tsx`)
- Utilities: camelCase (e.g., `validateEmail`)
- Constants: UPPER_SNAKE_CASE (e.g., `COMPANY_NAME`)
- Files: match the exported default export name

## Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code quality
npm run lint        # Run ESLint
```

## Commits

Follow conventional commit format:
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `style:` Code style changes
- `docs:` Documentation updates
- `chore:` Build, dependencies, etc.

Example:
```
feat: add newsletter signup animation
fix: email validation regex
docs: update README with deployment guide
```

## Pull Requests

1. Create a feature branch from `develop`
2. Make your changes
3. Ensure all tests pass and linting succeeds
4. Create a pull request with a clear description
5. Wait for code review and CI/CD checks

## Performance Considerations

- Use React.memo for expensive components
- Implement code splitting for large components
- Optimize images (use Next.js Image component)
- Avoid unnecessary re-renders
- Use production builds for performance testing

## Accessibility

- Use semantic HTML elements
- Include alt text for images
- Maintain proper color contrast
- Use ARIA labels where needed
- Test with keyboard navigation
- Test with screen readers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Debugging

### Development Mode
```bash
npm run dev
```

### TypeScript Checking
```bash
npx tsc --noEmit
```

### ESLint
```bash
npm run lint
```

### Network Requests
Use browser DevTools Network tab to inspect API calls.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main

### Environment Variables

Create `.env.local` for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your fork
5. Create a pull request

Please ensure your code follows the style guide and passes all quality checks.

## Common Issues

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check for type errors
npx tsc --noEmit

# Force rebuild
rm -rf .next
npm run build
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## Contact

For questions or issues, reach out to the development team.
