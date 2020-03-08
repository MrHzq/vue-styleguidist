import {
	PropDescriptor,
	MethodDescriptor,
	SlotDescriptor,
	EventDescriptor,
	BlockTag
} from 'vue-docgen-api'
import * as b from '@babel/types'
import * as Rsg from 'react-styleguidist/lib/typings'
import { Example } from './Example'

export interface ComponentProps {
	displayName: string
	description?: string
	props?: PropDescriptor[]
	methods?: MethodDescriptor[]
	slots?: { [name: string]: SlotDescriptor }
	events?: { [name: string]: EventDescriptor }
	tags?: {
		[key: string]: BlockTag[]
	}
	docsBlocks?: string[]
	visibleName?: string
	examplesFile?: string
	examples?: { require: string; toAST: () => b.Node } | Example[] | null
	example?: Example[][]
}

export interface Component extends Omit<Rsg.Component, 'props'> {
	props: ComponentProps
}
