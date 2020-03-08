import * as Rsg from 'react-styleguidist/lib/typings'

/* eslint-disable import/prefer-default-export */

export interface Example extends Omit<Rsg.CodeExample, 'content'> {
	type: 'code'
	lang: string
	content: { raw: string; compiled: string } | string
	settings: { [key: string]: string }
	compiled?: string
}

export interface ExampleLoader extends Example {
	content: string
}
