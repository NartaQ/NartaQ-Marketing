# Founder Application Button Debug Guide - nartaq.com

## Issue: Founder Application submission button doesn't work on live site

### ✅ Confirmed Working:
- Server action `submitFounderApplication` works correctly
- Database operations are functional
- Form validation schemas are correct

### 🔍 Potential Issues to Debug:

## 1. Client-Side Form Validation Issues

The multi-step form might be failing validation before reaching submission. Check if all required fields are properly filled:

### Required Fields by Step:
- **Step 1**: `fullName`, `workEmail`
- **Step 2**: `companyName`, `website` 
- **Step 3**: `sector[]`, `fundingStage`, `location`
- **Step 4**: `shortPitch` (10-300 characters)

### Browser Console Debugging:
```javascript
// Open browser console on nartaq.com/apply and run:
console.log('Form data:', window.founderForm?.getValues())
console.log('Form errors:', window.founderForm?.formState.errors)
console.log('Form state:', window.founderForm?.formState)
```

## 2. JavaScript Errors Blocking Submission

### Check Browser Console for:
- React hydration mismatches
- Framer Motion animation errors
- Form validation errors
- Network request failures

### Common Error Patterns:
```
Uncaught TypeError: Cannot read property 'handleSubmit'
Warning: React hydration mismatch
Error: Form submission failed
Network Error: POST request failed
```

## 3. Form State Management Issues

### Debug Form State:
The form might be stuck in a loading state or have incorrect validation state.

**Check in browser console:**
```javascript
// Find the form element
const form = document.querySelector('form')
console.log('Form element:', form)

// Check submit button state
const submitBtn = document.querySelector('button[type="submit"]')
console.log('Submit button:', submitBtn)
console.log('Button disabled:', submitBtn?.disabled)
```

## 4. Network/CORS Issues

### Check Network Tab:
1. Open DevTools → Network tab
2. Try to submit the form
3. Look for:
   - Failed POST requests to server actions
   - 500/400/403 error responses
   - CORS errors
   - Request timeout issues

## 5. Step-by-Step Debugging Process

### A. Verify Form Renders Correctly:
```javascript
// Check if form components are mounted
console.log('Founder form elements:', document.querySelectorAll('[data-testid="founder-form"]'))
console.log('Submit button:', document.querySelector('button[type="submit"]'))
```

### B. Test Form Validation:
1. Fill out the form completely
2. Check browser console for validation errors
3. Ensure all required fields have values

### C. Monitor Form Submission:
```javascript
// Add event listener to form submission
document.querySelector('form')?.addEventListener('submit', (e) => {
  console.log('Form submission attempted:', e)
  console.log('Form data:', new FormData(e.target))
})
```

## 6. Quick Fixes to Try

### Fix 1: Add Debug Logging to Form Component

Add this to the `onSubmit` function in `FounderMultiStepForm.tsx`:

```typescript
const onSubmit = async (data: FormData) => {
  console.log('🚀 Form submission started')
  console.log('📋 Form data:', data)
  console.log('⚡ Form state:', form.formState)
  
  // ... existing submission logic
}
```

### Fix 2: Prevent Default Submission Issues

Ensure the form isn't submitting via browser default:

```typescript
const onSubmit = async (data: FormData) => {
  try {
    console.log('Submitting with data:', data)
    const result = await submitFounderApplication(data)
    console.log('Submission result:', result)
    // ... rest of logic
  } catch (error) {
    console.error('Submission error:', error)
  }
}
```

### Fix 3: Check Form Element Structure

Verify the form is properly structured:
```html
<form onSubmit={form.handleSubmit(onSubmit)}>
  <!-- form content -->
  <button type="submit" disabled={isSubmitting}>
    Submit Application
  </button>
</form>
```

## 7. Performance Impact Debug

Since the Lighthouse audit showed poor performance (32/100), the form might be affected by:

- **Total Blocking Time**: 4,180ms could prevent form interactions
- **Large JavaScript bundles** blocking form execution
- **Slow LCP** (12.5s) indicating resource loading issues

### Check if performance is blocking the form:
```javascript
// Monitor main thread blocking
console.log('Page load performance:', performance.getEntriesByType('navigation')[0])
console.log('Is main thread blocked?', Date.now() - performance.now() > 50)
```

## 8. Live Site Testing Steps

### Immediate Testing:
1. **Open nartaq.com/apply in browser**
2. **Open Developer Tools (F12)**
3. **Go to Console tab**
4. **Fill out the founder application form completely**
5. **Click submit and watch console for errors**

### Look For These Specific Issues:
- Form validation errors preventing submission
- Network request failures
- JavaScript runtime errors
- React hydration mismatches
- Button disabled state issues

### If Console Shows Errors:
- **Validation errors**: Check all required fields are filled
- **Network errors**: Check server/database connectivity
- **JavaScript errors**: May need to fix component logic
- **Performance errors**: Page might be too slow to handle interactions

## 9. Production-Specific Issues

### Environment Differences:
- Production builds might have different behavior than development
- Minified code could cause different error patterns  
- Server-side rendering differences
- Cache issues preventing form updates

### Check for:
```javascript
console.log('Environment:', process.env.NODE_ENV)
console.log('Build info:', window.__BUILD_INFO__)
```

## 10. Emergency Workaround

If the multi-step form continues failing, consider temporarily using the simpler `FounderForm` component:

```typescript
// In UnifiedApplicationForm.tsx, replace:
<FounderMultiStepForm onSubmissionSuccess={handleSubmissionSuccess} />
// With:
<FounderForm onSubmitted={handleSubmissionSuccess} />
```

This uses a single-step form that might be more reliable while debugging the multi-step version.

---

## Next Steps:
1. **Check browser console on nartaq.com/apply**
2. **Report any error messages found**
3. **Test with different browsers/devices**
4. **Monitor Network tab during form submission**

Let me know what errors you find in the browser console and I'll provide targeted fixes!