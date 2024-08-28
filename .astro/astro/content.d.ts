declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"post": {
"concepts/creative-programming-p5/index.md": {
	id: "concepts/creative-programming-p5/index.md";
  slug: "concepts/creative-programming-p5";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"concepts/creative-writing/ink/index.md": {
	id: "concepts/creative-writing/ink/index.md";
  slug: "concepts/creative-writing/ink";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"concepts/genetic-algorithms/index.md": {
	id: "concepts/genetic-algorithms/index.md";
  slug: "concepts/genetic-algorithms";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"concepts/technical-interview/index.md": {
	id: "concepts/technical-interview/index.md";
  slug: "concepts/technical-interview";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"concepts/workshop-of-workshops/index.md": {
	id: "concepts/workshop-of-workshops/index.md";
  slug: "concepts/workshop-of-workshops";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"examples/cover-image/index.md": {
	id: "examples/cover-image/index.md";
  slug: "examples/cover-image";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"examples/draft-post.md": {
	id: "examples/draft-post.md";
  slug: "examples/draft-post";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"examples/social-image.md": {
	id: "examples/social-image.md";
  slug: "examples/social-image";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"examples/webmentions/index.md": {
	id: "examples/webmentions/index.md";
  slug: "examples/webmentions";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"markdown-elements/index.md": {
	id: "markdown-elements/index.md";
  slug: "markdown-elements";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"robotics/24-LEGO-Spike/index.md": {
	id: "robotics/24-LEGO-Spike/index.md";
  slug: "robotics/24-lego-spike";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"robotics/VEX-OLY-24/index.md": {
	id: "robotics/VEX-OLY-24/index.md";
  slug: "robotics/vex-oly-24";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
"robotics/VEX-OLY-24/retro.md": {
	id: "robotics/VEX-OLY-24/retro.md";
  slug: "robotics/vex-oly-24/retro";
  body: string;
  collection: "post";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}