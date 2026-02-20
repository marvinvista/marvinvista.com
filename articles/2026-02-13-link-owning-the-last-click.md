---
title: "Link: Owning the Last Click"
slug: "link-owning-the-last-click"
date: "2026-02-13T13:41:36.542Z"
url: "https://www.marvinvista.com/p/link-owning-the-last-click"
author: "Marvin Vista"
description: "Stripe’s Link is a wallet hiding inside checkout. Built into hundreds of thousands of sites, reaching 200M+ consumers, and already extending into supported AI agents."
wordcount: 1754
tags: ["Finance", "Technology", "Fintech", "Business", "Artificial Intelligence"]
---

Link is Stripe’s consumer wallet that turns checkout into a reusable identity-and-payment experience across merchants, increasingly including AI-driven commerce surfaces. That’s harder than it looks. It’s easy to list features (autofill, one-click, bank payments), but the purpose is the mission: shrink the distance between intent and completion, without asking the user to re-prove their identity every time. Link calls itself “the wallet designed for the internet.”

#### Checkout Friction Is a Conversion Killer

Checkout is where good marketing goes to die. It’s also where merchants learn that friction is both an abstract UX sin and a measurable tax.

Shopper pain

- Repeated form-filling (card numbers, addresses) across many independent sites.

- Mobile friction: small screens, fat-finger errors, slower typing, higher abandonment.

- Trust anxiety: Who is storing my card? Will I get charged twice? Is this legit?

Merchant pain

- Conversion loss: high-intent users drop off during checkout.

- Declines and friction: legitimate customers get bounced by auth flows or failed payments.

- Fraud and abuse: card testing, account takeover, and disputes.

- Payment method trade-offs: cards convert well but can be costly; bank methods can be cheaper but harder to adopt without good UX.

Platform / agent pain (emerging in 2025–2026)

- Delegated checkout: an AI assistant can choose products, but it still needs explicit permission to pay.

- Traditional checkout assumes a present human; agents make that assumption unreliable.

The current world is a patchwork of partial solutions:

- Merchant accounts and saved cards: good for repeat purchases on one site; useless elsewhere.

- Browser autofill / password managers: reduce typing but don’t solve risk, auth, or payment routing.

- Device wallets (Apple Pay, Google Pay): great UX, but bound to devices and ecosystems.

- Platform wallets (PayPal, Shop Pay, Amazon Pay): fast, but tied to platform footprint and brand trust.

- Card network initiatives (e.g., Click to Pay): promising, but adoption and UX consistency vary by merchant and geography.

The common failure mode is fragmentation: identity and payment preference are stored in too many places, under too many logins, with inconsistent security and reuse. Incentives are superpowers. Every extra field, redirect, or surprise auth step creates an incentive to abandon.

#### Email as Identity, Autofill as Habit, Network as Moat

Link treats checkout as an identity problem that happens to be expressed as forms. If you can reliably recognize a buyer, you can compress the checkout experience and improve authorization outcomes. Stripe describes Link as a digital wallet that “saves and autofills your customers’ payment and address details.”

Link is uniquely positioned because it rides inside Stripe’s distribution: Stripe’s checkout components are already embedded across a huge long tail of the internet. Link is not asking merchants to rip-and-replace their payment stack; it is an option that slots into the existing Stripe surface area.

> “Link increases conversion for returning customers by over 14% on average.”
>
> “3× faster than typical checkout.”
>
> “Pay with Link at more than one million businesses.”
>
> “Reach over 200 million consumers worldwide.”

The endurance story is is compounding. In the context of network businesses, a product gains value as more people use it, people prefer larger networks.

Link’s compounding loops:

- More Stripe merchants enable Link → more places consumers see Link.

- More consumers create/reuse Link → more merchants see conversion lift.

- More usage → better fraud models and better payment routing → higher trust and higher authorization.

Stripe’s recent product messaging puts a stake in the ground: Link is part of agentic commerce. If AI assistants are going to buy things, they need a wallet that understands permissions.

In Stripe’s architecture, Link sits inside the checkout experience (Elements / Checkout), but it also sits behind it as an identity layer that can unlock saved payment methods.

![Link inside Stripe’s Express Checkout Element.](https://substackcdn.com/image/fetch/$s_!m34L!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F617e1bcf-d94f-4619-b48c-0321a95134ad_3508x1852.png)

*Link inside Stripe’s Express Checkout Element.*

Use cases:

- Returning customer checkout: Link recognizes the user and autofills details.

- Lower-cost bank payments: Link supports US bank accounts and enables Instant Bank Payments (available exclusively via Link).

- BNPL without extra friction: Klarna can be offered through Link.

- Merchant-of-record flows: “Sold through Link” indicates Stripe acting as merchant of record in certain products, handling more of the purchase lifecycle.

- Agentic purchases: shared payment methods and wallet permissioning patterns for AI assistants.

#### **Mobile Maturity Meets AI Agents (Timing Finally Works)**

Timing is half the battle. Nature hates a vacuum, but payments hates change, so the vacuum can persist for years. Checkout has evolved in waves:

- Forms era: manual entry, high friction, high abandonment.

- Account era: PayPal-style third-party login, less typing, more fragmentation.

- Device wallet era: excellent UX but ecosystem-bound.

- API + components era: Stripe and peers standardized integration; merchants stopped reinventing payment plumbing.

- Network + identity era: the frontier shifts to recognizing buyers across merchants and across new surfaces (agents).

A cross-merchant wallet needs three things at the same time:

- Massive merchant distribution.

- Industrial-grade security and compliance.

- Authentication that normal humans won’t hate.

Stripe’s distribution and compliance posture make it plausible for Link to exist as a default surface inside Checkout/Elements.

Several trends converge in 2024–2026:

- E-commerce scale keeps growing.

- Identity UX improves (OTP, passkeys, biometrics).

- Payment method diversification accelerates (pay-by-bank, BNPL).

- Agentic commerce emerges as a new interface to shopping, forcing delegated authorization patterns.

#### The Checkout Economy Is Bigger Than It Looks

Link is a two-sided product (consumers + merchants) embedded in Stripe’s platform. The market is the set of online purchases where checkout friction and trust meaningfully affect completion. Link is quietly trying to upgrade the unit of competition. Instead of competing on payment processing, it competes on recognized buyer. That unlocks adjacent markets: subscriptions, post-purchase support, delegated commerce via agents, and merchant-of-record services.

Merchant sweet spots:

- Repeat purchase businesses (where returning customers are a large revenue cohort).

- Mobile-heavy traffic and impulse purchases (where friction kills intent).

- Global/international merchants who benefit from standardized address/payment handling.

- Merchants that want to offer bank payments or BNPL without UX fragmentation.

Consumer sweet spots:

- People who shop across many independent sites (the long tail, not only mega-platforms).

- People who prefer fewer accounts and faster checkout on mobile.

Stripe processed \$1.4T of payment volume in 2024. The surface area is enormous, and even modest percentage shifts at checkout produce meaningful dollar outcomes.

#### Who Owns the Button?

Direct competitors are other accelerated checkout / wallet layers:

- Platform checkouts and wallets: PayPal, Shop Pay, Amazon Pay.

- Device wallets: Apple Pay, Google Pay.

- Card network one-click initiatives.

- Checkout-layer vendors focused on conversion.

Indirect alternatives solve slices of the problem:

- Browser autofill/password managers (typing reduction).

- Merchant accounts and stored credentials (site-level memory).

- Standalone BNPL flows.

- Pay-by-bank without a wallet layer.

Link’s plan to win looks like classic Stripe:

- Win distribution: be present inside Stripe’s default checkout surfaces.

- Win performance: publish and deliver measurable conversion/speed improvements.

- Win breadth: bundle hard-to-add payment methods into the same UX.

- Win the next interface: agentic commerce needs an identity-and-permissions wallet.

Stripe’s competitive advantages:

- Distribution advantage: Link is an option inside Stripe’s Checkout/Elements integrations.

- Network advantage: Link claims acceptance at \>1M businesses and reach to 200M+ consumers.

- Payment method advantage: Instant Bank Payments are available exclusively through Link.

- Economic lever: Stripe’s Link terms allow Stripe to offer customer incentives at no cost to merchants.

- Trust leverage: Link inherits Stripe’s risk, compliance, and security posture.

#### Inside Link: Surfaces, Trust, and the Expanding Payment Menu

Link is a consumer wallet that shows up in multiple Stripe product surfaces. The most useful way to think about it is as an identity layer plus a set of payment-method frontends.

![](https://substackcdn.com/image/fetch/$s_!-_IJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a3daec4-8926-478c-969b-25ca169e5c62_1398x760.png)

We can infer near-term roadmap direction from public disclosures:

- More payment methods routed through Link (BNPL, bank payments; and in some contexts emerging rails).

- Deeper post-purchase experiences (subscription management, support), especially where Stripe is merchant of record.

- Agentic commerce primitives: permissioning and shared payment methods.

- Continued improvements to conversion, fraud, and authorization outcomes.

#### Free to Turn On, Hard to Rip Out

Link’s business model is not charge consumers for a wallet. It’s closer to: make Stripe merchants more money, so Stripe earns more by processing more and retaining more. Great operators focus on high-return uses of capital and avoid complexity that doesn’t move the needle. At Stripe scale, a few percentage points of conversion is a very large needle.

Revenue model

- Primary: incremental payment processing revenue driven by conversion lift and reuse across merchants.

- Secondary: payment-method mix expansion (bank payments, BNPL) that can improve economics and reduce disputes.

- Platform expansion: Managed Payments / merchant-of-record services where Stripe provides more of the commerce stack.

One underappreciated economic lever is embedded in Stripe’s Link terms: Stripe may offer incentives to customers to create or use Link at no cost to the merchant.

Stripe’s public pricing shows Instant Bank Payments at a lower variable percentage than standard card payments (online), with the same fixed per-transaction fee.

Sales & distribution model:

- Product-led distribution through Stripe Checkout/Elements surfaces.

- Enterprise distribution through Stripe’s sales motion (checkout optimization is a familiar enterprise pitch).

- Consumer distribution at the moment of purchase (high-intent acquisition).

- Platform distribution through Stripe partnerships and product announcements (shared payment methods; agentic commerce).

#### Link Through Stripe’s Financial Gravity

Stripe reported that they are profitable, with \$1.4T of total payment volume in 2024 (and 38% growth).

How Link maps to a Stripe P&L (modeled structure):

- Revenue: incremental processing revenue from conversion lift and increased reuse.

- Costs: network fees, fraud losses, bank return liabilities (for bank payments), support costs (especially in managed flows).

- Opex: engineering, risk, compliance.

Without public balance sheets, we can only describe typical payments-platform dynamics:

- Settlement float and working capital are managed tightly.

- Intangible assets matter: trust, risk models, and network placement.

- For Link specifically, the most valuable asset is consumer permission to store and reuse payment credentials safely.

Cash flow for a payments platform is driven by scale and margins, and shaped by settlement timing. Link’s cash-flow impact is mostly second-order: higher volume and lower disputes improve the underlying economics.

#### A Wallet for Humans, and for Their Software

If Link succeeds, it becomes the internet’s default commerce identity layer: a wallet that store credentials *and* permissions: who is allowed to buy what, under what constraints, on which surfaces.

- A widely adopted accelerated checkout layer across Stripe merchants (the default fast path).

- A broader portfolio of payment rails inside a single experience (cards + bank + BNPL, and new rails as they mature).

- Agentic commerce primitives: shared payment methods, spending limits, and explicit permissioning models.

- A consumer hub for post-purchase management (subscriptions, receipts, support) across merchants.

- A deeper merchant-of-record offering for platforms that want to outsource payments operations.
