# Loops Integration - Quick Start (3 Minutes)

Get your email form connected to Loops in 3 steps.

## ⚡ Quick Setup

### 1️⃣ Get API Key (1 minute)

```
1. Go to https://loops.so
2. Sign up or log in
3. Settings → API
4. Copy API key
```

### 2️⃣ Add to Environment (1 minute)

**Local Development:**
```
Open .env.local and add:
LOOPS_API_KEY=your_api_key_here
```

**Production (Vercel):**
```
1. Go to Vercel Dashboard
2. Project Settings → Environment Variables
3. Add: LOOPS_API_KEY = your_api_key_here
4. Redeploy
```

### 3️⃣ Test (1 minute)

```bash
npm run dev
```

1. Open http://localhost:3000
2. Enter test email
3. Click "Notify Me"
4. ✅ See success message
5. Check Loops dashboard - email appears there

**Done!** 🎉

---

## What Changed?

### New Files
- ✅ `app/api/subscribe/route.ts` - API endpoint for Loops

### Updated Files
- ✅ `components/EmailForm.tsx` - Now calls real API
- ✅ `.env.example` - Added `LOOPS_API_KEY`

### No Changes to
- ✅ Styling (CSS unchanged)
- ✅ Animations (Framer Motion preserved)
- ✅ Layout (responsive design same)
- ✅ Validation (email checks same)
- ✅ Loading states (UX same)
- ✅ Success message (UI same)

---

## API Details

### Endpoint
```
POST /api/subscribe
```

### Request
```json
{
  "email": "user@example.com"
}
```

### Success
```json
{
  "success": true,
  "message": "Successfully subscribed to waitlist",
  "email": "user@example.com"
}
```

### Error
```json
{
  "success": false,
  "message": "Please enter a valid email address"
}
```

---

## Troubleshooting

### Form doesn't work?

Check 1: Is `LOOPS_API_KEY` in `.env.local`?
```bash
# Should have:
LOOPS_API_KEY=your_key_here
```

Check 2: Did you restart dev server?
```bash
# Stop: Ctrl+C
# Restart: npm run dev
```

Check 3: Is API key correct?
```
1. Go to loops.so
2. Settings → API
3. Copy the full key (it's long)
4. Paste in .env.local
5. Restart server
```

Check 4: Check browser console for errors
```
F12 → Console tab → Try submitting
```

### Email not appearing in Loops?

1. Check Loops dashboard → Contacts
2. Search for email address
3. If not there: Check browser console for error message
4. Check Vercel logs if in production

### Getting 500 error?

Usually means API key is missing or wrong.
1. Verify `.env.local` has `LOOPS_API_KEY`
2. Verify key value is correct (no extra spaces)
3. Restart: `npm run dev`

---

## File Reference

### `app/api/subscribe/route.ts`
```typescript
// Handles POST /api/subscribe
// Validates email
// Sends to Loops API (server-side only)
// Returns success/error
```

### `components/EmailForm.tsx`
```typescript
// Updated handleSubmit function
// Now: const response = await fetch("/api/subscribe", ...)
// Everything else unchanged
```

---

## Security ✅

✓ API key never sent to browser
✓ API key in server-side environment variables only
✓ Email validation on client AND server
✓ Proper error handling
✓ No secrets in version control

---

## Next: Advanced Setup

See `LOOPS_SETUP.md` for:
- Detailed setup instructions
- Email automation sequences
- Analytics integration
- Troubleshooting guide
- Production deployment

---

## That's It!

Your form is now live and connected to Loops.

**Questions?** Check `LOOPS_SETUP.md` or see:
- Loops Docs: https://docs.loops.so
- Next.js Docs: https://nextjs.org/docs

**Ready to deploy?** Push to GitHub - Vercel auto-deploys (with env vars set).
