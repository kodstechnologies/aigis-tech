import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, D as BrainCircuit, O as Boxes, S as Crosshair, h as Network, j as ArrowLeft, k as Binoculars, o as Ship, p as Radar, s as ShieldCheck, u as Satellite } from "../_libs/lucide-react.mjs";
import { n as Button, o as openAigisEnquiry } from "./aigis-enquiry-D1sVFY1o.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/portfolio-wgG09lkk.js
var import_jsx_runtime = require_jsx_runtime();
var aigis_product_portfolio_default = "/assets/aigis-product-portfolio-CaZDOqma.jpg";
var categories = [
	{
		number: "01",
		name: "Land Systems",
		scope: "Perception, navigation and logistics intelligence for soldiers, vehicles and fire-support units.",
		icon: Crosshair,
		products: [
			{
				name: "AI Soldier Assistant",
				statement: "A digital teammate on the soldier’s existing tactical computer.",
				capabilities: [
					"Low-light and thermal recognition",
					"Context-aware information priority",
					"Offline edge processing"
				]
			},
			{
				name: "AI Autonomous Vehicle Kit",
				statement: "A hardware-agnostic autonomy retrofit for existing combat vehicles.",
				capabilities: [
					"360° environmental model",
					"GPS-denied navigation",
					"Predictive platform health"
				]
			},
			{
				name: "AI Artillery Logistics",
				statement: "Digital readiness infrastructure around the gun—not the weapon itself.",
				capabilities: [
					"Live inventory and transport status",
					"Fire-support data fusion",
					"Equipment readiness monitoring"
				]
			},
			{
				name: "AI Munition Lifecycle Management",
				statement: "AI for manufacturing, storage and sustainment—not guidance.",
				capabilities: [
					"Computer-vision quality control",
					"Component-health forecasting",
					"Supply-chain analytics"
				]
			}
		]
	},
	{
		number: "02",
		name: "Command, Control & Electronic Warfare",
		scope: "Turn battlefield sensor, radio and signal volumes into one picture a human can act on.",
		icon: Radar,
		products: [{
			name: "AI Battlefield Intelligence Layer",
			statement: "Every connected field sensor, fused into one current operating picture.",
			capabilities: [
				"Multi-sensor AI fusion",
				"Terrain and environment mapping",
				"Command decision support"
			]
		}, {
			name: "AI Spectrum Intelligence Engine",
			statement: "Classifies RF activity and surfaces patterns while humans retain response authority.",
			capabilities: [
				"Signal classification",
				"Spectrum pattern recognition",
				"Counter-UAS detection"
			]
		}]
	},
	{
		number: "03",
		name: "Air & ISR Systems",
		scope: "From airborne perception to a complete autonomous operating system for unmanned aircraft.",
		icon: Satellite,
		products: [{
			name: "AI ISR Engine",
			statement: "Converts EO, IR, thermal and radar feeds into confidence-scored intelligence.",
			capabilities: [
				"Fused object and movement detection",
				"Automated tracking",
				"Real-time video analytics"
			]
		}, {
			name: "Autonomous UAS Operating System",
			statement: "A complete autonomy stack designed to sit on any compatible airframe.",
			capabilities: [
				"Visually aided GPS-denied navigation",
				"Route planning and recovery",
				"Coordinated multi-UAV operations"
			]
		}]
	},
	{
		number: "04",
		name: "Surveillance & Reconnaissance Drones",
		scope: "One persistent-surveillance stack for defense, police and public-safety operations.",
		icon: Binoculars,
		products: [{
			name: "AI Surveillance Drone Platform",
			statement: "Airframe-agnostic surveillance with AI-classified video and supervised fleet control.",
			capabilities: [
				"Object, person and vehicle detection",
				"Urban-canyon navigation",
				"One-operator fleet supervision"
			]
		}]
	},
	{
		number: "05",
		name: "Naval Systems",
		scope: "A shared surface and underwater environment model where satellite positioning is unreliable.",
		icon: Ship,
		products: [{
			name: "AI Maritime Perception Engine",
			statement: "Vision, acoustics, radar and navigation fused into one maritime model.",
			capabilities: [
				"Acoustic classification",
				"Radar-object classification",
				"GPS-independent vessel navigation"
			]
		}]
	},
	{
		number: "06",
		name: "Autonomous Systems & Human-Machine Teaming",
		scope: "One autonomy architecture across unmanned domains, with consequential authority retained by people.",
		icon: Boxes,
		products: [{
			name: "Multi-Domain Autonomy Suite",
			statement: "A shared autonomy core for UAV, UGV, USV and robotic platforms.",
			capabilities: [
				"Cross-domain navigation",
				"Environmental perception",
				"Multi-platform coordination"
			]
		}, {
			name: "Human-Machine Teaming Architecture",
			statement: "One operator supervises many systems while the software handles routine complexity.",
			capabilities: [
				"Supervisory mission control",
				"Decision-relevant filtering",
				"Human-retained authority"
			]
		}]
	},
	{
		number: "07",
		name: "Networked Warfare & Multi-Domain C4ISR",
		scope: "The convergence layer where land, air, naval and fixed-sensor data becomes one command picture.",
		icon: Network,
		products: [{
			name: "AI Network Intelligence Suite",
			statement: "Monitors and optimizes the tactical network carrying mission data.",
			capabilities: [
				"Link-health analytics",
				"Predictive diagnostics",
				"Bandwidth-aware data priority"
			]
		}, {
			name: "Multi-Domain AI Operational Picture",
			statement: "One command-level view across platforms, sensors and operating environments.",
			capabilities: [
				"Cross-platform data fusion",
				"Unified operational awareness",
				"Consistent multi-domain interface"
			]
		}]
	},
	{
		number: "08",
		name: "Cyber, Intelligence & Homeland Security",
		scope: "The same anomaly-detection and fusion core redirected at networks, borders and cities.",
		icon: ShieldCheck,
		products: [
			{
				name: "AI Cyber Defense Platform",
				statement: "Learns normal system behavior, flags deviations and recommends human-led response.",
				capabilities: [
					"Behavioral anomaly detection",
					"SOC alert triage",
					"Industrial-system monitoring"
				]
			},
			{
				name: "AI Border Intelligence Platform",
				statement: "Cameras, thermal, radar, drones and patrol vehicles fused into one monitoring system.",
				capabilities: [
					"Intrusion detection",
					"Cross-sensor fusion",
					"Border command picture"
				]
			},
			{
				name: "Counter-UAS Detection & Classification System",
				statement: "Detects, classifies and continuously tracks small unmanned aircraft.",
				capabilities: [
					"Vision and RF detection",
					"Drone classification",
					"Continuous track custody"
				]
			}
		]
	},
	{
		number: "09",
		name: "Training & Fleet Sustainment",
		scope: "The recurring intelligence layer that keeps operators trained and platforms mission-ready.",
		icon: BrainCircuit,
		products: [{
			name: "AI Training Platform",
			statement: "An adaptive AI instructor and synthetic environment for every connected platform.",
			capabilities: [
				"Adaptive mission scenarios",
				"Skill-gap analysis",
				"Multi-agent simulation"
			]
		}, {
			name: "AI Fleet Intelligence Platform",
			statement: "Predictive maintenance and readiness intelligence across the complete fleet.",
			capabilities: [
				"Maintenance forecasting",
				"Live fleet health",
				"Lifecycle and software analytics"
			]
		}]
	}
];
var principles = [
	["Build once", "Every engine is engineered once, then configured across products and domains."],
	["Platform agnostic", "The software integrates with existing airframes, vehicles, vessels, sensors and command systems."],
	["Human authority", "Automation manages complexity; people retain control over consequential decisions."]
];
function PortfolioPage() {
	let productIndex = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-espresso text-warm-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				"aria-label": "Back to home",
				className: "fixed left-5 top-5 z-50 inline-flex h-11 items-center gap-3 rounded-full border border-warm-white/20 bg-espresso/75 px-5 text-xs font-semibold uppercase text-warm-white backdrop-blur-xl transition-colors hover:bg-warm-white hover:text-espresso sm:left-8 sm:top-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[86svh] overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: aigis_product_portfolio_default,
						alt: "Air, land and maritime platforms linked through the AIGIS software intelligence core",
						width: 1920,
						height: 1088,
						className: "absolute inset-0 h-full w-full object-cover object-[66%_center]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-espresso/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 edge-hero-shade" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[86svh] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase text-copper-light",
								children: "Complete software portfolio · 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-6 max-w-[11ch] font-display text-[clamp(44px,7.2vw,104px)] font-semibold uppercase leading-[0.92]",
								children: "One core. 19 products."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid max-w-4xl gap-6 border-t border-warm-white/25 pt-7 sm:grid-cols-[1fr_auto] sm:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-lg leading-8 text-warm-white/85 sm:text-xl",
									children: "A configurable software portfolio spanning nine capability categories—assembled from reusable perception, autonomy, fusion and fleet-intelligence engines."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase text-warm-white/60",
									children: "09 categories · 12 shared engines"
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Portfolio categories",
				className: "border-y border-warm-white/15 bg-espresso/90 px-5 py-5 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-[1440px] gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
					children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#category-${category.number}`,
						className: "shrink-0 rounded-full border border-warm-white/15 px-4 py-2 text-xs font-semibold uppercase text-warm-white/65 transition-colors hover:border-copper-light hover:text-warm-white",
						children: [
							category.number,
							" ",
							category.name
						]
					}, category.number))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-20 sm:px-8 lg:px-12 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1440px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 border-b border-warm-white/15 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase text-copper-light",
							children: "The portfolio architecture"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 max-w-[12ch] font-display text-[clamp(34px,4.5vw,64px)] font-semibold uppercase leading-[0.98]",
							children: "Software configured around the mission."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-lg leading-8 text-warm-white/70 lg:justify-self-end",
							children: "These are not separate technology stacks. Each product combines proven engines from one shared core, then adapts their data inputs, operational logic and operator experience to the mission."
						})]
					}), categories.map((category) => {
						const Icon = category.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: `category-${category.number}`,
							className: "scroll-mt-8 border-b border-warm-white/15 py-16 lg:py-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "lg:sticky lg:top-8 lg:self-start",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4 text-copper-light",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold",
												children: category.number
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-5 max-w-[17ch] font-display text-[clamp(26px,3vw,42px)] font-semibold leading-[1.05]",
											children: category.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 max-w-md text-lg leading-8 text-warm-white/60",
											children: category.scope
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-px overflow-hidden rounded-lg border border-warm-white/15 bg-warm-white/15",
									children: category.products.map((product) => {
										productIndex += 1;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
											className: "group bg-espresso p-7 transition-colors hover:bg-warm-white/[0.04] sm:p-9",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start justify-between gap-6",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-xs font-semibold text-copper-light",
														children: String(productIndex).padStart(2, "0")
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-warm-white/25 transition-transform group-hover:translate-x-1 group-hover:text-copper-light" })]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-7 max-w-xl font-display text-2xl font-semibold leading-tight sm:text-3xl",
													children: product.name
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-4 max-w-2xl text-lg leading-8 text-warm-white/70",
													children: product.statement
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-7 grid gap-3 border-t border-warm-white/10 pt-6 sm:grid-cols-3",
													children: product.capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
														className: "flex gap-3 text-sm leading-6 text-warm-white/60",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-copper-light" }), capability]
													}, capability))
												})
											]
										}, product.name);
									})
								})]
							})
						}, category.number);
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-warm-white px-5 py-20 text-espresso sm:px-8 lg:px-12 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1440px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase text-copper",
						children: "One core philosophy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3",
						children: principles.map(([title, copy], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-warm-white p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold text-copper",
									children: ["0", index + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-12 font-display text-2xl font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-lg leading-8 text-cocoa",
									children: copy
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-20 sm:px-8 lg:px-12 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-warm-white/15 pt-12 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase text-copper-light",
						children: "Configure a deployment"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-xl font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.04]",
						children: "Start with your platform and mission."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "lg",
						onClick: () => openAigisEnquiry("Software portfolio"),
						className: "h-14 w-fit rounded-full bg-warm-white px-7 text-base text-espresso hover:bg-copper hover:text-warm-white",
						children: ["Discuss the portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})]
				})
			})
		]
	});
}
//#endregion
export { PortfolioPage as component };
