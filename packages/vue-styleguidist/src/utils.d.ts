/* eslint-disable import/no-duplicates */
/* eslint-disable import/prefer-default-export */

declare module 'glogg' {
	interface GloggLogger {
		debug(msg: string): void
		info(msg: string): void
		warn(msg: string): void
		error(msg: string): void
		on(event: string | symbol, listener: (...args: any[]) => void): void
	}
	function getLogger(namespace: string): GloggLogger
	export = getLogger
}

declare namespace NodeJS {
	interface Global {
		VUE_STYLEGUIDIST: Record<string, string>
	}
}

declare module 'lru-cache' {
	class LRUCache {
		constructor(num: number)
		get(key: string): any
		set(key: string, obj: any): void
	}
	export = LRUCache
}

declare module 'hash-sum' {
	function makehash(key: any): string
	export = makehash
}

declare module 'mini-html-webpack-plugin' {
	import { Plugin, loader } from 'webpack'

	class HtmlPlugin extends Plugin {
		constructor(options: any)
	}

	export = HtmlPlugin
}

declare module '@vxna/mini-html-webpack-template' {
	function template(...args: any[]): string
	export = template
}

declare module 'findup' {
	const findup: {
		sync(cwd: string, path: string): string
	}
	export = findup
}

declare module 'to-ast' {
	function toAst(input: any): any
	export = toAst
}

declare module 'common-dir' {
	function commonDir(paths: string[]): string
	export = commonDir
}

declare module 'css-loader' {
	import { loader as cssLoader } from 'webpack'

	const myLoader: cssLoader.Loader
	export = myLoader
}

declare module 'style-loader' {
	import { loader as styleLoader } from 'webpack'

	const myLoader: styleLoader.Loader
	export = myLoader
}

declare module 'q-i' {
	export const stringify: (obj: any) => string
}

declare module 'github-slugger' {
	class Slugger {
		reset(): void
		slug(input: string): string
	}
	export = Slugger
}

/// <reference types="node" />
declare module 'react-docgen' {
	import { Tag, Type } from 'doctrine'
	import { ASTNode } from 'ast-types'
	import { NodePath } from 'ast-types/lib/node-path'

	type Handler = (documentation: Documentation, path: NodePath) => void
	interface Documentation {
		addComposes(moduleName: string): void
		set(key: string, value: any): void
		get(key: string): any
		getPropDescriptor(propName: string): PropDescriptor
		getContextDescriptor(propName: string): PropDescriptor
		getChildContextDescriptor(propName: string): PropDescriptor
		toObject(): DocumentationObject
	}
	interface TagObject extends Omit<Tag, 'description'> {
		description?: string
	}
	interface TagParamObject extends TagObject {
		name: string
		type?: Type | null
		default?: string
	}
	interface TagProps {
		deprecated?: TagObject[]
		see?: TagObject[]
		link?: TagObject[]
		author?: TagObject[]
		version?: TagObject[]
		since?: TagObject[]
		returns?: TagParamObject[]
		return?: TagParamObject[]
		arg?: TagParamObject[]
		argument?: TagParamObject[]
		param?: TagParamObject[]
		[title: string]: TagObject[] | undefined
	}
	interface PropTypeDescriptor {
		name:
			| 'arrayOf'
			| 'custom'
			| 'enum'
			| 'array'
			| 'bool'
			| 'func'
			| 'number'
			| 'object'
			| 'string'
			| 'any'
			| 'element'
			| 'node'
			| 'symbol'
			| 'objectOf'
			| 'shape'
			| 'exact'
			| 'union'
			| 'instanceOf'
			| 'elementType'
		value?: any
		raw?: string
		computed?: boolean
		description?: string
		required?: boolean
	}
	interface PropDescriptor {
		name: string
		type?: PropTypeDescriptor
		required?: boolean
		defaultValue?: any
		description?: string
		tags?: TagProps
	}
	interface MethodDescriptor {
		name: string
		description?: string
		docblock?: string
		returns?: {
			name: string
			[key: string]: any
		} | null
		params?: any[]
		modifiers?: string[]
		tags?: TagProps
	}
	interface DocumentationObject {
		displayName?: string
		description?: string
		tags?: TagProps
		props?: {
			[propName: string]: PropDescriptor
		}
		methods?: MethodDescriptor[]
		context?: {
			[constextName: string]: PropDescriptor
		}
		childContext?: {
			[chilCOntextName: string]: PropDescriptor
		}
		composes?: string[]
	}
	interface Options {
		filename?: string
		cwd?: string
		babelrc?: string
		babelrcRoots?: boolean | string | string[]
		root?: string
		rootMode?: 'root' | 'upward' | 'upward-optional'
		configFile?: string
		envName?: string
	}
	const defaultHandlers: Handler[]
	/**
	 * Parse the components at filePath and return props, public methods, events and slots
	 * @param filePath absolute path of the parsed file
	 * @param opts
	 */
	function parse(
		source: string | Buffer,
		resolver?: (
			ast: ASTNode,
			parser: {
				parse: (code: string) => ASTNode
			}
		) => NodePath<any, any> | NodePath[],
		handlers?: Handler[],
		options?: Options
	): DocumentationObject | DocumentationObject[]
	const utils: {
		docblock: {
			getDoclets: (str?: string) => Record<string, any>
		}
	}
	const resolver: {
		findAllComponentDefinitions(ast: ASTNode): NodePath[]
		findAllExportedComponentDefinitions(
			ast: ASTNode,
			recast: {
				visit: (
					path: NodePath,
					handlers: {
						[handlerName: string]: () => boolean | undefined
					}
				) => void
			}
		): NodePath[]
		findExportedComponentDefinition(ast: ASTNode): NodePath | undefined
	}
}
declare module 'react-docgen-displayname-handler' {
	import { NodePath as DisplaNameHandlerNodePath } from 'ast-types/lib/node-path'
	import { Documentation } from 'react-docgen'

	type Handler = (documentation: Documentation, path: DisplaNameHandlerNodePath) => void
	function createDisplayNameHandler(componentPath: string): Handler
}

declare module 'react-docgen-annotation-resolver' {
	import { ASTNode as AnnoASTNode } from 'ast-types'
	import { NodePath as AnnoNodePath } from 'ast-types/lib/node-path'

	function annotationResolver(
		ast: AnnoASTNode,
		recast: {
			visit: (
				node: AnnoNodePath,
				handlers: {
					[handlerName: string]: () => boolean | undefined
				}
			) => void
		}
	): AnnoNodePath[]
	export = annotationResolver
}
