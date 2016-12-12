if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}

function initApp() {
	if (!AdMob) { console.log('admob plugin not ready'); return; }
	AdMob.createBanner( {
		adId: 'ca-app-pub-9462595038340927/8123692023',
		isTesting: false,
		autoShow: true,
		overlap: false, 
		offsetTopBar: true, 
		position: AdMob.AD_POSITION.BOTTOM_CENTER,
	});
}

