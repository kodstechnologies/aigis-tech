import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, S as Crosshair, b as Gauge, c as ShieldAlert, f as Radio, i as Waypoints, j as ArrowLeft, p as Radar, s as ShieldCheck, t as Zap, x as Eye, y as LocateFixed } from "../_libs/lucide-react.mjs";
import { a as cn, o as openAigisEnquiry } from "./aigis-enquiry-D1sVFY1o.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/anatomy-CjvQmd_B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hostSystems = [
	{
		icon: Eye,
		name: "Sensor suite",
		what: "EO / IR cameras, thermal imagers, radar and RF receivers — the platform's raw senses.",
		role: "AIGIS reads every stream continuously, timestamps it and aligns it into one coherent picture."
	},
	{
		icon: Gauge,
		name: "Flight & propulsion",
		what: "Motors, control surfaces, actuators and the flight controller that physically moves the platform.",
		role: "AIGIS issues supervised velocity, attitude and route commands; the flight controller executes them within safe envelopes."
	},
	{
		icon: Radio,
		name: "Communications",
		what: "Datalinks, mesh radios and satellite links connecting the platform to the operator and the fleet.",
		role: "AIGIS manages link quality, degrades gracefully to onboard autonomy, and never loses mission state when a link drops."
	},
	{
		icon: Zap,
		name: "Onboard compute",
		what: "The processor module where the AIGIS core runs — at the edge, on the platform itself.",
		role: "All perception, navigation and threat logic runs locally. The platform stays intelligent even fully disconnected."
	}
];
var controlLoop = [
	{
		n: "01",
		title: "Sense",
		copy: "Cameras, thermal, radar, IMU and GNSS stream raw signal into the core many times per second.",
		detail: "Nothing is trusted blindly — every feed carries a confidence score."
	},
	{
		n: "02",
		title: "Perceive",
		copy: "AI Perception and Sensor Fusion turn signal into a live model: terrain, objects, movement, other aircraft, threats.",
		detail: "The platform knows what is around it, not just what one camera sees."
	},
	{
		n: "03",
		title: "Navigate",
		copy: "GPS-Denied Navigation and AI Localization estimate position from vision, terrain and inertial data when satellite signals are jammed or absent.",
		detail: "Position and intent are preserved through interference."
	},
	{
		n: "04",
		title: "Decide",
		copy: "Mission Management weighs the operator's intent against fuel, weather, threats and rules of engagement to choose the next action.",
		detail: "Every recommendation is exposed with its reasoning and confidence."
	},
	{
		n: "05",
		title: "Act",
		copy: "Autonomous Mobility translates the decision into smooth flight commands — route, speed, altitude, attitude.",
		detail: "The human supervises; the software flies the routine."
	},
	{
		n: "06",
		title: "Learn",
		copy: "Every second of the mission returns as data — health, behavior, anomalies — feeding fleet-wide intelligence.",
		detail: "Each mission makes the next one smarter."
	}
];
var missionSteps = [
	{
		icon: Crosshair,
		title: "The operator sets the objective",
		copy: "A human defines the mission: a point to inspect, a route to patrol, an area to hold. Intent — never raw joystick input — is what the platform receives."
	},
	{
		icon: Waypoints,
		title: "The core plans the path",
		copy: "Mission Management builds a route that respects terrain, airspace, fuel, weather and threat zones — and keeps replanning as conditions change."
	},
	{
		icon: LocateFixed,
		title: "The platform holds its track",
		copy: "Autonomous Mobility flies the plan precisely, correcting for wind and drift, while AI Localization confirms position every instant — with or without GNSS."
	},
	{
		icon: ShieldCheck,
		title: "Authority stays human",
		copy: "Any consequential action — entering a restricted zone, engaging a dynamic objective — is presented to the operator with full context before execution."
	}
];
var threatSequence = [
	{
		n: "T0",
		title: "Detect",
		copy: "Radar warning, RF sensing and visual perception detect a launch signature or an incoming track — often before a human could see it."
	},
	{
		n: "T1",
		title: "Classify",
		copy: "Sensor Fusion correlates every feed to classify the threat: type, heading, speed, time-to-impact. False alarms are filtered by confidence."
	},
	{
		n: "T2",
		title: "Evade",
		copy: "The core computes an evasive maneuver in milliseconds — break turn, altitude change, terrain masking — and executes immediately. Survival does not wait for a round-trip to the operator."
	},
	{
		n: "T3",
		title: "Report & recover",
		copy: "The operator is alerted with the full picture, the mission is re-planned around the threat zone, and the engagement is logged into fleet intelligence."
	}
];
function AnatomyPage() {
	const [loopStage, setLoopStage] = (0, import_react.useState)(0);
	const stage = controlLoop[loopStage] ?? controlLoop[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-espresso text-warm-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 top-0 z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/technology",
						className: "inline-flex items-center gap-3 rounded-full border border-warm-white/20 bg-espresso/70 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white backdrop-blur-md transition-colors hover:bg-warm-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to technology"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-white/50 sm:block",
						children: "Full anatomy · AIGIS core"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative flex min-h-[80svh] flex-col justify-end px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 opacity-40",
					"aria-hidden": "true",
					style: {
						backgroundImage: "linear-gradient(rgba(250,247,243,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250,247,243,0.05) 1px, transparent 1px)",
						backgroundSize: "56px 56px"
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto w-full max-w-[1440px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "Anatomy · Platform + intelligence layer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-7 max-w-[16ch] font-display text-[clamp(40px,6vw,88px)] font-semibold leading-[0.98]",
							children: "How AIGIS flies the machine."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl border-t border-warm-white/20 pt-7 text-xl leading-8 text-warm-white/80",
							children: "The aircraft is the body. AIGIS is the nervous system — sensing, thinking and acting onboard, under constant human authority. This is the complete path from raw signal to supervised action."
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-warm-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2 lg:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "01 · The host platform"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "Four hardware systems. One software mind."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-lg text-lg leading-8 text-warm-white/65 lg:justify-self-end",
							children: "AIGIS does not replace the platform — it retrofits onto it. The airframe, sensors and effectors stay; the intelligence layer connects them into one supervised system."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-px overflow-hidden rounded-3xl border border-warm-white/12 bg-warm-white/12 sm:grid-cols-2",
						children: hostSystems.map((s) => {
							const Icon = s.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "bg-espresso p-8 sm:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7 text-copper-light" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-2xl font-semibold",
										children: s.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 leading-7 text-warm-white/60",
										children: s.what
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-4 border-t border-warm-white/10 pt-4 text-sm leading-7 text-warm-white/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-copper-light",
											children: "AIGIS role — "
										}), s.role]
									})
								]
							}, s.name);
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-warm-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "02 · The control loop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 max-w-3xl font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "Six stages, running continuously, onboard."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								role: "tablist",
								"aria-label": "Control loop stages",
								children: controlLoop.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									role: "tab",
									"aria-selected": loopStage === i,
									onClick: () => setLoopStage(i),
									className: cn("flex w-full items-center gap-5 rounded-2xl border border-warm-white/10 px-6 py-5 text-left transition-colors hover:bg-warm-white/5", loopStage === i && "border-copper-light/60 bg-warm-white/[0.07]"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-semibold text-copper-light",
										children: s.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-semibold",
										children: s.title
									})]
								}, s.n))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "software-panel-enter flex flex-col justify-between rounded-3xl border border-warm-white/12 bg-warm-white/[0.04] p-8 sm:p-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
									children: ["Stage ", stage.n]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.05]",
											children: stage.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-lg leading-8 text-warm-white/75",
											children: stage.copy
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 border-t border-warm-white/10 pt-5 text-sm leading-7 text-warm-white/55",
											children: stage.detail
										})
									]
								})]
							}, stage.n)]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-warm-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "03 · Direction toward the objective"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 max-w-3xl font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: "From human intent to a held track."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-14",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute left-[12%] right-[12%] top-10 hidden h-px bg-warm-white/15 lg:block",
								"aria-hidden": "true",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "technology-flow-pulse absolute inset-y-0 left-0 w-1/4 bg-copper-light" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
								children: missionSteps.map((s, i) => {
									const Icon = s.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-3xl border border-warm-white/12 bg-warm-white/[0.04] p-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-12 place-items-center rounded-full border border-copper-light/40 bg-espresso",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-copper-light" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-sm font-semibold text-warm-white/40",
													children: ["0", i + 1]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-8 font-display text-xl font-semibold leading-snug",
												children: s.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-7 text-warm-white/60",
												children: s.copy
											})
										]
									}, s.title);
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-warm-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1280px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-8 text-copper-light" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
								children: "04 · Threat avoidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
								children: "When a missile launches, milliseconds decide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-7 text-lg leading-8 text-warm-white/65",
								children: "Survival reactions cannot wait for a signal to reach a distant operator and return. Detection, classification and evasion happen onboard — the operator is informed, not consulted, in the first seconds."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-px overflow-hidden rounded-3xl border border-warm-white/12 bg-warm-white/12",
							children: threatSequence.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex gap-6 bg-espresso p-7 sm:p-9",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg font-semibold text-copper-light",
									children: t.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: t.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 leading-7 text-warm-white/60",
									children: t.copy
								})] })]
							}, t.n))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-3xl border border-copper-light/30 bg-copper/10 p-8 sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "The dividing line"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-3xl text-lg leading-8 text-warm-white/80",
							children: "Reflexive survival — evading a threat, holding position through jamming — is delegated to the software. Consequential decisions — what to engage, where to go next, whether to continue the mission — return to the human. That boundary is engineered, not implied."
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-warm-white/10 px-5 py-24 sm:px-8 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1280px] flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, { className: "size-8 text-copper-light" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 max-w-2xl font-display text-[clamp(30px,4vw,52px)] font-semibold leading-[1.05]",
							children: "One anatomy. Every platform."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-8 text-warm-white/65",
							children: "The same loop runs on air, land and maritime systems. Discuss how it integrates with the platforms you already operate."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => openAigisEnquiry(),
							className: "inline-flex h-14 items-center justify-center gap-2 rounded-full bg-copper px-8 font-semibold text-warm-white transition-colors hover:bg-copper/90",
							children: ["Discuss your integration ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/technology",
							className: "inline-flex h-14 items-center justify-center gap-2 rounded-full border border-warm-white/25 px-8 font-semibold text-warm-white transition-colors hover:bg-warm-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back to technology"]
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { AnatomyPage as component };
