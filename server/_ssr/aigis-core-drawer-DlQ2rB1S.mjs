import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, D as BrainCircuit, E as Check, N as Activity, h as Network, n as X, r as Wrench, s as ShieldCheck, x as Eye, y as LocateFixed } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as cn, i as aigis_logo_white_png_asset_default, n as Button, o as openAigisEnquiry } from "./aigis-enquiry-D1sVFY1o.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/aigis-core-drawer-DlQ2rB1S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Sheet = Dialog;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var stages = [
	{
		number: "01",
		name: "Sense",
		icon: Activity,
		promise: "Accept every mission-native signal.",
		explanation: "AIGIS connects to the sensors, platform systems and operational networks already in service, without forcing a single hardware architecture.",
		inputs: "EO/IR · thermal · radar · RF · platform telemetry",
		output: "Time-aligned, normalized evidence",
		outcome: "A reliable foundation for machine interpretation",
		engines: ["Sensor Fusion", "AI Localization"]
	},
	{
		number: "02",
		name: "Perceive",
		icon: Eye,
		promise: "Turn raw evidence into a trusted world model.",
		explanation: "The perception layer detects, classifies and tracks relevant activity, while confidence scoring makes uncertainty visible to the operator.",
		inputs: "Normalized imagery · tracks · environmental context",
		output: "Objects · movement · anomalies · confidence",
		outcome: "A coherent operational picture instead of isolated feeds",
		engines: ["AI Perception"]
	},
	{
		number: "03",
		name: "Navigate",
		icon: LocateFixed,
		promise: "Preserve position, route and mission intent.",
		explanation: "AIGIS combines local perception, inertial evidence and mission constraints to maintain supervised mobility when GNSS is degraded or unavailable.",
		inputs: "World model · IMU · terrain · operator intent",
		output: "Position · path · task sequence · recovery options",
		outcome: "Resilient movement with explicit system limits",
		engines: [
			"GPS-Denied Navigation",
			"Autonomous Mobility",
			"Mission Management"
		]
	},
	{
		number: "04",
		name: "Coordinate",
		icon: Network,
		promise: "Make many systems operate as one governed team.",
		explanation: "Mission state, platform capability and network conditions are reconciled so compatible assets can coordinate while one operator retains supervisory control.",
		inputs: "Mission state · fleet state · network health · priorities",
		output: "Shared intent · task allocation · decision-ready context",
		outcome: "Faster coordination without surrendering command authority",
		engines: [
			"Multi-Platform Autonomy",
			"AI Command & Control",
			"AI Intelligence"
		]
	},
	{
		number: "05",
		name: "Sustain",
		icon: Wrench,
		promise: "Convert every mission into fleet readiness.",
		explanation: "Health, behavior and mission evidence return to the core, revealing degradation, training gaps and cyber anomalies before they constrain availability.",
		inputs: "Health data · logs · mission replay · software state",
		output: "Forecasts · alerts · simulations · readiness priorities",
		outcome: "A fleet that learns and remains deployable",
		engines: [
			"Predictive Maintenance",
			"Simulation & Digital Twin",
			"Cyber Anomaly Detection"
		]
	},
	{
		number: "06",
		name: "Human decision",
		icon: ShieldCheck,
		promise: "Clarify the choice. Preserve human authority.",
		explanation: "AIGIS presents the evidence, confidence, system state and available options. Consequential action remains with the authorized operator.",
		inputs: "Operational picture · confidence · options · constraints",
		output: "Explainable recommendation and supervised action",
		outcome: "Automation with accountability at the decision point",
		engines: []
	}
];
function openAigisCoreDrawer(entry = "AIGIS reusable core") {
	window.dispatchEvent(new CustomEvent("aigis:open-core", { detail: { entry } }));
}
function CoreDrawerTrigger({ children, entry, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		onClick: () => openAigisCoreDrawer(entry),
		className,
		...props,
		children
	});
}
function AigisCoreDrawer() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(0);
	const [entry, setEntry] = (0, import_react.useState)("AIGIS reusable core");
	const selected = stages[active] ?? stages[0];
	const SelectedIcon = selected.icon;
	(0, import_react.useEffect)(() => {
		const show = (event) => {
			const detail = event.detail;
			setEntry(detail?.entry || "AIGIS reusable core");
			setActive(0);
			setOpen(true);
		};
		window.addEventListener("aigis:open-core", show);
		return () => window.removeEventListener("aigis:open-core", show);
	}, []);
	const requestBriefing = () => {
		setOpen(false);
		window.setTimeout(() => openAigisEnquiry("AIGIS core briefing"), 180);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "right",
			className: "w-full overflow-y-auto border-l border-warm-white/10 bg-espresso p-0 text-warm-white sm:max-w-[760px] [&>button]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-20 border-b border-warm-white/10 bg-espresso/95 px-5 py-5 backdrop-blur-xl sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: aigis_logo_white_png_asset_default.url,
						alt: "AIGIS",
						className: "h-10 w-auto sm:h-11"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							"aria-label": "Close AIGIS core",
							className: "rounded-full border border-warm-white/20 text-warm-white hover:bg-warm-white/10 hover:text-warm-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light",
						children: entry
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "mt-4 max-w-[12ch] font-display text-[clamp(32px,5vw,54px)] font-semibold leading-[1.04] text-warm-white",
						children: "One core from signal to supervised action."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
						className: "mt-5 max-w-2xl text-base leading-7 text-warm-white/65 sm:text-lg sm:leading-8",
						children: "AIGIS is a reusable software intelligence layer. It connects to existing platforms, understands their evidence, coordinates mission activity and returns learning to the fleet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-warm-white/10 bg-warm-white/10",
						children: [
							["12", "software engines"],
							["06", "operating stages"],
							["01", "governed core"]
						].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-espresso px-3 py-5 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold text-copper-light",
								children: value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-warm-white/45",
								children: label
							})]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12",
						"aria-labelledby": "core-path-title",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-end justify-between gap-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light",
									children: "Live architecture"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									id: "core-path-title",
									className: "mt-3 font-display text-2xl font-semibold",
									children: "Follow the intelligence path."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hidden text-xs text-warm-white/40 sm:block",
									children: "Select a stage"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6",
								role: "tablist",
								"aria-label": "AIGIS core stages",
								children: stages.map((stage, index) => {
									const Icon = stage.icon;
									const isActive = active === index;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "ghost",
										role: "tab",
										"aria-selected": isActive,
										"aria-controls": "aigis-core-stage-panel",
										onClick: () => setActive(index),
										className: cn("h-20 min-w-0 flex-col gap-2 rounded-lg border border-warm-white/10 px-2 text-[10px] font-semibold uppercase text-warm-white/45 hover:bg-warm-white/5 hover:text-warm-white", isActive && "border-copper bg-warm-white/[0.07] text-warm-white"),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("size-4", isActive && "text-copper-light") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "max-w-full truncate",
											children: stage.name
										})]
									}, stage.name);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								id: "aigis-core-stage-panel",
								role: "tabpanel",
								className: "software-panel-enter mt-3 overflow-hidden rounded-lg border border-warm-white/10 bg-warm-white/[0.04]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-6 sm:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid size-11 place-items-center rounded-full border border-copper/60 bg-copper/10",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedIcon, { className: "size-5 text-copper-light" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-sm text-copper-light",
													children: [selected.number, " / 06"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-8 max-w-lg font-display text-3xl font-semibold leading-tight",
												children: selected.promise
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 max-w-2xl text-base leading-7 text-warm-white/65",
												children: selected.explanation
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid border-t border-warm-white/10 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-6 sm:p-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-white/40",
												children: "Evidence in"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-warm-white/80",
												children: selected.inputs
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-warm-white/10 p-6 sm:border-l sm:border-t-0 sm:p-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-copper-light",
												children: "Software out"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-6 text-warm-white/80",
												children: selected.output
											})]
										})]
									}),
									selected.engines.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-warm-white/10 p-6 sm:p-7",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-warm-white/40",
											children: "Active engines"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-4 flex flex-wrap gap-2",
											children: selected.engines.map((engine) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full border border-warm-white/15 px-3 py-2 text-xs font-semibold text-warm-white/75",
												children: engine
											}, engine))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "border-t border-warm-white/10 bg-copper/10 p-6 sm:p-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-start gap-3 text-sm font-semibold leading-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-copper-light" }), selected.outcome]
										})
									})
								]
							}, selected.name)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 border-t border-warm-white/10 pt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, { className: "size-5 text-copper-light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light",
								children: "How deployment works"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-3",
							children: [
								[
									"01",
									"Connect",
									"Integrate existing sensors, systems and networks."
								],
								[
									"02",
									"Configure",
									"Select the engines and authority model the mission requires."
								],
								[
									"03",
									"Improve",
									"Return mission and health evidence to fleet intelligence."
								]
							].map(([number, title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-warm-white/15 pt-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-copper-light",
										children: number
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-base font-semibold",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-6 text-warm-white/55",
										children: copy
									})
								]
							}, number))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-12 rounded-lg border border-warm-white/10 bg-warm-white/[0.04] p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6 text-copper-light" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-semibold",
								children: "The operator remains the authority."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-7 text-warm-white/60",
								children: "The core reduces information load and coordinates routine machine activity. It exposes confidence and limits so consequential decisions remain human-led."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/anatomy",
								className: "inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-warm-white/20 px-5 text-sm font-semibold text-warm-white transition-colors hover:bg-warm-white/10",
								children: ["Full technology anatomy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						onClick: requestBriefing,
						className: "mt-3 h-14 w-full rounded-full bg-copper px-7 font-semibold text-warm-white hover:bg-copper/90",
						children: ["Discuss your integration ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			})]
		})
	});
}
//#endregion
export { CoreDrawerTrigger as n, AigisCoreDrawer as t };
