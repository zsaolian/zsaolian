// import "./stylus/reset.styl"
// import "./stylus/config.styl"
import './stylus/common.styl'
import './stylus/projects.styl'
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
			menu_index: 2,
			projects: data['projects'],
			project_index: 0,
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
		proHover(i){
			this.project_index = i
		},
	},
	watch: {
	}
})