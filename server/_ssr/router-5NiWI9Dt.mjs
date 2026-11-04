import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as ShieldAlert, n as X } from "../_libs/lucide-react.mjs";
import { n as Button, t as AigisEnquiryDialog } from "./aigis-enquiry-D1sVFY1o.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as AigisCoreDrawer } from "./aigis-core-drawer-DlQ2rB1S.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/router-5NiWI9Dt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C1p6vt2a.css";
var PRIVACY_MESSAGE = "You are trying to violate AIGIS privacy. Screenshots and screen capture are not allowed.";
function AigisPrivacyGuard() {
	const [warningVisible, setWarningVisible] = (0, import_react.useState)(false);
	const [shieldVisible, setShieldVisible] = (0, import_react.useState)(false);
	const timerRef = (0, import_react.useRef)(null);
	const warn = (0, import_react.useCallback)(() => {
		setWarningVisible(true);
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => setWarningVisible(false), 5e3);
	}, []);
	(0, import_react.useEffect)(() => {
		const prevent = (event) => {
			event.preventDefault();
			warn();
		};
		const onKeyDown = (event) => {
			const key = event.key.toLowerCase();
			const command = event.ctrlKey || event.metaKey;
			const screenshot = key === "printscreen" || event.metaKey && event.shiftKey && [
				"3",
				"4",
				"5"
			].includes(key);
			if (command && [
				"s",
				"p",
				"c",
				"x"
			].includes(key) || screenshot) prevent(event);
		};
		const onBlur = () => {
			setShieldVisible(true);
			window.setTimeout(() => setShieldVisible(false), 900);
		};
		const onVisibility = () => setShieldVisible(document.visibilityState !== "visible");
		document.addEventListener("contextmenu", prevent);
		document.addEventListener("copy", prevent);
		document.addEventListener("cut", prevent);
		document.addEventListener("dragstart", prevent);
		window.addEventListener("keydown", onKeyDown, true);
		window.addEventListener("blur", onBlur);
		document.addEventListener("visibilitychange", onVisibility);
		return () => {
			document.removeEventListener("contextmenu", prevent);
			document.removeEventListener("copy", prevent);
			document.removeEventListener("cut", prevent);
			document.removeEventListener("dragstart", prevent);
			window.removeEventListener("keydown", onKeyDown, true);
			window.removeEventListener("blur", onBlur);
			document.removeEventListener("visibilitychange", onVisibility);
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [warn]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: `fixed inset-0 z-[9998] grid place-items-center bg-espresso transition-opacity duration-150 ${shieldVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-9 text-copper-light" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "alert",
		"aria-live": "assertive",
		className: `fixed bottom-5 left-1/2 z-[9999] flex w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-start gap-4 rounded-lg border border-warm-white/15 bg-espresso px-5 py-4 text-warm-white shadow-2xl transition-all duration-300 sm:bottom-8 ${warningVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "mt-0.5 size-5 shrink-0 text-copper-light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase text-copper-light",
					children: "AIGIS privacy notice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-6 text-warm-white/85",
					children: PRIVACY_MESSAGE
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				variant: "ghost",
				size: "icon",
				"aria-label": "Dismiss privacy notice",
				onClick: () => setWarningVisible(false),
				className: "-mr-2 -mt-2 shrink-0 rounded-full text-warm-white/60 hover:bg-warm-white/10 hover:text-warm-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			})
		]
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AIGIS" },
			{
				name: "description",
				content: "Command the unseen. Retrofit AI, autonomy and sensor fusion onto the platforms already in service."
			},
			{
				name: "author",
				content: "AIGIS"
			},
			{
				property: "og:title",
				content: "AIGIS"
			},
			{
				property: "og:description",
				content: "Command the unseen. Retrofit AI, autonomy and sensor fusion onto the platforms already in service."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Sora:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisCoreDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisEnquiryDialog, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisPrivacyGuard, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-BhjXd_wu.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AIGIS — One AI layer for every platform" },
		{
			name: "description",
			content: "AIGIS is the reusable AI, autonomy and sensor-fusion software layer for platforms already in service."
		},
		{
			property: "og:title",
			content: "AIGIS — One AI layer for every platform"
		},
		{
			property: "og:description",
			content: "Reusable AI, autonomy and sensor-fusion software for existing fleets."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-B7a2440O.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About AIGIS — The intelligence layer for existing fleets" },
		{
			name: "description",
			content: "AIGIS builds reusable AI, autonomy and sensor-fusion software for platforms already in service."
		},
		{
			property: "og:title",
			content: "About AIGIS — The intelligence layer for existing fleets"
		},
		{
			property: "og:description",
			content: "Reusable AI, autonomy and sensor-fusion software for platforms already in service."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./anatomy-CjvQmd_B.mjs");
var Route$7 = createFileRoute("/anatomy")({
	head: () => ({ meta: [
		{ title: "AIGIS Full Anatomy — How the software flies the platform" },
		{
			name: "description",
			content: "The complete anatomy of an AIGIS-controlled platform: sensing, perception, navigation, mission direction, threat avoidance and human authority."
		},
		{
			property: "og:title",
			content: "AIGIS Full Anatomy — How the software flies the platform"
		},
		{
			property: "og:description",
			content: "From raw signal to supervised action: how AIGIS perceives, navigates, directs toward objective and defeats threats."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-DqrEKdSN.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact AIGIS — Request a capability briefing" },
		{
			name: "description",
			content: "Talk to the AIGIS team about intelligence, autonomy and fleet insight for the platforms you already operate."
		},
		{
			property: "og:title",
			content: "Contact AIGIS — Request a capability briefing"
		},
		{
			property: "og:description",
			content: "Tell us about your fleet and mission. The AIGIS team responds with a focused capability briefing."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./core-B9SHKE8t.mjs");
var Route$5 = createFileRoute("/core")({
	head: () => ({ meta: [
		{ title: "The AIGIS Shared Core — Twelve reusable engines" },
		{
			name: "description",
			content: "Every AIGIS product is assembled from the same twelve reusable AI, autonomy, fusion and fleet-intelligence engines."
		},
		{
			property: "og:title",
			content: "The AIGIS Shared Core — Twelve reusable engines"
		},
		{
			property: "og:description",
			content: "Twelve reusable engines behind all sixteen AIGIS software products."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./domains-D9cGp8Xj.mjs");
var Route$4 = createFileRoute("/domains")({
	head: () => ({ meta: [
		{ title: "AIGIS Domains — Intelligence across every operating environment" },
		{
			name: "description",
			content: "Enter the AIGIS deployment atlas: one reusable software intelligence layer adapted across air, land, maritime, command, cyber and sustainment missions."
		},
		{
			property: "og:title",
			content: "AIGIS Domains — Intelligence across every operating environment"
		},
		{
			property: "og:description",
			content: "Explore six operating environments connected by one reusable intelligence layer."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./portfolio-wgG09lkk.mjs");
var Route$3 = createFileRoute("/portfolio")({
	head: () => ({ meta: [
		{ title: "AIGIS Software Portfolio — 19 multi-domain products" },
		{
			name: "description",
			content: "Explore all 19 AIGIS software products across land, air, maritime, autonomy, C4ISR, cyber, training and fleet sustainment."
		},
		{
			property: "og:title",
			content: "AIGIS Software Portfolio — 19 multi-domain products"
		},
		{
			property: "og:description",
			content: "A complete visual portfolio of reusable AIGIS software products built from one shared intelligence core."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./solutions-Dj5VKoyE.mjs");
var Route$2 = createFileRoute("/solutions")({
	head: () => ({ meta: [
		{ title: "AIGIS Solutions — Configurable software capability" },
		{
			name: "description",
			content: "Explore sixteen deployable AIGIS products assembled from one reusable AI, autonomy and fleet-intelligence core."
		},
		{
			property: "og:title",
			content: "AIGIS Solutions — Configurable software capability"
		},
		{
			property: "og:description",
			content: "Sixteen deployable software products assembled from one reusable intelligence core."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./technology-BpqXsANa.mjs");
var Route$1 = createFileRoute("/technology")({
	head: () => ({ meta: [
		{ title: "AIGIS Technology — Anatomy of the intelligence layer" },
		{
			name: "description",
			content: "Trace the AIGIS intelligence layer from sensing through navigation, coordination and fleet readiness."
		},
		{
			property: "og:title",
			content: "AIGIS Technology — Anatomy of the intelligence layer"
		},
		{
			property: "og:description",
			content: "Twelve reusable engines across perception, navigation, coordination and sustainment."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$8.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	AnatomyRoute: Route$7.update({
		id: "/anatomy",
		path: "/anatomy",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$6.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	CoreRoute: Route$5.update({
		id: "/core",
		path: "/core",
		getParentRoute: () => Route$10
	}),
	DomainsRoute: Route$4.update({
		id: "/domains",
		path: "/domains",
		getParentRoute: () => Route$10
	}),
	PortfolioRoute: Route$3.update({
		id: "/portfolio",
		path: "/portfolio",
		getParentRoute: () => Route$10
	}),
	SolutionsRoute: Route$2.update({
		id: "/solutions",
		path: "/solutions",
		getParentRoute: () => Route$10
	}),
	TechnologyRoute: Route$1.update({
		id: "/technology",
		path: "/technology",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
