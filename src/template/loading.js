Vue.component('base-loading', {
	template: `
		<div class="Loading">
			<span></span>
			<span></span>
			<span></span>
			<p v-html="'loading...'"></p>
		</div>
	`
})