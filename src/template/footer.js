Vue.component('base-footer', {
	props: ['base_info'],
	template: `
		<section class="footer">
			<div class="wrap">
				<span v-for="f in base_info" v-html="f"></span>
			</div>
		</section>
	`
})