export const site = {
  name: "AUVERAI Innovations",
  tagline: "Building what’s next.",
  description:
    "AUVERAI brings technology, intelligence and ambition together to build digital products, develop new ventures and help businesses move forward.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://auverai.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@auverai.com",
  location: "Dubai, United Arab Emirates",
};
