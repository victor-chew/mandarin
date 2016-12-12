angular.module('learntospeakmandarin.services', [])

.factory('Player', function() {
	var players = {};
	return {
		all: function() { 
			var json = localStorage.getItem('players');
			if (json) players = JSON.parse(json);
			console.log('retrieve(): ' + json);
			return players;
		},
		update: function() {
			console.log('update(): ' + JSON.stringify(players));
			localStorage.setItem('players', JSON.stringify(players));
		}
	};
})

.factory('Level', function() {
	var levels = { 
		'1': { 
			'name': 'Level 1',
			'items' : [
				'我今年八岁。',
				'他是我的哥哥。',
				'今天是星期四。',
				'你叫什么名字？',
				'我们是好朋友。',
				'树上有一只松鼠。',
				'这不是我的书包。',
				'这是我的华文课本。',
				'我可以看故事书吗？',
				'请问这是什么地方？',
			]
		},
		'2': { 
			'name': 'Level 2',
			'items' : [
				'小猫掉进河里。',
				'妹妹在拍皮球。',
				'月亮高高挂天上。',
				'你想不想看电视？',
				'老师说我是个好孩子。',
				'天上有许多小星星。',
				'见到老师说声早安。',
				'老师要开始讲故事了。',
				'我在学校学习读书写字。',
				'小金鱼在水里游来游去。',
			]
		},
		'3': { 
			'name': 'Level 3',
			'items' : [
				'同学们排队跳绳。',
				'我是妈妈的好帮手！',
				'铅笔可以用来写字。',
				'你最喜欢的书是什么？',
				'爷爷教我学习要努力。',
				'小闹钟清早叫我起床。',
				'哥哥和弟弟一起做功课。',
				'前面是一片美丽的森林。',
				'我的书包里有课本和文具。',
				'太阳是圆的，月亮是弯的。',
			]
		},
		'4': { 
			'name': 'Level 4',
			'items' : [
				'大家都来一起拍拍手。',
				'这是我送给老师的礼物。',
				'小伙伴们在一起踢足球。',
				'大家一起跳舞，一起唱歌。',
				'老师会唱歌，还会讲故事。',
				'水果甜不甜，让我尝一尝。',
				'左手帮右手，两个好朋友。',
				'小熊和小马<br/>手拉手，一起走。',
				'大象的鼻子长，<br/>兔子的尾巴短。',
				'花猫的眼睛大，<br/>老鼠的耳朵小。',
			]
		},
		'5': { 
			'name': 'Level 5',
			'items' : [
				'小河弯弯向南流',
				'你喜欢做些什么运动？',
				'妹妹有一双明亮的大眼睛。',
				'周末爸爸带我们去动物园。',
				'我回到家，<br/>一定先把鞋子脱下。',
				'家里这么干净，<br/>是谁打扫的？',
				'鸟儿在蓝天里<br/>快乐的飞来飞去。',
				'鱼儿在大海里<br/>快乐的游来游去。',
				'我用颜色笔<br/>画了一朵美丽的花儿。',
				'我站在学校门前，<br/>等爸爸来接我回家。',
			]
		},
		'6': { 
			'name': 'Level 6',
			'items' : [
				'放学后，<br/>我去篮球场打球。',
				'吃晚饭前，<br/>要先把手洗干净。',
				'小草是绿的，<br/>树叶也是绿的。',
				'大家都来做体操，<br/>每天运动身体好。',
				'铃声响，下课了，<br/>操场上，真热闹。',
				'我站在游泳池边，<br/>伸开双手跳下水。',
				'早晚刷牙不可少，<br/>上面下面都刷到。',
				'小小青蛙大眼睛，<br/>保护幼苗吃害虫。',
				'天空浮现彩虹桥，<br/>七种颜色真美妙。',
				'小河是鱼儿的家，<br/>树林是鸟儿的家。',
			]
		},
		'7': { 
			'name': 'Level 7',
			'items' : [
				'我自己收拾桌上的文具。',
				'人有两件宝，双手和大脑。',
				'用手又用脑，事事做得好。',
				'我的早餐是两片面包吐司。',
				'乌云满天，<br/>好像快要下雨了。',
				'我早上起床先刷牙，<br/>再吃早餐。',
				'自己的事情自己做，<br/>大家都说我真乖。',
				'大树健康的生长，<br/>结出了甜甜的果实。',
				'爸爸十分着急，<br/>赶快去找朋友来帮忙。',
				'你们别说我年纪小，<br/>我会做的事情真不少！',
			]
		},
		'8': { 
			'name': 'Level 8',
			'items' : [
				'一只小狗掉进水里了！',
				'我坐在树下看着月亮。',
				'农夫把种子撒在田里。',
				'晚餐没有肉，只有菜。',
				'他坐在树下休息一会儿。',
				'杯子掉在地上，<br/>吓了我一跳！',
				'小偷听见声音，<br/>急忙转身逃跑。',
				'我灵机一动，<br/>想到了一个好主意。',
				'真奇怪。<br/>苹果怎么会长这么大呢？',
				'一只猴子爬到树上，<br/>摘走了一些桃子。',
			]
		},
		'9': { 
			'name': 'Level 9',
			'items' : [
				'衣服被妈妈拿走了。',
				'姐姐气得说不出话来。',
				'如果你怕黑，<br/>就去开灯吧。',
				'大家都很害怕，<br/>吓得跑掉了。',
				'两只乌鸦口渴了，<br/>到处找水喝。',
				'洁白的沙滩上，<br/>有一只海鸟飞过。',
				'小强拿起石头，<br/>用力向水缸砸去。',
				'只要肯动脑筋，<br/>很多问题都能解决。',
				'上美术课时，<br/>老师让同学们画水果。',
				'小朋友爬到石头上玩，<br/>不小心跌下来了。',
			]
		},
		'10': { 
			'name': 'Level 10',
			'items' : [
				'狮子是万兽之王。',
				'小明吓得抱住妈妈。',
				'爸爸的童年过得很开心。',
				'老师让我们到操场上集合。',
				'爸爸刚回到家，<br/>电话就响了。',
				'春天到，鸟儿叫。<br/>夏天到，阳光照。',
				'秋天到，月儿高。<br/>冬天到，雪花飘。',
				'房屋前后有花草，<br/>空气清新阳光好。',
				'左右邻居不争吵，<br/>点头问好有礼貌。',
				'老鹰张开了翅膀，<br/>飞到很远的地方。',
			]
		},
		'11': { 
			'name': 'Level 11',
			'items' : [
				'小草在随风摇摆。',
				'大自然的声音真美妙。',
				'妹妹的胆子大，不怕黑。',
				'我和朋友共用一把雨伞。',
				'妈妈把小明的头发擦干。',
				'小强不小心踩了我一脚。',
				'上个周末，<br/>我去了科学馆。',
				'老师把礼物送给了<br/>同学们。',
				'阿姨讲故事，<br/>表情很生动。',
				'我今天起床晚了，<br/>所以上学迟到。',
			]
		},
		'12': { 
			'name': 'Level 12',
			'items' : [
				'我的妈妈是医生。',
				'奶奶喜欢出门晒太阳。',
				'你可以借我一块钱吗？',
				'鱼是张开眼睛睡觉的。',
				'大海里有好多的鱼和虾。',
				'大家都说我长高了！',
				'小明为什么总是<br/>忘记带课本？',
				'下雨了，妈妈<br/>赶紧出门收衣服。',
				'今天是你的生日，<br/>祝你生日快乐！',
				'雪白的浪花，<br/>不停地拍打着沙滩。',
			]
		},
		'13': { 
			'name': 'Level 13',
			'items' : [
				'我背着书包上学校。',
				'爸爸常常去操场跑步。',
				'农夫把玉米种在地里。',
				'小明去爷爷奶奶家拜年。',
				'小蝌蚪长得<br/>不像青蛙妈妈。',
				'大家都说<br/>我越长越高了！',
				'妈妈给我量身高，<br/>说我长大了。',
				'我希望像小树一样<br/>快快的成长。',
				'我想去看看世界上<br/>不同的国家。',
				'过新年，吃年糕。<br/>穿新衣，拿红包。',
			]
		},
		'14': { 
			'name': 'Level 14',
			'items' : [
				'你早餐吃了什么？',
				'我们不能在马路上玩。',
				'学习华文一定要专心。',
				'我忍不住哈哈大笑起来。',
				'傍晚突然下了<br/>一场大雨。',
				'大雨过后，<br/>马路上湿湿的。',
				'我把生日蛋糕<br/>分给大家吃。',
				'农夫用力从泥土里<br/>拔出萝卜。',
				'我抬头一看，<br/>天空飘过一朵白云。',
				'小强觉得很有趣，<br/>也和我们一起玩捉迷藏。',
			]
		},
		'15': { 
			'name': 'Level 15',
			'items' : [
				'我的书包怎么不见了？',
				'老爷爷一步一步走上桥。',
				'你为什么坐在那里不说话？',
				'大家都为精彩的表演鼓掌！',
				'我把大的苹果<br/>让给弟弟吃。',
				'鸟儿喜欢住在<br/>高高的树上。',
				'我今天上课，<br/>迟到了五分钟。',
				'我们刚走到路口，<br/>红灯就亮了。',
				'小强捡到一个钱包，<br/>交给了老师。',
				'风轻轻吹着，<br/>妹妹快乐的唱着歌。',
			]
		},
		'16': { 
			'name': 'Level 16',
			'items' : [
				'我将来想做一个医生。',
				'我们一起打篮球，好吗？',
				'你觉得哪种动物最可爱？',
				'我的书包怎么会掉在这里？',
				'爷爷脚下一滑，<br/>跌倒了。',
				'蜜蜂来采蜜，<br/>花儿开口笑。',
				'河流这么宽，<br/>怎么过得去呢？',
				'小明要去奶奶家，<br/>走着走着迷路了。',
				'我和小强是好朋友，<br/>常常互相帮助。',
				'妈妈忙了一个上午，<br/>把家里收拾的干干净净。',
			]
		},
		'17': { 
			'name': 'Level 17',
			'items' : [
				'爸爸最近工作很忙。',
				'太阳从东边升起来。',
				'菜园里有各种青菜。',
				'我不小心打破了杯子。',
				'大象的耳朵大，<br/>鼻子长。',
				'下了几天雨，<br/>天气很冷。',
				'姨妈病了，<br/>要到医院打针。',
				'天快黑了，<br/>我们该回家了。',
				'对不起，<br/>我不应该大喊大叫。',
				'听说小强病了，<br/>我要写信问候他。',
			]
		},
		'18': { 
			'name': 'Level 18',
			'items' : [
				'爷爷在花园里种花。',
				'猴子在树上跳来跳去。',
				'白云在天上飘来飘去。',
				'冬天到了，下起大雪。',
				'指南针是中国人发明的。',
				'爸爸每天六点钟起床。',
				'这块饼，<br/>是甜的还是咸的？',
				'我出一个谜语，<br/>你来猜吧！',
				'今天学的古诗，<br/>我都记住了。',
				'看见红灯停一停，<br/>看见绿灯向前走。',
			]
		},
		'19': { 
			'name': 'Level 19',
			'items' : [
				'我喜欢写汉字。',
				'东南西北，四个方向。',
				'我给爷爷奶奶拜个年。',
				'我早上坐校车去学校。',
				'我家大门前，<br/>有个小花园。',
				'放学后，<br/>妈妈带我去学游泳。',
				'新年真热闹，<br/>我们出去走走吧！',
				'今天是你的生日，<br/>祝你生日快乐！',
				'一片一片又一片，<br/>落入水中看不见。',
				'公园里，花儿开，<br/>朵朵花儿真可爱。',
			]
		},
		'20': { 
			'name': 'Level 20',
			'items' : [
				'小乐喜欢学画画。',
				'我在收拾我的房间。',
				'我要做有礼貌的孩子。',
				'长江是中国最长的江。',
				'黄河是中国的母亲河。',
				'上课时，我们要认真听讲。',
				'有了春雨，<br/>种子才会发芽。',
				'我要做个诚实的孩子，<br/>不能撒谎。',
				'对不起，<br/>我把你的本子弄脏了。',
				'我抬头看见<br/>弯弯的月亮和闪闪的星星。',
			]
		},
	};
	return { 
		all: function() { 
			return levels; 
		},
		rattle: function() {
			var src = 'res/rattle.mp3';
			if (device.platform.toLowerCase() === "android") src = '/android_asset/www/' + src;
			var media = new Media(src, function() { media.release(); }, null);
			media.play();
		}
	};
})

.factory('Game', function() {
	return {
		compareText: function(intext, outtext) {
			var result = '';
			intext = intext.replace(/<br\/>/g, '*');
			intext = intext.replace(/，/g, '');
			intext = intext.replace(/。/g, '');
			intext = intext.replace(/！/g, '');
			intext = intext.replace(/？/g, '');
			outtext = outtext.replace(/0/g, '零');
			outtext = outtext.replace(/1/g, '一');
			outtext = outtext.replace(/2/g, '二');
			outtext = outtext.replace(/3/g, '三');
			outtext = outtext.replace(/4/g, '四');
			outtext = outtext.replace(/5/g, '五');
			outtext = outtext.replace(/6/g, '六');
			outtext = outtext.replace(/7/g, '七');
			outtext = outtext.replace(/8/g, '八');
			outtext = outtext.replace(/9/g, '九');
			var i=0, j=0;
			while(i < outtext.length) {
				if (j >= intext.length) {
					result += '<span class="wrong">' + outtext[i++] + '</span> ';
				}
				else if (intext[j] == '*') {
					result += '<br/>';
					j++;
				}
				else {
					if (intext[j] == outtext[i]) attr = 'correct';
					result += '<span class="' + (intext[j] == outtext[i] ? 'correct' : 'wrong') + '">' + outtext[i] + '</span> ';
					i++; j++;
				}
			}
			if (j < intext.length) result += '<span class="wrong"></span>';
			console.log('<' + intext + '>, <' + outtext + '>' + '>, <' + result);
			return result;
		},
		clap: function() {
			var src = 'res/clap.mp3';
			if (device.platform.toLowerCase() === "android") src = '/android_asset/www/' + src;
			var media = new Media(src, function() { media.release(); }, null);
			media.play();
		},
		cheer: function() {
			var src = 'res/cheer.mp3';
			if (device.platform.toLowerCase() === "android") src = '/android_asset/www/' + src;
			var media = new Media(src, function() { media.release(); }, null);
			media.play();
		},
	};
});
