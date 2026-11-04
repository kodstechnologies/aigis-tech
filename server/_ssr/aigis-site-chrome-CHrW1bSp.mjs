import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, g as Menu, m as Phone, n as X, v as Mail } from "../_libs/lucide-react.mjs";
import { a as cn, i as aigis_logo_white_png_asset_default, r as EnquiryTrigger } from "./aigis-enquiry-D1sVFY1o.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/aigis-site-chrome-CHrW1bSp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Technology",
		to: "/technology"
	},
	{
		label: "Domains",
		to: "/domains"
	}
];
function AigisHeader({ active, hero = false }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const update = () => setScrolled(window.scrollY > 24);
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 px-4 pt-4 text-warm-white transition-all duration-500 ease-out sm:px-6 sm:pt-5", scrolled ? "pointer-events-none -translate-y-[140%] opacity-0" : "translate-y-0 opacity-100"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-[64px] max-w-[1440px] items-center rounded-full border border-warm-white/15 bg-espresso/45 pl-6 pr-2 shadow-[0_12px_40px_-12px_rgba(20,10,6,0.55)] backdrop-blur-xl sm:pl-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "AIGIS home",
					className: "mr-auto select-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: aigis_logo_white_png_asset_default.url,
						alt: "AIGIS",
						draggable: false,
						className: "h-[24px] w-auto select-none sm:h-[28px]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden h-full items-center gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.12em] lg:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("text-warm-white/80 transition-colors hover:text-warm-white", active === link.label.toLowerCase() && "text-copper-light"),
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "ml-8 inline-flex h-12 items-center rounded-full bg-copper px-7 text-xs uppercase text-warm-white hover:bg-copper/90 lg:inline-flex",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group relative ml-3 lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "grid size-12 cursor-pointer list-none place-items-center rounded-full border border-warm-white/20",
						"aria-label": "Toggle navigation",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5 group-open:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "hidden size-5 group-open:block" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute right-0 top-16 grid w-60 rounded-3xl border border-warm-white/15 bg-espresso/95 p-3 text-xs font-semibold uppercase shadow-xl backdrop-blur-xl",
						children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: cn("rounded-full p-3", active === link.label.toLowerCase() && "text-copper-light"),
							to: link.to,
							children: link.label
						}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: cn("rounded-full p-3 text-copper-light hover:bg-warm-white/10 hover:text-warm-white", active === "contact" && "text-copper-light"),
							children: "Contact"
						})]
					})]
				})
			]
		})
	});
}
function AigisFooter({ cta = true, briefing }) {
	const showBriefing = briefing ?? !cta;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "relative overflow-hidden bg-espresso text-warm-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-48 left-1/2 h-96 w-[760px] -translate-x-1/2 rounded-full bg-copper/10 blur-[140px]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-[1280px] px-5 pb-6 pt-20 sm:px-8 lg:px-12 lg:pt-24",
				children: [
					cta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-10 pb-16 lg:flex-row lg:items-end lg:pb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-3xl font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.1]",
							children: "Bring intelligence to the fleet you already operate."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EnquiryTrigger, {
							context: "Capability briefing",
							className: "h-14 w-fit shrink-0 rounded-full bg-copper px-8 text-base font-semibold text-warm-white hover:bg-copper/90",
							children: ["Request briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-12 border-t border-warm-white/10 pt-14 lg:grid-cols-[1.15fr_0.8fr_0.8fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: aigis_logo_white_png_asset_default.url,
									alt: "AIGIS",
									className: "h-[32px] w-auto sm:h-[38px]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-sm text-base leading-7 text-warm-white/65",
									children: "One reusable software layer — intelligence, autonomy and fleet insight for platforms already in service."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-col items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "mailto:info@aigis.tech",
										className: "group inline-flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 place-items-center rounded-full border border-copper/50 bg-copper/10 transition-colors group-hover:bg-copper",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-copper-light transition-colors group-hover:text-warm-white" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-warm-white/85 transition-colors group-hover:text-warm-white",
											children: "info@aigis.tech"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919946759986",
										className: "group inline-flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-11 place-items-center rounded-full border border-copper/50 bg-copper/10 transition-colors group-hover:bg-copper",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-copper-light transition-colors group-hover:text-warm-white" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-semibold text-warm-white/85 transition-colors group-hover:text-warm-white",
											children: "+91 99467 59986"
										})]
									})]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
								"aria-label": "Footer navigation",
								className: "lg:pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
									children: "Explore"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: l.to,
										className: "group flex items-center justify-between border-b border-warm-white/10 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-warm-white/70 transition-colors hover:text-warm-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-baseline gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-copper-light/70",
												children: String(i + 1).padStart(2, "0")
											}), l.label]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 -translate-x-1 text-copper-light opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" })]
									}, l.to))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:pt-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[13px] font-semibold uppercase tracking-[0.14em] text-copper-light",
										children: "Briefing"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-base leading-7 text-warm-white/65",
										children: "Request a capability briefing with the AIGIS team."
									}),
									showBriefing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EnquiryTrigger, {
										context: "Capability briefing",
										className: "mt-6 h-12 rounded-full bg-copper px-6 text-sm font-semibold text-warm-white hover:bg-copper/90",
										children: ["Request briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-8 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white/45",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "relative flex size-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-light opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-copper-light" })]
										}), "Systems operational"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "pointer-events-none relative mt-14 flex select-none justify-center overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: aigis_logo_white_png_asset_default.url,
							alt: "",
							className: "h-auto w-[min(46vw,540px)] opacity-[0.06]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 border-t border-warm-white/10 py-6 text-[13px] text-warm-white/40 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" AIGIS. All rights reserved."
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "uppercase tracking-[0.14em]",
							children: "Unified intelligence layer"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { AigisHeader as n, AigisFooter as t };
