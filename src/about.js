import './stylus/about.styl'
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
			menu_index: 1,
			about: [
				data['about'],
				data['philosophy']
			],
			base_info: data['base_info']
		}
	},
	beforeCreate() {

	},
	mounted() {
	},
	methods: {
	},
	watch: {
	}
})