const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjE0NDU2ODIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0N0NlMzc4Nzg4OTVEMjViQTk5QjY0RDVDZjI3MjQ4ZUI1OTUxQTNiIn0",
    "payload": "eyJkb21haW4iOiJ3YWl0bGlzdC1kZW1vLXN0dS52ZXJjZWwuYXBwIn0",
    "signature": "/JMtUQ4i6APuM+OJV6i+QOn6kH3gKXLZv/UCi3MjZgRrbxoeEa3j5WL+b685cdvIdgEgkaSB7WYlq/a6nk7fLhw="
  },
  
  "baseBuilder": {
    "ownerAddress": "0xD750903a0BaE0352B863608227aAD119E58BA356"
  }
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

