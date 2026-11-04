import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, j as ArrowLeft } from "../_libs/lucide-react.mjs";
import { o as openAigisEnquiry } from "./aigis-enquiry-D1sVFY1o.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/core-B9SHKE8t.js
var import_jsx_runtime = require_jsx_runtime();
var layers = [
	{
		name: "Sense & understand",
		engines: [
			["AI Perception Engine", "Computer vision, thermal interpretation and environmental understanding."],
			["Sensor Fusion Engine", "Combines heterogeneous sensors into one coherent model."],
			["AI Intelligence Engine", "Processes and correlates large volumes of sensor and information data."]
		]
	},
	{
		name: "Locate & move",
		engines: [
			["GPS-Denied Navigation Engine", "Navigation when GNSS/GPS is degraded or unavailable."],
			["AI Localization Engine", "Continuously estimates platform position and confidence."],
			["Autonomous Mobility Engine", "Lets compatible platforms navigate and operate autonomously."]
		]
	},
	{
		name: "Plan & coordinate",
		engines: [
			["AI Mission Management", "Converts human objectives into supervised autonomous execution."],
			["Multi-Platform Autonomy", "Lets one operator supervise multiple autonomous systems."],
			["AI Command & Control", "One unified operational interface for heterogeneous platforms."]
		]
	},
	{
		name: "Sustain & protect",
		engines: [
			["AI Health & Predictive Maintenance", "Predicts equipment degradation and maintenance needs."],
			["AI Simulation & Digital Twin", "Simulates platforms, environments and missions for training and testing."],
			["AI Cyber / Anomaly Detection", "Detects unusual behavior across systems, networks and equipment."]
		]
	}
];
var principles = [
	["Build once", "Each engine is engineered and hardened a single time, then reused across every product."],
	["Hardware-agnostic", "Engines attach to existing sensors, compute and platforms instead of requiring new hulls or airframes."],
	["Human authority", "Autonomy handles complexity; consequential decisions always remain with the operator."]
];
function CorePage() {
	let n = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-espresso text-warm-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 top-0 z-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions",
						className: "inline-flex items-center gap-3 rounded-full border border-warm-white/20 bg-espresso/70 px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white backdrop-blur-md transition-colors hover:bg-warm-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-white/50 sm:block",
						children: "Shared core · 12 engines"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24 lg:pt-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1440px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: "The shared core"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-7 max-w-[16ch] font-display text-[clamp(40px,6vw,88px)] font-semibold uppercase leading-[0.98]",
							children: "Twelve engines. Sixteen products."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl border-t border-warm-white/20 pt-7 text-xl leading-8 text-warm-white/80",
							children: "Every AIGIS product is assembled from the same reusable engines — so a capability proven in one domain is ready for the next, in weeks rather than years."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 pb-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1440px] border-t border-warm-white/15",
					children: layers.map((layer) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 border-b border-warm-white/15 py-10 lg:grid-cols-[0.6fr_2fr] lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
							children: layer.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 sm:grid-cols-3",
							children: layer.engines.map(([name, copy]) => {
								n += 1;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-warm-white/40",
										children: String(n).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-2 font-display text-lg font-semibold",
										children: name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 leading-7 text-warm-white/70",
										children: copy
									})
								] }, name);
							})
						})]
					}, layer.name))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-warm-white px-5 py-24 text-espresso sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-[1440px] gap-10 md:grid-cols-3",
					children: principles.map(([t, c]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-line pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg leading-8 text-cocoa",
							children: c
						})]
					}, t))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 py-24 sm:px-8 lg:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "max-w-xl font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-[1.05]",
						children: "License the core for your platform."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => openAigisEnquiry("Shared core licensing"),
						className: "inline-flex h-14 w-fit items-center gap-3 rounded-full bg-warm-white px-7 font-semibold text-espresso transition-colors hover:bg-copper hover:text-warm-white",
						children: ["Request a briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				})
			})
		]
	});
}
//#endregion
export { CorePage as component };
