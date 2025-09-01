# Live Site Debug Checklist for Founder Application Form

## 🔍 Immediate Debug Steps for nartaq.com

### Step 1: Open Browser Developer Tools
1. Go to https://nartaq.com
2. Press F12 or right-click → "Inspect Element"
3. Go to the **Console** tab
4. Clear any existing logs

### Step 2: Navigate to Founder Application
1. Click "Apply Now" or go to the founders application page
2. Watch the console for initialization logs:
   ```
   🏗️ FounderMultiStepForm initialized
   📊 Initial state: {currentStep: 1, totalSteps: 4, isSubmitted: false, submissionError: ""}
   📍 Step changed to: 1 / 4
   ```

### Step 3: Fill Out the Form and Monitor Each Step
As you fill out each step, watch for these logs:
- **Step Navigation:**
  ```
  ➡️ Moving to next step from: 1
  🔍 Validating fields for step 1: [field names]
  ✅ Step validation result: true
  🚀 Moving to step: 2
  📍 Step changed to: 2 / 4
  ```

- **If validation fails:**
  ```
  ❌ Validation failed for step X, errors: {field: "error message"}
  ```

### Step 4: Test Final Step Submit Button
When you reach the final step (step 4), watch for:

1. **Button Click Detection:**
   ```
   🖱️ Submit button clicked!
   👆 Click event: [event object]
   🔘 Button disabled? false
   ⚙️ Current form state: {isSubmitting: false, isSubmitted: false, isValid: true...}
   📋 Form values at button click: {all form data}
   ```

2. **Form Submission Handler:**
   ```
   🎯 Form onSubmit triggered
   📄 Form event: [form event]
   🔍 Form state before submit: {isValid: true, errors: {}, isSubmitting: false...}
   📊 Form values: {complete form data}
   ```

3. **Submit Function Execution:**
   ```
   🚀 Founder form submission started
   📋 Form data: {complete form data}
   📤 Calling submitFounderApplication...
   📨 Server response: {success: true/false, message: "..."}
   ```

## 🚨 Common Issues to Look For

### Issue 1: Button Not Clickable
- **Symptom:** No "🖱️ Submit button clicked!" message
- **Check:** Button might be disabled
- **Look for:** `🔘 Button disabled? true`
- **Possible causes:** Form validation failing, already submitting, or CSS preventing clicks

### Issue 2: Form Not Submitting
- **Symptom:** Button click detected but no "🎯 Form onSubmit triggered"
- **Check:** Form validation or event prevention
- **Look for:** Form validation errors in console

### Issue 3: Server Action Not Called
- **Symptom:** Form submits but no "📤 Calling submitFounderApplication..."
- **Check:** JavaScript errors or async/await issues
- **Look for:** Any JavaScript errors in console

### Issue 4: Server Action Fails
- **Symptom:** "📤 Calling submitFounderApplication..." but error response
- **Check:** Server response in "📨 Server response:"
- **Look for:** `{success: false, error: "error message"}`

## 🔧 Quick Fixes to Test in Browser Console

### Force Form Submission (for testing)
```javascript
// If you can access the form component, you can try:
const form = document.querySelector('form');
if (form) {
  form.requestSubmit();
}
```

### Check Form Validity
```javascript
// Check if HTML5 validation is passing
const form = document.querySelector('form');
console.log('Form valid:', form.checkValidity());
console.log('Form validation message:', form.validationMessage);
```

### Check for JavaScript Errors
- Look for any red error messages in Console
- Common issues: Network requests failing, undefined variables, React errors

## 📝 Information to Collect

When you find the issue, please note:
1. **Which step it fails at** (button click, form submission, server call, etc.)
2. **Exact console logs** (copy/paste the relevant logs)
3. **Any error messages** (red text in console)
4. **Form data at failure point** (from the debug logs)
5. **Browser and version** (Chrome, Firefox, Safari, etc.)

## 🎯 Expected Successful Flow

A successful submission should show this sequence:
```
🖱️ Submit button clicked!
🎯 Form onSubmit triggered
🚀 Founder form submission started
📤 Calling submitFounderApplication...
📨 Server response: {success: true, message: "Application submitted successfully"}
✅ Submission successful, calling onSubmissionSuccess
```

## 🚀 After Finding the Issue

Once you identify where it's failing, we can:
1. **Frontend issues:** Fix validation, event handling, or UI problems
2. **Backend issues:** Debug server action or database problems
3. **Network issues:** Check API calls and responses
4. **Environment issues:** Verify production environment settings

This debug logging will give us exact visibility into what's happening on the live site!