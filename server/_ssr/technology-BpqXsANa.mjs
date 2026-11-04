import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { M as ArrowDown, T as ChevronDown, h as Network, r as Wrench, s as ShieldCheck, x as Eye, y as LocateFixed } from "../_libs/lucide-react.mjs";
import { a as cn, n as Button } from "./aigis-enquiry-D1sVFY1o.mjs";
import { n as AigisHeader, t as AigisFooter } from "./aigis-site-chrome-CHrW1bSp.mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/technology-BpqXsANa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var aigis_technology_hero_mp4_asset_default = {
	asset_id: "5a4f0244-b4d5-4192-8f90-0d279b8b9f37",
	created_at: "2026-09-29T10:02:29Z",
	original_filename: "aigis-technology-hero.mp4",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	size: 5090025,
	url: "/__l5e/assets-v1/5a4f0244-b4d5-4192-8f90-0d279b8b9f37/aigis-technology-hero.mp4",
	version: 1
};
var aigis_technology_hero_webm_asset_default = {
	asset_id: "4ba5a05e-1aca-425a-819c-41f6e8b9120e",
	content_type: "video/webm",
	created_at: "2026-09-29T10:05:27Z",
	original_filename: "aigis-technology-hero.webm",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	r2_key: "a/v1/6b24730a-437d-485b-9152-a7dbae138baa/4ba5a05e-1aca-425a-819c-41f6e8b9120e/aigis-technology-hero.webm",
	size: 2127222,
	url: "/__l5e/assets-v1/4ba5a05e-1aca-425a-819c-41f6e8b9120e/aigis-technology-hero.webm",
	version: 1
};
var layers = [
	{
		number: "01",
		name: "Perceive",
		icon: Eye,
		title: "Make the environment legible.",
		copy: "Computer vision, thermal interpretation and heterogeneous sensors become a confidence-scored model of the environment.",
		input: "EO · IR · thermal · radar",
		output: "Objects · movement · anomalies",
		engines: [
			"AI Perception",
			"Sensor Fusion",
			"AI Localization"
		]
	},
	{
		number: "02",
		name: "Navigate",
		icon: LocateFixed,
		title: "Preserve position and intent.",
		copy: "The software estimates location, evaluates confidence and maintains supervised movement when GNSS is degraded or unavailable.",
		input: "Vision · IMU · terrain · mission",
		output: "Position · route · recovery",
		engines: [
			"GPS-Denied Navigation",
			"Autonomous Mobility",
			"Mission Management"
		]
	},
	{
		number: "03",
		name: "Coordinate",
		icon: Network,
		title: "Connect every operational thread.",
		copy: "Distributed systems share mission state while one operator supervises compatible platforms through a common command layer.",
		input: "Mission · network · fleet state",
		output: "Coordination · common picture",
		engines: [
			"Multi-Platform Autonomy",
			"AI Command & Control",
			"AI Intelligence"
		]
	},
	{
		number: "04",
		name: "Sustain",
		icon: Wrench,
		title: "Know what happens next.",
		copy: "Health, lifecycle and behavior data reveal degradation, training gaps and anomalies before mission availability is affected.",
		input: "Health · logs · simulation",
		output: "Forecast · readiness · alerts",
		engines: [
			"Predictive Maintenance",
			"Simulation & Digital Twin",
			"Cyber Anomaly Detection"
		]
	}
];
var library = [
	[
		"Perception & localization",
		"Systems understand what surrounds them and where they are without depending on one sensor.",
		[
			"AI Perception",
			"GPS-Denied Navigation",
			"Sensor Fusion",
			"AI Localization"
		]
	],
	[
		"Autonomy & mission",
		"Human intent becomes supervised route, task and multi-platform execution.",
		[
			"Autonomous Mobility",
			"Mission Management",
			"Multi-Platform Autonomy"
		]
	],
	[
		"Command & intelligence",
		"Mission, sensor and network context becomes one decision-ready operational picture.",
		["AI Command & Control", "AI Intelligence"]
	],
	[
		"Readiness & resilience",
		"Fleet health, simulation and behavioral data reveal what needs attention next.",
		[
			"Predictive Maintenance",
			"Simulation & Digital Twin",
			"Cyber Anomaly Detection"
		]
	]
];
function TechnologyPage() {
	const [active, setActive] = (0, import_react.useState)(0);
	const selected = layers[active] ?? layers[0];
	const Icon = selected.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-warm-white text-espresso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisHeader, { active: "technology" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[92svh] overflow-hidden bg-espresso text-warm-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("video", {
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						"aria-hidden": "true",
						className: "absolute inset-0 h-full w-full object-cover",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: aigis_technology_hero_webm_asset_default.url,
							type: "video/webm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: aigis_technology_hero_mp4_asset_default.url,
							type: "video/mp4"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-espresso/68",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "media-glass absolute inset-0",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex w-full max-w-[1440px] flex-col justify-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
								children: "Technology · Reusable core"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-7 max-w-[14ch] font-display text-[clamp(40px,6vw,84px)] font-semibold leading-[0.98]",
								children: "Intelligence with a clear anatomy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex max-w-5xl flex-col gap-8 border-t border-warm-white/20 pt-7 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-xl leading-8 text-warm-white/85",
									children: "Twelve engines form one inspectable, human-supervised path from raw signal to operational decision."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#anatomy",
									className: "inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.12em]",
									children: ["Trace the system ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
				className: "px-5 py-28 sm:px-8 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper",
						children: "Architecture principle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
						children: "Built once. Integrated repeatedly."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-2xl text-xl leading-8 text-cocoa",
						children: "The intelligence is separated from the platform beneath it. Interfaces change by program; the proven engines, supervision model and learning loop persist."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-3",
						children: [
							[
								"01",
								"Modular",
								"Deploy only the capability required."
							],
							[
								"02",
								"Inspectable",
								"Expose confidence, state and system limits."
							],
							[
								"03",
								"Supervised",
								"Keep consequential authority with people."
							]
						].map(([number, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "border-t border-line pt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-copper",
									children: number
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-semibold",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 leading-7 text-cocoa",
									children: copy
								})
							]
						}, number))
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "anatomy",
				className: "bg-espresso px-5 py-28 text-warm-white sm:px-8 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-8 lg:grid-cols-2 lg:items-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
								children: "Live system anatomy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
								children: "Trace data to decision."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-lg text-lg leading-8 text-warm-white/65 lg:justify-self-end",
								children: "Select a stage. The system exposes its inputs, active engines and operational output—without hiding the human decision point."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-[12%] right-[12%] top-6 hidden h-px bg-warm-white/15 lg:block",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "technology-flow-pulse absolute inset-y-0 left-0 w-1/4 bg-copper-light" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid grid-cols-2 gap-3 lg:grid-cols-4",
								role: "tablist",
								"aria-label": "Technology stages",
								children: layers.map((layer, index) => {
									const StageIcon = layer.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "ghost",
										role: "tab",
										"aria-selected": active === index,
										onClick: () => setActive(index),
										className: cn("h-auto min-h-28 flex-col items-start rounded-2xl border border-warm-white/12 bg-espresso p-5 text-left text-warm-white/55 hover:bg-warm-white/5 hover:text-warm-white", active === index && "border-copper-light/60 bg-warm-white/[0.07] text-warm-white"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex w-full items-center justify-between text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-copper-light",
												children: layer.number
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageIcon, { className: "size-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-auto font-display text-base font-semibold",
											children: layer.name
										})]
									}, layer.name);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "software-panel-enter mt-5 overflow-hidden rounded-3xl border border-warm-white/12 bg-warm-white/[0.04]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid lg:min-h-[520px] lg:grid-cols-[1.25fr_0.75fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col justify-between p-8 sm:p-12 lg:p-16",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-10 text-copper-light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-20",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
												children: [
													selected.number,
													" · ",
													selected.name
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-6 max-w-3xl font-display text-[clamp(30px,4vw,56px)] font-semibold leading-[1.04]",
												children: selected.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-6 max-w-2xl text-lg leading-8 text-warm-white/68",
												children: selected.copy
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid border-t border-warm-white/12 lg:border-l lg:border-t-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-7 sm:p-9",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white/40",
												children: "Inputs"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-8 font-display text-xl font-semibold leading-8",
												children: selected.input
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-warm-white/12 p-7 sm:p-9",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white/40",
												children: "Active engines"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-6 space-y-3",
												children: selected.engines.map((engine) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "flex items-center gap-3 text-base",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-copper-light" }), engine]
												}, engine))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-warm-white/12 bg-copper/15 p-7 sm:p-9",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[13px] font-semibold uppercase tracking-[0.12em] text-copper-light",
												children: "Software output"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-7 font-display text-xl font-semibold leading-8",
												children: selected.output
											})]
										})
									]
								})]
							})
						}, selected.name)
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-sand px-5 py-28 sm:px-8 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper",
							children: "Engine library"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "Twelve engines. Four functional systems."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 text-lg leading-8 text-cocoa",
							children: "Open each group to understand what the engines solve together."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						defaultValue: "group-0",
						className: "border-t border-line",
						children: library.map(([title, copy, engines], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: `group-${index}`,
							className: "border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "py-7 text-left font-display text-xl font-semibold text-espresso hover:no-underline sm:text-2xl",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-copper",
										children: ["0", index + 1]
									}), title]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionContent, {
								className: "pb-8 pl-0 sm:pl-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-lg leading-8 text-cocoa",
									children: copy
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2",
									children: engines.map((engine) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-warm-white px-4 py-2 text-sm font-semibold text-espresso",
										children: engine
									}, engine))
								})]
							})]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-28 sm:px-8 lg:px-12 lg:py-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-12 rounded-3xl bg-espresso p-8 text-warm-white sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:p-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-8 text-copper-light" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "Human authority"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "The system clarifies. The operator decides."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-8 text-warm-white/68",
						children: "AIGIS handles information volume, routine coordination and continuous monitoring. Human operators retain supervisory authority over consequential action."
					}) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisFooter, {})
		]
	});
}
//#endregion
export { TechnologyPage as component };
