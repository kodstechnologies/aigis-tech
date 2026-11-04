import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, E as Check, M as ArrowDown, T as ChevronDown, _ as MapPin, l as Search, m as Phone, s as ShieldCheck, v as Mail } from "../_libs/lucide-react.mjs";
import { a as cn } from "./aigis-enquiry-D1sVFY1o.mjs";
import { n as AigisHeader, t as AigisFooter } from "./aigis-site-chrome-CHrW1bSp.mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/contact-DqrEKdSN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var aigis_contact_hero_mp4_asset_default = {
	asset_id: "4e10490b-dff6-492f-aace-607737c99aa3",
	created_at: "2026-09-29T12:33:57Z",
	original_filename: "aigis-contact-hero.mp4",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	size: 7935425,
	url: "/__l5e/assets-v1/4e10490b-dff6-492f-aace-607737c99aa3/aigis-contact-hero.mp4",
	version: 1
};
var aigis_contact_hero_default = "/assets/aigis-contact-hero-BacU1U-O.webm";
var countries = [
	{
		iso2: "IN",
		name: "India",
		dial: "91"
	},
	{
		iso2: "US",
		name: "United States",
		dial: "1"
	},
	{
		iso2: "GB",
		name: "United Kingdom",
		dial: "44"
	},
	{
		iso2: "AE",
		name: "United Arab Emirates",
		dial: "971"
	},
	{
		iso2: "SA",
		name: "Saudi Arabia",
		dial: "966"
	},
	{
		iso2: "QA",
		name: "Qatar",
		dial: "974"
	},
	{
		iso2: "IL",
		name: "Israel",
		dial: "972"
	},
	{
		iso2: "AU",
		name: "Australia",
		dial: "61"
	},
	{
		iso2: "CA",
		name: "Canada",
		dial: "1"
	},
	{
		iso2: "SG",
		name: "Singapore",
		dial: "65"
	},
	{
		iso2: "JP",
		name: "Japan",
		dial: "81"
	},
	{
		iso2: "KR",
		name: "South Korea",
		dial: "82"
	},
	{
		iso2: "FR",
		name: "France",
		dial: "33"
	},
	{
		iso2: "DE",
		name: "Germany",
		dial: "49"
	},
	{
		iso2: "SE",
		name: "Sweden",
		dial: "46"
	},
	{
		iso2: "NO",
		name: "Norway",
		dial: "47"
	},
	{
		iso2: "FI",
		name: "Finland",
		dial: "358"
	},
	{
		iso2: "NL",
		name: "Netherlands",
		dial: "31"
	},
	{
		iso2: "IT",
		name: "Italy",
		dial: "39"
	},
	{
		iso2: "ES",
		name: "Spain",
		dial: "34"
	},
	{
		iso2: "PT",
		name: "Portugal",
		dial: "351"
	},
	{
		iso2: "PL",
		name: "Poland",
		dial: "48"
	},
	{
		iso2: "CZ",
		name: "Czechia",
		dial: "420"
	},
	{
		iso2: "RO",
		name: "Romania",
		dial: "40"
	},
	{
		iso2: "UA",
		name: "Ukraine",
		dial: "380"
	},
	{
		iso2: "TR",
		name: "Türkiye",
		dial: "90"
	},
	{
		iso2: "EG",
		name: "Egypt",
		dial: "20"
	},
	{
		iso2: "ZA",
		name: "South Africa",
		dial: "27"
	},
	{
		iso2: "NG",
		name: "Nigeria",
		dial: "234"
	},
	{
		iso2: "KE",
		name: "Kenya",
		dial: "254"
	},
	{
		iso2: "BR",
		name: "Brazil",
		dial: "55"
	},
	{
		iso2: "MX",
		name: "Mexico",
		dial: "52"
	},
	{
		iso2: "AR",
		name: "Argentina",
		dial: "54"
	},
	{
		iso2: "ID",
		name: "Indonesia",
		dial: "62"
	},
	{
		iso2: "TH",
		name: "Thailand",
		dial: "66"
	},
	{
		iso2: "VN",
		name: "Vietnam",
		dial: "84"
	},
	{
		iso2: "PH",
		name: "Philippines",
		dial: "63"
	},
	{
		iso2: "MY",
		name: "Malaysia",
		dial: "60"
	},
	{
		iso2: "PK",
		name: "Pakistan",
		dial: "92"
	},
	{
		iso2: "BD",
		name: "Bangladesh",
		dial: "880"
	},
	{
		iso2: "LK",
		name: "Sri Lanka",
		dial: "94"
	},
	{
		iso2: "NZ",
		name: "New Zealand",
		dial: "64"
	},
	{
		iso2: "IE",
		name: "Ireland",
		dial: "353"
	},
	{
		iso2: "GR",
		name: "Greece",
		dial: "30"
	},
	{
		iso2: "CH",
		name: "Switzerland",
		dial: "41"
	},
	{
		iso2: "AT",
		name: "Austria",
		dial: "43"
	},
	{
		iso2: "BE",
		name: "Belgium",
		dial: "32"
	},
	{
		iso2: "DK",
		name: "Denmark",
		dial: "45"
	},
	{
		iso2: "OM",
		name: "Oman",
		dial: "968"
	},
	{
		iso2: "KW",
		name: "Kuwait",
		dial: "965"
	},
	{
		iso2: "BH",
		name: "Bahrain",
		dial: "973"
	},
	{
		iso2: "JO",
		name: "Jordan",
		dial: "962"
	}
].sort((a, b) => a.name.localeCompare(b.name));
var flagUrl = (iso2) => `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
function CountrySelect({ country, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onDown = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onDown);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDown);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return countries;
		return countries.filter((c) => c.name.toLowerCase().includes(q) || c.dial.startsWith(q.replace(/^\+/, "")) || c.iso2.toLowerCase() === q);
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			"aria-label": `Country code: +${country.dial}`,
			onClick: () => {
				setOpen((o) => !o);
				setQuery("");
			},
			className: "flex h-12 items-center gap-2 border-b border-line pr-2 transition-colors hover:border-copper/60 focus-visible:border-copper focus-visible:outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: flagUrl(country.iso2),
					alt: "",
					width: 24,
					height: 16,
					className: "h-4 w-6 rounded-[2px] object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-base font-semibold text-espresso",
					children: ["+", country.dial]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-espresso/50 transition-transform duration-200", open && "rotate-180") })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-0 top-14 z-40 w-72 overflow-hidden rounded-2xl border border-line bg-warm-white shadow-[0_30px_70px_-30px_rgba(23,15,10,0.45)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-espresso/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search country or code",
					className: "w-full bg-transparent text-sm text-espresso outline-none placeholder:text-espresso/35"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				role: "listbox",
				className: "max-h-60 overflow-y-auto p-1.5",
				children: [filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "option",
					"aria-selected": c.iso2 === country.iso2,
					onClick: () => {
						onChange(c);
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-sand", c.iso2 === country.iso2 && "bg-sand"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: flagUrl(c.iso2),
							alt: "",
							width: 24,
							height: 16,
							className: "h-4 w-6 rounded-[2px] object-cover",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("flex-1 truncate text-sm", c.iso2 === country.iso2 ? "font-semibold text-copper" : "text-espresso"),
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-semibold text-espresso/50",
							children: ["+", c.dial]
						})
					]
				}) }, c.iso2)), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "px-3 py-4 text-sm text-espresso/50",
					children: "No matching country."
				})]
			})]
		})]
	});
}
var inquiryTypes = [
	"Capability briefing",
	"Partnership",
	"Careers",
	"Support"
];
var labelCls = "text-[11px] font-semibold uppercase tracking-[0.16em] text-cocoa/70";
var inputCls = "h-12 w-full border-b border-line bg-transparent text-base text-espresso outline-none transition-colors placeholder:text-espresso/30 focus:border-copper";
function ContactPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		org: "",
		email: "",
		phone: "",
		message: ""
	});
	const [inquiry, setInquiry] = (0, import_react.useState)("Capability briefing");
	const [country, setCountry] = (0, import_react.useState)(() => countries.find((c) => c.iso2 === "IN") ?? {
		iso2: "IN",
		name: "India",
		dial: "91"
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const submit = (e) => {
		e.preventDefault();
		const next = {};
		if (form.name.trim().length < 2) next.name = "Please enter your full name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "Please enter a valid work email.";
		if (form.phone.replace(/\D/g, "").length < 6) next.phone = "Please enter a valid phone number.";
		if (form.message.trim().length < 10) next.message = "Tell us a little more about your requirement.";
		setErrors(next);
		if (Object.keys(next).length === 0) setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen overflow-x-hidden bg-warm-white text-espresso",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisHeader, { active: "contact" }),
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
							src: aigis_contact_hero_default,
							type: "video/webm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: aigis_contact_hero_mp4_asset_default.url,
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper-light/70" }), "Contact"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-8 max-w-[16ch] font-display text-[clamp(40px,6vw,84px)] font-semibold leading-[1.02] text-warm-white",
								children: "Start the conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex max-w-5xl flex-col gap-8 border-t border-warm-white/20 pt-8 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-2xl text-xl leading-8 text-warm-white/85",
									children: "Tell us about your fleet, your mission and your constraints. The AIGIS team responds with a focused briefing—not a sales pitch."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#briefing",
									className: "flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-warm-white",
									children: ["Request a briefing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
				id: "briefing",
				className: "scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-copper/60" }), "Request a briefing"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-[clamp(30px,4vw,48px)] font-semibold leading-[1.08]",
							children: ["One form. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-copper",
								children: "One focused reply."
							})]
						}),
						submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 rounded-3xl border border-line bg-sand/60 p-8 sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-full bg-copper text-warm-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl font-semibold",
									children: "Request received."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 max-w-md text-base leading-7 text-cocoa",
									children: [
										"Thank you, ",
										form.name.split(" ")[0],
										". The AIGIS team will reach you at ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-espresso",
											children: form.email
										}),
										" within one business day."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setSubmitted(false);
										setForm({
											name: "",
											org: "",
											email: "",
											phone: "",
											message: ""
										});
									},
									className: "mt-8 inline-flex h-12 items-center gap-3 rounded-full border border-espresso/25 px-6 text-sm font-semibold uppercase tracking-[0.1em] text-espresso transition-colors hover:border-copper hover:text-copper",
									children: ["Send another request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							noValidate: true,
							className: "mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "c-name",
										className: labelCls,
										children: "Full name *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "c-name",
										value: form.name,
										onChange: set("name"),
										placeholder: "Jordan Reyes",
										maxLength: 80,
										className: cn(inputCls, "mt-3", errors.name && "border-copper")
									}),
									errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-copper",
										children: errors.name
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "c-org",
									className: labelCls,
									children: "Organization"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "c-org",
									value: form.org,
									onChange: set("org"),
									placeholder: "Agency, prime or operator",
									maxLength: 100,
									className: cn(inputCls, "mt-3")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "c-email",
										className: labelCls,
										children: "Work email *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "c-email",
										type: "email",
										value: form.email,
										onChange: set("email"),
										placeholder: "you@organization.com",
										maxLength: 160,
										className: cn(inputCls, "mt-3", errors.email && "border-copper")
									}),
									errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-copper",
										children: errors.email
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "c-phone",
										className: labelCls,
										children: "Phone *"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-end gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySelect, {
											country,
											onChange: setCountry
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "c-phone",
											type: "tel",
											inputMode: "tel",
											value: form.phone,
											onChange: (e) => setForm((f) => ({
												...f,
												phone: e.target.value.replace(/[^\d\s()-]/g, "")
											})),
											placeholder: "98765 43210",
											maxLength: 16,
											className: cn(inputCls, "flex-1", errors.phone && "border-copper")
										})]
									}),
									errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-copper",
										children: errors.phone
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Nature of inquiry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-2.5",
										children: inquiryTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											"aria-pressed": inquiry === t,
											onClick: () => setInquiry(t),
											className: cn("h-11 rounded-full border px-5 text-sm font-semibold transition-colors", inquiry === t ? "border-copper bg-copper text-warm-white" : "border-line text-cocoa hover:border-copper/60 hover:text-espresso"),
											children: t
										}, t))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "c-message",
											className: labelCls,
											children: "How can we help? *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "c-message",
											value: form.message,
											onChange: set("message"),
											rows: 4,
											maxLength: 1200,
											placeholder: "Platforms in service, mission set, timelines—whatever shapes the conversation.",
											className: cn(inputCls, "mt-3 h-auto resize-none py-3 leading-7", errors.message && "border-copper")
										}),
										errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-copper",
											children: errors.message
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex items-center gap-2.5 text-sm text-cocoa/80",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-copper" }), "NDA-friendly. Your details stay between us."]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "inline-flex h-14 items-center gap-3 rounded-full bg-copper px-10 text-base font-semibold text-warm-white transition-colors hover:bg-copper/90",
										children: ["Send request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})]
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "flex flex-col gap-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative overflow-hidden rounded-3xl bg-espresso p-8 text-warm-white sm:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-copper/15 blur-[90px]",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[13px] font-semibold uppercase tracking-[0.16em] text-copper-light",
									children: "Direct channels"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold leading-snug",
									children: "Reach the team directly."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 space-y-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "mailto:info@aigis.tech",
											className: "group flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-11 shrink-0 place-items-center rounded-full border border-copper/50 bg-copper/10 transition-colors group-hover:bg-copper",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-copper-light transition-colors group-hover:text-warm-white" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50",
												children: "Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base font-semibold text-warm-white/90 transition-colors group-hover:text-warm-white",
												children: "info@aigis.tech"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:+919946759986",
											className: "group flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-11 shrink-0 place-items-center rounded-full border border-copper/50 bg-copper/10 transition-colors group-hover:bg-copper",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-copper-light transition-colors group-hover:text-warm-white" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50",
												children: "Mobile"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base font-semibold text-warm-white/90 transition-colors group-hover:text-warm-white",
												children: "+91 99467 59986"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-11 shrink-0 place-items-center rounded-full border border-copper/50 bg-copper/10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-copper-light" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-white/50",
												children: "Operations"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-base font-semibold text-warm-white/90",
												children: "Deployed with partner programs worldwide"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-2.5 border-t border-warm-white/10 pt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-white/45",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "relative flex size-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-copper-light opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex size-2 rounded-full bg-copper-light" })]
											}), "Response within one business day"]
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-line bg-sand/50 p-8 sm:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-semibold uppercase tracking-[0.16em] text-copper",
								children: "What happens next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-6",
								children: [
									[
										"01",
										"Intake",
										"We read every request and reply within one business day."
									],
									[
										"02",
										"Scoping",
										"A short call to understand your platforms, mission and constraints."
									],
									[
										"03",
										"Briefing",
										"A tailored capability briefing—no generic pitch decks."
									]
								].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm font-semibold text-copper",
										children: n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-semibold text-espresso",
										children: t
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm leading-6 text-cocoa",
										children: d
									})] })]
								}, n))
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AigisFooter, {
				cta: false,
				briefing: false
			})
		]
	});
}
//#endregion
export { ContactPage as component };
