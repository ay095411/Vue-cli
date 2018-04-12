import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/demo/home'
import News from '@/components/demo/news'
import Mine from '@/components/demo/mine'
import Left from '@/components/demo/left'
import Right from '@/components/demo/right'
import rightChildren from '@/components/demo/childern/right-childern'

Vue.use(Router)

export default new Router({
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
	mode: 'history',
	routes: [{
			path: '/',
			redirect: 'home'
		},
		{
			path: '/',
			name: 'Hello',
			component: Hello,
			meta: {
				title: 'Hello'
			}
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			meta: {
				title: '首页'
			}
		},
		{
			path: '/news',
			name: 'News',
			component: News,
			meta: {
				title: '新闻'
			}
		},
		{
			path: '/mine',
			component: Mine,
			children: [{
					path: '/',
					redirect: 'left'
				},
				{
					path: "left",
					name: 'left',
					component: Left,
					meta: {
						title: '我的/左边'
					}
				},
				{
					path: 'right',
					name: 'right',
					component: Right,
					meta: {
						title: '我的/右边'
					}
				}
			]
		},
		{
			path: '/mine/right/rightChildren',
			name: 'rightChildren',
			component: rightChildren
		}
	]
})