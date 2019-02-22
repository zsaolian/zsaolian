import './stylus/serves.styl'
import './stylus/media.styl'
import {data} from './data/data.js'


import './template/header.js'
import './template/banner.js'
import './template/footer.js'


var app = new Vue({
	el: '#app',
	data() {
		return {
			menu: data['menu'],
			menu_index: 3,
			serves: data['serves'],
			serves_index: 0,
			base_info: data['base_info']
		}
	},
	beforeCreate() {

	},
	mounted() {
	},
	methods: {
		servesClick(i){
			this.serves_index = i
		},
	},
	watch: {
	}
})