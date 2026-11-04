import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, m as Slot, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as ArrowRight, E as Check, T as ChevronDown, l as Search, n as X, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region ../../dev-server/node_modules/.nitro/vite/services/ssr/assets/aigis-enquiry-D1sVFY1o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var aigis_logo_white_png_asset_default = {
	asset_id: "248f9b21-8943-41db-9eaa-f5dd78832205",
	content_type: "image/png",
	created_at: "2026-09-30T09:40:33Z",
	original_filename: "aigis-logo-white.png",
	project_id: "6b24730a-437d-485b-9152-a7dbae138baa",
	r2_key: "a/v1/6b24730a-437d-485b-9152-a7dbae138baa/248f9b21-8943-41db-9eaa-f5dd78832205/aigis-logo-white.png",
	size: 30921,
	url: "/__l5e/assets-v1/248f9b21-8943-41db-9eaa-f5dd78832205/aigis-logo-white.png",
	version: 1
};
var countries = [
	{
		iso2: "IN",
		name: "India",
		dial: "91"
	},
	{
		iso2: "AE",
		name: "United Arab Emirates",
		dial: "971"
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
		iso2: "NL",
		name: "Netherlands",
		dial: "31"
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
		iso2: "ZA",
		name: "South Africa",
		dial: "27"
	}
].sort((a, b) => a.name.localeCompare(b.name));
var fallbackCountry = {
	iso2: "IN",
	name: "India",
	dial: "91"
};
var flagUrl = (iso2) => `https://flagcdn.com/w40/${iso2.toLowerCase()}.png`;
var enquirySchema = objectType({
	name: stringType().trim().min(2, "Please enter your full name.").max(80),
	organization: stringType().trim().max(100),
	email: stringType().trim().email("Please enter a valid work email.").max(160),
	phone: stringType().regex(/^\d{6,15}$/, "Please enter a valid phone number."),
	message: stringType().trim().min(10, "Tell us a little more about your requirement.").max(1200)
});
function openAigisEnquiry(context = "Capability briefing") {
	window.dispatchEvent(new CustomEvent("aigis:open-enquiry", { detail: { context } }));
}
function EnquiryTrigger({ children, context, className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		onClick: () => openAigisEnquiry(context),
		className,
		...props,
		children
	});
}
function CountrySelect({ country, onChange }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const ref = (0, import_react.useRef)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const value = query.trim().toLowerCase();
		return value ? countries.filter((item) => item.name.toLowerCase().includes(value) || item.dial.startsWith(value.replace(/^\+/, ""))) : countries;
	}, [query]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const close = (event) => {
			if (ref.current && !ref.current.contains(event.target)) setOpen(false);
		};
		document.addEventListener("mousedown", close);
		return () => document.removeEventListener("mousedown", close);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative shrink-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			"aria-label": `Country code +${country.dial}`,
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			onClick: () => {
				setOpen((value) => !value);
				setQuery("");
			},
			className: "h-12 rounded-lg border border-line bg-sand/70 px-3 text-espresso hover:bg-sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: flagUrl(country.iso2),
					alt: "",
					className: "h-4 w-6 rounded-[2px] object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["+", country.dial] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 transition-transform", open && "rotate-180") })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-14 left-0 z-50 w-72 overflow-hidden rounded-xl border border-line bg-warm-white shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-line px-3 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-cocoa" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					"aria-label": "Search countries",
					autoFocus: true,
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Country or code",
					className: "w-full bg-transparent text-sm outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				role: "listbox",
				className: "aigis-enquiry-scroll max-h-48 overflow-y-auto p-1.5",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					role: "option",
					"aria-selected": item.iso2 === country.iso2,
					onClick: () => {
						onChange(item);
						setOpen(false);
					},
					className: "h-10 w-full justify-start rounded-md px-2 text-espresso hover:bg-sand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: flagUrl(item.iso2),
							alt: "",
							className: "h-4 w-6 rounded-[2px] object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 truncate text-left",
							children: item.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-cocoa",
							children: ["+", item.dial]
						})
					]
				}) }, item.iso2))
			})]
		})]
	});
}
function AigisEnquiryDialog() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [context, setContext] = (0, import_react.useState)("Capability briefing");
	const [country, setCountry] = (0, import_react.useState)(() => countries.find((item) => item.iso2 === "IN") ?? fallbackCountry);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		organization: "",
		email: "",
		phone: "",
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const show = (event) => {
			const detail = event.detail;
			setContext(detail?.context || "Capability briefing");
			setSubmitted(false);
			setOpen(true);
		};
		window.addEventListener("aigis:open-enquiry", show);
		return () => window.removeEventListener("aigis:open-enquiry", show);
	}, []);
	const update = (field) => (event) => setForm((current) => ({
		...current,
		[field]: event.target.value
	}));
	const submit = (event) => {
		event.preventDefault();
		const result = enquirySchema.safeParse({
			...form,
			phone: form.phone.replace(/\D/g, "")
		});
		if (!result.success) {
			const next = {};
			for (const issue of result.error.issues) {
				const field = issue.path[0];
				if ((field === "name" || field === "email" || field === "phone" || field === "message") && !next[field]) next[field] = issue.message;
			}
			setErrors(next);
			return;
		}
		setErrors({});
		setSubmitted(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "aigis-enquiry-scroll max-h-[94svh] w-[calc(100%-1.5rem)] max-w-3xl gap-0 overflow-y-auto border border-warm-white/25 bg-warm-white p-0 text-espresso shadow-2xl ring-1 ring-copper/60 ring-offset-4 ring-offset-espresso/0 shadow-copper/30 sm:rounded-2xl [&>button]:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "relative overflow-hidden border-t-4 border-copper bg-cocoa px-6 pb-8 pt-6 text-warm-white sm:px-9 sm:pb-10 sm:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "enquiry-header-grid absolute inset-0 opacity-35",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: aigis_logo_white_png_asset_default.url,
							alt: "AIGIS",
							className: "h-10 w-auto sm:h-12"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon",
							onClick: () => setOpen(false),
							"aria-label": "Close enquiry form",
							className: "rounded-full border border-warm-white/20 text-warm-white hover:bg-warm-white/10 hover:text-warm-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-10 sm:mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-light",
								children: context
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "mt-4 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl",
								children: "Start a focused conversation."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-3 max-w-xl text-base leading-7 text-warm-white/70",
								children: "Tell us what you operate and what the mission demands. We’ll respond with the right AIGIS capability path."
							})
						]
					})
				]
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid min-h-80 place-items-center p-8 text-center sm:p-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-auto grid size-14 place-items-center rounded-full bg-copper text-warm-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-2xl font-semibold",
						children: "Request received."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mx-auto mt-3 max-w-md leading-7 text-cocoa",
						children: [
							"Thank you, ",
							form.name.trim().split(" ")[0],
							". The AIGIS team will follow up at ",
							form.email.trim(),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => setOpen(false),
						className: "mt-7 h-12 rounded-full px-7",
						children: "Close"
					})
				] })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				noValidate: true,
				className: "grid gap-6 p-6 sm:grid-cols-2 sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full name",
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.name,
							onChange: update("name"),
							maxLength: 80,
							placeholder: "Your name",
							autoComplete: "name",
							className: "aigis-form-input"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Organization",
						optional: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.organization,
							onChange: update("organization"),
							maxLength: 100,
							placeholder: "Agency, prime or operator",
							autoComplete: "organization",
							className: "aigis-form-input"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Work email",
						error: errors.email,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: form.email,
							onChange: update("email"),
							maxLength: 160,
							placeholder: "you@organization.com",
							autoComplete: "email",
							className: "aigis-form-input"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						error: errors.phone,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountrySelect, {
								country,
								onChange: setCountry
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "tel",
								inputMode: "tel",
								value: form.phone,
								onChange: (event) => setForm((current) => ({
									...current,
									phone: event.target.value.replace(/[^\d\s()-]/g, "")
								})),
								maxLength: 18,
								placeholder: "98765 43210",
								autoComplete: "tel",
								className: "aigis-form-input min-w-0 flex-1"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mission or requirement",
						error: errors.message,
						className: "sm:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: form.message,
							onChange: update("message"),
							maxLength: 1200,
							rows: 3,
							placeholder: "Platform, mission, timelines, or the outcome you need.",
							className: "aigis-form-input h-auto resize-none py-3"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 border-t border-line pt-6 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs text-cocoa",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 text-copper" }), "Private, NDA-friendly correspondence."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "h-13 rounded-full bg-copper px-8 text-warm-white hover:bg-copper/90",
							children: ["Send request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					})
				]
			})]
		})
	});
}
function Field({ label, error, optional, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("grid gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-cocoa", className),
		children: [
			label,
			optional ? "" : " *",
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "normal-case tracking-normal text-copper",
				children: error
			})
		]
	});
}
//#endregion
export { cn as a, aigis_logo_white_png_asset_default as i, Button as n, openAigisEnquiry as o, EnquiryTrigger as r, AigisEnquiryDialog as t };
