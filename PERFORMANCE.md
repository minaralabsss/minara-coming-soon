# Performance Guide

This document outlines performance optimization strategies for the Minara Labs website.

## Current Performance Targets

- **Lighthouse Score**: 95+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3s

## Measuring Performance

### Local Testing

```bash
# Build production version
npm run build

# Start production server
npm start

# Open Chrome DevTools -> Lighthouse
```

### Online Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)
- [GTmetrix](https://gtmetrix.com)

## Optimization Strategies

### 1. Code Splitting

Next.js automatically code-splits at the route level. For component-level splitting:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

### 2. Image Optimization

Always use Next.js Image component:

```tsx
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={100}
      height={100}
      priority // For above-the-fold images
    />
  );
}
```

### 3. Font Optimization

Use system fonts or modern font loading:

```css
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom-font.woff2") format("woff2");
  font-display: swap; /* Show fallback immediately */
}
```

### 4. CSS and JavaScript

#### Minimize CSS
- Tailwind automatically purges unused CSS
- Use utility classes efficiently
- Avoid inline styles

#### Minimize JavaScript
- Keep bundle size small
- Lazy load non-critical dependencies
- Tree-shake unused code

### 5. Framer Motion Performance

Use `will-change` CSS for animated elements:

```tsx
<motion.div style={{ willChange: "transform" }} animate={{ x: 100 }} />
```

Reduce animation complexity:

```tsx
// Good - simple transforms
<motion.div animate={{ x: 100 }} />

// Avoid - complex animations
<motion.div
  animate={{
    x: 100,
    y: 50,
    rotate: 45,
    scale: 1.2,
    opacity: 0.5,
  }}
/>
```

### 6. Reducing Third-Party Scripts

Current dependencies:
- React & React DOM (essential)
- Next.js (essential)
- Tailwind CSS (dev-only)
- Framer Motion (consider impact)
- Lucide React (lightweight icons)

Each third-party script should provide clear value.

## Performance Checklist

### Before Deployment

- [ ] Run Lighthouse audit
- [ ] Check bundle size: `npm run build`
- [ ] Test on slow 3G network
- [ ] Test on low-end devices
- [ ] Check Core Web Vitals
- [ ] Verify images are optimized
- [ ] Test with browser DevTools

### Monitoring

Add performance monitoring to track metrics over time:

```tsx
// Example: Using Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics service
}
```

## Common Performance Issues

### Issue: Large Bundle Size

**Solution:**
- Remove unused dependencies
- Use dynamic imports for heavy components
- Enable gzip compression

### Issue: Slow Initial Load

**Solution:**
- Optimize images
- Reduce CSS/JS
- Enable caching
- Use CDN

### Issue: Jank/Stuttering Animations

**Solution:**
- Use `transform` and `opacity` for animations
- Reduce animation complexity
- Use GPU acceleration
- Profile with Chrome DevTools

### Issue: Cumulative Layout Shift (CLS)

**Solution:**
- Use explicit dimensions
- Avoid inserting content above existing content
- Use `font-display: swap`
- Avoid animations that affect layout

## Build Optimization

### Analyze Bundle

```bash
# Analyze bundle size
npm run build

# Output shows bundle analysis
```

### Production Optimizations

Next.js automatically handles:
- Code minification
- Tree-shaking
- Image optimization
- CSS purging
- Font optimization

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Browser Caching

Set appropriate cache headers:

```tsx
// next.config.ts
export const headers = async () => [
  {
    source: "/(.*)",
    headers: [
      {
        key: "Cache-Control",
        value: "public, max-age=3600, s-maxage=86400",
      },
    ],
  },
];
```

## Content Delivery Network (CDN)

Deploy to Vercel for automatic CDN distribution:
- Automatic optimization
- Global edge network
- Automatic caching

## Performance Budgets

Set targets for metrics:

```json
{
  "bundles": [
    {
      "name": "main",
      "maxSize": "250kb"
    },
    {
      "name": "vendor",
      "maxSize": "200kb"
    }
  ]
}
```

## Testing Performance

### Simulate Slow Network

In Chrome DevTools:
1. Open DevTools
2. Go to Network tab
3. Select "Slow 3G" from the dropdown
4. Reload page

### Simulate Low-End Device

1. Open DevTools
2. Click device toggle
3. Select a low-end device
4. Test performance

## Continuous Monitoring

### Setup Analytics

Track Core Web Vitals in production:

```tsx
// lib/analytics.ts
export const trackWebVitals = (metric) => {
  // Send to analytics service
  console.log(metric);
};
```

### GitHub Actions

Add performance check to CI:

```yaml
- name: Performance audit
  run: npm run build && npm run test:performance
```

## Resources

- [Web Vitals Guide](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/learn/seo/introduction-to-seo)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Lighthouse Best Practices](https://developers.google.com/web/tools/lighthouse)

## Optimization Timeline

**Week 1:**
- Baseline Lighthouse score
- Identify biggest bottlenecks
- Optimize images

**Week 2:**
- Code splitting
- Bundle analysis
- Remove unused dependencies

**Week 3:**
- Caching strategy
- CDN configuration
- Performance monitoring

**Ongoing:**
- Monitor Core Web Vitals
- Track performance metrics
- Regular audits
