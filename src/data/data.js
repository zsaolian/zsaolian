
var menu = [
		{
			title: '首页',
			link: 'index.html'
		},
		{
			title: '关于我们',
			link: 'about.html'
		},
		{
			title: '产品服务',
			link: 'projects.html'
		},
		{
			title: '服务范围',
			link: 'serves.html'
		},
		{
			title: '业务流程',
			link: 'process.html'
		},
		{
			title: '联系我们',
			link: 'javascript:void(0)'
		}
	]
var base_info = {
	email: 'info@cx-m.com',
	phone: '0760-2360 8918'
}

export var data = {
	menu: menu,
	about: {
		title: '公司简介',
		title_en: 'information',
		des: [
			'傲联文化策划（中山）有限公司成立于2012年，从最初单一的文化策划型企业向多元化运营的产业链跨度，构建了一整条完整的经济链条，研发、生产到品牌运营、终端销售，傲联始终坚持自我优势，纵向剖析国内服装市场，建立数据化管理体系，结合市场需求引导时尚消费，长期的积淀使傲联成为行业里具有代表性的一流高端品牌运营商。',
			'不忘初心，方得始终。对内重视构建员工的发展平台，对外敢于担当社会责任，关爱弱势群体；在经营链条中，与供应商坚持诚信合作的原则，对顾客提供专业专注的专属服务；致力于通过前瞻的时尚理念和适合自身发展的经营系统，为女性创造关于美与品质的时尚体验。'
		]
	},
	projects: {
		list: [
			{
				project: '服装物联项目',
				des: [
					'傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。',
					'消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。',
					'这是服装产业以物联网模式重构产业结构的一次新的机遇。'
				]
			},
			{
				project: '买手企划',
				des: [
					'作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。',
					'在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。'
				]
			},
			{
				project: '合作线上线下高端零售平台',
				des: [
					'在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。',
					'作为市场一线的销售人员，与顾客的接触颇为深厚，对时尚和款式具有一定程度的了解。正因如此，极其注重产品研发创意来源的傲联公司，特别针对一线销售人员，制定了买手激励企划，鼓励销售人员参与款式推介与产品评定会，并将自身的意见与顾客的反馈融入到研发生产的过程之中。'
				]
			}
		]
	},
	serves: {
		title: '服务范围',
		title_en: 'our serves',
		list: [
			{
				title: '服装贸易',
				des: [
					'傲联服装物联采用宽网物联技术，以大量的标注服装，时时反映消费者对服装明确的需求信息。品牌服装企业因此可以清晰的了解核心消费者（俗称VIP客户）需求，为核心消费者提供极度个性化的专属服务（如：私享价、私享购、私享搭等），建立品牌与核心消费者之间的牢固亲密关系。',
					'消费者具有明确的服装需求后，以傲联积分为基础，建立起来的通证体系，将发挥重塑服装产业模式的作用。建立由需求，到大批量生产，零库存无尾货的全新服装产业模式。',
					'这是服装产业以物联网模式重构产业结构的一次新的机遇。'
				]
			},
			{
				title: '品牌合作',
				subtitle: '合作设计师',
				des: [
					'在买手企划的激励下，销售人员开始向陈列师、培训师、买手等方面多向发展，个人时尚鉴赏能力得到了提升，销售业绩有了大幅度的增长。',
				],
				brands: [
					// 'file:///D:/projects/zsaolian.com/dist/images/icons/0cc47dc5d9fbf29f7146f536bf8805f4.png',
					'logo_pm.jpg',
					'logo_sandhana.jpg',
					'logo_wanhung.jpg',
					'logo_minnanhui.jpg',
				]
			},
			{
				title: '食品贸易',
				des: [
					'由于网络的迅猛发展，越来越多的国产食品问题被曝光，加之中产阶层的大量产生，都推动了进口食品的迅猛发展。中国已成为美国在全球的第四大农产品出口市场，中国市场从早期的进口乳制品，酒类，到目前的食用油、粮食、肉类、饼干、零食的进口都在不断增加，以天然、绿色、保真品质为代表的进口食品将迎来高速发展期，选购进口食品或节日采购或馈赠亲友，已经成为当今社会风尚。',
					'公司本着“平等互利、真诚合作”的宗旨，与国内大型供应链管理企业建立了战略合作伙伴关系，公司依托丰富的项目资源，高效的管理团队，专业的操作经验，周到细致的服务，为中国消费者提供安全、优质的食品，药品以及保健品。'
				],
				other: [
					{
						title: '战略合作伙伴',
						imgUrl: 'src/images/serves/PAGE5_SHINEWA.jpg'
					},
					{
						title: '资质荣耀',
						imgUrl: 'src/images/serves/honor.png'
					}
				]
			},
			{
				title: '儿童及亲子产品系列',
				des: [
					'<span style="font-weight:bold;font-size:1.3em;display:block;margin-bottom:10px;">COMMING SOON</span>即将面试敬请期待。',
				]
			}
		]
	},
	philosophy: {
		title: '企业理念',
		title_en: 'corporate philosophy',
		des: [
			'一直坚持“恪守信誉、以人为本”的经营理念，“服务至上、质量第一”的管理信念，在国内外打下坚实的社会基础，致力成为中国知名专业品牌。',
			'我们一直追求专业化发展道路，始终秉持“质量第一，客户至上，开拓创新求发展”的运营方针，通过持续改进，用我们的专业化服务帮助客户创造更高的价值。',
			'我们相信，通过我们的不断努力和追求，一定能够实现与客户的互利共赢！'
		]
	},
	partner: {
		title: '品牌合作 -- 合作设计师',
		title_en: 'cooperative partner',
		list: [
			{
				brand: 'wanhung',
				picture: 'WANHUNG.jpg',
				des: ''
			},
			{
				brand: 'perfect moment',
				picture: 'PM.jpg',
				des: ''
			},
			{
				brand: 'sandhana',
				picture: 'sandhana.jpg',
				des: ''
			},
			{
				brand: 'shinewa',
				picture: 'SHINEWA.jpg',
				des: ''
			},
			{
				brand: 'minnanhui',
				picture: 'minnanhui.jpg',
				des: ''
			},
		]
	},
	form: {
		title: '联系我们',
		title_en: 'contact us',
		welcome: [
			'Hello，你好！',
			'感谢你来到傲联文化策划（中山），若你能有合作意向，请您为我们留言或者使用以下方式联系我们，我们将尽快给你回复，并为你提供真诚的服务，谢谢！',
			base_info.email,
			base_info.phone,
			'广东省中山市三乡镇鸦岗工业区',
		],
		table: [
			{
				title_cn: '名字',
				title_en: 'name',
				type: 'input',
				tip: '请输入您的名字',
				content: ''
			},
			{
				title_cn: '电话',
				title_en: 'phone',
				type: 'input',
				tip: '请输入您的电话',
				content: ''
			},
			{
				title_cn: '邮箱',
				title_en: 'email',
				type: 'input',
				tip: '请输入您的邮箱',
				content: ''
			},
			{
				title_cn: '描述',
				title_en: 'descript',
				type: 'textarea',
				tip: '请以30字以上描述您对网站的建议或看法，并且您的描述越详细越有利于我们能快速理解并且及时改善',
				content: ''
			}
		],
		button_text: '提交'
	},
	base_info: {
		email: '电子邮箱：'+ base_info.email,
		phone: '联系电话：'+ base_info.phone,
		filing: '粤ICP备 160108585号 - 1',
		company: '傲联文化策划（中山）有限公司'
	}
}