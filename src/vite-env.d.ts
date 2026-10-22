/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST JSON {name, email, idea}. Takes precedence over the email. */
  readonly VITE_CONTACT_ENDPOINT?: string
  /** Fallback: opens a mailto to this address. */
  readonly VITE_CONTACT_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
