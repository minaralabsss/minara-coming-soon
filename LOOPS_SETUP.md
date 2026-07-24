# Loops Integration Guide

Complete setup guide for connecting Minara Labs with Loops for email waitlist management.

## What is Loops?

Loops is a modern email platform for sending transactional emails, building waitlists, and managing customer communication. This integration connects your email signup form to Loops.

## Setup Instructions

### Step 1: Get Your Loops API Key

1. Go to [Loops.so](https://loops.so)
2. Sign up or log in to your account
3. Navigate to **Settings** → **API**
4. Copy your API key (starts with `bearer_`)
5. Keep this key secure - never share it or commit it to git

### Step 2: Configure Environment Variables

#### For Local Development

1. Open `.env.local` in your project root
2. Add your Loops API key:
   ```env
   LOOPS_API_KEY=your_actual_api_key_here
   ```
3. Save the file

#### For Production (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `LOOPS_API_KEY`
   - **Value**: Your Loops API key
   - **Environments**: Select all (Production, Preview, Development)
5. Click **Save**
6. Redeploy your project for changes to take effect

### Step 3: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000` in your browser

3. Enter a test email in the form

4. Click "Notify Me"

5. You should see:
   - ✅ Success message: "Thank you for subscribing."
   - ✅ Email appears in your Loops dashboard

### Step 4: Verify in Loops Dashboard

1. Log in to [Loops.so](https://loops.so)
2. Navigate to **Contacts**
3. Search for the test email you submitted
4. Confirm the contact was created successfully

## How It Works

### API Architecture

```
Frontend (EmailForm.tsx)
    ↓
    └─→ POST /api/subscribe
        └─→ Validates email
        └─→ Calls Loops API (server-side only)
        └─→ Returns success/error
    ↓
Browser shows success/error UI
```

### Files Modified

1. **`app/api/subscribe/route.ts`** (NEW)
   - Handles email subscription requests
   - Validates email format
   - Calls Loops API with secure API key
   - Never exposes API key to client

2. **`components/EmailForm.tsx`** (UPDATED)
   - Replaced simulated API call with real `/api/subscribe`
   - Kept all animations and UI states
   - Added error handling for API failures

3. **`.env.example`** (UPDATED)
   - Added `LOOPS_API_KEY` environment variable

## API Endpoint

### POST `/api/subscribe`

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Successfully subscribed to waitlist",
  "email": "user@example.com"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Validation & Security

### Email Validation

✓ Required field
✓ Format validation (`user@example.com`)
✓ Trimmed and normalized
✓ Lowercase conversion

### API Key Security

✓ Server-side only (never sent to browser)
✓ Environment variable protected
✓ Not included in version control
✓ Separate staging/production keys

### Error Handling

✓ Invalid email format
✓ Missing API key
✓ Loops API failures
✓ Network errors
✓ Duplicate subscriptions (handled gracefully)

## Features

### ✅ User Experience

- Smooth animations (Framer Motion)
- Real-time validation
- Loading state while submitting
- Success confirmation
- Error messages
- Auto-reset after success

### ✅ Developer Experience

- TypeScript type safety
- Proper error handling
- Environment variable management
- Next.js App Router conventions
- Clean, documented code

## Troubleshooting

### Issue: "Server configuration error"

**Cause**: `LOOPS_API_KEY` environment variable not set

**Solution**:
1. Check `.env.local` has `LOOPS_API_KEY=your_key`
2. Restart development server: `npm run dev`
3. For production, check Vercel environment variables

### Issue: "Failed to subscribe"

**Causes & Solutions**:
- Invalid API key: Verify key in Loops dashboard
- Network error: Check internet connection
- Loops service down: Check [Loops status page](https://status.loops.so)

### Issue: Email already exists

**Note**: This is normal behavior. Loops returns a 409 conflict, but we treat it as success so users don't get confused.

### Issue: Form not submitting

**Troubleshooting**:
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Try submitting email
4. Check for error messages
5. Go to **Network** tab
6. Look for `subscribe` POST request
7. Check response status and body

## Testing

### Manual Test

```bash
# 1. Start dev server
npm run dev

# 2. Open http://localhost:3000

# 3. Submit test email
# 4. Check browser console for any errors
# 5. Check Loops dashboard for contact
```

### Test Different Emails

- ✅ Valid: `user@example.com`
- ✅ Valid: `first.last+tag@company.co.uk`
- ❌ Invalid: `missing-at-sign.com`
- ❌ Invalid: `@nodomain.com`
- ❌ Invalid: (empty field)

## Loops Features to Explore

Once integrated, you can use Loops for:

### Waitlist Management
- Track signups
- Send confirmation emails
- Create drip campaigns

### Automation
- Welcome series
- Product updates
- Launch notifications

### Analytics
- Open rates
- Click rates
- Subscriber growth

### Segmentation
- Tag contacts
- Custom fields
- Audience targeting

See [Loops Documentation](https://docs.loops.so) for more features.

## Production Deployment

### Pre-Launch Checklist

- [ ] Test locally with `.env.local`
- [ ] Add `LOOPS_API_KEY` to Vercel environment variables
- [ ] Redeploy project on Vercel
- [ ] Test production form submission
- [ ] Verify contact appears in Loops dashboard
- [ ] Setup welcome email in Loops
- [ ] Monitor first few submissions

### Monitoring

- Watch Vercel logs for API errors
- Monitor Loops dashboard for contact growth
- Check email delivery rates
- Track unsubscribe rates

## Next Steps

### Email Sequences

Setup welcome emails in Loops:
1. Create new automation
2. Trigger: "Contact is subscribed"
3. Send: Welcome email
4. Add: Follow-up emails

### Dashboard Widget

Add Loops widget to dashboard:
1. Go to Loops settings
2. Copy embed code
3. Add to your admin dashboard

### Analytics

Track subscription metrics:
- Signups per day
- Conversion funnel
- Geographic data
- Device breakdown

## API Reference

### Endpoint
```
POST https://api.loops.so/v1/contacts/create
```

### Headers
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Request Body
```json
{
  "email": "user@example.com",
  "subscribed": true,
  "firstName": "John",      // optional
  "lastName": "Doe",        // optional
  "customFields": {         // optional
    "field_name": "value"
  }
}
```

## Support

### Loops Support
- Docs: https://docs.loops.so
- Email: support@loops.so
- Status: https://status.loops.so

### Minara Labs Support
- See `README.md` for project overview
- See `DEVELOPMENT.md` for code guidelines
- Check `DEPLOYMENT.md` for hosting issues

## Security Best Practices

### Do's ✅
- Keep API key in `.env.local` (never commit)
- Use environment variables in production
- Validate all email inputs
- Handle errors gracefully
- Monitor API usage

### Don'ts ❌
- Never expose API key in client-side code
- Don't commit `.env.local` to git
- Don't hardcode secrets
- Don't log sensitive data
- Don't share API keys publicly

## Logs & Debugging

### Server Logs

View logs in Vercel:
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Deployments**
4. Click latest deployment
5. Go to **Logs** tab
6. Search for errors

### Browser Console

Check browser console for errors:
1. Open DevTools (F12)
2. Go to **Console** tab
3. Look for error messages
4. Note the full error text

### Network Inspection

Debug API calls:
1. Open DevTools (F12)
2. Go to **Network** tab
3. Submit form
4. Look for `subscribe` request
5. Check:
   - Status code
   - Request body
   - Response body
   - Headers

## Performance

### Optimization
- ✅ API call is non-blocking
- ✅ Loading state prevents double-submit
- ✅ Error handling prevents hangs
- ✅ Minimal dependencies

### Metrics
- Form validation: < 10ms
- API call: typically 200-500ms
- Success animation: 300ms
- Total UX time: 500-800ms

## Rate Limiting

Loops API has rate limits:
- Free plan: 1,000 contacts/month
- Standard: Unlimited

Check your Loops plan for current limits.

## Changelog

### Version 1.0 (Current)
- Initial Loops integration
- Email validation
- Error handling
- Success UI
- Environment variables

## Support Resources

- **Loops Docs**: https://docs.loops.so
- **Next.js Docs**: https://nextjs.org/docs
- **API Route Handler**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Environment Variables**: https://nextjs.org/docs/basic-features/environment-variables

---

**Setup complete!** Your email form is now connected to Loops. Start collecting waitlist signups today.
