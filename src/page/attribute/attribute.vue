<template>
    <div class="attribute-container">
        <div class="title"><span>attribute</span></div>
        <component :is="selectedControl"></component>
    </div>
</template>

<script>

    import attribute from '@/components/template/elementUI/controller/index'
    
    export default {
        data() {
            return {

            }
        },
        computed: {
            selectedControl () {
                if (this.$store.state.controls.length > 0 && this.$store.state.controls[this.$store.state.currentController.id].length > 0) {
                    let name = this.$store.state.controls[this.$store.state.currentController.id][this.$store.state.currentIndex].type
                    return attribute[name.charAt(0).toUpperCase() + name.slice(1)]
                }
                return attribute['Blank']
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