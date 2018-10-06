<template>
    <div class="attribute-container">
        <div class="title"><span>attribute</span></div>
        <component :is="selectedControl"></component>
    </div>
</template>

<script>
    import blankAttribute from '@/components/elementUI/attribute/blank.vue'
    import buttonAttribute from '@/components/elementUI/attribute/elButton.vue'
    import radioAttribute from '@/components/elementUI/attribute/elRadio.vue'
    import switchAttribute from '@/components/elementUI/attribute/elSwitch.vue'

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
                if (this.$store.state.selectedControlsAttributes.length > 0) {
                    let name = this.$store.state.selectedControlsAttributes[this.$store.state.selectedIndex].name
                    let names = name.split('-')
                    // console.log(this.$store.state.selectedIndex, names[names.length - 1] + 'Attribute')
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