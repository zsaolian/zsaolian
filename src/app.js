import './stylus/index.styl'
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
			menu_index: false,
			about: data['about'],
			projects: data['projects'],
			project_index: 0,
			serves: data['serves'],
			serves_index: 0,
			philosophy: data['philosophy'],
			partner: data['partner'],
			partner_list_length: data['partner'].list.length,
			partner_list_index: 0,
			form: data['form'],
			base_info: data['base_info']
		}
	},
	beforeCreate() {

	},
	mounted() {
	},
	methods: {
		proHover(i){
			this.project_index = i
		},
		servesClick(i){
			this.serves_index = i
		},
		showPartner(position){
			// console.log(position)
			if(position === 'right' && this.partner_list_index < this.partner_list_length-2){
				this.partner_list_index ++
			}else if(position === 'left' && this.partner_list_index !== 0){
				this.partner_list_index --
			}
			// console.log(this.$refs.partnerList)
			this.$refs.partnerList.style.left = -450*this.partner_list_index + 'px'
		}
	},
	watch: {
	}
})