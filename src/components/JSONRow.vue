<template>
    <div :class="{'closed': treeClosed}" class="tree-node">
        <label class="checkbox" @change="treeClosed = !treeClosed">
            <input type="checkbox"/>
            <span v-if="treeClosed">+</span>
            <span v-else>-</span>
        </label>
        {{title}}:
        <div v-if="typeof content === 'string' && !treeClosed"
             @blur="updateInput"
             contenteditable="true"
             class="text">
            {{content}}
        </div>
        <div v-if="typeof content === 'object' && !treeClosed" class="nodes">
            {
                <slot></slot>
            }
        </div>
    </div>
</template>

<script>
    export default {
        name: "JSONRow",
        props: ['title', 'content'],
        data() {
            return {
                treeClosed: false
            }
        },
        methods: {
            updateInput(e) {
                this.$emit('inputHandler', this.title, e.target.innerText)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tree-node {
        width: 400px;
        display: flex;
        flex-grow: 1;
        margin-left: 1rem;
        position: relative;
        align-items: flex-start;

        &.closed {
            > .checkbox {
                input:checked + span {
                    content: '-';
                }
            }
        }

        > .checkbox {
            > input {
                display: none;
            }

            > span {
                left: -1rem;
                width: 1rem;
                height: 1rem;
                display: flex;
                cursor: pointer;
                position: absolute;
                align-items: center;
                justify-content: center;

                &:after {
                    position: absolute;
                    content: '';
                    border: 1px solid gray;
                    width: .5rem;
                    height: .5rem;
                    border-radius: .1rem;
                }
            }
        }

        .text {
            width: 100%;
            text-align: left;
            margin-left: .5rem;
            height: max-content;
        }

        .nodes {
            text-align: left;
            margin-left: .5rem;
        }
    }
</style>