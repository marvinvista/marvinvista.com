---
title: "Kalshi vs. Polymarket: Two Bets on Where Truth Lives"
slug: "kalshi-vs-polymarket-two-bets-on"
date: "2026-01-30T15:41:23.365Z"
url: "https://www.marvinvista.com/p/kalshi-vs-polymarket-two-bets-on"
author: "Marvin Vista"
description: "The house rules are the product."
wordcount: 2176
tags: ["Finance", "Technology", "Business"]
---

Kalshi and Polymarket are trying to do the same thing: turn ambiguous futures into tradable contracts, while making opposite bets about where truth lives.

Kalshi’s bet is institutional. It wants to be a U.S.-regulated exchange for event contracts, with rulebooks, compliance teams, and the sort of paperwork that makes a normal software founder spontaneously develop an allergy.

Polymarket’s bet is cultural and global. It grew as a crypto-native prediction market where the product just works for anyone with a wallet, a stablecoin, and an appetite for uncertainty. In late 2025, Polymarket also took a meaningful step toward a U.S. return.

Both businesses are trying to create a moat around a liquidity flywheel. Liquidity begets tighter spreads; tighter spreads beget more volume; volume begets better prices; better prices beget trust; trust begets distribution. The flywheel is real, but the machine is fragile: liquidity is hard to start, regulation is hard to satisfy, and consumer attention is hard to keep.

Prediction markets thrive when participants believe that (1) prices will be fair, (2) winners will be paid, and (3) the house won’t change the rules mid-game. Both companies have designed incentives to build that belief, but they do so in different ways: Kalshi leans on regulated market structure and centralized discretion; Polymarket leans on collateralization, public ledgers, and, in its U.S. incarnation.

![At-a-glance comparison](https://substackcdn.com/image/fetch/$s_!jF0d!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45b69cd5-4605-49e9-94ee-6ba421a4988a_1388x1014.png)

*At-a-glance comparison*

#### The business you are really in: trust, not contracts

A prediction market is an exchange that sells one thing: the right to be paid if an outcome occurs.

That sounds trivial until you ask what “occurs” means. Did the hurricane “make landfall”? Did a politician “resign”? Did a sneaker “drop”? Every contract is a tiny legal machine whose gears are: (a) definitions, (b) data sources, (c) dispute processes, and (d) settlement mechanics. The core competence of any prediction-market operator is therefore contract design and adjudication, not unlike insurance underwriting, except your customers can trade their policies.

This is why the category refuses to be boring. Traditional exchanges mainly argue about tick sizes and margin models. Prediction markets argue about reality.

If you believe Buffett’s line that “risk is the possibility of harm or injury,” prediction markets are saturated with non-price risk: regulatory risk, settlement risk, and reputational risk. Price volatility is the easy part.

A second structural constraint is liquidity. A new event category starts with the cold start problem: without liquidity, spreads are wide and prices are noisy; with wide spreads and noisy prices, users don’t show up; without users, liquidity never arrives. Both Kalshi and Polymarket are, in effect, building liquidity machines.

But they are building different kinds of machines:

- Kalshi is building a regulated U.S. machine. Its promise is that the U.S. regulatory state can be turned from an obstacle into a distribution advantage.

- Polymarket is building a global machine. Its promise is that crypto rails are the most efficient way to reach participants and settle outcomes across borders, and that “probabilities as content” can spread faster than compliance teams.

Keep those two bets in mind; everything else follows.

#### Kalshi: the regulated exchange strategy

Kalshi is the cleanest expression of the “institutional” prediction-market thesis: become a federally regulated exchange, then use that regulatory status as a wedge into distribution.

That matters for two reasons.

First, it constrains what Kalshi can do. A regulated exchange can’t improvise endlessly; it has to publish rules, policies, and disclosures. Second, it enables what many other prediction markets can’t credibly offer in the U.S.: broker/intermediary integrations, consumer-brand partnerships, and a posture of a market instead of a casino.

**What Kalshi says it is building**

Kalshi is explicit about the ambition to broaden what counts as a tradable market.

In a funding announcement, CEO Tarek Mansour described the product as “replacing debate, subjectivity, and talk with markets, accuracy, and truth.”

In the original CFTC designation announcement, Mansour framed the approval as a new risk-management layer: a paradigm shift where investors can hedge and mitigate everyday risks.

You don’t have to agree with the rhetoric to see the strategy. Take something familiar (markets) and extend it into a new domain (everyday events) where the incumbent institutions are slow, or legally constrained, or both.

**Market design and settlement: the ‘house rules’ are the product**

A prediction market’s integrity is a question of who trades and what happens when trades go wrong.

Kalshi’s rulebook gives the exchange discretionary authority to adjust or cancel trades in certain circumstances, while also emphasizing that those circumstances are limited given the fully collateralized and short-term nature of trading on Kalshi. That is the core tradeoff of centralized, regulated structure: you get a referee; you also accept the referee’s whistle.

**Pricing, liquidity, and the ‘truth’ problem**

Kalshi’s public API exposes live market data. The exchange is willing to expose market structure as a public good. To illustrate how “probability as a product” looks in practice, the figure below uses Kalshi’s own market data for a single day’s NYC high temperature range contract. Even this toy example shows the economic shape: the mid-range bins (where reality is most likely to land) tend to have the most activity, while the tails trade like cheap lottery tickets.

![Kalshi example market: implied probabilities (YES ask) vs. volume by temperature bin.](https://substackcdn.com/image/fetch/$s_!3Bgx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd15afb74-5e55-4e23-874d-6ff84360deb1_1700x960.png)

*Kalshi example market: implied probabilities (YES ask) vs. volume by temperature bin.*

**Unit economics and fees: Kalshi’s ‘volatility tax’**

Kalshi’s general trading fees have an unusual shape. The fee is lowest near \$0 and \$1, and highest near \$0.50. In other words, the exchange charges you more when you trade the most ambiguous outcomes.

There’s an intuitive logic: when prices are near 0 or 1, one side of the trade is mostly paying for optionality. When prices are near 0.5, the trade is about genuine disagreement, and “disagreement” is where markets create most of their information value.

[The fee schedule itself is published](http://kalshi.com/docs/kalshi-fee-schedule.pdf), which is a small act of candor that matters in a high-mistrust category.

**Moat and distribution**

If Kalshi succeeds, it will look less like a clever trading UI and more like a distribution machine.

Decentralized operations combined with centralized capital allocation can be powerful. The prediction-market analog is: let the market (users) produce the information, but centralize the regulatory burden and the distribution partnerships.

Kalshi’s official newsroom is crowded with partnership announcements: data distribution, app integrations, and “event contracts” tied to consumer culture. Even if some of these look gimmicky, the economic point is serious: liquidity is not only a market-design problem; it is an attention problem. Partnerships are a way of buying attention in non-obvious channels.

**Key risks**

Kalshi’s risks are mostly legal and political:

- Category boundary risk: regulators and states can insist that some contracts “feel” like gambling even if the exchange insists they are “event contracts” under federal oversight.

- Settlement/discretion risk: the more the exchange relies on centralized discretion, the more it must invest in legitimacy and procedural fairness. A single high-profile dispute can poison trust.

- Reputational risk: prediction markets become lightning rods when the underlying event is morally charged. “Truth markets” can quickly become “gross markets” in the public imagination.

None of these are fatal by themselves, but they compound. In Munger terms: they are lollapalooza risks.

#### Polymarket: the crypto-native strategy

Polymarket built its brand by being the place where probabilities move faster than pundits.

Its official documentation describes a simple contract abstraction: users buy and sell shares between \$0 and \$1 USDC, fully collateralized. The appeal is that the interface looks like a probability, and the settlement looks like money.

**The U.S. regulatory bridge: Polymarket US (QCX LLC)**

The CFTC amended order of designation is worth reading because it encodes the shape of Polymarket’s U.S. strategy.

The first page of the order frames the key point: QCX LLC, “which now operates under the business name Polymarket US,” sought to remove a provision that previously prevented it from permitting a futures commission merchant to intermediate transactions. In plain language, this is the bridge from direct retail access to the more traditional model of customers trading through regulated intermediaries.

This is a potentially large distribution unlock. Intermediated access adds customers, custody, reporting channels, and a compliance perimeter that institutions understand.

**Market microstructure: liquidity as culture**

Polymarket’s markets often feel more like a social feed than a derivatives venue. Traders show up because they want to know what “the internet” thinks, and because they can trade that view in real time.

That “culture layer” is the distribution channel. Buffett talks about moats as durable advantages; in prediction markets, a brand can be a moat if it pulls in the marginal liquidity provider.

The operational risk is that culture can turn on you quickly. In a category where the product is the price, a reputation shock is a liquidity shock.

**A small data slice: MLB-tag markets and liquidity dispersion**

Polymarket’s public data feed (Gamma API) exposes market statistics like liquidity and trailing volumes. The two figures below use a small slice of that feed for MLB-tagged markets. The point is the dispersion.

Some markets look like efficient, liquid venues with tight spreads. Others look like curiosity shops. A prediction-market operator must run both in parallel: the flagship markets that build credibility and the long-tail markets that build engagement.

![Polymarket example: 1-week volumes across selected MLB-tag markets (log scale).](https://substackcdn.com/image/fetch/$s_!_IYx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a074de4-6622-4d4c-a8e2-9bc77483c67c_1700x960.png)

*Polymarket example: 1-week volumes across selected MLB-tag markets (log scale).*

![Polymarket example: liquidity vs. 1-week volume across selected MLB-tag markets (log scale).](https://substackcdn.com/image/fetch/$s_!_Tzw!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F293f3aee-5c53-432f-81e4-505772e9b825_1700x960.png)

*Polymarket example: liquidity vs. 1-week volume across selected MLB-tag markets (log scale).*

**Key risks**

Polymarket’s risks are the mirror image of Kalshi’s.

- Regulatory access risk: the U.S. bridge is meaningful, but it increases operating complexity and compliance burden.

- Integrity risk: crypto-native venues attract sophisticated traders and also attract adversaries. Surveillance, market supervision, and dispute processes are not optional once the venue becomes systemically relevant.

- Dependency risk: settlement rails, stablecoins, and third-party infrastructure are powerful until they aren’t. A prediction market that depends on a small number of external systems can inherit their fragility.

#### The scorecard

Surfacing the handful of variables that drive most of the long-run outcomes.

**Business quality, moat, and margin of safety**

- **Business quality.** Prediction markets can be wonderful businesses if they reach escape velocity, because exchange economics have operating leverage. They can also be mediocre businesses if they never build deep liquidity, because you end up running a high-cost compliance and support organization on low fees.

- **Moat.** Kalshi’s moat candidate is regulatory permission + domestic distribution. Polymarket’s moat candidate is global mindshare + liquidity concentration in a handful of marquee markets.

- **Margin of safety**. The category is still young enough that the “margin of safety” is a business-model margin instead of a valuation discount. Does the company have multiple paths to survive a regulatory or reputational shock? Does it have a way to keep liquidity providers in the tent when attention moves on?

**Incentives and second-order effects**

Start with incentives:

- Traders want fair prices and reliable settlement.

- Liquidity providers want tight spreads, predictable fee economics, and confidence that the venue will not be shut down or vilified.

- Regulators want market integrity, surveillance, and the absence of obvious harm.

A platform that optimizes only for traders can end up hostile to regulators. A platform that optimizes only for regulators can end up boring to traders. Both Kalshi and Polymarket are trying to thread this needle.

Second-order effects matter. “Truth markets” can change behavior in the underlying world (politics, sports, media). That feedback loop creates attention, but also creates pressure to restrict the category. The more successful the market is at predicting reality, the more reality may want to regulate the market.

**Capital allocation and the discipline to be boring**

A rational capital allocator in this category would ask:

1.  What is the cheapest way to acquire durable liquidity?

2.  What is the cheapest way to earn regulatory legitimacy?

3.  Where is the path to compounding distribution: partnerships, intermediaries, or embedded products?

#### 2026 watchlist: what would change the thesis

Prediction markets are path-dependent. Small changes in legal posture or distribution can flip the long-run outcome.

Here are concrete checkpoints to watch over the next 12–18 months:

For Kalshi

1.  State-by-state friction: whether sports- and game-adjacent contracts trigger meaningful enforcement actions.

2.  Intermediated adoption: how many brokers/fintech apps make Kalshi markets a default “odds” surface.

3.  Market integrity events: how the exchange handles the first major, public dispute over settlement or trade cancellation.

For Polymarket

1.  U.S. intermediated launch details: timelines, FCM relationships, and the scope of contract offerings under Polymarket US.

2.  Surveillance credibility: evidence that the U.S. venue can match the market supervision expectations of a DCM.

3.  Stablecoin/rail resilience: whether settlement and custody choices reduce, rather than add, fragility.

For both

1.  Category legitimacy: whether mainstream institutions treat prediction-market prices as information and not just entertainment.

2.  Liquidity concentration: whether activity broadens beyond a handful of marquee markets.

3.  The “institutional imperative” trap: whether both companies can resist the temptation to chase every category at once.

Sources:

- Kalshi Member Agreement (PDF): https://kalshi.com/docs/kalshi-member-agreement.pdf

- Kalshi Fee Schedule (PDF): https://kalshi.com/docs/kalshi-fee-schedule.pdf

- Kalshi rulebook (CFTC filing PDF): https://www.cftc.gov/filings/orgrules/rules07012525155.pdf

- Kalshi API docs (market data): https://docs.kalshi.com/ (and the api.elections.kalshi.com endpoints referenced therein)

- Kalshi newsroom (official statements, partnerships): https://news.kalshi.com/ (e.g., designation announcement; partnerships; funding announcements)

- CFTC Industry Filings page for KalshiEX, LLC: https://www.cftc.gov/IndustryOversight/IndustryFilings/kalshiex

- Polymarket developer docs: https://docs.polymarket.com/

- Polymarket press release (CFTC amended order approval): https://www.prnewswire.com/news-releases/polymarket-receives-cftc-approval-of-amended-order-of-designation-enabling-intermediated-us-market-access-302625833.html

- CFTC amended order of designation (Polymarket US): https://www.cftc.gov/media/12806/Polymarket%20US%20Amended%20Order%20of%20Designation/download

- Polymarket Gamma API (market data feed): https://gamma-api.polymarket.com/
