import SlotData from './slot-data.vue';
export default {
    name: 'hello-world',
    components: {
        SlotData
    },
    data() {
        return {
            showHello: true,
            hello: 'hello from child 121212'
        }
    },
    props: {
        msg: String
    },
    methods: {
        handleClick(data) {
            console.log(data);
        }
    },
    mounted() {
        console.log(this.$slots);
        console.log(this.$scopedSlots);
    },
    render: function (createElement) {
        return createElement('div', {
            class: {
                hello: this.showHello
            },
            style: {
                fontSize: '18px',
                color: 'blue'
            },
            attrs: {
                id: 'hello'
            },
            on: {
                click: (event) => {
                    console.log(event);
                    this.handleClick('12121')
                }
            }
        },
        [
            this.msg,
            this.$slots.default ? this.$slots.default : createElement('div', '我是插槽的默认内容'),
            this.$scopedSlots.hello({
                text: this.hello
            }),
            this.$scopedSlots.default(),
            createElement('slot-data', {
                scopedSlots: {
                    default: ({ data }) => createElement('span', data)
                }
            })
        ])
    }
}