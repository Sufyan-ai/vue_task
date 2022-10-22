<template>
    <v-autocomplete
        v-if="required"
        v-model="text"
        :items="items"
        :item-text="item_text"
        :item-value="item_value"
        v-on:input="$emit('change')"
        :label="label"
        :hide-details="hide_details"
        :required="required"
        :return-object="return_object"
        :chips="chips"
        :small-chips="small_chips"
        :multiple="multiple"
        :disabled="disabled"
        :solo="solo"
        :rules="[v => !!v || rule]"
        :error-messages="error_messages"
        :filled="filled"
        :dense="dense"
        :dark="dark"
        :outlined="outlined"
        :prepend-icon="prepend_icon"
        :readonly="readonly"
    ></v-autocomplete>
    <v-autocomplete
        v-else
        v-model="text"
        :items="items"
        :item-text="item_text"
        :item-value="item_value"
        v-on:input="$emit('change')"
        :label="label"
        :hide-details="hide_details"
        :return-object="return_object"
        :chips="chips"
        :small-chips="small_chips"
        :multiple="multiple"
        :disabled="disabled"
        :solo="solo"
        
        :error-messages="error_messages"
        :filled="filled"
        :dense="dense"
        :dark="dark"
        :outlined="outlined"
        :prepend-icon="prepend_icon"
        :readonly="readonly"
    ></v-autocomplete>
</template>


<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
@Component
// export default class TextField extends Vue {
export default class Autocomplete extends Vue {
    @Prop({default: 'text'}) readonly item_text: string
    @Prop({default: 'value'}) readonly item_value: string
    @Prop({default: 'Select option'}) readonly label: string
    @Prop({default: false}) readonly required: object
    @Prop({default: false}) readonly return_object: object
    @Prop({default: []}) readonly items: Array<object>
    @PropSync('model') text!: string|number
    // @Prop({default: ()=>{}}) readonly onChange: Function
    @Prop({default: false}) readonly chips: boolean
    @Prop({default: false}) readonly small_chips: boolean
    @Prop({default: false}) readonly multiple: boolean
    @Prop({default: false}) readonly solo: boolean
    @Prop({default: ''}) readonly rule: string
    @Prop({default: false}) readonly disabled: boolean
    @Prop({default: ''}) readonly error_messages: string | Array<object>
    @Prop({default: false}) readonly filled: boolean
    @Prop({default: false}) readonly dense: boolean
    @Prop({default: false}) readonly dark: boolean
    @Prop({default: false}) readonly outlined: boolean
    
    @Prop({default: false}) readonly readonly: boolean
    
    // @Prop({default: ''}) readonly prepend_icon: string | Array<object>
    @Prop({default: ''}) readonly prepend_icon: string
    @Prop({default: undefined}) readonly hide_details: string
}

</script>
