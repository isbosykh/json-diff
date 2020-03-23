<template>
    <div class="view-main">
        <h1>json-diff</h1>
        <div class="areas">
            <div class="left">
                <input type="file" @change="inputFile($event, 'left')">
                <JSONArea :json="jsons.left"/>
            </div>
            <div class="right">
                <input type="file" @change="inputFile($event, 'right')">
                <JSONArea :json="jsons.right"/>
            </div>
        </div>
    </div>
</template>

<script>
    import JSONArea from "@/components/JSONArea";

    export default {
        name: "ViewMain",
        components: {JSONArea},
        data() {
            return {
                jsons: {
                    left: {},
                    right: {}
                }
            }
        },
        methods: {
            inputFile(e, pos) {
                const file = e.target.files[0]
                const reader = new FileReader()

                reader.readAsText(file)
                reader.onload = () => {
                    this.jsons[pos] = JSON.parse(reader.result)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .view-main {
        @include flex-vertical;
        height: 100%;
        align-items: center ;
        justify-content: flex-start;

        .areas {
            width: 100%;
            margin: 0 2rem;
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
        }

        .left,
        .right {
            height: 100%;
            @include flex-vertical;
            justify-items: flex-start;
        }
    }
</style>