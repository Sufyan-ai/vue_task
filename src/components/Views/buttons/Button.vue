<template>
    <v-btn 
        :icon="icon"
        :text="text"
        :outlined="outlined"
        :type="type"
        :small="small"
        :color="color"
        :height="height"
        :loading="loading"
        :style="styles"
        :elevation="elevation"
        :disabled="disabled"
        @click="$emit('onClick')">
        <div v-if="iconleft">
            <v-icon left :style="iconstyle" :class="iconclass">{{btnicon}}</v-icon>
        </div>
        {{label}}
        <div v-if="iconright">
            <v-icon right :style="iconstyle" :class="iconclass">{{btniconright}}</v-icon>
        </div>
    <div v-if="icon">
        <v-icon :small="small" :style="iconstyle">{{btnicon}}</v-icon>
    </div>
    </v-btn>
</template>


<script lang="ts">
import { Component, Vue, Prop, PropSync } from 'vue-property-decorator'
@Component
export default class Button extends Vue {
    @Prop({default: 'Button'}) readonly label: string
    @Prop({default: ''}) readonly btnicon: string
    @Prop({default: ''}) readonly btniconright: string
    @Prop({default: 'button'}) readonly type: string
    @Prop({default: 'primary'}) readonly color: string
    // @Prop({default: 'undefined'}) readonly color: string
    @Prop({default: ''}) readonly height: string
    @Prop({default: 'undefined'}) readonly elevation: string
    
    @Prop({default: ()=>{}}) readonly styles: string
    @Prop({default: ''}) readonly iconstyle: string
    @Prop({default: ''}) readonly iconclass: string
    @Prop({default: false}) readonly flat: boolean
    @Prop({default: false}) readonly text: boolean
    @Prop({default: false}) readonly disabled: boolean
    @Prop({default: false}) readonly outlined: boolean
    @Prop({default: false}) readonly icon: boolean
    @Prop({default: false}) readonly loading: boolean
    // @Prop({default: ()=>{}}) readonly onClick: Function
    @Prop({default: false}) readonly small: boolean
    // @Prop({default: false}) readonly darkicon: boolean
    @Prop({default: false}) readonly iconleft: boolean
    @Prop({default: false}) readonly iconright: boolean
    
}

</script>
