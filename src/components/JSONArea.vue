<template>
    <div class="area">
        <JSONRow v-for="(row, title) in json"
                 :key="title"
                 :title="title"
                 :content="row"
                 :row-id="title"
                 @inputHandler="input">
            <JSONArea v-if="typeof row[0] !== 'string'" :json="row"/>
        </JSONRow>
    </div>
</template>

<script>
    import JSONRow from "@/components/JSONRow";

    export default {
        name: "JSONArea",
        components: {JSONRow},
        props: {
            json: Object
        },
        methods: {
            input(id, payload) {
                console.log(id)
                this.json[id] = payload
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>