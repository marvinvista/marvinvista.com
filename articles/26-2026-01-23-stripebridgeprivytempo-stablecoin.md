---
title: "Stripe/Bridge/Privy/Tempo | Stablecoin Stack"
slug: "stripebridgeprivytempo-stablecoin"
date: "2026-01-23T15:39:33.515Z"
url: "https://www.marvinvista.com/p/stripebridgeprivytempo-stablecoin"
author: "Marvin Vista"
description: "Stripe’s crypto business has effectively consolidated into a stablecoin-first money movement stack built around four components:"
wordcount: 2077
tags: ["Finance", "Technology", "Business"]
---

Stripe’s crypto business has effectively consolidated into a stablecoin-first money movement stack built around four components:

- Stripe (distribution + payments + regulated money movement UI)

- Bridge (stablecoin orchestration + issuance + cards + reserve/treasury plumbing)

- Privy (embedded wallets + key mgmt + custody abstraction for fintech-grade UX)

- Tempo (payments-first blockchain, stablecoin-native execution layer, testnet live, mainnet planned 2026)

It’s a payments/treasury strategy using stablecoins as a new rail, with Stripe’s historical strengths (compliance, global distribution, developer tooling) applied to a new substrate.

#### The stablecoin stack Stripe is assembling

Think of the stablecoin economy as a vertical stack:

1.  User access layer: wallets + auth + key mgmt + policy controls (Privy)

2.  Payments acceptance: merchants/platforms take stablecoins, settle to fiat (Stripe Payments / Connect)

3.  Money movement + conversion: stablecoin receive/store/convert, offramps, cross-border (Bridge orchestration)

4.  Treasury/accounts: hold digital dollars, mix fiat rails + onchain rails (Stripe Stablecoin Financial Accounts powered by Bridge)

5.  Issuance layer: launch branded stablecoins, manage reserves, mint/burn, compliance (Bridge Open Issuance / USDB)

6.  Spend layer: cards to spend stablecoin balances (Bridge card issuing w/ Visa + Stripe/Bridge program mgmt)

7.  Execution layer: chain optimized for payments (Tempo)

Stripe’s strategy is to own (or strongly influence) every layer where (a) compliance and trust concentrate and (b) switching costs accumulate.

---

#### Stripe: the distribution moat meets stablecoin rails

**What Stripe is shipping**

*Stablecoin payments (merchant pay-ins)*

Stripe let’s US businesses accept stablecoin payments by enabling the Crypto payment method; customers are redirected to connect a wallet and complete payment, and funds settle in the merchant’s Strupe balance in USD. Stripe’s legal terms emphasize finality: stablecoin transactions can’t be cancelled/reversed once submitted; no disputes are supported for Stablecoin payments.

Stripe is making stablecoins boring. It absorbs complexity so merchants experience it like another payment method.

*Shopify distribution: stablecoins at platform scale*

Shopify merchants across 34 countries can accept USDC; shoppers pay USDC on Base via their preferred crypto wallet; merchants default to receiving local currency deposited to their bank, or optionally USDC to an external wallet. Stripe also notes that US-based Connect platforms can turn on stablecoin payments for their users.

This is Stripe’s core advantage. When Stripe flips a switch, it does so for both single merchants and ecosystems.

*Stablecoin subscription payments*

Stripe launched subscription capabilities for stablecoin payments:

- Pay subscriptions via crypto wallets while settling in fiat

- Manage fiat + stablecoin subscriptions in the Dashboard

- Integrate with Stripe Billing / Optimized Checkout

- Implemented via a smart contract that lets customers save a wallet for recurring payments (no need to re-sign each charge); supports 400+ wallets.

- Initially rolling out in private preview for US businesses, supporting USDC on Base and Polygon.

Recurring payments are where Stripe’s historical advantage is strongest (Billing + fraud + recovery + analytics). Stablecoins become a rail inside the high-LTV Stripe machine instead of a separate crypto product.

*Stablecoin Financial Accounts (treasury + global access)*

Stripe’s Stablecoin Financial Accounts let businesses in 101 countries:

- Hold a dollar-denominated stablecoin balance

- Send/receive USD via ACH or wire

- Send/receive EUR via SEPA

- Send/receive stablecoins across eight blockhain networks

These accounts are powered by Bridge, integrated so businesses can manage operations with no code required, starting with USDC storage and planning expansion to USDB. This is Stripe moving from payments into money management where switching costs and regulatory barriers could be higher.

*Stablecoin-backed card issuing*

Stripe offers stablecoin-backed card issuing with Connect, enabling:

- custodial wallets for connected accounts

- virtual/physical prepaid cards backed by stablecoin balances

- direct transfers to external crypto wallets

This overlaps with Bridge’s card initiatives. Strategically, Stripe seems to be building multiple on-ramps to the same spend-stablecoins-like-fiat outcome, which increases optionality.

**How Stripe likely makes money here**

Because Stripe doesn’t publish segment P&Ls, treat this as a value-capture map rather than a precise model:

1.  Payment processing fees (stablecoin pay-ins) + incremental volume from markets where cards fail/are expensive. Stablecoin payers are disproportionately [new buyers](https://stripe.com/resources/more/stablecoin-strategy-for-global-businesses) for some Stripe businesses.

2.  FX + cross-border services: stablecoins compress settlement time and intermediaries, but Stripe can still monetize via conversion, orchestration, and value-added services.

3.  Treasury/float economics: via Bridge/USDB/Open Issuance, the industry’s float/yield on reserves becomes a monetizable layer (more below).

4.  Platform monetization: Billing, fraud tooling, identity, reporting; stablecoins become another input to Stripe’s existing high-margin software layer.

5.  Cards interchange (via Bridge card issuing) if Stripe/Bridge control program management economics.

**Stripe’s capital allocation: buy + integrate the control points**

Stripe completed its acquisition of Bridge on February 4, 2025, Privy acquisition announcement was on June 11 of the same year. Stripe’s buy-vs-build decisions look like acquiring time and acquiring regulatory + integration muscle.

**Stripe’s moat**

*Distribution + trust (the core moat)*

Stripe already sits at the nexus of:

- merchants + platforms (Connect)

- checkout flows

- fraud/risk systems

- compliance operations

- global bank/payment partner network

Stablecoins plug into that, and the Shopify rollout shows moat as a megaphone.

*Switching costs*

Once a platform runs:

- fiat + stablecoin payments

- recurring stablecoin subscriptions

- treasury accounts mixing ACH/SEPA/onchain

…they embed Stripe deeper than just processing payments.

*Regulatory/compliance as a product*

Stripe’s legal terms and gating (US businesses can accept stablecoin payments; approval workflows; specific settlement partner terms) show a deliberate compliance-first posture.

**Stripe’s key risks**

- Chargebacks/disputes mismatch: Stablecoin Payments does not support Disputes. That’s a merchant education + customer service risk if mispositioned.

- Settlement provider dependency: Stablecoin Payments relies on Settlement Services Providers under separate terms; partner risk is real.

- Regulatory fragmentation: US/EU/EM rules diverge; stablecoins are highly regulated in many jurisdictions.

- Stablecoin liquidity and depeg events: even if Stripe is rail provider, ecosystem shocks can spill into onboarding/retention and operational load.

- Security + wallet UX: user-side losses can become “Stripe blamed” even if not legally Stripe’s fault.

---

#### Bridge: stablecoin orchestration, issuance, and who gets the float

**What Bridge sells**

Bridge positions itself as a stablecoin platform that lets businesses receive, store, convert, issue, and spend stablecoins.

Core products include:

- Orchestration APIs: integrate stablecoin payments into existing flows; settle cross-border in seconds; expand globally; better conversion vs legacy rails.

- Issuance (Open Issuance): launch branded stablecoins and manage reserves, liquidity, compliance.

- Cards: programmatic stablecoin-linked Visa card issuing across multiple countries through one API, enabling stablecoin balances to be spent anywhere Visa is accepted.

Bridge also discloses regulatory posture/structure (e.g., money transmission services for US residents provided by a named entity with an NMLS identifier, and separate EEA entity disclosures).

**The critical economic idea: float/yield capture is moving up the stack**

Historically, stablecoin issuers capture yield on reserves. Bridge is explicitly attacking that with two approaches:

*USDB: yield-sharing stablecoin*

Bridge describes USDB as:

- always backed 1:1 by USD held in cash and short-duration money market funds at BlackRock

- designed so benefits of reserves can be shared; Bridge says it pays developers the majority of underlying earnings as a fee when USDB is used

- free conversions between USDB and other stablecoins like USDC

This is a direct incentive design play: Bridge wants developers to integrate and route stablecoin flows through Bridge/USDB because they get paid. Incentives drive behavior.

*Open Issuance: don’t build on someone else’s coin*

Open Issuance is described as enabling businesses to:

- launch/manage a stablecoin with a few lines of code

- customize reserves (ratio cash/treasuries; choose partners)

- mint/burn freely

- gain interoperability via a shared liquidity network

- generate rewards from originating stablecoins, and use those earnings to incentivize customers

- with reserve/treasury partners named (e.g., BlackRock/Fidelity/Superstate; Lead Bank for cash liquidity)

Bridge’s also frames Open Issuance as handling liquidity, reserves, and GENIUS readiness.

**Bridge’s moat**

*Liquidity + interoperability network effects*

If many branded stablecoins are issued on Open Issuance and interoperable, Bridge becomes:

- the easiest conversion layer

- the router for stablecoin liquidity

- the default API surface for stablecoin treasury products

This is the clearest path to network effects in the stack.

*Compliance + banking partner integration*

Bridge repeatedly positions itself as absorbing regulatory/technical complexity.  
In stablecoins and fintech in general, compliance is the business.

*Card issuing as a distribution wedge*

“Spend stablecoins anywhere Visa is accepted” is a powerful onramp to everyday usage; Bridge + Visa + Lead Bank partnership gives Bridge an enterprise-grade distribution channel.

**Bridge risks**

1.  Regulatory exposure increases with issuance: orchestration is plumbing, issuance is money. Regulatory scrutiny rises as you touch reserves and mint/burn controls.

2.  Concentration risk: reserve managers, banking partners, and network partners concentrate operational risk.

3.  Liquidity stress: Bridge itself [highlights](https://www.bridge.xyz/learn/stablecoin-liquidity-how-it-works-and-why-it-matters) liquidity as a key business concern.

4.  Competition: issuance + orchestration is attractive; expect banks, existing issuers, and large exchanges to contest.

---

#### Privy: wallet infrastructure as the UX moat for stablecoin fintech

Privy is the user-facing enabling layer, the part that makes stablecoin products feel like normal fintech. They’re said to be powering 75M+ accounts across 1,000+ developer teams and orchestrating billions in transactions.

**What Privy sells to “stablecoin businesses”**

Privy’s fintech positioning includes stablecoin pay-ins and pay-outs, yield-bearing stablecoin accounts, programmatic, white-labeled wallets with flexible custody, and enterprise assurances like SOC 2 Type II and uptime SLAs. Their embedded wallet guide emphasizes broad chain coverage (EVM + Solana and others), policy engines, transaction controls, and custody flexibility.

**The important product concept: flexible custody**

Privy explicitly supports self-custodial wallets, developer-custody wallets, custodial wallets via third-party custodians (e.g., Bridge), all through one API, allowing businesses to adapt custody models as regulatory needs change.

This is extremely important. It lowers one-way door risk for enterprises. Privy is trying to turn custody into a configurable parameter instead of a permanent architectural commitment.

**Privy’s moat**

1.  Integration depth / switching costs. Wallet infra is deeply embedded. Auth, keys, signing, policies, webhooks, fraud controls. Replacing it is painful.

2.  UX as strategy. The acquisition post frames Privy’s mission as making crypto usable by removing onboarding friction. In stablecoins, the winning UX is usually the one that hides crypto until you need it.

3.  Composability with Bridge + Stripe. The trio is being packaged as a coherent toolkit.

**Privy risks**

- Security is existential. Key management failures are company-ending.

- Regulatory pressure. Wallet providers can become chokepoints (sanctions, AML expectations, travel rule-adjacent requirements).

- Commoditization risk. Many wallet infrastructure vendors compete; differentiation is uptime, tooling, and compliance posture.

---

#### Tempo: execution-layer bet for payments-grade stablecoins

**What Tempo is**

Tempo is a payments-first blockchain, general-purpose but optimized for payments. An L1/L2-like infrastructure bet designed for instant deterministic settlement, predictably low fees, stablecoin-native UX. It’s intended to be permissionless and decentralized; client open source under Apache license.

It’s incubated by Stripe and Paradigm, built with design input from major enterprises (list includes Visa, Shopify, Revolut, Deutsche Bank, Standard Chartered, etc.) and led by Matt Huang (while remaining at Paradigm).

**Tempo’s differentiators (stablecoin-native mechanics)**

Tempo emphasizes features that specifically matter for payments UX:

- No native gas token (wallets show placeholder native balance)

- Configurable fee tokens: pay transaction fees with any USD-denominated TIP‑20 token via automatic conversion

- Fee sponsorship: apps can pay gas for users to create feeless UX

- Scheduled transactions: native support for automated payments windows

- Throughput/finality:

  - benchmarking 20,000 TPS on testnet with line-of-sight higher by mainnet

  - sub-second finality via BFT consensus (testnet blocks finalized ~0.5s)

These are exactly the payments-grade primitives missing on many general chains.

**Tempo’s business model**

Public materials do **not** clearly spell out Tempo’s company-level monetization. The protocol has fees; the chain is intended to be permissionless/decentralized.

Reasonable inference: if Tempo avoids a traditional token model, value may accrue via:

- enterprise support/services

- ecosystem partnerships

- operating infrastructure (validators, RPC)

- or being a preferred settlement substrate for Stripe/Bridge flows

**Tempo’s moat and risks**

- Moat path: if Tempo becomes the default payments chain for stablecoins, network effects can compound. The design partner list suggests deliberate enterprise alignment.

  > *We are building the chain with design input from global leaders in AI, e-commerce, and financial services: Anthropic, Coupang, Deutsche Bank, DoorDash, Lead Bank, Mercury, Nubank, OpenAI, Revolut, Shopify, Standard Chartered, Visa, and more.*

- Risk: L1 competition is brutal; distribution matters more than tech. Tempo’s advantage is that Stripe/Bridge/Privy can *route real business flows* to it, but only if (a) the ecosystem trusts it and (b) regulators accept it.

---

#### **The bottomline**

Stripe is building stablecoin-as-a-service plus stablecoin acceptance, with embedded wallets and an eventual payments-optimized chain, so businesses can sell globally, hold digital dollars, issue branded dollars, and let users spend them.

Stripe is trying to turn stablecoins into:

- a new rail (lower cost / higher reach)

- a new “balance sheet product” (digital dollar accounts)

- a new issuer platform (branded stablecoins)

…while preserving the essential attribute of a wonderful business: being the default, trusted intermediary.
