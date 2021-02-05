/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@revolist/revogrid';


interface RevogrDataProps {
  
  /**  */
  readonly?: Components.RevogrData["readonly"]
  
  /**  */
  range?: Components.RevogrData["range"]
  
  /**  */
  canDrag?: Components.RevogrData["canDrag"]
  
  /**  */
  rowClass?: Components.RevogrData["rowClass"]
  
  /**  */
  rowSelectionStore?: Components.RevogrData["rowSelectionStore"]
  
  /**  */
  viewportRow?: Components.RevogrData["viewportRow"]
  
  /**  */
  viewportCol?: Components.RevogrData["viewportCol"]
  
  /**  */
  dimensionRow?: Components.RevogrData["dimensionRow"]
  
  /** Static stores, not expected to change during component lifetime */
  colData?: Components.RevogrData["colData"]
  
  /**  */
  dataStore?: Components.RevogrData["dataStore"]
}

interface RevogrDataEvents {
  
  /**  */
  dragStartCell: Parameters<JSX.RevogrData["onDragStartCell"]>[0]
}

interface RevogrDataSlots {
  default: any
}
  
/* generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let revogr_data;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			revogr_data = element("revogr-data");
			if (default_slot) default_slot.c();
			set_custom_element_data(revogr_data, "readonly", /*readonly*/ ctx[0]);
			set_custom_element_data(revogr_data, "range", /*range*/ ctx[1]);
			set_custom_element_data(revogr_data, "can-drag", /*canDrag*/ ctx[2]);
			set_custom_element_data(revogr_data, "row-class", /*rowClass*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, revogr_data, anchor);

			if (default_slot) {
				default_slot.m(revogr_data, null);
			}

			/*revogr_data_binding*/ ctx[16](revogr_data);
			current = true;

			if (!mounted) {
				dispose = listen(revogr_data, "dragStartCell", /*onEvent*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16384) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, null, null);
				}
			}

			if (!current || dirty & /*readonly*/ 1) {
				set_custom_element_data(revogr_data, "readonly", /*readonly*/ ctx[0]);
			}

			if (!current || dirty & /*range*/ 2) {
				set_custom_element_data(revogr_data, "range", /*range*/ ctx[1]);
			}

			if (!current || dirty & /*canDrag*/ 4) {
				set_custom_element_data(revogr_data, "can-drag", /*canDrag*/ ctx[2]);
			}

			if (!current || dirty & /*rowClass*/ 8) {
				set_custom_element_data(revogr_data, "row-class", /*rowClass*/ ctx[3]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(revogr_data);
			if (default_slot) default_slot.d(detaching);
			/*revogr_data_binding*/ ctx[16](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { readonly = undefined } = $$props;
	let { range = undefined } = $$props;
	let { canDrag = undefined } = $$props;
	let { rowClass = undefined } = $$props;
	let { rowSelectionStore = undefined } = $$props;
	let { viewportRow = undefined } = $$props;
	let { viewportCol = undefined } = $$props;
	let { dimensionRow = undefined } = $$props;
	let { colData = undefined } = $$props;
	let { dataStore = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(13, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function revogr_data_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("readonly" in $$props) $$invalidate(0, readonly = $$props.readonly);
		if ("range" in $$props) $$invalidate(1, range = $$props.range);
		if ("canDrag" in $$props) $$invalidate(2, canDrag = $$props.canDrag);
		if ("rowClass" in $$props) $$invalidate(3, rowClass = $$props.rowClass);
		if ("rowSelectionStore" in $$props) $$invalidate(6, rowSelectionStore = $$props.rowSelectionStore);
		if ("viewportRow" in $$props) $$invalidate(7, viewportRow = $$props.viewportRow);
		if ("viewportCol" in $$props) $$invalidate(8, viewportCol = $$props.viewportCol);
		if ("dimensionRow" in $$props) $$invalidate(9, dimensionRow = $$props.dimensionRow);
		if ("colData" in $$props) $$invalidate(10, colData = $$props.colData);
		if ("dataStore" in $$props) $$invalidate(11, dataStore = $$props.dataStore);
		if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, rowSelectionStore*/ 8256) {
			$: if (__mounted) setProp("rowSelectionStore", rowSelectionStore);
		}

		if ($$self.$$.dirty & /*__mounted, viewportRow*/ 8320) {
			$: if (__mounted) setProp("viewportRow", viewportRow);
		}

		if ($$self.$$.dirty & /*__mounted, viewportCol*/ 8448) {
			$: if (__mounted) setProp("viewportCol", viewportCol);
		}

		if ($$self.$$.dirty & /*__mounted, dimensionRow*/ 8704) {
			$: if (__mounted) setProp("dimensionRow", dimensionRow);
		}

		if ($$self.$$.dirty & /*__mounted, colData*/ 9216) {
			$: if (__mounted) setProp("colData", colData);
		}

		if ($$self.$$.dirty & /*__mounted, dataStore*/ 10240) {
			$: if (__mounted) setProp("dataStore", dataStore);
		}
	};

	return [
		readonly,
		range,
		canDrag,
		rowClass,
		__ref,
		onEvent,
		rowSelectionStore,
		viewportRow,
		viewportCol,
		dimensionRow,
		colData,
		dataStore,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		revogr_data_binding
	];
}

class RevogrData extends SvelteComponent {
  $$prop_def: RevogrDataProps;
  $$events_def: RevogrDataEvents;
  $$slot_def: RevogrDataSlots;

  $on<K extends keyof RevogrDataEvents>(type: K, callback: (e: RevogrDataEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<RevogrDataProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			readonly: 0,
			range: 1,
			canDrag: 2,
			rowClass: 3,
			rowSelectionStore: 6,
			viewportRow: 7,
			viewportCol: 8,
			dimensionRow: 9,
			colData: 10,
			dataStore: 11,
			getWebComponent: 12
		});
	}

	get getWebComponent(): HTMLRevogrDataElement | undefined {
		return this.$$.ctx[12];
	}
}

export default RevogrData;