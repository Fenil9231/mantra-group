# Email Functionality Testing Plan

## Overview
This document outlines the comprehensive testing plan for all email forms on the Mantra Group website after migrating from EmailJS to Nodemailer-based serverless API.

## Forms to Test

### 1. Contact Form (`ContactUsSection.jsx`)
- **Location**: `/contact` page
- **Fields**: Name*, Email*, Phone, Subject, Message*
- **Expected Behavior**: 
  - Sends email to admin with contact details
  - Sends auto-reply confirmation to user
  - Shows success/error toast notifications
  - Form validation for required fields

### 2. Newsletter Subscription Forms

#### a) Main Newsletter Form (`NewsletterForm.jsx`)
- **Locations**: Multiple pages (CTA sections, Newsletter components)
- **Fields**: Email*
- **Expected Behavior**:
  - Sends subscription notification to admin
  - Sends welcome email to subscriber
  - Shows success/error toast notifications
  - Email validation

#### b) Footer Newsletter (`NewsletterFooter.jsx`)
- **Location**: Footer of various pages
- **Fields**: Email*
- **Expected Behavior**: Same as main newsletter form

#### c) Subscribe Box (`SubscribeBox.jsx`)
- **Location**: Footer components
- **Fields**: Email*
- **Expected Behavior**: Same as main newsletter form

### 3. Property Listing Form (`AddListingForm.jsx`)
- **Location**: `/add-listing` page
- **Fields**: Property details, contact information
- **Expected Behavior**:
  - Sends property listing details to admin
  - Shows success/error toast notifications
  - Form reset after successful submission

### 4. Validation Form (`ValidationForm.jsx`)
- **Location**: Various pages as contact forms
- **Fields**: Name*, Phone*, Email*, Address*, Message
- **Expected Behavior**:
  - Sends contact form with validation
  - Uses Formik for form validation
  - Shows success/error toast notifications

## Testing Checklist

### Pre-Testing Setup
- [ ] Development server running on http://localhost:3000
- [ ] Email API endpoint configured: `/api/send-email`
- [ ] Environment variables properly set
- [ ] SMTP configuration verified

### Test Cases

#### Contact Form Testing
- [ ] Navigate to `/contact` page
- [ ] Test form validation (empty required fields)
- [ ] Test invalid email format
- [ ] Test invalid phone number format
- [ ] Submit valid contact form
- [ ] Verify success toast notification
- [ ] Check form reset after submission
- [ ] Verify admin receives contact email
- [ ] Verify user receives auto-reply email

#### Newsletter Subscription Testing
- [ ] Test newsletter form on homepage
- [ ] Test newsletter form in CTA sections
- [ ] Test footer newsletter subscription
- [ ] Test subscribe box in footer
- [ ] Test email validation
- [ ] Submit valid email subscription
- [ ] Verify success toast notification
- [ ] Check form reset after submission
- [ ] Verify admin receives subscription notification
- [ ] Verify user receives welcome email

#### Property Listing Testing
- [ ] Navigate to `/add-listing` page
- [ ] Fill out property listing form
- [ ] Submit property listing
- [ ] Verify success toast notification
- [ ] Check form reset after submission
- [ ] Verify admin receives property listing email

#### Error Handling Testing
- [ ] Test with invalid API endpoint
- [ ] Test with network connectivity issues
- [ ] Test form submission during loading state
- [ ] Verify error toast notifications
- [ ] Test form validation edge cases

### Expected Email Recipients

#### Admin Emails (to: SMTP_TO_EMAIL)
- Contact form submissions
- Newsletter subscription notifications
- Property listing submissions

#### User Emails (to: user's email)
- Contact form auto-reply
- Newsletter welcome emails

## Testing Results

### Contact Form Results
- [ ] ✅ Form validation working
- [ ] ✅ Email sent to admin
- [ ] ✅ Auto-reply sent to user
- [ ] ✅ Toast notifications working
- [ ] ✅ Form reset after submission

### Newsletter Forms Results
- [ ] ✅ Main newsletter form working
- [ ] ✅ Footer newsletter working
- [ ] ✅ Subscribe box working
- [ ] ✅ Admin notification sent
- [ ] ✅ Welcome email sent to user

### Property Listing Results
- [ ] ✅ Form submission working
- [ ] ✅ Email sent to admin
- [ ] ✅ Success notification shown

### Error Handling Results
- [ ] ✅ Validation errors displayed
- [ ] ✅ Network errors handled
- [ ] ✅ Loading states working

## Notes
- All forms use the `ServerlessEmailService` class
- Email templates are defined in `/api/send-email.js`
- Toast notifications use `react-toastify`
- Forms include proper loading states and validation
- SMTP configuration should be verified before testing

## Troubleshooting

If emails are not being sent:
1. Check SMTP environment variables
2. Verify API endpoint is accessible
3. Check browser console for errors
4. Verify network connectivity
5. Check email provider settings (Gmail App Password, etc.)