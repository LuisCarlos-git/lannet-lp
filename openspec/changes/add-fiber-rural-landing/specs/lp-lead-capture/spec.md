## ADDED Requirements

### Requirement: CEP coverage checker
The page SHALL render section `id="cobertura"` containing a form with one CEP input (`maxLength=9`, masks `00000-000`), client-side validation requiring exactly 8 digits, and a submit button. On submit, the handler SHALL prevent default, log `{ cep, source: "coverage" }` to the console with a `// TODO: wire to backend` comment in source, and display a friendly placeholder result message ("Em breve confirmaremos a cobertura para esse CEP. Nossa equipe entra em contato.").

#### Scenario: Invalid CEP blocks submission
- **WHEN** the user submits with fewer than 8 digits
- **THEN** the submit handler does not fire and the input shows an inline validation message

#### Scenario: Valid CEP triggers placeholder result
- **WHEN** the user submits "01310-100"
- **THEN** the console receives `{ cep: "01310100", source: "coverage" }` and the placeholder result message is shown beneath the form

### Requirement: Contact form
The page SHALL render section `id="contato"` containing a form with three fields — Nome (text, required, min 2 chars), Telefone (tel, required, masks `(00) 00000-0000`), Email (email, required, HTML5 email validation) — and a submit button. On submit, the handler SHALL prevent default, log `{ name, phone, email, source: "contact" }` to the console with a `// TODO: wire to Server Action` comment in source, then reset the form and show a success toast/inline message.

#### Scenario: Successful submission resets the form
- **WHEN** the user fills all fields validly and clicks submit
- **THEN** the form fields clear, the success message becomes visible, and the console contains the logged payload

#### Scenario: Required-field validation
- **WHEN** the user submits with any required field empty
- **THEN** the browser's built-in validation message appears on the first invalid field and the submit handler does not log anything

### Requirement: WhatsApp deep-link helper
The system SHALL expose a `src/lib/whatsapp.ts` helper exporting a function that builds a `https://wa.me/<number>?text=<encoded>` URL given an optional message. The number SHALL be read from `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only, with country code) with a placeholder fallback. All WhatsApp CTAs on the page (header, business section, contact section) SHALL use this helper and open the link in a new tab with `rel="noopener noreferrer"`.

#### Scenario: Helper builds a valid wa.me URL
- **WHEN** the helper is called with the message "Quero contratar o plano Gamer"
- **THEN** it returns `https://wa.me/<digits>?text=Quero%20contratar%20o%20plano%20Gamer`

#### Scenario: WhatsApp CTA opens in a new tab
- **WHEN** the user activates a WhatsApp CTA
- **THEN** the link's `target` is `_blank` and `rel` includes both `noopener` and `noreferrer`

### Requirement: Speed Test surface
The page SHALL render section `id="speed-test"` containing an explanatory paragraph and a primary CTA that opens an external speed-test provider (e.g., `https://fast.com` or a configurable URL) in a new tab. No iframe embed is required.

#### Scenario: Speed test CTA opens externally
- **WHEN** the user clicks the Speed Test CTA
- **THEN** the target URL opens in a new tab with `rel="noopener noreferrer"` and the user remains on the Lannet page in the original tab
