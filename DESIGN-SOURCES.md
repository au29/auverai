# Design sources

The primary design system is **Tailark Quartz**, using the Base UI implementation.

Source material was read through the user's authenticated Tailark Pro browser session on 13 November 2026. No gated content was bypassed, and no account tokens are included in the project.

| Source | Use in AUVERAI |
| --- | --- |
| https://tailark.com/docs/theme | Quartz light/dark surface, text, primary, border and radius tokens. The project uses the tokens it needs; unused Tailark editor and animation styles were omitted. |
| https://tailark.com/blocks/quartz/hero-section — `hero-section-1` | Centred hero, balanced typography, paired actions and a layered illustration. Replaced the example AI chat, stock background and customer logos with an original AUVERAI capability map. |
| Header bundled with `hero-section-1` | Floating navigation surface, fine borders, backdrop treatment and mobile navigation. Simplified the template's large product menus into real site destinations, with an accessible Base UI dialog on mobile. |
| https://tailark.com/blocks/quartz/features — `features-1` | Paired feature panels, fine dividers, rounded outer frame and softly elevated illustrative surfaces. Expanded to four disciplines and replaced financial example graphics with original product, automation, engineering and strategy illustrations. |
| https://tailark.com/blocks/quartz/how-it-works — `how-it-works-1` | Three-column numbered progression, hierarchy and spacing, adapted to Discover / Build / Evolve. |
| https://tailark.com/blocks/quartz/faqs — `faqs-1` | Split heading/accordion arrangement and elevated open states. Uses AUVERAI questions with shadcn/Base UI primitives. |
| https://tailark.com/blocks/quartz/footer — `footer-1` | Brand column, grouped navigation and copyright structure. Removed example social links and added the confirmed contact address. |

shadcn's Base Nova button, accordion and dialog were installed with the official shadcn CLI. Geist and Geist Mono are self-hosted by Next.js at build time. Icons, including the service-area illustrations, use Lucide. AUVERAI's geometric mark, capability map, interface artwork and social card were made for this implementation.

No stock photographs, invented endorsements, customer logo claims or external image hotlinks are used.
