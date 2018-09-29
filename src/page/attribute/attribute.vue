<template>
    <div class="attribute-container">
        <div class="title"><span>attribute</span></div>
        <elButtonAttribute></elButtonAttribute>
    </div>
</template>

<script>
    import elementButton from '@/components/elementUI/el-button.vue'
    import elButtonAttribute from '@/components/Hello-World.vue'

    export default {
        data() {
            return {
                types: elementButton.button.types,
                styles: elementButton.button.styles,
                sizes: elementButton.button.sizes,
                icons: elementButton.button.icons,
                value: ''
            }
        },
        components: {
            elButtonAttribute,
        },
        computed: {
            // selectedIndex: {
            //     get () {
            //         return this.$store.state.selectedIndex
            //     }
            // },
            // selectedControlAttribute: {
            //     get () {
                    
            //         if (this.$store.state.selectedControlsAttributes.length > 0) {
            //             // console.log(this.$store.state.selectedControlsAttributes)
            //             return this.$store.state.selectedControlsAttributes[this.$store.state.selectedIndex].attribute
            //         }
            //         return {}
            //     }
            // },
        },
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