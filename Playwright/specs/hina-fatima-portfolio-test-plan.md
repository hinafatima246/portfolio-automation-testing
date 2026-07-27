# Test Plan for Hina Fatima Portfolio Website

## Application Overview

Comprehensive QA test plan for Hina Fatima's portfolio website, covering initial page load, navigation, contact form validation and submission, and responsive interaction.

## Test Scenarios

### 1. Page load and navigation

**Seed:** `seed.spec.ts`

#### 1.1. Website loads correctly and shows the expected title

**File:** `specs/hina-fatima-portfolio/page-load.spec.ts`

**Steps:**
  1. Open the portfolio URL in a fresh browser session.
    - expect: The page loads successfully without a blank screen or fatal error.
    - expect: The browser title contains Hina Fatima or the portfolio name.
    - expect: The main hero/landing content is visible within the viewport.

#### 1.2. Navbar or menu navigation works across sections

**File:** `specs/hina-fatima-portfolio/navbar-navigation.spec.ts`

**Steps:**
  1. Open the site and inspect the top navigation bar or hamburger menu.
    - expect: The navbar or menu is visible on desktop and mobile layouts.
    - expect: Clicking each navigation item scrolls to the correct section or loads the expected section view.
    - expect: The active section indicator or focus state updates correctly where supported.

#### 1.3. Primary call-to-action buttons are interactive

**File:** `specs/hina-fatima-portfolio/cta-interaction.spec.ts`

**Steps:**
  1. Locate primary buttons such as 'Contact', 'View Projects', or similar CTAs.
    - expect: Each button is visible and clickable.
    - expect: Clicking a CTA triggers the intended navigation or action without freezing or disappearing.
    - expect: The relevant section or external destination opens as expected.

### 2. Contact form validation and submission

**Seed:** `seed.spec.ts`

#### 2.1. Contact form blocks submission when required fields are empty

**File:** `specs/hina-fatima-portfolio/contact-form-validation.spec.ts`

**Steps:**
  1. Open the contact section and leave all fields empty.
    - expect: The form does not submit.
    - expect: Validation messages appear for required fields.
    - expect: The submit button remains disabled or shows an error state until the form is complete.

#### 2.2. Invalid input handling shows clear feedback

**File:** `specs/hina-fatima-portfolio/contact-form-invalid-input.spec.ts`

**Steps:**
  1. Enter invalid values such as an incorrect email format, a very short message, or unsupported characters in a required field.
    - expect: The form highlights invalid inputs.
    - expect: Clear validation messages appear near the affected field(s).
    - expect: Submission is blocked until the invalid values are corrected.

#### 2.3. Valid contact form submission succeeds

**File:** `specs/hina-fatima-portfolio/contact-form-success.spec.ts`

**Steps:**
  1. Fill the contact form with valid data for name, email, subject, and message, then submit it.
    - expect: The form submits successfully.
    - expect: A success confirmation message or redirect appears.
    - expect: The form state is reset or the user is guided to the next step as expected.

### 3. Responsive behavior and interaction

**Seed:** `seed.spec.ts`

#### 3.1. Navigation and buttons remain usable at mobile width

**File:** `specs/hina-fatima-portfolio/responsive-navigation.spec.ts`

**Steps:**
  1. Resize the viewport to a mobile width and inspect the hamburger menu and buttons.
    - expect: The menu opens and closes correctly.
    - expect: Buttons remain visible, tappable, and not overlapped by other elements.
    - expect: Content is still readable and does not overflow awkwardly.

#### 3.2. Interactive elements remain accessible across viewport changes

**File:** `specs/hina-fatima-portfolio/responsive-interactions.spec.ts`

**Steps:**
  1. Resize the viewport from desktop to tablet to mobile and interact with the navbar, contact form, and CTA buttons.
    - expect: No elements disappear unexpectedly or become non-interactive.
    - expect: Focus and hover states remain consistent where applicable.
    - expect: The layout adapts smoothly without major overlap or clipping.
