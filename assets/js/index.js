/*
 * @Author: fzf404
 * @Date: 2021-07-06 21:14:43
 * @LastEditTime: 2021-07-18 21:01:32
 * @Description: 主页js
 */
$(document).ready(function () {

	// 常用变量
	$nav = $('.nav')
	// 移动端图标
	$toggleCollapse = $('.toggle-collapse')
	// 介绍图标
	$bili = $('#bili')
	$douban = $('#douban')
	$zhihu = $('#zhihu')
	$back = $('#back')
	
	// 卡片动效
	$friends = $('.friend-card')
	$websites = $('.website-card')

	$friends_number = $friends.length
	$start_friend = 0

	// 打字机效果
	new Typed('#intro', {
		strings: [
			'一个^100理想主义的^100左派^200爱国^100者。',
			'一个对^200世界感兴趣的^200艺术生。'
		],
		typeSpeed: 100,
		// loop: true,
		// loopCount: Infinity,
		showCursor: false
	});
	
	// 导航栏跳转
	$(".nav-link").click(function () {
		$($(this).attr("href")).get(0).scrollIntoView({ block: 'center', behavior: 'smooth' })
	});

	// 社交平台动效
	$bili.hover(function () {
		$bili.children("use").attr('href', '#icon-bilibili-line-copy');
	}, function () {
		$bili.children("use").attr('href', '#icon-bilibili-line');
	})
	$douban.hover(function () {
		$douban.children("use").attr('href', '#icon-douban-copy');
	}, function () {
		$douban.children("use").attr('href', '#icon-douban');
	})
	$zhihu.hover(function () {
		$zhihu.children("use").attr('href', '#icon-zhihu-copy');
	}, function () {
		$zhihu.children("use").attr('href', '#icon-zhihu');
	})
	$back.hover(function () {
		$back.children("use").attr('href', '#icon-back-copy');
	}, function () {
		$back.children("use").attr('href', '#icon-back');
	})

	// 幻灯片特效初始化
	$('.owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 2
			},
			750: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	})
	
	// 友链增加跳转
	$friends.slice($start_friend + 4).hide()
	$friends.each(function (index, element) {
		$(this).hover(function () {
			$('#friend-iframe').attr('src', $friends.eq(index).find('a').attr("href"))
		})
	})

	// 友链动效
	if ($friends_number > 4) {
		setInterval(() => {
			if ($start_friend >= $friends_number - 4) {
				$friends.slice($start_friend - 1, $friends_number).slideUp(500);
				$start_friend = 0;
				$friends.slice($start_friend, $start_friend + 4).slideDown(500)
			} else {
				$friends.eq($start_friend).slideUp(500)
				$friends.eq($start_friend + 4).slideDown(500)
				$start_friend++
			}
		}, 4000)
	}

	// 移动端图标
	$toggleCollapse.click(function () {
		$nav.toggleClass('collapse')
	})

})