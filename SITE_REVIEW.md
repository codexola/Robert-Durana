# Portfolio review and fixes

## Live-site access limitation

Requests to https://robertdurana.vercel.app/ are denied by this cloud environment's outbound proxy with a CONNECT 403. This does not establish that the website itself returns an error. Its live HTML, visual appearance, and deployment source could not be inspected. Vercel domains are present in the saved environment draft, but live access remains unavailable. A production update has not been confirmed.

The deployment shown by the user was built from artwork-only commit 39135e2. This application revision adds the complete portfolio and Vercel build configuration. The user confirmed that pushing the repository’s main branch triggers Vercel production deployment. A new deployment must still be verified separately from a successful Git push.

## Confirmed issues in the local implementation

- Browser image loading depended on external GitHub requests. The production build now includes checksum-verified, byte-identical originals served from the site's own origin.
- Images had no loading/error recovery. Galleries now show clear status; both viewers support retries after failed image requests and hide stale images while loading.
- Previous/next project navigation ignored the selected category and search. It now follows the filtered project list and prevents arrow keys from scrolling the dialog.
- Personal photo dimensions were not reserved. Original dimensions now prevent the gallery from shifting as images arrive.
- A decorative category mask could clip artwork corners. Project images now use an unobstructed rectangular presentation with contain sizing.
- Final-page pagination could remove the focused control. Focus now moves to the first newly revealed project when the button disappears.

Only original photograph No. 6 remains in the personal section and site assets. It appears in six clickable frames in an animated 3D room, including wall, desktop, bedside, and bed placements. The other five personal photographs are excluded from deployment. The owner's name, all 102 projects, and project-specific stack analyses remain included. No source photographs were modified. Personal contact links remain absent.
