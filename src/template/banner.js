Vue.component('base-banner', {
	props: ['about'],
	template: `
		<section class="Banner">
			<div v-if="about" class="wrap">
				<h5 v-html='about.title'></h5>
				<h6 v-html='about.title_en'></h6>
				<p v-html='about.des[0]'></p>
			</div>
		</section>
	`
})