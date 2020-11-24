<template>
  <div class="counter">
    <button @click.prevent="remove"><p>-</p></button>
    <input type="number" v-model.number="num" :min="min">
    <button @click.prevent="add"><p>+</p></button>
  </div>
</template>

<script>
export default {
    name: 'Counter', 
    props: {
        modelValue: Number,
        max: {
            type: Number,
            default: 10
        },
        min: {
            type: Number,
            default: 0
        }
    },
    data: ()=>({
        num: 0
    }),
    created() {
        this.num = this.modelValue
    },
    watch: {
        num() {
            if(this.num > this.max || this.num < this.min) this.num = 0
            this.changeNum(this.num)
        }
    },
    methods: {
        changeNum(num) {
            this.$emit('update:modelValue', num)
        },
        add() {
            if (this.num < this.max) this.num++
        },
        remove() {
            if (this.num > this.min) this.num--
        }
    }
}
</script>

<style lang="scss">

.counter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;

    button {
        border: 1px solid #828282;
        border-radius: 4px;
        color: #828282;
        min-width: 1.5rem;
        min-height: 1.5rem;
        background: #FFFFFF;
    }

    input {
        width: 100%;
        border: none;
        text-align: center;

        &:focus {
            outline: none;
        }
    }
}
</style>