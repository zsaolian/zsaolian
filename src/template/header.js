Vue.component('base-header', {
	props: ['base_info', 'menus', 'menu_index'],
	template: `
		<section class="header">
			<div id="Top">
				<div class="wrap">{{base_info['phone']}} &nbsp;&nbsp;&nbsp;&nbsp; {{base_info['email']}}</div>
			</div>
			<div class="wrap">
				<h1 class="logo" :title="base_info['company']"><a href="/"></a>{{base_info['company']}}</h1>
				<ul class="menu">
					<li v-for='m,i in menus'>
						<a v-html='m.title' :href="m.link" :class="i === menu_index? 'Stand': ''"></a>
					</li>
				</ul>
			</div>
		</section>
	`
})