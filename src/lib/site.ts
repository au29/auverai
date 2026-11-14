export const site = {
  name: "AUVERAI Innovations",
  legalName: "AUVERAI Innovations L.L.C-FZ",
  tagline: "Building what’s next.",
  description:
    "AUVERAI develops business software and helps companies apply AI, automation and process consultancy to everyday operations. Based in Dubai, UAE.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://auverai.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@auverai.com",
  location: "Dubai, United Arab Emirates",
};
