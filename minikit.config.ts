const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

/**
 * Farcaster MiniApp manifest (validator-compatible)
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjE0NDU2ODIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0N0NlMzc4Nzg4OTVEMjViQTk5QjY0RDVDZjI3MjQ4ZUI1OTUxQTNiIn0",
    payload: "eyJkb21haW4iOiJ3YWl0bGlzdC1kZW1vLXN0dS52ZXJjZWwuYXBwIn0",
    signature: "/JMtUQ4i6APuM+OJV6i+QOn6kH3gKXLZv/UCi3MjZgRrbxoeEa3j5WL+b685cdvIdgEgkaSB7WYlq/a6nk7fLhw=",
  },

  miniapp: {
    version: "1",
    name: "Cubey",
    description: "Your AI Ad Companion",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart]()
