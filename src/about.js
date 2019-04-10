import './stylus/about.styl'
import './stylus/media.styl'
import {data} from './data/data.js'

import './template/loading.js'
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
	mounted() {
		// var self = this
		// setTimeout(function(){
		// 	self.menu = data['menu']
		// },1800)
	},
	methods: {
	},
	watch: {
	}
})