# Project implementation recommendations

Image-based recommendations for the project collection. The technologies below are proposed choices, not a claim about the original source code. Alternative tools can meet the same requirements. Pure design and production deliverables do not need a web backend.

## Nexora SaaS

**Visible evidence:** Dashboard summaries, project progress, task lists, calendar views, and administrative tables.

**Scope:** Project workspaces; Task assignments; Calendar scheduling.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript + TanStack Query | Reusable dashboards, tables, filters, and server-state updates. |
| Application | NestJS + PostgreSQL | Project, task, calendar, and account APIs with relational persistence. |
| Access & reporting | OIDC authentication + role-based access + Apache ECharts | Workspace permissions and progress visualizations. |
| Verification | Playwright + Vitest | Verify workspace flows, access rules, and task-state changes. |

**Proposed process:** Start by defining project workspaces and its content/data model. Prototype task assignments, implement calendar scheduling, then validate the complete workflow using the checks below.

## Lumière Luxury Jewelry

**Visible evidence:** Editorial jewelry photography, category browsing, product pages, and mobile storefront layouts.

**Scope:** Jewelry catalog; Product variants; Cart and checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining jewelry catalog and its content/data model. Prototype product variants, implement cart and checkout, then validate the complete workflow using the checks below.

## WachatAI WhatsApp Automation

**Visible evidence:** WhatsApp conversation previews, a contact workspace, activity charts, and integration icons.

**Scope:** Conversation routing; Contact synchronization; Automation reporting.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Messaging | WhatsApp Business Platform Cloud API + signed webhooks | Receive inbound messages and deliver approved outbound messages. |
| Application | NestJS + PostgreSQL + Redis/BullMQ | Persist contacts, conversation state, and retryable message jobs. |
| Assistant & interface | LLM API with retrieval + React/TypeScript | Ground support responses in approved content and expose a human inbox. |
| Verification | Vitest + Playwright + webhook replay fixtures | Test conversation transitions, retries, delivery failures, and handoff. |

**Proposed process:** Start by defining conversation routing and its content/data model. Prototype contact synchronization, implement automation reporting, then validate the complete workflow using the checks below.

## Japanese Architecture

**Visible evidence:** Architectural photography, project grids, service explanations, and responsive layouts.

**Scope:** Project gallery; Service pages; Inquiry workflow.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Fast, responsive service and project pages. |
| Content | Sanity CMS + image optimization | Manage project imagery, service content, and localized copy. |
| Forms | Server-side form endpoint + transactional email | Validate inquiries and deliver them to a configured team inbox. |
| Verification | Playwright + axe-core | Check navigation, forms, responsive layouts, and accessibility. |

**Proposed process:** Start by defining project gallery and its content/data model. Prototype service pages, implement inquiry workflow, then validate the complete workflow using the checks below.

## SPUNTA AI Brand Identity

**Visible evidence:** SPUNTA logo variations, earthy color swatches, typography, stationery, and digital applications.

**Scope:** Vector identity; Brand guidelines; Application mockups.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Adobe Illustrator | Create scalable logos, typography layouts, and identity assets. |
| Applications | Figma + Adobe Photoshop | Explore digital components and photographic application mockups. |
| Delivery | SVG/PDF exports + color-managed brand guide | Package reusable artwork and document color, spacing, and type rules. |

**Proposed process:** Explore logo concepts, establish typography and color rules, then extend the selected identity into the applications shown. Deliver vector masters and a reviewed usage guide.

## LaunchFrame Cinematic Studio Landing Page

**Visible evidence:** A cinematic landing page with dark visual treatment, launch imagery, service blocks, and a project reel.

**Scope:** Video showreel; Service storytelling; Project publishing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS + GSAP | Build editorial case studies, transitions, and reduced-motion alternatives. |
| Media & content | Sanity CMS + Mux video | Publish projects, optimized video reels, posters, and captions. |
| Visual production | DaVinci Resolve | Prepare color-consistent footage and streaming-ready reel exports. |
| Verification | Playwright + axe-core | Check media controls, keyboard navigation, and mobile layouts. |

**Proposed process:** Start by defining video showreel and its content/data model. Prototype service storytelling, implement project publishing, then validate the complete workflow using the checks below.

## PayFlow Fintech

**Visible evidence:** Balance cards, income and expense graphs, transaction lists, and a mobile financial overview.

**Scope:** Financial summaries; Transaction categorization; Reconciled reporting.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript + Apache ECharts | Visualize financial summaries, category charts, and transactions. |
| Data & accounting | NestJS + PostgreSQL with decimal amounts | Model entries, categories, account balances, and auditable reporting. |
| Imports & jobs | CSV parsers + Redis/BullMQ | Validate transaction imports and generate repeatable reporting jobs. |
| Verification | Vitest + Playwright | Test totals, rounding, import deduplication, and filtered reports. |

**Proposed process:** Define account and transaction models with decimal amounts, map import/category rules, and build the summary views. Reconcile reports against transaction-level fixtures and test duplicates, rounding, and date filters.

## MoveEasy Ride-Hailing App

**Visible evidence:** Rider and driver screens with maps, route selection, ride status, ratings, and an administration panel.

**Scope:** Live driver location; Trip dispatch; Ride status synchronization.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile | React Native + TypeScript + Mapbox Maps/Directions | Rider/driver interfaces, map display, routing, and location permissions. |
| Dispatch | NestJS + WebSockets + Redis | Coordinate trip acceptance, driver presence, and live trip updates. |
| Persistence & notifications | PostgreSQL/PostGIS + FCM/APNs | Store geospatial trip data and deliver ride-status notifications. |
| Verification | Maestro + API concurrency tests | Check booking transitions, reconnects, cancellations, and location updates. |

**Proposed process:** Prototype the rider/driver journey, model trip states and geospatial records, then connect routing, location updates, and dispatch. Test background permissions, competing driver acceptance, cancellation, and reconnect behavior.

## Pecosia Cinematic Studio

**Visible evidence:** High-contrast studio pages, a project thumbnail grid, editorial typography, and mobile layouts.

**Scope:** Case-study publishing; Video portfolio; Responsive editorial layout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS + GSAP | Build editorial case studies, transitions, and reduced-motion alternatives. |
| Media & content | Sanity CMS + Mux video | Publish projects, optimized video reels, posters, and captions. |
| Visual production | DaVinci Resolve | Prepare color-consistent footage and streaming-ready reel exports. |
| Verification | Playwright + axe-core | Check media controls, keyboard navigation, and mobile layouts. |

**Proposed process:** Start by defining case-study publishing and its content/data model. Prototype video portfolio, implement responsive editorial layout, then validate the complete workflow using the checks below.

## Neon Streaming Challenge

**Visible evidence:** A live-video workspace with chat, creator profiles, challenge panels, and dark mobile screens.

**Scope:** Live streaming; Chat delivery; Challenge state.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript | Build creator pages, challenge panels, and responsive live layouts. |
| Video | Mux Live + HLS player | Ingest and deliver live streams with adaptive playback. |
| Realtime & storage | NestJS + WebSockets + Redis + PostgreSQL | Synchronize chat, challenge events, and persisted account state. |
| Verification | Playwright + k6 | Test playback states, chat reconnects, and concurrent event delivery. |

**Proposed process:** Start by defining live streaming and its content/data model. Prototype chat delivery, implement challenge state, then validate the complete workflow using the checks below.

## Futbolstore Ecommerce

**Visible evidence:** Football merchandise grids, team categories, product customization, and a shopping cart.

**Scope:** Team catalog; Jersey personalization; Checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining team catalog and its content/data model. Prototype jersey personalization, implement checkout, then validate the complete workflow using the checks below.

## Harmony Japan Concert Experience

**Visible evidence:** Concert photography, event listings, program details, and mobile event discovery.

**Scope:** Event publishing; Program schedules; Ticket-provider links.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Next.js + TypeScript + next-intl | Localized event listings, event details, and schedule browsing. |
| Publishing | Sanity CMS | Maintain venues, programs, images, and event schedules. |
| Ticketing | Ticket-provider API or hosted booking link | Connect event discovery to an existing ticketing service. |
| Verification | Playwright | Check locale switching, event dates, and ticket redirects. |

**Proposed process:** Start by defining event publishing and its content/data model. Prototype program schedules, implement ticket-provider links, then validate the complete workflow using the checks below.

## Microsoft Security Engineering Profile Overview

**Visible evidence:** A professional security-services overview listing Microsoft identity, endpoint, and monitoring products.

**Scope:** Identity management; Endpoint protection; Security monitoring.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Identity | Microsoft Entra ID | Define identity, access, and conditional-access configuration. |
| Protection | Microsoft Defender + Intune | Manage endpoint posture and security policy. |
| Monitoring | Microsoft Sentinel + KQL + PowerShell | Aggregate security events and automate validated administrative workflows. |

**Proposed process:** Map the required identity, endpoint, and monitoring services, validate policy behavior in a test tenant, and document repeatable deployment and incident-response checks.

## WhatsApp AI Chatbot for Customer Service

**Visible evidence:** Customer-service chat, an administration table, a conversation flow diagram, and connected integrations.

**Scope:** Customer support; Knowledge retrieval; Human handoff.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Messaging | WhatsApp Business Platform Cloud API + signed webhooks | Receive inbound messages and deliver approved outbound messages. |
| Application | NestJS + PostgreSQL + Redis/BullMQ | Persist contacts, conversation state, and retryable message jobs. |
| Assistant & interface | LLM API with retrieval + React/TypeScript | Ground support responses in approved content and expose a human inbox. |
| Verification | Vitest + Playwright + webhook replay fixtures | Test conversation transitions, retries, delivery failures, and handoff. |

**Proposed process:** Start by defining customer support and its content/data model. Prototype knowledge retrieval, implement human handoff, then validate the complete workflow using the checks below.

## PromoHub Deals Platform UI

**Visible evidence:** Discount grids, coupon cards, retailer icons, search, and responsive deal pages.

**Scope:** Coupon publishing; Retailer feeds; Offer expiry.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | Next.js + TypeScript | Build searchable deal listings, coupon views, and retailer pages. |
| Data & search | PostgreSQL + Meilisearch | Index products, retailers, categories, and promotion metadata. |
| Feeds & scheduling | NestJS + Redis/BullMQ | Import permitted affiliate feeds and expire promotions on schedule. |
| Verification | Vitest + Playwright | Test expiry boundaries, coupon links, and search filters. |

**Proposed process:** Start by defining coupon publishing and its content/data model. Prototype retailer feeds, implement offer expiry, then validate the complete workflow using the checks below.

## LUMIÈRE Beauty E-Commerce

**Visible evidence:** Beauty product categories, individual product pages, a basket, and a mobile storefront.

**Scope:** Beauty catalog; Product filtering; Checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining beauty catalog and its content/data model. Prototype product filtering, implement checkout, then validate the complete workflow using the checks below.

## Atlantis · Myth, History, Reality

**Visible evidence:** Underwater imagery, historical maps, chapter-style text, and documentary scene compositions.

**Scope:** Historical narrative; Map animation; Documentary edit.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Editing | DaVinci Resolve | Assemble narration, sourced footage, color correction, and audio mix. |
| Motion | After Effects | Create title sequences, historical maps, and visual overlays. |
| Assets & delivery | Photoshop + licensed footage/audio + caption exports | Prepare artwork, track source licenses, and deliver platform-ready masters. |

**Proposed process:** Develop the narrative and shot sequence, assemble licensed footage and narration, then add maps, titles, and supporting graphics. Finish the color, sound, captions, and platform exports through editorial review.

## Natalia Gurdián

**Visible evidence:** An author website with a WordPress-to-Squarespace migration diagram and editorial content.

**Scope:** Content migration; Redirect mapping; Responsive author pages.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Source & destination | WordPress export + Squarespace | Move content into the destination CMS and rebuild page templates. |
| Migration tools | Python + CSV/XML processing + redirect map | Transform content, preserve URLs where possible, and map redirects. |
| Verification | Playwright + link checker | Check migrated content, forms, mobile rendering, and redirect behavior. |

**Proposed process:** Inventory the source content and URLs, migrate into the destination CMS, and map redirects. Validate page content, links, forms, mobile layouts, and search indexing before cutover.

## Spunta Brand Identity Moodboard

**Visible evidence:** SPUNTA logo treatments, typography, muted color references, stationery, and device mockups.

**Scope:** Identity exploration; Typography system; Brand applications.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Adobe Illustrator | Create scalable logos, typography layouts, and identity assets. |
| Applications | Figma + Adobe Photoshop | Explore digital components and photographic application mockups. |
| Delivery | SVG/PDF exports + color-managed brand guide | Package reusable artwork and document color, spacing, and type rules. |

**Proposed process:** Explore logo concepts, establish typography and color rules, then extend the selected identity into the applications shown. Deliver vector masters and a reviewed usage guide.

## GymFit · Asistente IA para WhatsApp

**Visible evidence:** WhatsApp fitness-assistant screens, workout and nutrition exchanges, and an administration view.

**Scope:** Workout conversations; Scheduled reminders; Member history.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Messaging | WhatsApp Business Platform Cloud API + signed webhooks | Receive inbound messages and deliver approved outbound messages. |
| Application | NestJS + PostgreSQL + Redis/BullMQ | Persist contacts, conversation state, and retryable message jobs. |
| Fitness content & scheduling | Approved workout library + LLM API + scheduled jobs | Retrieve reviewed exercise guidance and send scheduled member reminders. |
| Operations & QA | React/TypeScript + conversation fixtures | Review member workflows and verify reminders and escalation paths. |

**Proposed process:** Start by defining workout conversations and its content/data model. Prototype scheduled reminders, implement member history, then validate the complete workflow using the checks below.

## Warm Japanese Editorial Web

**Visible evidence:** Warm Japanese bookstore/editorial page concepts with book photography, article layouts, and mobile views.

**Scope:** Editorial publishing; Book discovery; Responsive typography.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Build typography-led articles, editorial landing pages, and mobile navigation. |
| Content | Sanity CMS + optimized images | Manage books/articles, structured page sections, and responsive photography. |
| Verification | Playwright + axe-core | Check reading layouts, content navigation, and accessibility. |

**Proposed process:** Start by defining editorial publishing and its content/data model. Prototype book discovery, implement responsive typography, then validate the complete workflow using the checks below.

## Japanese Tech Service Landing Page Comparison

**Visible evidence:** Two technology-services landing-page treatments with comparison content, service cards, and calls to action.

**Scope:** Service comparison; Lead capture; Responsive page variants.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Fast, responsive service and project pages. |
| Content | Sanity CMS + image optimization | Manage project imagery, service content, and localized copy. |
| Forms | Server-side form endpoint + transactional email | Validate inquiries and deliver them to a configured team inbox. |
| Verification | Playwright + axe-core | Check navigation, forms, responsive layouts, and accessibility. |

**Proposed process:** Start by defining service comparison and its content/data model. Prototype lead capture, implement responsive page variants, then validate the complete workflow using the checks below.

## フルスタックエンジニア向けEC開発提案書

**Visible evidence:** A Japanese e-commerce development proposal with scope, pricing, process diagrams, and delivery details.

**Scope:** Scope documentation; Estimate layout; PDF delivery.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Document design | Figma + Google Docs/Sheets | Organize scope, timeline, pricing, and technical diagrams. |
| Delivery | Embedded Japanese fonts + accessible PDF export | Preserve legibility, selectable text, and consistent page layout. |
| Review | PDF preflight + estimate review | Check font embedding, page breaks, pricing calculations, and scope consistency. |

**Proposed process:** Define scope, deliverables, assumptions, timeline, and pricing; arrange them into a readable Japanese proposal. Review the estimates and export a PDF with embedded fonts and intact links.

## Optimización Integral de Pedidos con OrderPro

**Visible evidence:** An order-processing comparison, a multichannel workflow diagram, logistics integrations, and reporting charts.

**Scope:** Order ingestion; Inventory synchronization; Shipping events.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript | Show operational orders, inventory state, and logistics reporting. |
| Integration | NestJS + commerce/shipping APIs + signed webhooks | Normalize incoming orders and fulfillment events. |
| Persistence & execution | PostgreSQL + Redis/BullMQ | Track order transitions, retries, and idempotent synchronization. |
| Verification | Contract tests + Playwright | Test duplicate events, partial failures, and shipment status changes. |

**Proposed process:** Start by defining order ingestion and its content/data model. Prototype inventory synchronization, implement shipping events, then validate the complete workflow using the checks below.

## Odoo Cleaning Factory

**Visible evidence:** An Odoo-branded manufacturing dashboard with raw materials, production, stock, invoicing, and delivery panels.

**Scope:** Manufacturing orders; Inventory movements; Invoice reporting.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| ERP | Odoo Manufacturing + Inventory + Sales + Invoicing | Implement connected production, stock, delivery, and invoice workflows. |
| Customization | Python + Odoo ORM + PostgreSQL | Add domain-specific models, calculations, and business rules. |
| Interface | Odoo XML views + Owl/JavaScript | Adapt dashboards and forms within the ERP interface. |
| Verification | Odoo test framework + workflow fixtures | Verify production consumption, stock moves, and invoice totals. |

**Proposed process:** Map the manufacturing and sales workflow to Odoo modules, configure stock locations and production rules, and add only necessary model/view customizations. Reconcile material usage, deliveries, and invoices using realistic fixtures.

## Modern Careers and People Culture Pages

**Visible evidence:** Careers and culture pages with job listings, people photography, benefits, and mobile layouts.

**Scope:** Job listings; Application intake; Culture content.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Next.js + TypeScript + CMS | Publish role listings, team/culture pages, and responsive candidate journeys. |
| Applications | ATS API integration + server-side form validation | Submit applications and track role availability without duplicating ATS data. |
| Verification | Playwright + axe-core | Test vacancy filters, application errors, and keyboard accessibility. |

**Proposed process:** Start by defining job listings and its content/data model. Prototype application intake, implement culture content, then validate the complete workflow using the checks below.

## OfertasTop Deals Platform

**Visible evidence:** A discount marketplace layout with retailer logos, categories, promotional banners, and product cards.

**Scope:** Deal search; Retailer taxonomy; Promotion scheduling.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | Next.js + TypeScript | Build searchable deal listings, coupon views, and retailer pages. |
| Data & search | PostgreSQL + Meilisearch | Index products, retailers, categories, and promotion metadata. |
| Feeds & scheduling | NestJS + Redis/BullMQ | Import permitted affiliate feeds and expire promotions on schedule. |
| Verification | Vitest + Playwright | Test expiry boundaries, coupon links, and search filters. |

**Proposed process:** Start by defining deal search and its content/data model. Prototype retailer taxonomy, implement promotion scheduling, then validate the complete workflow using the checks below.

## Imperios, Misterios y Edición Cinemática

**Visible evidence:** Documentary title graphics, historical and business thumbnail compositions, and an editing timeline.

**Scope:** Narrative sequencing; Title animation; Color and audio finishing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Editing | DaVinci Resolve | Assemble narration, sourced footage, color correction, and audio mix. |
| Motion | After Effects | Create title sequences, historical maps, and visual overlays. |
| Assets & delivery | Photoshop + licensed footage/audio + caption exports | Prepare artwork, track source licenses, and deliver platform-ready masters. |

**Proposed process:** Develop the narrative and shot sequence, assemble licensed footage and narration, then add maps, titles, and supporting graphics. Finish the color, sound, captions, and platform exports through editorial review.

## Convocatoria de Locutores Latinoamericanos

**Visible evidence:** A voice-talent production brief showing recording requirements, country targeting, and submission stages.

**Scope:** Voice recording; Audio cleanup; Audition delivery.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Recording | Reaper + audio interface + studio microphone | Record clean voice takes with consistent input levels. |
| Audio processing | ReaEQ/ReaComp + noise cleanup | Edit breaths, balance dynamics, and reduce unwanted noise. |
| Delivery | WAV masters + loudness/peak metering | Export to the agreed sample rate, bit depth, and loudness specification. |

**Proposed process:** Confirm the script, pronunciation, accent, and delivery specification. Record consistent takes, edit noise and timing, and review the master against agreed loudness and audio-format requirements.

## Japanese Cookware E-Commerce

**Visible evidence:** Japanese cookware marketplace listing treatments, food photography, price callouts, and product information blocks.

**Scope:** Marketplace listing images; Localized product content; Export templates.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Composite product/food photography, icons, and dimension diagrams. |
| Localization | Figma + Japanese typography review | Create reusable listing layouts with readable localized copy. |
| Delivery | Marketplace-specific image templates + color-managed exports | Export assets to the dimensions and content rules of the intended marketplace. |

**Proposed process:** Collect accurate product specifications and approved photography, compose benefit and dimension panels, and review the Japanese copy. Validate each exported listing image against its target marketplace requirements.

## Cookware E‑Commerce

**Visible evidence:** A cookware infographic with food photography, feature panels, product dimensions, and marketplace presentation.

**Scope:** Product feature graphics; Dimension diagrams; Listing asset export.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Composite product/food photography, icons, and dimension diagrams. |
| Localization | Figma + Japanese typography review | Create reusable listing layouts with readable localized copy. |
| Delivery | Marketplace-specific image templates + color-managed exports | Export assets to the dimensions and content rules of the intended marketplace. |

**Proposed process:** Collect accurate product specifications and approved photography, compose benefit and dimension panels, and review the Japanese copy. Validate each exported listing image against its target marketplace requirements.

## AIPro Creative Services

**Visible evidence:** A creative-services storefront with service cards, work examples, pricing, and customer/admin order views.

**Scope:** Service catalog; Creative job queue; Client deliverables.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront & workspace | Next.js + TypeScript | Present services, quotes, order status, and client deliverables. |
| Production backend | NestJS + PostgreSQL + Redis/BullMQ | Track briefs, payments, production jobs, and asynchronous delivery. |
| Generation & assets | Provider LLM/image APIs + S3-compatible storage | Run approved creative generation tasks and store versioned outputs. |
| Verification | Playwright + provider contract tests | Test purchase/brief flows, provider failures, and delivery permissions. |

**Proposed process:** Start by defining service catalog and its content/data model. Prototype creative job queue, implement client deliverables, then validate the complete workflow using the checks below.

## VisioCare Virtual Eyewear Experience

**Visible evidence:** An eyewear storefront with lens-test visuals, virtual try-on screens, product categories, and appointment prompts.

**Scope:** Eyewear catalog; Camera try-on; Appointment requests.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Commerce | Shopify + Liquid + JavaScript | Provide eyewear browsing, product variants, cart, and checkout. |
| Virtual try-on | MediaPipe Face Landmarker + Three.js/WebGL | Align calibrated frame assets to face landmarks in a camera view. |
| Appointments | Booking-provider API + server endpoint | Connect appointment availability and confirmation. |
| Verification | Playwright + device/camera testing | Test camera permissions, fit alignment, shopping, and booking states. |

**Proposed process:** Build the product catalog and shopping flow, calibrate eyewear assets to face landmarks, and connect booking availability. Validate camera permission behavior, device performance, fit alignment, and checkout accessibility.

## Diagnóstico y Solución de Plugins WordPress (1)

**Visible evidence:** WordPress plugin-management screens, a conflict warning, and before/after remediation examples.

**Scope:** Plugin isolation; PHP diagnostics; Regression verification.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Runtime | WordPress + PHP + MySQL/MariaDB | Reproduce the actual plugin/theme environment on staging. |
| Diagnostics | WP-CLI + PHP error logs + Query Monitor | Isolate plugin conflicts and inspect errors and slow requests. |
| Verification | PHPUnit + Playwright + backup/restore tooling | Test repaired workflows against a recoverable staging copy before release. |

**Proposed process:** Create a recoverable staging copy of the actual site, reproduce the conflict, and isolate the responsible plugin/theme combination. Apply a supported fix and verify the affected workflows before deployment.

## WhatsApp Attendance System

**Visible evidence:** WhatsApp check-in screens, location and photo prompts, attendance tables, and report exports.

**Scope:** Employee check-in; Location capture; Attendance exports.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Channel | WhatsApp Cloud API + signed webhooks | Receive attendance messages, authorized location data, and attachments. |
| Backend & records | NestJS + PostgreSQL + S3-compatible storage | Persist attendance events, timestamps, attachment references, and permissions. |
| Operations | React/TypeScript + CSV/PDF export + scheduled jobs | Review exceptions, produce attendance reports, and send reminders. |
| Verification | Vitest + webhook fixtures | Check timezone rules, duplicate check-ins, invalid locations, and report totals. |

**Proposed process:** Start by defining employee check-in and its content/data model. Prototype location capture, implement attendance exports, then validate the complete workflow using the checks below.

## QA Testing Recruitment

**Visible evidence:** A web/mobile QA workflow with dashboard samples, bug-report examples, and device-testing requirements.

**Scope:** Cross-browser testing; Mobile scenarios; Bug reporting.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Web tests | Playwright + axe-core | Automate functional, responsive, keyboard, and accessibility checks. |
| Mobile tests | Appium + Android/iOS device matrix | Exercise native mobile flows and device-specific behavior. |
| API & reporting | Postman/Newman + issue tracker + CI artifacts | Validate API contracts and attach reproducible steps, logs, and screenshots. |

**Proposed process:** Define the target browsers/devices and critical user journeys, convert them into repeatable functional and API checks, and collect reproducible defects with evidence. Retest fixes and publish the results with clear coverage limits.

## MuscleFit and Fre2 Halloween Gym Grid

**Visible evidence:** Two fitness-brand social grids using bold type, gym photography, Halloween campaigns, and repeated formats.

**Scope:** Campaign templates; Photo compositing; Social exports.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Create campaign composites, vector graphics, and typography systems. |
| Templates | Figma | Maintain reusable post, story, cover, and sticker layouts. |
| Delivery | Platform-specific export presets | Prepare consistent aspect ratios, safe areas, and optimized image assets. |

**Proposed process:** Define each campaign’s message and visual rules, create a reusable layout family, and composite the supplied photography. Review legibility and safe areas before exporting each social format.

## ÓpticaVision · Gestão Inteligente de Ordens

**Visible evidence:** An optical-workshop order dashboard with customer records, order states, WhatsApp conversations, and payment figures.

**Scope:** Optical order tracking; Customer records; Status notifications.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript | Present optical orders, customer history, statuses, and payment summaries. |
| Backend | NestJS + PostgreSQL | Model order stages, lens specifications, clients, and audit events. |
| Messaging & reports | WhatsApp Cloud API + BullMQ + PDF generation | Queue order updates and generate customer/order documents. |
| Verification | Vitest + Playwright | Check state transitions, notification retries, and order calculations. |

**Proposed process:** Start by defining optical order tracking and its content/data model. Prototype customer records, implement status notifications, then validate the complete workflow using the checks below.

## Clínicas Elite Advisory

**Visible evidence:** A clinic-advisory portal with course categories, video lessons, community activity, and progress tracking.

**Scope:** Course access; Learning progress; Community discussions.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Portal | Next.js + TypeScript | Present course libraries, lesson views, and progress dashboards. |
| Learning backend | NestJS + PostgreSQL + role-based access | Track enrollments, lesson completion, and community permissions. |
| Video & files | Mux + S3-compatible storage | Deliver captioned lessons and controlled-access resources. |
| Verification | Playwright + API authorization tests | Check enrollment access, resume progress, and community actions. |

**Proposed process:** Start by defining course access and its content/data model. Prototype learning progress, implement community discussions, then validate the complete workflow using the checks below.

## SortePlay Lottery Platform

**Visible evidence:** Lottery selection screens, number grids, performance charts, and account dashboards.

**Scope:** Number selection; Draw-history reporting; Account records.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript | Implement number selection, account views, and historical draw charts. |
| Domain backend | NestJS + PostgreSQL + scheduled draw imports | Persist selections and validate permitted historical result feeds. |
| Integrity & QA | Auditable calculations + Vitest + Playwright | Check selection rules and report historical statistics without implying improved odds. |

**Proposed process:** Start by defining number selection and its content/data model. Prototype draw-history reporting, implement account records, then validate the complete workflow using the checks below.

## JurisCalc TJRJ Legal

**Visible evidence:** Legal calculation cases, file import, calculation stages, a data table, and generated report previews.

**Scope:** Calculation engine; Case imports; PDF calculation reports.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript | Build case forms, data import, calculation previews, and result tables. |
| Calculation engine | Python + Decimal + versioned rule fixtures | Apply jurisdiction-specific formulas with explicit precision and rule versions. |
| Storage & output | PostgreSQL + openpyxl + WeasyPrint | Persist cases and export spreadsheets and reproducible PDF reports. |
| Verification | pytest + expert-reviewed golden cases | Verify formulas, rounding, date handling, and legally reviewed examples. |

**Proposed process:** Confirm jurisdiction-specific formulas and authoritative rule versions with a qualified reviewer, implement deterministic decimal calculations, and add import/report flows. Validate rounding, dates, and results against reviewed reference cases.

## Mobile Automation Control

**Visible evidence:** A device-control dashboard showing device states, workflow nodes, execution logs, and telemetry charts.

**Scope:** Device orchestration; Job execution; Telemetry streaming.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Control interface | React + TypeScript + Apache ECharts | Display devices, workflow execution, logs, and telemetry. |
| Orchestration | Python/FastAPI + Appium + Redis workers | Schedule authorized device actions and track execution results. |
| Realtime & records | WebSockets + PostgreSQL + object storage | Stream device state and persist run history and artifacts. |
| Verification | pytest + device-lab integration tests | Test disconnected devices, queue retries, and failed workflow steps. |

**Proposed process:** Model authorized device capabilities and workflow states, implement queued device adapters, and stream status/log updates. Test disconnected devices, cancellation, retries, and partial execution without duplicating actions.

## TrendBuy Social Commerce

**Visible evidence:** A shoppable video feed, product details, mobile discovery, and basket screens.

**Scope:** Shoppable video; Product tagging; Commerce checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Experience | Next.js + TypeScript + Mux player | Combine mobile-friendly video discovery with linked product detail. |
| Commerce | Shopify Storefront API + hosted checkout | Manage product variants, inventory, and shopping checkout. |
| Content | PostgreSQL + Mux assets | Associate products with video posts and creator-owned content. |
| Verification | Playwright | Test video controls, product deep links, stock changes, and checkout. |

**Proposed process:** Start by defining shoppable video and its content/data model. Prototype product tagging, implement commerce checkout, then validate the complete workflow using the checks below.

## SubastaLive · Real-Time Auction Platform

**Visible evidence:** Auction listings, countdowns, a live bid panel, product details, and mobile bid views.

**Scope:** Concurrent bidding; Auction closing; Bid history.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | Next.js + TypeScript + WebSocket client | Render live bids, countdowns, account views, and auction listings. |
| Auction engine | NestJS + PostgreSQL transactions + Redis | Accept bids atomically and enforce server-authoritative closing times. |
| Jobs & payments | BullMQ + payment-provider API | Finalize auctions reliably and handle settlement with idempotent callbacks. |
| Verification | k6 + integration tests + Playwright | Test competing bids, last-second updates, reconnects, and closing races. |

**Proposed process:** Define bid increments, auction-close rules, and payment states; implement transactional bid acceptance with server-authoritative time. Add realtime updates and verify simultaneous bids, reconnects, and settlement retries.

## AICreatePro Digital Services

**Visible evidence:** AI-assisted creative-services pages with packages, examples, quote requests, and client/admin workspaces.

**Scope:** Quote intake; Creative production jobs; Delivery tracking.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront & workspace | Next.js + TypeScript | Present services, quotes, order status, and client deliverables. |
| Production backend | NestJS + PostgreSQL + Redis/BullMQ | Track briefs, payments, production jobs, and asynchronous delivery. |
| Generation & assets | Provider LLM/image APIs + S3-compatible storage | Run approved creative generation tasks and store versioned outputs. |
| Verification | Playwright + provider contract tests | Test purchase/brief flows, provider failures, and delivery permissions. |

**Proposed process:** Start by defining quote intake and its content/data model. Prototype creative production jobs, implement delivery tracking, then validate the complete workflow using the checks below.

## Impulso IA · Servicios Digitales con Inteligencia Artificial

**Visible evidence:** Digital-services catalog, AI tool references, pricing plans, order workflow, and customer screens.

**Scope:** Service ordering; AI job orchestration; Customer billing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront & workspace | Next.js + TypeScript | Present services, quotes, order status, and client deliverables. |
| Production backend | NestJS + PostgreSQL + Redis/BullMQ | Track briefs, payments, production jobs, and asynchronous delivery. |
| Generation & assets | Provider LLM/image APIs + S3-compatible storage | Run approved creative generation tasks and store versioned outputs. |
| Verification | Playwright + provider contract tests | Test purchase/brief flows, provider failures, and delivery permissions. |

**Proposed process:** Start by defining service ordering and its content/data model. Prototype ai job orchestration, implement customer billing, then validate the complete workflow using the checks below.

## Android Browser App

**Visible evidence:** A native Android browser shell with a splash screen, menu, embedded website, and Play Store delivery checklist.

**Scope:** WebView navigation; Download handling; Android app release.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Native shell | Kotlin + Android SDK + AndroidX WebKit | Implement the WebView shell, navigation, downloads, and lifecycle handling. |
| Project tooling | Android Studio + Gradle | Build signed Android App Bundles and manage platform dependencies. |
| Verification & release | Espresso + device tests + Play Console | Test navigation, permissions, offline/errors, and release requirements. |

**Proposed process:** Configure the native Android shell, implement the website navigation and download behavior, and handle permission and lifecycle events. Test on real devices and prepare a signed release that meets current store requirements.

## WorkPro · Simplifica, Colabora, Crece

**Visible evidence:** Mobile task and project screens with collaborative conversations, reporting panels, and service navigation.

**Scope:** Shared workspaces; Task state; Team messaging.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Clients | React Native + TypeScript + React web admin | Build mobile task flows and a shared project workspace. |
| Collaboration backend | NestJS + WebSockets + PostgreSQL + Redis | Maintain tasks, members, notifications, and synchronized discussions. |
| Verification | Maestro + integration tests | Test membership permissions, concurrent updates, and offline reconnects. |

**Proposed process:** Start by defining shared workspaces and its content/data model. Prototype task state, implement team messaging, then validate the complete workflow using the checks below.

## Field Service Workflow Integration

**Visible evidence:** A field-service sequence with work orders, customer signatures, receipt capture, submission, and back-office integration.

**Scope:** Offline work orders; Signature capture; ERP synchronization.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile | React Native + SQLite + signature canvas | Capture work orders, photos, and signatures with offline drafts. |
| Sync service | NestJS + PostgreSQL + S3-compatible storage | Synchronize jobs and attachments with conflict and retry handling. |
| ERP integration | ERP REST/OData connector + queued jobs | Map submitted field records into the actual back-office system. |
| Verification | Maestro + integration fixtures | Check offline completion, repeated syncs, and attachment integrity. |

**Proposed process:** Map the work-order lifecycle, prototype offline forms and signatures, and implement durable local drafts. Connect the ERP synchronization adapter and test conflict resolution, repeated submissions, and attachment recovery.

## Cuidar Medical Cannabis UX

**Visible evidence:** A patient-access dashboard with consultation and document-validation stages, account views, and reporting.

**Scope:** Patient intake; Document validation; Case tracking.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Portal | Next.js + TypeScript | Build patient intake, document upload, and staff review interfaces. |
| Backend | FastAPI + PostgreSQL + encrypted object storage | Persist case state and controlled-access documents. |
| Access & validation | OIDC + role-based access + audit logging | Restrict sensitive records and record staff validation decisions. |
| Verification | pytest + Playwright + authorization tests | Check document lifecycle, permissions, and invalid intake states. |

**Proposed process:** Map intake, document review, and staff decisions, then implement scoped records and encrypted document storage. Verify consent, upload validation, authorization boundaries, and complete case-state transitions.

## AVC Futuristic Manufacturing

**Visible evidence:** A Japanese manufacturing site with industrial imagery, technology summaries, product/service blocks, and mobile views.

**Scope:** Industrial content; Product imagery; Technical inquiries.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Fast, responsive service and project pages. |
| Content | Sanity CMS + image optimization | Manage project imagery, service content, and localized copy. |
| Forms | Server-side form endpoint + transactional email | Validate inquiries and deliver them to a configured team inbox. |
| Verification | Playwright + axe-core | Check navigation, forms, responsive layouts, and accessibility. |
| Optional visual enhancement | Three.js + glTF product models | Use only if interactive product models are required; imagery alone needs no 3D engine. |

**Proposed process:** Start by defining industrial content and its content/data model. Prototype product imagery, implement technical inquiries, then validate the complete workflow using the checks below.

## TechStore E-Commerce

**Visible evidence:** An electronics catalog with product pages, mobile shopping, and order-management dashboard views.

**Scope:** Electronics catalog; Variant selection; Order administration.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining electronics catalog and its content/data model. Prototype variant selection, implement order administration, then validate the complete workflow using the checks below.

## WooCommerce–Contasimple · Automatización de Pedidos y Facturación

**Visible evidence:** An explicit WooCommerce-to-Contasimple order, delivery-note, and consolidated-invoice workflow.

**Scope:** WooCommerce webhooks; Delivery-note creation; Monthly invoicing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Commerce | WordPress + WooCommerce + PHP | Read order events through the supported WooCommerce hooks/API. |
| Accounting integration | Contasimple API + signed webhooks + scheduled worker | Create delivery notes and consolidated invoices using supported endpoints. |
| Reliability | MySQL + Action Scheduler + idempotency records | Persist synchronization state, batch schedules, and retriable failures. |
| Verification | PHPUnit + API sandbox contract tests | Check invoice grouping, tax totals, cancellations, and duplicate events. |

**Proposed process:** Map WooCommerce order and tax fields to the accounting API, implement idempotent delivery-note synchronization, and define invoice grouping rules. Exercise cancellations, retries, and totals in an API sandbox.

## NEXA Modern Tech Storefront

**Visible evidence:** A minimalist electronics storefront with category navigation, product photography, and mobile pages.

**Scope:** Product catalog; Search and filtering; Checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining product catalog and its content/data model. Prototype search and filtering, implement checkout, then validate the complete workflow using the checks below.

## Diagnóstico y Solución de Plugins WordPress

**Visible evidence:** WordPress plugin views, troubleshooting stages, compatibility checks, and a list of supported plugin families.

**Scope:** Plugin compatibility; Staging reproduction; Regression checks.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Runtime | WordPress + PHP + MySQL/MariaDB | Reproduce the actual plugin/theme environment on staging. |
| Diagnostics | WP-CLI + PHP error logs + Query Monitor | Isolate plugin conflicts and inspect errors and slow requests. |
| Verification | PHPUnit + Playwright + backup/restore tooling | Test repaired workflows against a recoverable staging copy before release. |

**Proposed process:** Create a recoverable staging copy of the actual site, reproduce the conflict, and isolate the responsible plugin/theme combination. Apply a supported fix and verify the affected workflows before deployment.

## WhatsApp Chatbot for Barbershop Bookings

**Visible evidence:** WhatsApp barbershop booking messages with service selection, staff choice, available times, and confirmation.

**Scope:** Service selection; Appointment availability; Booking confirmation.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Messaging | WhatsApp Cloud API | Drive service, staff, time-selection, and confirmation conversations. |
| Scheduling | NestJS + PostgreSQL + transactional booking constraints | Reserve available slots atomically and prevent double booking. |
| Reminders & admin | BullMQ + React/TypeScript | Send confirmations/reminders and manage services and staff calendars. |
| Verification | Integration tests + conversation fixtures | Test timezones, rescheduling, competing reservations, and retries. |

**Proposed process:** Start by defining service selection and its content/data model. Prototype appointment availability, implement booking confirmation, then validate the complete workflow using the checks below.

## Packaging Dielines & Mockups

**Visible evidence:** Wine, gift, and calendar packaging mockups with dielines, measurements, folds, and cut-line notation.

**Scope:** Dieline geometry; Print separation; Physical proof review.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Structural artwork | Adobe Illustrator + dimensioned dieline templates | Define separate cut, crease, bleed, and artwork layers at real scale. |
| Print validation | Adobe Acrobat Pro preflight + physical proof | Check dimensions, spot colors, overprint, bleed, and fold behavior. |
| Optional visualization | Blender | Render packaging mockups when editable 3D previews are required. |

**Proposed process:** Confirm physical product dimensions, draw cut and fold layers at real scale, and apply artwork with the correct bleed. Produce a physical proof and run print preflight before releasing production files.

## Cinematic Documentary Editing Portfolio

**Visible evidence:** Documentary scene examples and a CapCut-branded nonlinear editing timeline with titles and audio layers.

**Scope:** Documentary edit; Caption and title tracks; Audio finishing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Timeline editing | CapCut Desktop | Reproduce the layered documentary workflow explicitly depicted in the artwork. |
| Audio & graphics | CapCut audio/caption tools + Photoshop | Prepare narration, subtitles, thumbnail graphics, and image composites. |
| Delivery | Licensed assets + agreed video export presets | Deliver captioned masters with checked aspect ratio, frame rate, and audio levels. |

**Proposed process:** Structure the documentary narrative, organize source footage and voice-over in CapCut, then build the layered timeline shown. Refine pacing, captions, color, and sound before checking the final export.

## TechStore E-commerce

**Visible evidence:** A technology storefront showing product discovery, mobile shopping, and a proposed operational flow.

**Scope:** Product catalog; Mobile checkout; Order notifications.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining product catalog and its content/data model. Prototype mobile checkout, implement order notifications, then validate the complete workflow using the checks below.

## Un Nuevo Comienzo · Workbook Editorial

**Visible evidence:** A self-guided workbook with cover design, interior page spreads, reflection exercises, and print mockups.

**Scope:** Long-form layout; Exercise templates; Print-ready PDF.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Layout | Adobe InDesign | Build master pages, paragraph styles, exercise layouts, and long-form pagination. |
| Artwork | Photoshop + Illustrator | Prepare cover imagery, supporting graphics, and illustrations. |
| Output & QA | Acrobat Pro preflight + print PDF | Check font embedding, margins, bleed, legibility, and press specifications. |

**Proposed process:** Outline the reading and exercise sequence, build master pages and paragraph styles, then flow the reviewed copy into the document. Check pagination, contrast, margins, and a printed proof before exporting.

## HombreVital · Tu Bienestar en Una App

**Visible evidence:** A wellbeing app concept with score summaries, activity charts, sleep tracking, and smartwatch views.

**Scope:** Health data sync; Wellbeing summaries; Progress tracking.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile & wearable | React Native + native HealthKit/Health Connect bridges | Build tracking views and permission-based platform health integrations. |
| Backend | FastAPI + PostgreSQL + encrypted storage | Persist user-authorized activity and wellness records with controlled access. |
| Assistant & access | LLM API with reviewed content + StoreKit/Play Billing | Support non-diagnostic guidance and app-store subscription access where shown. |
| Verification | Maestro + native-device integration tests | Check consent, sync gaps, unit conversions, subscriptions, and offline states. |

**Proposed process:** Define supported tracking data and user consent, prototype the mobile views, and integrate the relevant device health APIs. Test synchronization, unit conversion, access revocation, subscriptions, and non-diagnostic assistant behavior.

## Corporate Blue Business Presentation Grid

**Visible evidence:** A corporate presentation system using blue branding, service diagrams, outcome charts, and team slides.

**Scope:** Slide master system; Business diagrams; Presentation export.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Slides | PowerPoint + Figma | Create reusable master slides, business layouts, and visual hierarchy. |
| Charts & assets | Excel + Illustrator | Prepare editable charts, diagrams, and vector brand assets. |
| Verification | PDF export + presentation-device review | Check font availability, editable data, aspect ratios, and projection legibility. |

**Proposed process:** Develop a reusable slide-master system, translate business information into editable diagrams and charts, and refine the story order. Review the presentation on the intended display and export a portable PDF.

## Digideax Africa Pro

**Visible evidence:** A multi-module business dashboard with revenue summaries, product listings, orders, and AI integration entry points.

**Scope:** Business modules; Orders and products; Operational reporting.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript + TanStack Table + Apache ECharts | Build product, order, customer, and reporting workspaces. |
| Application | NestJS + PostgreSQL | Implement validated business APIs and relational records. |
| Access & jobs | OIDC + role-based access + Redis/BullMQ | Scope modules by role and process background operations. |
| Verification | Vitest + Playwright + API tests | Check CRUD flows, permissions, report totals, and background-job failures. |

**Proposed process:** Start by defining business modules and its content/data model. Prototype orders and products, implement operational reporting, then validate the complete workflow using the checks below.

## Espacio Nórdico · Scandinavian Furniture

**Visible evidence:** A Scandinavian furniture storefront with room photography, featured products, and mobile catalog browsing.

**Scope:** Furniture catalog; Product collections; Delivery options.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining furniture catalog and its content/data model. Prototype product collections, implement delivery options, then validate the complete workflow using the checks below.

## Luxury Vintage Ecommerce

**Visible evidence:** A luxury resale storefront with categorized accessories, item details, photography, and mobile layouts.

**Scope:** Resale inventory; Unique-item stock; Checkout.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining resale inventory and its content/data model. Prototype unique-item stock, implement checkout, then validate the complete workflow using the checks below.

## Puffer Jacket and Shorts Spec Sheet

**Visible evidence:** Puffer jacket and shorts technical flats, material details, colorways, size tables, and measurement annotations.

**Scope:** Garment flats; Grading tables; Technical pack export.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Technical design | Adobe Illustrator | Draw garment flats, construction callouts, and colorways. |
| Specification data | Excel/Sheets + PDF technical pack | Maintain measurements, size grading, materials, and bill-of-material tables. |
| Optional sampling | CLO 3D + physical sample review | Evaluate digital fit when needed and verify final construction against samples. |

**Proposed process:** Confirm garment construction and materials, draw technical flats, and define measurement points and size grading. Review the complete technical pack with the manufacturer and validate a physical sample.

## Storyboard de Anuncio Fitness en Español

**Visible evidence:** A fitness advertisement storyboard showing a problem/solution arc, product scenes, captions, and social formats.

**Scope:** Shot planning; Caption animation; Vertical video editing.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Preproduction | Figma + Photoshop | Plan scene order, timing, product shots, captions, and visual references. |
| Edit & motion | CapCut Desktop + After Effects | Assemble social cuts and animate text or graphic overlays. |
| Delivery | Licensed audio + social video export presets | Check captions, safe areas, pacing, and mobile aspect ratios. |

**Proposed process:** Translate the campaign into a timed shot list, plan the problem-to-solution arc, and compose product and caption frames. Edit the approved sequence and verify pacing and mobile readability.

## Nexa E-commerce Store

**Visible evidence:** A NEXA electronics storefront paired with an explicit Shopify services panel and mobile product pages.

**Scope:** Shopify theme sections; Product variants; Checkout integration.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining shopify theme sections and its content/data model. Prototype product variants, implement checkout integration, then validate the complete workflow using the checks below.

## Lumière Joias Luxury Brand Board

**Visible evidence:** A jewelry identity board with monogram construction, serif typography, earthy swatches, packaging, and social applications.

**Scope:** Logo system; Packaging artwork; Brand usage guide.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Adobe Illustrator | Create scalable logos, typography layouts, and identity assets. |
| Applications | Figma + Adobe Photoshop | Explore digital components and photographic application mockups. |
| Delivery | SVG/PDF exports + color-managed brand guide | Package reusable artwork and document color, spacing, and type rules. |

**Proposed process:** Explore logo concepts, establish typography and color rules, then extend the selected identity into the applications shown. Deliver vector masters and a reviewed usage guide.

## StudyAI · Tu Aliado Inteligente

**Visible evidence:** An AI study app with question entry, photographed equations, worked answers, subject selection, and mobile screens.

**Scope:** Image question input; Tutoring responses; Study history.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile | React Native + TypeScript + camera/image picker | Capture questions and provide subject-based tutoring screens. |
| AI service | FastAPI + multimodal LLM API + verified math tooling | Read submitted questions, produce explanations, and check numeric work. |
| Persistence | PostgreSQL + encrypted object storage + job queue | Store opted-in study sessions and process image inputs asynchronously. |
| Verification | pytest + evaluation question set + Maestro | Check OCR errors, answer quality, upload failures, and study-history access. |

**Proposed process:** Start by defining image question input and its content/data model. Prototype tutoring responses, implement study history, then validate the complete workflow using the checks below.

## Talento+ HR Landing Page

**Visible evidence:** An HR/careers landing page with vacancy discovery, candidate journeys, company content, and mobile layouts.

**Scope:** Vacancy publishing; Candidate applications; Company storytelling.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Next.js + TypeScript + CMS | Publish role listings, team/culture pages, and responsive candidate journeys. |
| Applications | ATS API integration + server-side form validation | Submit applications and track role availability without duplicating ATS data. |
| Verification | Playwright + axe-core | Test vacancy filters, application errors, and keyboard accessibility. |

**Proposed process:** Start by defining vacancy publishing and its content/data model. Prototype candidate applications, implement company storytelling, then validate the complete workflow using the checks below.

## Pastel Eyewear Store Wireframe Proposal

**Visible evidence:** A pastel Japanese eyewear store proposal with page-layout diagrams, product modules, and responsive wireframes.

**Scope:** Information architecture; Component wireframes; Interactive prototype.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Prototyping | Figma + Auto Layout + component variants | Model page hierarchy, responsive states, and reusable storefront modules. |
| Handoff | Design tokens + annotated prototype | Document interaction states, spacing, type, and implementation requirements. |
| Validation | Usability sessions + prototype review | Check navigation and product-discovery tasks before choosing a production stack. |

**Proposed process:** Map storefront navigation and shopping tasks, build responsive component wireframes, and connect the primary screens into a prototype. Validate product discovery and hand off annotated layouts before production development.

## Dual Gym Brands Fitness Moodboard

**Visible evidence:** Paired gym-brand moodboards with photography, campaign headlines, social icons, and branded promotional layouts.

**Scope:** Brand-specific templates; Photo direction; Social campaign assets.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Create campaign composites, vector graphics, and typography systems. |
| Templates | Figma | Maintain reusable post, story, cover, and sticker layouts. |
| Delivery | Platform-specific export presets | Prepare consistent aspect ratios, safe areas, and optimized image assets. |

**Proposed process:** Define each campaign’s message and visual rules, create a reusable layout family, and composite the supplied photography. Review legibility and safe areas before exporting each social format.

## SPUNTA Brand Identity Moodboard (1)

**Visible evidence:** A SPUNTA identity system showing logo variants, type, earthy colors, signage, packaging, and web applications.

**Scope:** Logo variants; Brand specifications; Touchpoint mockups.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Adobe Illustrator | Create scalable logos, typography layouts, and identity assets. |
| Applications | Figma + Adobe Photoshop | Explore digital components and photographic application mockups. |
| Delivery | SVG/PDF exports + color-managed brand guide | Package reusable artwork and document color, spacing, and type rules. |

**Proposed process:** Explore logo concepts, establish typography and color rules, then extend the selected identity into the applications shown. Deliver vector masters and a reviewed usage guide.

## Portfólio de Construção Civil Andrade Silva

**Visible evidence:** A construction-services portfolio with project photography, service categories, testimonials, and mobile pages.

**Scope:** Project publishing; Service catalog; Inquiry form.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Fast, responsive service and project pages. |
| Content | Sanity CMS + image optimization | Manage project imagery, service content, and localized copy. |
| Forms | Server-side form endpoint + transactional email | Validate inquiries and deliver them to a configured team inbox. |
| Verification | Playwright + axe-core | Check navigation, forms, responsive layouts, and accessibility. |

**Proposed process:** Define the service and project content model, prototype responsive layouts, then implement content publishing and inquiry handling. Check navigation, media, form states, and accessibility.

## ScaleVideo Studio · E-commerce Video Landing Page

**Visible evidence:** A video-services landing page referencing Veo 3 and CapCut with examples, process steps, and service packages.

**Scope:** AI video generation; Timeline editing; Service presentation.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Generation | Google Veo API/Vertex AI | Generate licensed/authorized video shots from reviewed prompts and references. |
| Editing | CapCut Desktop | Assemble generated and original footage into polished service examples. |
| Website | Astro + TypeScript + Mux | Present packages, video examples, and an inquiry workflow. |
| Verification | Shot review + Playwright | Check continuity, audio/captions, media loading, and responsive presentation. |

**Proposed process:** Storyboard the requested service examples, generate and review approved shots, and refine them in the editing timeline. Publish optimized examples on the service site and verify video playback and inquiry flows.

## El Código Loyalty Platform

**Visible evidence:** A rewards marketplace with product redemption, a points dashboard, transaction tables, and mobile account views.

**Scope:** Points ledger; Reward redemption; Merchant administration.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Clients | Next.js + TypeScript | Build rewards browsing, member balances, and merchant administration. |
| Ledger | NestJS + PostgreSQL transactions | Record immutable points events and atomically reserve redemptions. |
| Integration & jobs | Merchant APIs + signed webhooks + BullMQ | Sync qualifying purchases and deliver fulfillment/expiry events. |
| Verification | Integration tests + Playwright | Test duplicate purchases, refunds, insufficient points, and concurrent redemption. |

**Proposed process:** Define point-earning, expiry, refund, and redemption rules; implement an append-only points ledger and atomic redemption. Integrate purchase events and test duplicates, balance reversals, and concurrent requests.

## Pastel GachaLand

**Visible evidence:** A capsule-prize storefront with a prize machine visual, purchase calls to action, product lists, and administrative screens.

**Scope:** Prize inventory; Auditable draw logic; Order fulfillment.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | Next.js + TypeScript + CSS animations | Build prize browsing, reveal animations, and administrative screens. |
| Draw engine | NestJS + cryptographic RNG + PostgreSQL transactions | Implement auditable draws, published rules, and atomic prize inventory. |
| Orders | Payment-provider API + queued fulfillment | Connect permitted purchases and fulfillment with idempotent events. |
| Verification | Distribution/invariant tests + concurrency tests | Check odds implementation, stock exhaustion, transaction rollback, and duplicate callbacks. |

**Proposed process:** Specify prize inventory, permitted purchase rules, and published probabilities; implement server-side draws with auditable randomness and transactional stock. Validate probability logic, concurrency, payment callbacks, and fulfillment.

## Infografía de pruebas QA web y móviles

**Visible evidence:** A Spanish QA service infographic with web/mobile previews, test categories, bug-report stages, and device coverage.

**Scope:** Functional test suites; Mobile coverage; Defect tracking.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Web tests | Playwright + axe-core | Automate functional, responsive, keyboard, and accessibility checks. |
| Mobile tests | Appium + Android/iOS device matrix | Exercise native mobile flows and device-specific behavior. |
| API & reporting | Postman/Newman + issue tracker + CI artifacts | Validate API contracts and attach reproducible steps, logs, and screenshots. |

**Proposed process:** Define the target browsers/devices and critical user journeys, convert them into repeatable functional and API checks, and collect reproducible defects with evidence. Retest fixes and publish the results with clear coverage limits.

## WhatsApp AI CRM

**Visible evidence:** A WhatsApp CRM with customer conversations, contact records, pipeline stages, and messaging activity.

**Scope:** Contact timeline; Messaging inbox; Sales pipeline.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Messaging | WhatsApp Business Platform Cloud API + signed webhooks | Receive inbound messages and deliver approved outbound messages. |
| Application | NestJS + PostgreSQL + Redis/BullMQ | Persist contacts, conversation state, and retryable message jobs. |
| Assistant & interface | LLM API with retrieval + React/TypeScript | Ground support responses in approved content and expose a human inbox. |
| Verification | Vitest + Playwright + webhook replay fixtures | Test conversation transitions, retries, delivery failures, and handoff. |

**Proposed process:** Start by defining contact timeline and its content/data model. Prototype messaging inbox, implement sales pipeline, then validate the complete workflow using the checks below.

## Vibrant Social Media Design

**Visible evidence:** A social-design collection with cover banners, profile marks, promotional posts, and custom sticker treatments.

**Scope:** Social asset templates; Logo variants; Sticker export.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Create campaign composites, vector graphics, and typography systems. |
| Templates | Figma | Maintain reusable post, story, cover, and sticker layouts. |
| Delivery | Platform-specific export presets | Prepare consistent aspect ratios, safe areas, and optimized image assets. |

**Proposed process:** Define each campaign’s message and visual rules, create a reusable layout family, and composite the supplied photography. Review legibility and safe areas before exporting each social format.

## Health and Fitness App

**Visible evidence:** A health app with nutrition, exercise, AI chat, subscription screens, and wearable-device integration visuals.

**Scope:** Nutrition logging; Wearable integration; Subscription access.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile & wearable | React Native + native HealthKit/Health Connect bridges | Build tracking views and permission-based platform health integrations. |
| Backend | FastAPI + PostgreSQL + encrypted storage | Persist user-authorized activity and wellness records with controlled access. |
| Assistant & access | LLM API with reviewed content + StoreKit/Play Billing | Support non-diagnostic guidance and app-store subscription access where shown. |
| Verification | Maestro + native-device integration tests | Check consent, sync gaps, unit conversions, subscriptions, and offline states. |

**Proposed process:** Define supported tracking data and user consent, prototype the mobile views, and integrate the relevant device health APIs. Test synchronization, unit conversion, access revocation, subscriptions, and non-diagnostic assistant behavior.

## Rental Pro Equipment Management

**Visible evidence:** Heavy-equipment rental summaries, utilization graphs, revenue charts, a machine table, and a location map.

**Scope:** Equipment availability; Rental agreements; Maintenance schedules.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Dashboard | React + TypeScript + Apache ECharts + Mapbox | Present rental utilization, revenue, equipment state, and asset locations. |
| Rental backend | NestJS + PostgreSQL/PostGIS | Track equipment, rental periods, agreements, and maintenance events. |
| Operations | Redis/BullMQ + PDF generation + object storage | Schedule maintenance reminders and generate rental documents. |
| Verification | Integration tests + Playwright | Check overlapping reservations, availability, utilization totals, and maintenance exclusions. |

**Proposed process:** Start by defining equipment availability and its content/data model. Prototype rental agreements, implement maintenance schedules, then validate the complete workflow using the checks below.

## PrintPlace Branding Identity Board

**Visible evidence:** A print-services brand system showing a multicolor logo, stationery, vehicle graphics, brochures, and production applications.

**Scope:** Identity system; Print color management; Large-format artwork.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Identity & artwork | Adobe Illustrator + Photoshop | Create logos, vector layouts, print composites, and vehicle applications. |
| Production | InDesign + Acrobat Pro preflight | Prepare brochures and print-ready files with bleed and embedded fonts. |
| Color & output | ICC profiles + printer RIP/physical proofs | Validate CMYK/spot colors, scale, substrate, and production output. |

**Proposed process:** Establish the identity, prepare vector and photographic applications, and adapt layouts for each physical format. Use the printer’s color profiles, check production scale, and approve physical proofs.

## EstudiaAI · Aprende Sin Límites-2

**Visible evidence:** An AI tutor with photographed math input, conversational explanations, subject tools, and mobile layouts.

**Scope:** OCR-assisted questions; Tutoring dialogue; Saved study sessions.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile | React Native + TypeScript + camera/image picker | Capture questions and provide subject-based tutoring screens. |
| AI service | FastAPI + multimodal LLM API + verified math tooling | Read submitted questions, produce explanations, and check numeric work. |
| Persistence | PostgreSQL + encrypted object storage + job queue | Store opted-in study sessions and process image inputs asynchronously. |
| Verification | pytest + evaluation question set + Maestro | Check OCR errors, answer quality, upload failures, and study-history access. |

**Proposed process:** Start by defining ocr-assisted questions and its content/data model. Prototype tutoring dialogue, implement saved study sessions, then validate the complete workflow using the checks below.

## Nexora Brand and ERP

**Visible evidence:** A paired identity board and ERP dashboard with logos, brand applications, finance charts, and business modules.

**Scope:** Identity guidelines; ERP interface; Operational data.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Identity | Illustrator + Figma | Define logo variants, typography, color tokens, and interface foundations. |
| ERP interface | React + TypeScript + Apache ECharts | Build the illustrated business dashboards and management screens. |
| Backend | NestJS + PostgreSQL + role-based access | Implement module data, permissions, and reporting. |
| Verification | Brand usage review + API tests + Playwright | Check identity consistency, dashboard operations, and access boundaries. |

**Proposed process:** Define the brand’s identity and shared design tokens, then apply them to the operational dashboard and module screens. Implement the underlying business APIs and verify both brand consistency and role-based workflows.

## Creadores de Contenido Latinoamérica

**Visible evidence:** A creator-recruitment campaign showing vertical content examples, social-channel badges, and application instructions.

**Scope:** Campaign art direction; Vertical content templates; Recruitment graphics.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Photoshop + Illustrator | Create campaign composites, vector graphics, and typography systems. |
| Templates | Figma | Maintain reusable post, story, cover, and sticker layouts. |
| Delivery | Platform-specific export presets | Prepare consistent aspect ratios, safe areas, and optimized image assets. |

**Proposed process:** Define each campaign’s message and visual rules, create a reusable layout family, and composite the supplied photography. Review legibility and safe areas before exporting each social format.

## TelesalesOS WebRTC CRM

**Visible evidence:** A telesales CRM with an in-browser calling panel, lead lists, call logs, and WebRTC/SIP architecture labels.

**Scope:** Browser voice calls; Lead workflow; Call history.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| CRM | React + TypeScript + NestJS + PostgreSQL | Maintain leads, agent state, call events, and CRM records. |
| Calling | SIP.js + WebRTC + Asterisk | Connect browser calls to a SIP-capable PBX and authorized trunk. |
| Connectivity | coturn + WSS/TLS + SRTP | Support NAT traversal and protected signaling/media transport. |
| Verification | SIP integration tests + browser audio-device tests | Test permission denial, transfers, disconnects, reconnects, and call logging. |

**Proposed process:** Start by defining browser voice calls and its content/data model. Prototype lead workflow, implement call history, then validate the complete workflow using the checks below.

## MiNegocio Financial

**Visible evidence:** A financial dashboard with income/expense summaries, category charts, transactions, and a mobile account view.

**Scope:** Income and expenses; Transaction import; Financial reports.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript + Apache ECharts | Visualize financial summaries, category charts, and transactions. |
| Data & accounting | NestJS + PostgreSQL with decimal amounts | Model entries, categories, account balances, and auditable reporting. |
| Imports & jobs | CSV parsers + Redis/BullMQ | Validate transaction imports and generate repeatable reporting jobs. |
| Verification | Vitest + Playwright | Test totals, rounding, import deduplication, and filtered reports. |

**Proposed process:** Define account and transaction models with decimal amounts, map import/category rules, and build the summary views. Reconcile reports against transaction-level fixtures and test duplicates, rounding, and date filters.

## SecureWeb Analytics

**Visible evidence:** A web analytics/security workspace with traffic charts, event tables, form snippets, and reCAPTCHA references.

**Scope:** Traffic collection; Security event analysis; Form protection.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Dashboard | React + TypeScript + Apache ECharts | Build event tables, traffic trends, and security summaries. |
| Collection & storage | FastAPI + PostgreSQL + ClickHouse | Validate events and query larger time-series datasets. |
| Protection | Server-verified reCAPTCHA + rate limiting + structured logs | Protect forms and surface security-relevant activity. |
| Verification | API/load tests + Playwright | Check event validation, retention, rate limits, and filtered reporting. |

**Proposed process:** Start by defining traffic collection and its content/data model. Prototype security event analysis, implement form protection, then validate the complete workflow using the checks below.

## BizFlow Full-Stack

**Visible evidence:** A responsive full-stack dashboard with sales charts, product tables, orders, and user-management screens.

**Scope:** Business API; Product administration; Role-based dashboards.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | React + TypeScript + TanStack Table + Apache ECharts | Build product, order, customer, and reporting workspaces. |
| Application | NestJS + PostgreSQL | Implement validated business APIs and relational records. |
| Access & jobs | OIDC + role-based access + Redis/BullMQ | Scope modules by role and process background operations. |
| Verification | Vitest + Playwright + API tests | Check CRUD flows, permissions, report totals, and background-job failures. |

**Proposed process:** Start by defining business api and its content/data model. Prototype product administration, implement role-based dashboards, then validate the complete workflow using the checks below.

## ServiCity Local Services App

**Visible evidence:** A local-services app with nearby providers on a map, service booking, chat, ratings, and provider views.

**Scope:** Geospatial discovery; Service booking; Provider chat.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Mobile | React Native + TypeScript + Mapbox | Implement provider discovery, maps, bookings, and provider screens. |
| Backend | NestJS + PostgreSQL/PostGIS + WebSockets | Find nearby providers and synchronize booking/chat state. |
| Notifications & assets | FCM/APNs + S3-compatible storage | Deliver booking updates and host controlled provider/job attachments. |
| Verification | Maestro + geospatial/API tests | Check location permissions, booking conflicts, chat reconnects, and ratings. |

**Proposed process:** Start by defining geospatial discovery and its content/data model. Prototype service booking, implement provider chat, then validate the complete workflow using the checks below.

## Blanc Eyebrow Salon

**Visible evidence:** A Japanese salon website with treatment photography, service descriptions, staff/service content, and mobile views.

**Scope:** Treatment catalog; Appointment requests; Responsive content.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + Sanity CMS | Publish treatments, imagery, pricing, and responsive salon pages. |
| Booking | Booking-provider API or hosted booking link | Connect availability and appointment confirmation to the existing scheduler. |
| Verification | Playwright + axe-core | Check mobile booking, content readability, and accessible navigation. |

**Proposed process:** Start by defining treatment catalog and its content/data model. Prototype appointment requests, implement responsive content, then validate the complete workflow using the checks below.

## AI Academy Assistant

**Visible evidence:** An academy assistant flow with parent/student conversations, lead capture, follow-ups, and a lead dashboard.

**Scope:** Enrollment leads; Knowledge responses; Follow-up reminders.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Channels | WhatsApp Cloud API + web forms + email connector | Capture enrollment inquiries through the illustrated contact channels. |
| Assistant & CRM | FastAPI + LLM retrieval + PostgreSQL | Answer from approved academy material and maintain enrollment lead state. |
| Follow-up & admin | Redis/BullMQ + React/TypeScript | Schedule reminders and let staff review conversations and lead progress. |
| Verification | Conversation fixtures + retrieval evaluations + Playwright | Check enrollment facts, follow-up consent/state, and staff handoff. |

**Proposed process:** Start by defining enrollment leads and its content/data model. Prototype knowledge responses, implement follow-up reminders, then validate the complete workflow using the checks below.

## ERP POS

**Visible evidence:** An ERPNext-styled point-of-sale terminal with cart totals, payments, terminal management, permissions, and sales reports.

**Scope:** POS transactions; Terminal sessions; Inventory updates.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| ERP & runtime | ERPNext + Frappe Framework + Python + MariaDB | Build on existing sales, product, stock, and accounting models. |
| Terminal | Frappe JavaScript UI + service worker/IndexedDB | Implement terminal sessions and deliberate offline/reconnect behavior. |
| Integrations | Receipt printer/payment-terminal SDK + Redis workers | Connect supported peripherals and synchronize completed sales. |
| Verification | Frappe tests + terminal/device integration checks | Test tax totals, role permissions, offline replay, printing, and stock updates. |

**Proposed process:** Configure product, tax, stock, user, and terminal models in ERPNext; implement the illustrated POS workflow and deliberate offline behavior. Test physical peripherals, session closure, and stock reconciliation before rollout.

## AI Transformation · Redefining Business Potential

**Visible evidence:** An AI transformation overview showing agent workflows, enterprise integrations, reporting, and an architecture/tooling section.

**Scope:** Tool-using agents; Enterprise connectors; Evaluation and monitoring.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Agent service | Python + FastAPI + LangGraph + model-provider API | Orchestrate tool-using agent workflows with explicit state transitions. |
| Knowledge & connectors | PostgreSQL/pgvector + scoped enterprise APIs | Retrieve authorized material and integrate approved business systems. |
| Execution & observability | Redis workers + OpenTelemetry + evaluation datasets | Track runs, retry safe tasks, measure quality, and log tool activity. |
| Verification | pytest + tool-contract tests + offline evaluations | Check tool authorization, hallucinated actions, failure recovery, and answer quality. |

**Proposed process:** Define bounded agent tasks and permitted tools, connect authorized knowledge sources, and implement stateful tool execution. Evaluate outputs, access boundaries, failure recovery, and monitoring before enabling operational actions.

## GlobalLearn Multilingual Learning Platform

**Visible evidence:** A multilingual course marketplace with shopping, lesson playback, student progress, language selection, and administration.

**Scope:** Course commerce; Video lessons; Localized learning progress.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Experience | Next.js + TypeScript + next-intl | Build localized catalogs, student pages, and course checkout entry points. |
| Learning backend | NestJS + PostgreSQL + role-based access | Manage course enrollment, lesson progress, and administration. |
| Media & payment | Mux + payment-provider API + signed webhooks | Stream authorized lessons and activate enrollments after confirmed payment. |
| Verification | Playwright + integration tests | Check locale routing, paid access, playback progress, and refund events. |

**Proposed process:** Start by defining course commerce and its content/data model. Prototype video lessons, implement localized learning progress, then validate the complete workflow using the checks below.

## Lumière Joias Monochrome Brand Guide

**Visible evidence:** A monochrome jewelry identity guide with logo variants, clear-space guidance, packaging, and digital applications.

**Scope:** Vector logo variants; Brand specifications; Packaging applications.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Design | Adobe Illustrator | Create scalable logos, typography layouts, and identity assets. |
| Applications | Figma + Adobe Photoshop | Explore digital components and photographic application mockups. |
| Delivery | SVG/PDF exports + color-managed brand guide | Package reusable artwork and document color, spacing, and type rules. |

**Proposed process:** Explore logo concepts, establish typography and color rules, then extend the selected identity into the applications shown. Deliver vector masters and a reviewed usage guide.

## Japanese Plumbing Repair Service Landing Page

**Visible evidence:** A Japanese emergency plumbing landing page showing phone calls to action, service categories, and price comparisons.

**Scope:** Local service content; Call conversion; Service request form.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Website | Astro + TypeScript + CSS | Build fast mobile service, pricing, and local coverage sections. |
| Conversion | tel links + server-validated request form | Connect calls and service inquiries without exposing private submissions. |
| Verification | Playwright + axe-core | Check click-to-call, pricing readability, form errors, and mobile navigation. |

**Proposed process:** Start by defining local service content and its content/data model. Prototype call conversion, implement service request form, then validate the complete workflow using the checks below.

## NaturaVida Wellness E-commerce

**Visible evidence:** A wellness storefront with supplement products, mobile pages, purchase summaries, and a PIX payment step.

**Scope:** Supplement catalog; Local payment integration; Order fulfillment.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Storefront | Shopify Online Store 2.0 + Liquid + CSS + JavaScript | Responsive product, collection, cart, and theme sections. |
| Commerce | Shopify catalog + inventory + hosted checkout | Product variants, stock, orders, and checkout. |
| Integration | Shopify Admin API + webhooks | Connect fulfillment and external order-management needs. |
| Verification | Shopify CLI + Playwright | Theme development and end-to-end shopping checks. |

**Proposed process:** Start by defining supplement catalog and its content/data model. Prototype local payment integration, implement order fulfillment, then validate the complete workflow using the checks below.

## LexPro Legal SaaS

**Visible evidence:** A legal practice system with case lists, tasks, calendars, document automation, analytics, and mobile screens.

**Scope:** Matter management; Legal deadlines; Document generation.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Interface | Next.js + TypeScript + calendar components | Build matter lists, task views, deadlines, and document workspaces. |
| Domain backend | NestJS + PostgreSQL + role-based access | Persist matters, parties, deadlines, and scoped legal records. |
| Documents & jobs | S3-compatible storage + DOCX/PDF templating + BullMQ | Generate versioned documents and schedule deadline reminders. |
| Verification | Integration tests + Playwright | Check deadline rules, document permissions, calendar changes, and templates. |

**Proposed process:** Map matters, staff permissions, task/deadline rules, and document templates; implement the workspace and background reminders. Validate date calculations, document access, and matter-specific audit history.

## Dental Clinic Video Portfolio in Spanish

**Visible evidence:** Vertical dental-service video compositions with presenter footage, procedure captions, and a production sequence.

**Scope:** Vertical video edit; Treatment captions; Social delivery.

| Layer | Recommended technology | Purpose |
| --- | --- | --- |
| Editing | DaVinci Resolve | Assemble presenter footage, procedure explanations, and vertical social cuts. |
| Graphics & captions | After Effects + subtitle workflow | Create readable treatment titles, overlays, and synchronized captions. |
| Delivery | Reviewed medical copy + licensed assets + social export presets | Verify approved claims, consent for footage, caption readability, and export quality. |

**Proposed process:** Approve the script and consented footage, assemble concise treatment-specific cuts, and add captions and supporting graphics. Review clinical wording and mobile legibility before exporting the requested social formats.
