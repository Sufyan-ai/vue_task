<template>
    <v-text-field
         v-if="required"
        :label="label"
        :placeholder="placeholder"
        v-model="text"
        :required="required"
        :type="type"
        :hint="hint"
        :disabled="disabled"
        :solo="solo"
        :outlined="outlined"
        :filled="filled"
        :hide-details="hide_details"
        :rule="[v => !!v || rule]"
        :rules="[v => !!v || rule]"
        :error-messages="error_messages"
        v-mask="mask"
        :readonly="readonly"
        :prepend-icon="prepend_icon"
        :dense="dense"
        :dark="dark"
        @input="$emit('input')">
            <template v-slot:prepend v-if="prependicon_bool">
                <v-icon left>{{prependicon}}</v-icon>
            </template>
            <template v-slot:append v-if="appendicon_bool">
                <Button
                  :flat="true"
                  label=""
                  :icon="true"
                  :btnicon="appendicon"
                  @onClick="$emit('onClick')"
                />
            </template>
            <template v-slot:append v-if="appendicon_fa">
                <i :class="appendicon"></i>
            </template>
    </v-text-field>
    <v-text-field
         v-else
        :label="label"
        :placeholder="placeholder"
        v-model="text"
        
        :type="type"
        :hint="hint"
        :disabled="disabled"
        :solo="solo"
        :outlined="outlined"
        :filled="filled"
        :hide-details="hide_details"
        
        :error-messages="error_messages"
        v-mask="mask"
        :readonly="readonly"
        :prepend-icon="prepend_icon"
        :dense="dense"
        :dark="dark"
        @input="$emit('input')">
            <template v-slot:prepend v-if="prependicon_bool">
                <v-icon left>{{prependicon}}</v-icon>
            </template>
            <template v-slot:append v-if="appendicon_bool">
                <Button
                  :flat="true"
                  label=""
                  :icon="true"
                  :btnicon="appendicon"
                  @onClick="$emit('onClick')"
                />
            </template>
            <template v-slot:append v-if="appendicon_fa">
                <i :class="appendicon"></i>
            </template>
    </v-text-field>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
const Button = () => import('../buttons/Button.vue')
@Component({
    components:{
        Button,
    }
})
export default class TextField extends Vue {
    @Prop({default: ''}) readonly btnicon: string
    @Prop({default: ''}) readonly label: string
    @Prop({default: ''}) readonly placeholder: string
    @Prop({default: 'text'}) readonly type: string
    @Prop({default: 'undefined'}) readonly hint: string
    @Prop({default: null}) readonly prepend_icon: string
    @Prop({default: ''}) readonly rule: string
    // @Prop({default: ''}) readonly rules: string | Array<object>
    
    @Prop({default: null}) readonly mask: string
    @Prop({default: false}) readonly required: boolean
    @Prop({default: false}) readonly disabled: boolean
    @Prop({default: false}) readonly solo: boolean
    @Prop({default: false}) readonly outlined: boolean
    @Prop({default: false}) readonly filled: boolean
    @Prop({default: false}) readonly readonly: boolean
    @Prop({default: undefined}) readonly hide_details: string
    @Prop({default: ''}) readonly error_messages: string | Array<object>
    @PropSync('model') text!: any
    @Prop({default: false}) readonly dense: boolean
    @Prop({default: false}) readonly dark: boolean
    @Prop({default: false}) readonly prependicon_bool: boolean
    @Prop({default: ''}) readonly prependicon: string
    @Prop({default: false}) readonly appendicon_bool: boolean
    @Prop({default: false}) readonly appendicon_fa: boolean
    @Prop({default: ''}) readonly appendicon: string
}

</script>
