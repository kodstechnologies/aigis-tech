import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, M as ArrowDown } from "../_libs/lucide-react.mjs";
import { n as AigisHeader, t as AigisFooter } from "./aigis-site-chrome-CHrW1bSp.mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/about-B7a2440O.js
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		n: "01",
		title: "Human Operator",
		sub: "Intent & authority"
	},
	{
		n: "02",
		title: "AI Command Platform",
		sub: "One supervised layer"
	},
	{
		n: "03",
		title: "Intelligence + Fusion",
		sub: "One live picture"
	},
	{
		n: "04",
		title: "Autonomy Engine",
		sub: "Nav · Perception · Mission"
	},
	{
		n: "05",
		title: "Connected Fleet",
		sub: "Air · Land · Sea"
	},
	{
		n: "06",
		title: "Fleet Intelligence",
		sub: "Health · Analytics"
	}
];
var feeds = [
	"EO / IR",
	"Radar",
	"RF",
	"Nav",
	"Comms",
	"Health"
];
/**
* Live architecture diagram — a copper pulse travels through the six
* stages on loop while sensor feeds stream upward. Pure CSS animation,
* warm espresso/copper palette to match the homepage.
*/
function LiveArchitecture() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-3xl border border-espresso/10 bg-espresso p-6 shadow-[0_40px_90px_-40px_rgba(42,23,16,0.55)] sm:p-10 lg:p-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-[0.35]",
				"aria-hidden": "true",
				style: {
					backgroundImage: "linear-gradient(rgba(250,247,243,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,243,0.05) 1px, transparent 1px)",
					backgroundSize: "56px 56px"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-white/60",
					children: "Architecture / Live"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-white/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "live-dot size-2 rounded-full bg-copper-light",
						"aria-hidden": "true"
					}), "Human supervised"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-10 grid gap-3 sm:mt-12 lg:grid-cols-6 lg:gap-0",
				children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex lg:block",
					children: [
						i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-3 left-1/2 hidden h-3 w-px bg-warm-white/15 lg:hidden",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "live-stage relative w-full border border-warm-white/12 bg-warm-white/[0.04] p-5 backdrop-blur-sm lg:min-h-[150px]",
							style: { animationDelay: `${i * .55}s` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold text-copper-light",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-[15px] font-semibold uppercase leading-snug tracking-wide text-warm-white lg:mt-10",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-[13px] text-warm-white/55",
									children: s.sub
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "live-stage-glow absolute inset-0",
									"aria-hidden": "true",
									style: { animationDelay: `${i * .55}s` }
								})
							]
						}),
						i < stages.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative hidden w-6 self-center lg:block",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-full bg-warm-white/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "live-pulse absolute -top-[2px] left-0 size-[5px] rounded-full bg-copper-light",
								style: { animationDelay: `${i * .55}s` }
							})]
						}),
						i < stages.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-3 w-px bg-warm-white/15 lg:hidden",
							"aria-hidden": "true"
						})
					]
				}, s.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-warm-white/12 bg-warm-white/12 sm:grid-cols-3 lg:grid-cols-6",
				children: feeds.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-espresso px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "live-feed absolute left-0 top-0 h-full w-[2px] bg-copper-light/70",
						"aria-hidden": "true",
						style: { animationDelay: `${i * .4}s` }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-[13px] font-semibold uppercase tracking-[0.14em] ${f === "Nav" ? "text-copper-light" : "text-warm-white/60"}`,
						children: f
					})]
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "relative mt-8 max-w-2xl text-base leading-7 text-warm-white/70",
				children: "One continuous loop: the operator sets intent, the software fuses, decides and flies — and every mission returns as fleet-wide intelligence."
			})
		]
	});
}
var about_hero_mp4_asset_default = {
	asset_id: "f1c6011a-fded-4efd-b51f-190d755a0787",
	created_at: "2026-09-29T11:49:57Z",
	original_filename: "about-hero.mp4",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	size: 9072627,
	url: "/__l5e/assets-v1/f1c6011a-fded-4efd-b51f-190d755a0787/about-hero.mp4",
	version: 1
};
var about_hero_webm_asset_default = {
	asset_id: "52e26a62-901d-4f82-a664-52e0e9a00462",
	content_type: "video/webm",
	created_at: "2026-09-29T11:50:34Z",
	original_filename: "about-hero.webm",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	r2_key: "a/v1/6b24730a-437d-485b-9152-a7dbae138baa/52e26a62-901d-4f82-a664-52e0e9a00462/about-hero.webm",
	size: 1853031,
	url: "/__l5e/assets-v1/52e26a62-901d-4f82-a664-52e0e9a00462/about-hero.webm",
	version: 1
};
var arunjith_nambiar_default = "/assets/arunjith-nambiar-DY35s4Tm.png";
var vishnu_mohan_default = "/assets/vishnu-mohan-DuxK5Pgx.png";
var aigis_logo_dark_png_asset_default = {
	asset_id: "f2209474-7eb5-4691-97a9-4b592d3c0ad3",
	content_type: "image/png",
	created_at: "2026-09-30T09:40:36Z",
	original_filename: "aigis-logo-dark.png",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	r2_key: "a/v1/6b24730a-437d-485b-9152-a7dbae138baa/f2209474-7eb5-4691-97a9-4b592d3c0ad3/aigis-logo-dark.png",
	size: 32334,
	url: "/__l5e/assets-v1/f2209474-7eb5-4691-97a9-4b592d3c0ad3/aigis-logo-dark.png",
	version: 1
};
var principles = [
	[
		"01",
		"Human authority",
		"AIGIS handles complexity while operators retain authority over consequential decisions."
	],
	[
		"02",
		"Reusable by design",
		"One modular software core moves across platforms, programs and mission environments."
	],
	[
		"03",
		"Built to integrate",
		"AIGIS works with governments, primes and operators around systems already in service."
	]
];
var founders = [{
	name: "Arunjith",
	surname: "Nambiar",
	role: "Founder & CEO",
	image: arunjith_nambiar_default,
	quote: "The next advantage will not come from replacing every platform. It will come from making every platform understand more."
}, {
	name: "Vishnu",
	surname: "Mohan",
	role: "Co-Founder & COO",
	image: vishnu_mohan_default,
	quote: "Every fleet in service today is untapped intelligence. Our work is to release it—platform by platform, mission by mission."
}];
var workSteps = [
	"Integrate with existing sensors and systems",
	"Configure reusable engines around the mission",
	"Validate through field pilots and operator feedback",
	"Scale through licensing, subscription and support"
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-warm-white text-espresso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisHeader, { active: "about" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[92svh] flex-col overflow-hidden bg-espresso",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "auto",
						"aria-hidden": "true",
						className: "absolute inset-0 h-full w-full object-cover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: about_hero_webm_asset_default.url,
							type: "video/webm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: about_hero_mp4_asset_default.url,
							type: "video/mp4"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-espresso/60",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "media-glass pointer-events-none absolute inset-0",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-16 pt-40 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper-light",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper-light/70" }), "About AIGIS"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-8 max-w-[14ch] font-display text-[clamp(40px,6vw,84px)] font-semibold leading-[1.02] text-warm-white",
								children: "The fleet is proven. The intelligence must move."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex max-w-5xl flex-col gap-8 border-t border-warm-white/20 pt-8 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-xl leading-8 text-warm-white/85",
									children: "AIGIS exists to break the cycle of rebuilding intelligence one platform and one program at a time."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#story",
									className: "flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-warm-white",
									children: ["Our reason ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-11 place-items-center rounded-full border border-warm-white/35",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })
									})]
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "story",
				className: "px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper/60" }), "Why AIGIS exists"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-espresso",
						children: ["Capable fleets. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-copper",
							children: "Fragmented intelligence."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid content-end gap-8 text-lg leading-8 text-cocoa sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Critical fleets remain in service for decades. Replacing them is expensive, slow and often unnecessary—but their sensors, software and decision systems can fall behind the mission." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meanwhile, AI programs are commonly rebuilt in isolated teams. The result is duplicated engineering, disconnected data and intelligence that does not travel across the fleet." })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-sand px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper/60" }), "Our answer"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-espresso",
							children: "A reusable intelligence layer."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-lg text-lg leading-8 text-cocoa lg:justify-self-end",
							children: "One architecture connects human command, mission intelligence, autonomy and fleet learning across compatible systems — live, supervised and always learning."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveArchitecture, {})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper/60" }), "How we work"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-espresso",
							children: "Alongside the teams who field capability."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg leading-8 text-cocoa",
							children: "AIGIS integrates with defense primes, national militaries, ministries of defence, police and homeland agencies. The work begins with an operational problem—not a new platform sale."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col justify-center",
						children: workSteps.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex items-center gap-6 border-b border-line py-6 first:border-t",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-sm font-semibold text-copper",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "flex-1 text-lg font-medium text-espresso",
									children: item
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-copper opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100" })
							]
						}, item))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-espresso px-5 py-28 text-warm-white sm:px-8 sm:py-32 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-2 lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper-light",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper-light/70" }), "How we build"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "Software with operational discipline."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xl self-end text-lg leading-8 text-warm-white/70",
							children: "The architecture is modular, the interfaces are precise and the human remains central. Every principle supports trustworthy deployment across changing missions."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-5 lg:grid-cols-3",
						children: principles.map(([number, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative overflow-hidden rounded-2xl border border-warm-white/12 bg-warm-white/[0.04] p-8 transition duration-300 hover:-translate-y-1 hover:border-copper-light/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-0 h-[3px] w-0 bg-copper-light transition-all duration-500 group-hover:w-full",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-sm font-semibold text-copper-light",
									children: number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base leading-7 text-warm-white/65",
									children: copy
								})
							]
						}, number))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-sand px-5 py-28 sm:px-8 sm:py-32 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper/60" }), "Founders"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08] text-espresso",
							children: "Built from the mission out."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-base leading-7 text-cocoa",
							children: "The founding team shaping the AIGIS software architecture and its operational deployment."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 lg:grid-cols-2",
						children: founders.map((founder) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "founder-stage relative min-h-[430px] overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-40px_rgba(42,23,16,0.35)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: aigis_logo_dark_png_asset_default.url,
									alt: "AIGIS",
									className: "absolute left-5 top-5 z-20 h-8 w-auto sm:left-6 sm:top-6 sm:h-10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "founder-copy relative z-10 flex min-h-[430px] w-[47%] flex-col justify-center px-6 py-10 sm:px-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper",
											children: founder.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "founder-name mt-4 font-display font-semibold uppercase leading-[0.92]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: founder.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: founder.surname })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-6 max-w-[14rem] text-sm leading-6 text-cocoa",
											children: [
												"“",
												founder.quote,
												"”"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "founder-portrait absolute inset-y-0 right-0 w-[54%] bg-black",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: founder.image,
										alt: `${founder.name} ${founder.surname}, AIGIS ${founder.role}`,
										width: 1024,
										height: 1280,
										loading: "lazy",
										className: "h-full w-full object-contain object-bottom"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "media-glass absolute inset-0",
										"aria-hidden": "true"
									})]
								})
							]
						}, founder.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisFooter, {})
		]
	});
}
//#endregion
export { AboutPage as component };
