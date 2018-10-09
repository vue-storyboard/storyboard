<template>
    <div class="attribute-container">
        <div class="title"><span>attribute</span></div>
        <component :is="selectedControl"></component>
    </div>
</template>

<script>
    import blankAttribute from '@/components/template/elementUI/attribute/blank.vue'
    import buttonAttribute from '@/components/template/elementUI/attribute/button.vue'
    import radioAttribute from '@/components/template/elementUI/attribute/radio.vue'
    import switchAttribute from '@/components/template/elementUI/attribute/switch.vue'

    export default {
        data() {
            return {

            }
        },
        components: {
            buttonAttribute,
            radioAttribute,
            blankAttribute,
            switchAttribute
        },
        computed: {
            selectedControl () {
                if (this.$store.state.controls.length > 0) {
                    let name = this.$store.state.controls[this.$store.state.currentIndex].name
                    let names = name.split('-')
                    return names[names.length - 1] + 'Attribute'
                }
                return blankAttribute
            }
        }
    }
</script>

<style scoped>
    .attribute-container {
        background-color: #eeeeee;
        height: 50%;
    }
    .attribute-container .title {
        color: black;
        font-size: 18px;
        border-bottom: 1px solid #dddddd;
        height: 5%;
    }
</style>