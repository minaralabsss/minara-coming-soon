# Quick Start Guide

Get the Minara Labs website up and running in 5 minutes.

## Prerequisites

- Node.js 18+ installed
- npm or yarn installed
- Git (optional)

## Setup (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Visit `http://localhost:3000`

## What's Included

✅ Complete Next.js 15 setup with TypeScript
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ Email subscription form with validation
✅ Responsive design (mobile, tablet, desktop)
✅ SEO ready with metadata
✅ Production-ready code
✅ GitHub Actions CI/CD workflows
✅ Lighthouse optimized

## Common Commands

```bash
# Development
npm run dev              # Start development server

# Production
npm run build            # Build for production
npm start               # Start production server

# Code Quality
npm run lint            # Check code with ESLint
```

## Editing Content

### Update Main Text

Edit `components/Hero.tsx`:
- Update "The future of beauty technology." heading
- Update supporting paragraphs
- Modify email form button text

### Update Colors

Edit `tailwind.config.ts`:
- Change accent color (#8B0000)
- Modify text colors
- Update background colors

### Update Metadata

Edit `app/layout.tsx`:
- Change title and description
- Update Open Graph tags
- Modify Twitter card info

## File Structure Overview

```
app/                 # Main application
  page.tsx          # Home page
  layout.tsx        # Root layout with SEO

components/         # React components
  Hero.tsx         # Headline section
  EmailForm.tsx    # Newsletter form

lib/                # Utilities & helpers
  utils.ts         # Functions
  constants.ts     # App constants
  types.ts         # TypeScript types
  hooks/           # Custom React hooks

public/             # Static files
  favicon.ico
  robots.txt
  sitemap.xml
```

## Next Steps

1. **Deploy to Vercel** (Recommended)
   - Connect GitHub repo to Vercel
   - Deploy automatically

2. **Custom Domain**
   - Point domain to Vercel
   - Update domain in layout.tsx

3. **Email Integration**
   - Implement backend API
   - Connect to email service (Mailchimp, SendGrid, etc.)
   - Update EmailForm.tsx with API call

4. **Add Analytics**
   - Google Analytics
   - Mixpanel
   - Segment
   - See `lib/analytics.ts`

5. **Add Testing** (Optional)
   - Install testing dependencies
   - See `TESTING.md`

## Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### Dependencies Issue

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Error

```bash
npm run build
```

Check for TypeScript errors and fix.

## Deployment

### Quick Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Deploy to Other Platforms

- **Netlify**: `npm run build` then deploy `.next` folder
- **AWS Amplify**: Connect GitHub repo
- **Heroku**: Set buildpack to Node.js

## Performance Check

```bash
npm run build
npm start
# Open Chrome DevTools -> Lighthouse
# Run audit
```

Target: Lighthouse score 95+

## SEO Checklist

- [ ] Update title and description
- [ ] Add favicon
- [ ] Test Open Graph tags
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Test with Google PageSpeed Insights

## Project Documentation

- `README.md` - Full project overview
- `DEVELOPMENT.md` - Development guidelines
- `TESTING.md` - Testing setup and guide
- `PERFORMANCE.md` - Performance optimization
- `QUICK_START.md` - This file

## Need Help?

1. Check existing documentation files
2. Review Next.js docs: https://nextjs.org/docs
3. Check Tailwind docs: https://tailwindcss.com/docs
4. Review Framer Motion: https://www.framer.com/motion

## Key Files to Edit

| File | Purpose |
|------|---------|
| `app/layout.tsx` | SEO, metadata, HTML structure |
| `app/page.tsx` | Page layout and structure |
| `components/Hero.tsx` | Headline and tagline content |
| `components/EmailForm.tsx` | Form behavior and validation |
| `tailwind.config.ts` | Colors, fonts, spacing |
| `lib/constants.ts` | App-wide constants |

## Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## What's Not Included (Yet)

- Backend API
- Email sending service
- Database
- Authentication
- User dashboard

These can be added as needed.

## Production Checklist

Before going live:
- [ ] Update favicon
- [ ] Update og-image.png
- [ ] Run Lighthouse audit
- [ ] Test on mobile
- [ ] Update email service integration
- [ ] Set up analytics
- [ ] Setup error tracking (Sentry, etc.)
- [ ] Add security headers
- [ ] Test form submission
- [ ] Setup email notifications

## Get Started Now

```bash
# 1. Install
npm install

# 2. Develop
npm run dev

# 3. Open browser
# http://localhost:3000

# 4. Edit files
# components/Hero.tsx
# tailwind.config.ts

# 5. Deploy
# Push to GitHub -> Deploy to Vercel
```

Happy coding! 🚀
