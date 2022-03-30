/**
*by DrFunDev
*Powered by LiteUI :)
*/
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Switch = android.widget.Switch;
var inst = new android.app.Instrumentation();
var sprint = false;
var attackDistance = false;
var translate = false;
var forcetranslate = false;
var zoom = false;
var vapeimage = false;
var f5View = false;
var jumpButton = false;
var alwaysDay = false;
var fullbright = false;
var MainPos = [0, 0, W() * 0.4, 0];
var layoutOpen = false;
var verifyCode;
var trueCode;
var base64data = ReadData("sdcard/games/Taichi/images/VapeImage.drfunstudio");
var shieldPlayersArray = [];
var historyMsg = [];
var colorChat = false;
var projectileParticle = false;
var lcps = 0;
var rcps = 0;
var templcps = 0;
var temprcps = 0;
var cpsDisplay = false;
var fastSwitch = false;
var floatWinIsShow = true;
var fov = 90;
var clientVer = "4.0";
var View = android.view.View;
var UUID = java.util.UUID;
var imagevw;
var blockNameText;
var inGame = false;
var antiShift = false;
var screenDebug = false;
var pcount = 50;
var attackParticle = false;
var bypassMode = false;
var verifyPass = false;
var destroyLookAt = false;
var downSpeed = 1;
var rightButton = false;
var pos1 = [];
var pos2 = [];
var blocksArray = [];
var aimbotVL = 0;
var timerVL = 0;
var speedVL = 0;
var hitboxVL = 0;
var frictionVL = 0;
var flyVL = 0;
var gravityMode = false;
var sl = null;
var x = 0;
var y = 0;
var ty = 1
var disableRenderItem = false;
var betterFPS = false;
var WorldBuilder = "[§eWorldBuilder§f]§d ";
var crosshairX = 0;
var crosshairY = 0;
var customCrosshair = false;
var crosshairStyle = "+";
var crosshairSize = 15;
var crosshair = false;
var floatWinAlpha = 1;
var isLoading = true;

function sin(aa) {
	return Math.sin(aa / 180 * Math.PI)
}
function cos(bb) {
	return Math.cos(bb / 180 * Math.PI)
}
function tan(cc) {
	return sin(cc) / cos(cc)
}
var rootPath = ctx.getFilesDir().getAbsolutePath();
function first() {
	if (!CheckFiles("sdcard/games/Taichi/images/combat.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/combat.png", "games/Taichi/images", "combat.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/display.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/display.png", "games/Taichi/images", "display.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/movement.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/movement.png", "games/Taichi/images", "movement.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/setting.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/setting.png", "games/Taichi/images", "setting.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/user.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/user.png", "games/Taichi/images", "user.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/VapeImage.drfunstudio")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/VapeImage.drfunstudio", "games/Taichi/images", "VapeImage.drfunstudio");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/taichi.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/taichi.png", "games/Taichi/images", "taichi.png");
	}
	if (!CheckFiles("sdcard/games/Taichi/images/world.png")) {
		DownloadResource("https://gitee.com/drfun/taichi-project/raw/master/world.png", "games/Taichi/images", "world.png");
	}
}
function DownloadResource(uri, path, name) {
	download = new android.app.DownloadManager.Request(new android.net.Uri.parse(uri));
	download.setTitle("Taichi-Project-Download");
	download.setDestinationInExternalPublicDir(path, name);
	download.setDescription("Downloading...");
	download.setNotificationVisibility(android.app.DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
	ctx.getSystemService(ctx.DOWNLOAD_SERVICE).enqueue(download);
}
function HttpGet(Url) {
	var out = [];
	var line = "";
	var ins = new java.io.BufferedReader(new java.io.InputStreamReader(java.net.URL(Url).openConnection().getInputStream(), "UTF-8"));
	while ((line = ins.readLine()) != null) {
		out.push(line);
	};
	ins.close();
	return out.join("\n");
}
function random(min, max) {
	return (Math.floor(Math.random() * (max - min + 1) + min));
};
function randomColor() {
	var cls = ["§c", "§6", "§e", "§a", "§3", "§b", "§d"];
	return cls[random(0, 6)];
}
function randomBypassColor() {
	var cls = ["§§cc", "§§66", "§§ee", "§§aa", "§§33", "§§bb", "§§dd"];
	return cls[random(0, 6)];
}
function isValidUUID(uuid) {
	var regexp = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
	if (uuid.match(regexp)) {
		return true;
	} else {
		return false;
	}
}
function GetWidgetSize(wg) {
	var w = View.MeasureSpec.makeMeasureSpec(0, View.MeasureSpec.UNSPECIFIED);
	var h = View.MeasureSpec.makeMeasureSpec(0, View.MeasureSpec.UNSPECIFIED);
	wg.measure(w, h);
	return [wg.getMeasuredWidth(), wg.getMeasuredHeight()];
}

function roundRect(arr, arr2, f, s) {
	if (! (arr instanceof Array)) arr = [arr, arr, arr];
	if (! (arr2 instanceof Array)) arr2 = [arr2, arr2, arr2, arr2];
	if (arr2 == null) arr2 = [10, 10, 10, 10];
	var jb = null,
	type = null;
	if (f == "TB" || f == null) {
		jb = android.graphics.drawable.GradientDrawable.Orientation.TOP_BOTTOM;
	} else if (f == "LR") {
		jb = android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT;
	} else if (f == "RT") {
		jb = android.graphics.drawable.GradientDrawable.Orientation.BL_TR;
	} else if (f == "RB") {
		jb = android.graphics.drawable.GradientDrawable.Orientation.TL_BR;
	};
	var dra = new android.graphics.drawable.GradientDrawable(jb, arr);
	if (s == 0 || s == null) {
		type = android.graphics.drawable.GradientDrawable.LINEAR_GRADIENT;
	} else if (s == 1) {
		type = android.graphics.drawable.GradientDrawable.RADIAL_GRADIENT;
	} else if (s == 2) {
		type = android.graphics.drawable.GradientDrawable.SWEEP_GRADIENT;
	};
	dra.setGradientType(type);
	dra.setCornerRadii([arr2[0], arr2[0], arr2[1], arr2[1], arr2[2], arr2[2], arr2[3], arr2[3]]);
	return dra;
};

function roundBG(hex, round, s) {
	var hexed = new Array();
	if (hex.length == 2) {
		hexed = hexColor(hex[1])
	} else {
		for (a = 1; a < hex.length; a++) {
			hexed[a - 1] = hexColor(hex[a])
		};
	};
	return roundRect(hexed, round, hex[0], s);
};

function hexColor(c) {
	return android.graphics.Color.parseColor(c);
};

function UIMove(view, x1, x2, y1, y2, time, type) {
	var anim = android.view.animation;
	var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF: type == 1 ? anim.Animation.RELATIVE_TO_PARENT: anim.Animation.ABSOLUTE);
	var dh = new anim.TranslateAnimation(tp, x1 * 0.01, tp, x2 * 0.01, tp, y1 * 0.01, tp, y2 * 0.01);
	dh.setDuration(time);
	dh.setFillAfter(true);
	if (view != null) view.startAnimation(dh);
	return dh
};
function UIRotate(view, A, B, x, y, time, type) {
	var anim = android.view.animation;
	var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF: type == 1 ? anim.Animation.RELATIVE_TO_PARENT: anim.Animation.ABSOLUTE);
	var dh = new anim.RotateAnimation(A, B, tp, x * 0.01, tp, y * 0.01);
	dh.setDuration(time);
	dh.setFillAfter(true);
	if (view != null) view.startAnimation(dh);
	return dh
};
function UIShrink(view, x1, x2, y1, y2, x, y, time, type) {
	var anim = android.view.animation;
	var tp = ((type == null || type == 0) ? anim.Animation.RELATIVE_TO_SELF: type == 1 ? anim.Animation.RELATIVE_TO_PARENT: anim.Animation.ABSOLUTE);
	var dh = new anim.ScaleAnimation(x1 * 0.01, x2 * 0.01, y1 * 0.01, y2 * 0.01, tp, x * 0.01, tp, y * 0.01);
	dh.setDuration(time);
	dh.setFillAfter(true);
	if (view != null) view.startAnimation(dh);
	return dh
};
function UIFadein(view, A, B, time) {
	var dh = new android.view.animation.AlphaAnimation(A * 0.01, B * 0.01);
	dh.setDuration(time);
	dh.setFillAfter(true);
	if (view != null) view.startAnimation(dh);
	return dh
};
function UIZoom(view, In, out, time, type) {
	return UIShrink(view, In, out, In, out, 50, 50, time, type)
};
function UILevel(view, In, out, time, type) {
	return UIMove(view, In, out, 0, 0, time, type)
};
function UIPlumb(view, In, out, time, type) {
	return UIMove(view, 0, 0, In, out, time, type)
};
function UIReveal(view, x, y, startr, endr, time) {
	var globallayoutlinstener = new android.view.ViewTreeObserver.OnGlobalLayoutListener({
		onGlobalLayout: function() {
			var anim = new android.view.ViewAnimationUtils.createCircularReveal(view, x, y, endr, startr);
			anim.setDuration(time);
			anim.start();
			view.getViewTreeObserver().removeOnGlobalLayoutListener(globallayoutlinstener);
		}
	});
	view.getViewTreeObserver().addOnGlobalLayoutListener(globallayoutlinstener);
	return globallayoutlinstener;
};
var FontColor = function(text) {
	var colors = [[" ", " &nbsp;"], ["\n", "<br/>"], ["§l", "</b><b>"], ["§m", "</del><del>"], ["§n", "</ins><ins>"], ["§o", "</i><i>"], ["§r", "</font></b></del></ins></i>"], ["§0", "</font><font color=#000000>"], ["§1", "</font><font color=#0000AA>"], ["§2", "</font><font color=#00AA00>"], ["§3", "</font><font color=#00AAAA>"], ["§4", "</font><font color=#AA0000>"], ["§5", "</font><font color=#AA00AA>"], ["§6", "</font><font color=#FFAA00>"], ["§7", "</font><font color=#cccccc>"], ["§8", "</font><font color=#555555>"], ["§9", "</font><font color=#5555FF>"], ["§a", "</font><font color=#55FF55>"], ["§b", "</font><font color=#55FFFF>"], ["§c", "</font><font color=#FF5555>"], ["§d", "</font><font color=#FF55FF>"], ["§e", "</font><font color=#FFFF55>"], ["§f", "</font><font color=#FFFFFF>"]];
	for (var e in colors) {
		text = text.split(colors[e][0]).join(colors[e][1]);
	};
	return android.text.Html.fromHtml(text);
}

function H() {
	var metrics = new android.util.DisplayMetrics();
	ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
	return metrics.heightPixels;
};

function W() {
	var metrics = new android.util.DisplayMetrics();
	ctx.getWindowManager().getDefaultDisplay().getMetrics(metrics);
	return metrics.widthPixels;
};

var Hh = {
	s: function() {
		return H() * 0.8 * 0.6 - H() * 0.25;
	},
	m: function() {
		return H() * 0.8 * 0.8 - H() * 0.25;
	},
	l: function() {
		return H() * 0.8 * 1 - H() * 0.25
	}
};

var Ww = {
	s: function() {
		return W() * 0.65 * 0.6;
	},
	m: function() {
		return W() * 0.65 * 0.8;
	},
	l: function() {
		return W() * 0.65 * 1;
	}
};

function NewView(type, sizeW, sizeH, gravity, ori, color, cr, set) {
	if (type == "LL") {
		var _L1 = new android.widget.LinearLayout(ctx);
	} else if (type == "SV") {
		var _L1 = new android.widget.ScrollView(ctx);
	};
	_L1.setLayoutParams(new android.widget.LinearLayout.LayoutParams(sizeW, sizeH));
	if (gravity == "LT") {
		_L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
	} else if (gravity == "LC") {
		_L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
	} else if (gravity == "LB") {
		_L1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
	} else if (gravity == "CT") {
		_L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
	} else if (gravity == "CC") {
		_L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
	} else if (gravity == "CB") {
		_L1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
	} else if (gravity == "RT") {
		_L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
	} else if (gravity == "RC") {
		_L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
	} else if (gravity == "RB") {
		_L1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
	};
	if (ori === 1) {
		_L1.setOrientation(1);
	} else if (ori == 0) {
		_L1.setOrientation(0);
	} else {};
	if (color != null) {
		_L1.setBackgroundDrawable(roundBG(color, cr));
	} else {};
	if (set != null) {
		if (set.click != null) {
			_L1.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(v) {
					try {
						set.click(v);
					} catch(e) {
						print(e);
					};
				}
			}));
		};
		if (set.longclick != null) {
			_L1.setOnLongClickListener(new android.view.View.OnLongClickListener({
				onLongClick: function(v) {
					try {
						set.longclick(v);
					} catch(e) {
						print(e);
					};
					return true;
				}
			}));
		};
		if (set.touch != null) {
			_L1.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, e) {
					switch (e.getAction()) {
					case 0:
						if (set.touch[0][0] != null) {
							_L1.setBackgroundDrawable(roundBG(set.touch[0][0], cr));
						};
						if (set.touch[0][1] != null) {
							set.touch[0][1]();
						}
						break;
					case 1:
						if (set.touch[1][0] != null) {
							_L1.setBackgroundDrawable(roundBG(set.touch[1][0], cr));
						};
						if (set.touch[1][1] != null) {
							set.touch[1][1]();
						};
						break;
					case 2:
						if (set.touch[2] != null) {
							set.touch[2]();
						};
						break;
					}
					return false;
				}
			}));
		};
	};
	return _L1;
};

function NewCDV(cr, color, view, sizeW, sizeH, fa, ta, gravity, pyx, pyy) {
	var _Cdkview1 = new android.widget.PopupWindow();
	if (color != null) {
		_Cdkview1.setBackgroundDrawable(roundBG(color, 0));
	} else {};
	if (cr == 1 || cr == null) {
		_Cdkview1.setAnimationStyle(android.R.style.Animation_Dialog);
	} else if (cr == 2) {
		_Cdkview1.setAnimationStyle(android.R.style.Animation_InputMethod);
	} else if (cr == 3) {
		_Cdkview1.setAnimationStyle(android.R.style.Animation_Translucent);
	};
	_Cdkview1.setContentView(view);
	_Cdkview1.setWidth(sizeW);
	_Cdkview1.setHeight(sizeH);
	_Cdkview1.setFocusable(fa);
	_Cdkview1.setTouchable(ta);
	if (gravity == "LT") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, pyx, pyy);
	} else if (gravity == "LC") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, pyx, pyy);
	} else if (gravity == "LB") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, pyx, pyy);
	} else if (gravity == "CT") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, pyx, pyy);
	} else if (gravity == "CC") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, pyx, pyy);
	} else if (gravity == "CB") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, pyx, pyy);
	} else if (gravity == "RT") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, pyx, pyy);
	} else if (gravity == "RC") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, pyx, pyy);
	} else if (gravity == "RB") {
		_Cdkview1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, pyx, pyy);
	};
	return _Cdkview1;
};

function NewText(text, gravity, size, color) {
	var _T1 = new android.widget.TextView(ctx);
	if (gravity == "LT") {
		_T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.TOP);
	} else if (gravity == "LC") {
		_T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.CENTER);
	} else if (gravity == "LB") {
		_T1.setGravity(android.view.Gravity.LEFT | android.view.Gravity.BOTTOM);
	} else if (gravity == "CT") {
		_T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.TOP);
	} else if (gravity == "CC") {
		_T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.CENTER);
	} else if (gravity == "CB") {
		_T1.setGravity(android.view.Gravity.CENTER | android.view.Gravity.BOTTOM);
	} else if (gravity == "RT") {
		_T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.TOP);
	} else if (gravity == "RC") {
		_T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.CENTER);
	} else if (gravity == "RB") {
		_T1.setGravity(android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM);
	};
	_T1.setText(FontColor(text));
	if (size != null) {
		_T1.setTextSize(size);
	};
	if (color != null) {
		_T1.setTextColor(android.graphics.Color.parseColor(color));
	};
	//_T1.setTypeface(globalFont);
	return _T1;
};

function NewPB(mode, col, max, pro) {
	if (mode == 1) {
		var _PB1 = new android.widget.ProgressBar(ctx);
		_PB1.setProgress(1)
	} else if (mode == 2) {
		var _PB2 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
		_PB2.setMax(max);
		_PB2.setProgress(pro);
	};
	return _PB1;
};

function NewET(hname, oname, size, color, bg) {
	var _ET1 = new android.widget.EditText(ctx);
	_ET1.setHint(hname);
	_ET1.setText(oname);
	_ET1.setTextSize(size);
	//_ET1.setTypeface(globalFont);
	_ET1.setTextColor(android.graphics.Color.parseColor(color));
	if (bg == false) {
		_ET1.setBackground(null);
	} else {};
	return _ET1;
};

function NewWV(url) {
	_WEB1 = new android.webkit.WebView(ctx);
	_WEB1.onResume();
	var settings = _WEB1.getSettings();
	_WEB1.setDownloadListener(new android.webkit.DownloadListener({
		onDownloadStart: function(url, a, b, c) {
			Print("暂不支持文件下载");
		}
	}));
	settings.setJavaScriptEnabled(true);
	settings.setAllowFileAccess(true);
	settings.setAllowFileAccessFromFileURLs(true);
	settings.setAllowUniversalAccessFromFileURLs(true);
	settings.setSaveFormData(true);
	settings.setSavePassword(true);
	settings.setLoadWithOverviewMode(true);
	settings.setJavaScriptCanOpenWindowsAutomatically(true);
	settings.setUseWideViewPort(true);
	settings.setLoadsImagesAutomatically(true);
	settings.setAllowContentAccess(true);
	settings.setSupportZoom(false);
	settings.setBuiltInZoomControls(true);
	settings.setUseWideViewPort(true);
	settings.setBlockNetworkImage(false);
	_WEB1.setWebViewClient(new android.webkit.WebViewClient());
	_WEB1.setWebChromeClient(new android.webkit.WebChromeClient());
	settings.setDefaultTextEncodingName("UTF-8") if (url == null) {
		_WEB1.loadUrl("https://m.baidu.com");
	} else {
		_WEB1.loadUrl(url);
	};
	return _WEB1;
};

function CheckFiles(path) {
	try {
		var ml = new java.io.File(path);
		if (!ml.exists()) {
			return false;
		} else {
			return true;
		};
	} catch(e) {
		Error(e)
	};
};

function ReadData(path) {
	try {
		var file = new java.io.File(path);
		if (file.isFile()) {
			var out = [];
			var line = "";
			var ins = new java.io.InputStreamReader(new java.io.FileInputStream(file), "UTF-8");
			var buff = new java.io.BufferedReader(ins);
			while ((line = buff.readLine()) != null) {
				out.push(line);
			};
			ins.close();
			return out.join("\n");
		};
	} catch(e) {
		Error(e)
	};
};

function InputData(path, data) {
	try {
		var foss = new java.io.FileOutputStream(path);
		foss.write(java.lang.String(data).getBytes());
		foss.close();
	} catch(e) {
		Error(e)
	};
};
function MakeDirs(path) {
	try {
		var mkdirspath = new java.io.File(path);
		mkdirspath.mkdirs();
	} catch(e) {
		Error(e)
	};
};
function DeleteFile(path) {
	try {
		var delpath = new java.io.File(path);
		if (CheckFiles(path)) {
			delpath.delete();
		}
	} catch(e) {
		Error(e)
	};
};

function WLAN(on, off) {
	try {
		var connection = ctx.getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
		var info = connection.getActiveNetworkInfo();
		if (info == null) {
			off();
		} else if (info.isAvailable() == true) {
			on();
		};
	} catch(e) {
		Error(e)
	};
};

function BaseT(str) {
	try {
		var UB = android.util.Base64.decode(str, 0);
		var DB = new android.graphics.drawable.BitmapDrawable(android.graphics.BitmapFactory.decodeByteArray(UB, 0, UB.length)) return DB;
	} catch(e) {
		Error(e)
	};
};

function Delay(time, run) {
	try {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				new android.os.Handler().postDelayed(new java.lang.Runnable({
					run: function() {
						run();
					}
				}), time)
			}
		}));
	} catch(e) {
		Error(e)
	};
};

function Copy(data) {
	try {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				var cm = ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
				cm.setText(String(data));
			}
		}));
	} catch(e) {
		Error(e)
	};
};

function Finish() {
	Print("程序正在关闭");
	Delay(2000,
	function() {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				ctx.finish()
			}
		}));
	});
};

function Print(Text) {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				toast = android.widget.Toast.makeText(ctx, " ", android.widget.Toast.LENGTH_LONG);
				toastbg = NewView("LL", -2, -2, "CC", 1, ["TB", "#fafafa"], 20, null);
				toaststr = NewText(Text, "CC", null, "#000000");
				//toaststr.setTypeface(globalFont);
				toaststr.setPadding(20, 20, 20, 20);
				toastbg.addView(toaststr);
				toast.setView(toastbg);
				toast.show();
			} catch(err) {
				Error(err);
			}
		}
	}));
}

var PromptBoxCDV = new Array();
var PromptBoxFD = 0;
for (a = 0; a < 999; a++) {
	PromptBoxCDV[a] = null;
};
function PromptBox(size, title, set) {
	PromptBoxFD++;
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				if (PromptBoxCDV[PromptBoxFD] != null) {
					PromptBoxFD++;
				} else {
					PromptBoxCDV[PromptBoxFD] = 1;
				};
				var PromptBoxLS = PromptBoxFD;
				if (size == "small") {
					size = 0.6;
				} else if (size == "medium") {
					size = 0.8;
				} else if (size == "large") {
					size = 1;
				};
				if (set.clo1 != null) {
					clo = 1;
				};
				if (set.clo1 != null && set.clo2 != null) {
					clo = 2;
				};
				pb0 = NewView("LL", -1, -1, "CC", 1, null, null, null);
				pb1 = NewView("LL", W() * 0.7 * size, H() * 0.8 * size, "CC", 1, [null, "#fffafafa"], 10, null);
				pb2 = NewView("LL", W() * 0.65 * size, H() * 0.15, "LC", 1, null, [10, 10, 0, 0], null);
				pb3 = NewView("LL", W() * 0.65 * size, H() * 0.8 * size - H() * 0.25, "CC", 1, null, 0, null);
				pb4 = NewView("SV", W() * 0.65 * size, H() * 0.8 * size - H() * 0.25, null, null, null, null, null);
				pb4.setScrollBarDefaultDelayBeforeFade(100);
				pb4.setScrollBarFadeDuration(100);
				pb5 = NewView("LL", W() * 0.65 * size, H() * 0.8 * size - H() * 0.25, "CC", 1, null, 0, null);
				pb6 = NewView("LL", W() * 0.7 * size, H() * 0.1, "CC", 0, null, [0, 0, 10, 10], null);
				pb7 = NewView("LL", W() * 0.7 * size / clo - W() * 0.0005, H() * 0.1, "CC", 1, null, 0, null);
				_pb7 = NewView("LL", (W() * 0.7 * size / clo - W() * 0.0005) * 0.7, H() * 0.07, "CC", 1, [null, "#fffafafa"], 10, {
					click: function() {
						set.clo1[1]();
						if (set.clo1[2] != null) {
							PromptBoxCDV[PromptBoxLS].dismiss();
						};
					},
					touch: [[[null, "#fff0f0f0"]], [[null, "#fffafafa"]],
					function() {}]
				});
				_pb8 = NewView("LL", W() * 0.001, H() * 0.05, "CC", 1, [null, "#ff808080"], 0, null);
				pb9 = NewView("LL", W() * 0.7 * size / clo - W() * 0.0005, H() * 0.1, "CC", 1, null, 0, null);
				_pb9 = NewView("LL", (W() * 0.7 * size / clo - W() * 0.0005) * 0.7, H() * 0.07, "CC", 1, [null, "#fffafafa"], 10, {
					click: function() {
						set.clo2[1]();
						if (set.clo2[2] != null) {
							PromptBoxCDV[PromptBoxLS].dismiss();
						};
					},
					touch: [[[null, "#fff0f0f0"]], [[null, "#fffafafa"]],
					function() {}]
				});

				pt1 = NewText("§l" + title, "LC", 18, "#000000");
				if (clo == 1) {
					pt2 = NewText("§l" + set.clo1[0], "CC", 15, "#000000");
				};
				if (clo == 2) {
					pt2 = NewText("§l" + set.clo1[0], "CC", 15, "#000000");
					pt3 = NewText("§l" + set.clo2[0], "CC", 15, "#000000");
				};
				if (set.maintext != null) {
					var maintext = "";
					for (a = 0; a < set.maintext.length; a++) {
						maintext = maintext + set.maintext[a] + "\n";
					};
					pt4 = NewText(maintext, "LC", 14, "#000000");
				};

				pb0.addView(pb1);
				pb1.addView(pb2);
				pb2.addView(pt1);
				pb1.addView(pb3);
				pb3.addView(pb4);
				pb4.addView(pb5);
				if (maintext != null) {
					pb5.addView(pt4);
				};
				if (set.add != null) {
					for (a = 0; a < set.add.length; a++) {
						if (set.add[a] != null) {
							pb5.addView(set.add[a]);
						};
					};
				};
				pb1.addView(pb6);
				if (clo == 1) {
					pb6.addView(pb7);
					pb7.addView(_pb7);
					_pb7.addView(pt2);
				} else if (clo == 2) {
					pb6.addView(pb7);
					pb7.addView(_pb7);
					_pb7.addView(pt2);
					pb6.addView(_pb8);
					pb6.addView(pb9);
					pb9.addView(_pb9);
					_pb9.addView(pt3);
				};

				PromptBoxCDV[PromptBoxLS] = NewCDV(3, null, pb0, -1, -1, true, true, "CC", 0, 0)
			} catch(err) {
				Print("LiteUI System Error\n" + err + err.lineNumber)
			};
		}
	}));
	if (set.run != null) {
		set.run();
	};
};

var ErrorTimes = 0;
function Error(e) {
	ErrorTimes++;
	var Er = e.name;
	PromptBox("medium", "Error Report", {
		clo1: ["§1Copy and Close",
		function() {
			Copy("~# Error Report #~\n" + e)
		},
		1],
		clo2: ["§1Close",
		function() {},
		1],
		maintext: ["§lSorry, the codes were stopped because it encountered some accidents, please try again!\n", "§lReport Times: §r" + ErrorTimes, "§lError Type: §r" + Er, "§lError Message: §r" + e.message, "§lError Stack: §r" + e.stack, "§lDetailed account: §r\n" + e]
	});
};

function NewSwitch(view, text, is, onclick) {
	Switch1 = new Switch(ctx);

	Switch1.setText(FontColor("§f " + text));
	//Switch1.setTypeface(globalFont);
	Switch1.setChecked(is);
	Switch1.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
		onCheckedChanged: function(v, checked) {
			onclick(v);
		}
	}));
	view.addView(Switch1);

}

function NewButton(view, text, onclickevent) {
	buttonbackground = NewView("LL", W() * 0.9, H() * 0.1, "CC", 1, ["TB", "#00000000"], 0, null);
	vbutton = NewView("LL", W() * 0.89, H() * 0.09, "CC", 1, ["TB", "#1E90FF"], 0, {
		click: function(v) {
			onclickevent(v);
		}
	});
	vText = NewText(text, "CC", null, "#ffffff");

	vbutton.addView(vText);
	buttonbackground.addView(vbutton);

	view.addView(buttonbackground);

}
var crosshairCDV;
var crosshairText;
function crosshairLayout() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				vw1 = NewView("LL", -2, -2, "CC", 1, ["RT", "#00ffffff"], 0, null);
				crosshairText = NewText(crosshairStyle, "CC", crosshairSize, "#ffffff");
				vw1.addView(crosshairText);
				crosshairCDV = NewCDV(2, null, vw1, -2, -2, false, false, "CC", crosshairX, crosshairY);
			} catch(err) {
				print(err)
			}
		}
	}));
};
var fpsFixCDV;
function FpsFix() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				vw1 = NewView("LL", W(), H(), "CC", 1, ["RT", "#00ffffff"], 360, null);
				f = NewText("1521811681316543181213haoahzyjqiagaj543182791bsjsnbs", "CC", null, "#00ffffff");
				vw1.addView(f);
				fpsFixCDV = NewCDV(2, null, vw1, W(), H(), false, false, "CC", 0, 0);
			} catch(err) {
				print(err)
			}
		}
	}));
};
var CDVM;
var floatvw1;
var imgview;
function FloatWin() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				floatvw1 = NewView("LL", H() * 0.1, H() * 0.1, "CC", 1, ["RT", "#ffffff"], 360, {
					click: function() {
						Menu();
					}
				});
				taichi = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/taichi.png");
				imgview = new android.widget.ImageView(ctx);
				imgview.setImageBitmap(taichi);
				floatvw1.addView(imgview);
				floatvw1.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							MainPos[0] = e.getRawX();
							MainPos[1] = e.getRawY();
							break;
						case 2:
							MainPos[2] += e.getRawX() - MainPos[0];
							MainPos[3] += e.getRawY() - MainPos[1];
							MainPos[0] = e.getRawX();
							MainPos[1] = e.getRawY();
							CDVM.update(MainPos[2], MainPos[3], -2, -2);
							break;
						}
						return false;
					}
				}));

				CDVM = NewCDV(2, null, floatvw1, H() * 0.1, H() * 0.1, false, true, "CT", MainPos[2], MainPos[3]);
			} catch(err) {
				print(err)
			}
		}
	}));
};

function Menu() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				bg = NewView("LL", W(), H(), "LT", 1, ["TB", "#aa000000"], 0, null);
				actionbar = NewView("LL", W(), H() * 0.08, "LT", 0, ["TB", "#aa000000"], 0, {
					click: function() {
						UIZoom(bg, 100, 0, 500);
						menuCDV.setTouchable(false);
						menuCDV.setFocusable(false);
						Delay(500,
						function(v) {
							menuCDV.dismiss();
						});
					}
				});
				leftTitleLayout = NewView("LL", W() * 0.2, H() * 0.08, "CC", 0, ["TB", "#00000000"], 0, null);
				title = NewText("Taichi Client 2.0", null, "CC", "#ffffff");
				bottomLayout = NewView("LL", W(), H() * 0.95, "LT", 0, ["TB", "#00000000"], 0, null);
				chooseList = NewView("LL", W() * 0.1, H() * 0.95, "LT", 1, ["TB", "#9a000000"], 0, null);
				img1bg1 = NewView("LL", W() * 0.1, H() * 0.19, "CC", 0, ["RT", "#1E90FF"], 0, null);
				img1 = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/movement.png");
				img1bg1.setPadding(20, 20, 20, 20);
				imgview1 = new android.widget.ImageView(ctx);
				imgview1.setColorFilter(hexColor("#ffffff"));
				imgview1.setImageBitmap(img1);
				img1bg1.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						img1bg1.setBackgroundColor(hexColor("#1E90FF"));
						img2bg2.setBackgroundColor(hexColor("#00000000"));
						img3bg3.setBackgroundColor(hexColor("#00000000"));
						img4bg4.setBackgroundColor(hexColor("#00000000"));
						img5bg5.setBackgroundColor(hexColor("#00000000"));
						playerLayoutSV.setVisibility(playerLayoutSV.VISIBLE);
						displayLayoutSV.setVisibility(displayLayoutSV.GONE);
						combatLayoutSV.setVisibility(combatLayoutSV.GONE);
						worldLayoutSV.setVisibility(worldLayoutSV.GONE);
						settingLayoutSV.setVisibility(settingLayoutSV.GONE);
						UIReveal(playerLayoutSV, 0, 0, W(), 0, 500);
					}
				}));
				img1bg1.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
							UIZoom(img1bg1, 100, 50, 100);
							imgview1.setColorFilter(hexColor("#a0a0a0"));
						} else if (e.getAction() == android.view.MotionEvent.ACTION_UP) {
							UIZoom(img1bg1, 50, 100, 100);
							imgview1.setColorFilter(hexColor("#ffffff"));
						}
						return false;
					}
				}));
				img1bg1.addView(imgview1);
				img2bg2 = NewView("LL", W() * 0.1, H() * 0.19, "CC", 0, ["RT", "#00000000"], 0, null);
				img2 = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/combat.png");
				img2bg2.setPadding(20, 20, 20, 20);
				imgview2 = new android.widget.ImageView(ctx);
				imgview2.setColorFilter(hexColor("#ffffff"));
				imgview2.setImageBitmap(img2);
				img2bg2.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						img1bg1.setBackgroundColor(hexColor("#00000000"));
						img2bg2.setBackgroundColor(hexColor("#1E90FF"));
						img3bg3.setBackgroundColor(hexColor("#00000000"));
						img4bg4.setBackgroundColor(hexColor("#00000000"));
						img5bg5.setBackgroundColor(hexColor("#00000000"));
						playerLayoutSV.setVisibility(playerLayoutSV.GONE);
						displayLayoutSV.setVisibility(displayLayoutSV.GONE);
						combatLayoutSV.setVisibility(combatLayoutSV.VISIBLE);
						worldLayoutSV.setVisibility(worldLayoutSV.GONE);
						settingLayoutSV.setVisibility(settingLayoutSV.GONE);
						UIReveal(combatLayoutSV, 0, 0, W(), 0, 500);
					}
				}));
				img2bg2.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
							UIZoom(img2bg2, 100, 50, 100);
							imgview2.setColorFilter(hexColor("#a0a0a0"));
						} else if (e.getAction() == android.view.MotionEvent.ACTION_UP) {
							UIZoom(img2bg2, 50, 100, 100);
							imgview2.setColorFilter(hexColor("#ffffff"));
						}
						return false;
					}
				}));
				img2bg2.addView(imgview2);
				img3bg3 = NewView("LL", W() * 0.1, H() * 0.19, "CC", 0, ["RT", "#00000000"], 0, null);
				img3 = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/display.png");
				img3bg3.setPadding(20, 20, 20, 20);
				imgview3 = new android.widget.ImageView(ctx);
				imgview3.setColorFilter(hexColor("#ffffff"));
				imgview3.setImageBitmap(img3);
				img3bg3.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						img1bg1.setBackgroundColor(hexColor("#00000000"));
						img2bg2.setBackgroundColor(hexColor("#00000000"));
						img3bg3.setBackgroundColor(hexColor("#1E90FF"));
						img4bg4.setBackgroundColor(hexColor("#00000000"));
						img5bg5.setBackgroundColor(hexColor("#00000000"));
						playerLayoutSV.setVisibility(playerLayoutSV.GONE);
						displayLayoutSV.setVisibility(displayLayoutSV.VISIBLE);
						combatLayoutSV.setVisibility(combatLayoutSV.GONE);
						worldLayoutSV.setVisibility(worldLayoutSV.GONE);
						settingLayoutSV.setVisibility(settingLayoutSV.GONE);
						UIReveal(displayLayoutSV, 0, 0, W(), 0, 500);
					}
				}));
				img3bg3.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
							UIZoom(img3bg3, 100, 50, 100);
							imgview3.setColorFilter(hexColor("#a0a0a0"));
						} else if (e.getAction() == android.view.MotionEvent.ACTION_UP) {
							UIZoom(img3bg3, 50, 100, 100);
							imgview3.setColorFilter(hexColor("#ffffff"));
						}
						return false;
					}
				}));
				img3bg3.addView(imgview3);
				img4bg4 = NewView("LL", W() * 0.1, H() * 0.19, "CC", 0, ["RT", "#00000000"], 0, null);
				img4 = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/world.png");
				img4bg4.setPadding(20, 20, 20, 20);
				imgview4 = new android.widget.ImageView(ctx);
				imgview4.setColorFilter(hexColor("#ffffff"));
				imgview4.setImageBitmap(img4);
				img4bg4.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						img1bg1.setBackgroundColor(hexColor("#00000000"));
						img2bg2.setBackgroundColor(hexColor("#00000000"));
						img3bg3.setBackgroundColor(hexColor("#00000000"));
						img4bg4.setBackgroundColor(hexColor("#1E90FF"));
						img5bg5.setBackgroundColor(hexColor("#00000000"));
						playerLayoutSV.setVisibility(playerLayoutSV.GONE);
						displayLayoutSV.setVisibility(displayLayoutSV.GONE);
						combatLayoutSV.setVisibility(combatLayoutSV.GONE);
						worldLayoutSV.setVisibility(worldLayoutSV.VISIBLE);
						settingLayoutSV.setVisibility(settingLayoutSV.GONE);
						UIReveal(worldLayoutSV, 0, 0, W(), 0, 500);
					}
				}));
				img4bg4.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
							UIZoom(img4bg4, 100, 50, 100);
							imgview4.setColorFilter(hexColor("#a0a0a0"));
						} else if (e.getAction() == android.view.MotionEvent.ACTION_UP) {
							UIZoom(img4bg4, 50, 100, 100);
							imgview4.setColorFilter(hexColor("#ffffff"));
						}
						return false;
					}
				}));
				img4bg4.addView(imgview4);
				img5bg5 = NewView("LL", W() * 0.1, H() * 0.19, "CC", 0, ["RT", "#00000000"], 0, null);
				img5 = android.graphics.BitmapFactory.decodeFile("sdcard/games/Taichi/images/setting.png");
				img5bg5.setPadding(20, 20, 20, 20);
				imgview5 = new android.widget.ImageView(ctx);
				imgview5.setColorFilter(hexColor("#ffffff"));
				imgview5.setImageBitmap(img5);
				img5bg5.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function() {
						img1bg1.setBackgroundColor(hexColor("#00000000"));
						img2bg2.setBackgroundColor(hexColor("#00000000"));
						img3bg3.setBackgroundColor(hexColor("#00000000"));
						img4bg4.setBackgroundColor(hexColor("#00000000"));
						img5bg5.setBackgroundColor(hexColor("#1E90FF"));
						playerLayoutSV.setVisibility(playerLayoutSV.GONE);
						displayLayoutSV.setVisibility(displayLayoutSV.GONE);
						combatLayoutSV.setVisibility(combatLayoutSV.GONE);
						worldLayoutSV.setVisibility(worldLayoutSV.GONE);
						settingLayoutSV.setVisibility(settingLayoutSV.VISIBLE);
						UIReveal(settingLayoutSV, 0, 0, W(), 0, 500);
					}
				}));
				img5bg5.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						if (e.getAction() == android.view.MotionEvent.ACTION_DOWN) {
							UIZoom(img5bg5, 100, 50, 100);
							imgview5.setColorFilter(hexColor("#a0a0a0"));
						} else if (e.getAction() == android.view.MotionEvent.ACTION_UP) {
							UIZoom(img5bg5, 50, 100, 100);
							imgview5.setColorFilter(hexColor("#ffffff"));
						}
						return false;
					}
				}));
				img5bg5.addView(imgview5);
				//Right Layout.
				playerLayoutSV = NewView("SV", W() * 0.9, H() * 0.95, null, null, ["TB", "#00ffffff"], 0, null);
				playerLayout = NewView("LL", W() * 0.9, H() * 0.95, "LT", 1, ["TB", "#00000000"], 0, null);
				playerLayoutSV.addView(playerLayout);
				displayLayoutSV = NewView("SV", W() * 0.9, H() * 0.95, null, null, ["TB", "#00ffffff"], 0, null);
				displayLayout = NewView("LL", W() * 0.9, H() * 0.95, "LT", 1, ["TB", "#00000000"], 0, null);
				displayLayoutSV.addView(displayLayout);
				combatLayoutSV = NewView("SV", W() * 0.9, H() * 0.95, null, null, ["TB", "#00ffffff"], 0, null);
				combatLayout = NewView("LL", W() * 0.9, H() * 0.95, "LT", 1, ["TB", "#00000000"], 0, null);
				combatLayoutSV.addView(combatLayout);
				worldLayoutSV = NewView("SV", W() * 0.9, H() * 0.95, null, null, ["TB", "#00ffffff"], 0, null);
				worldLayout = NewView("LL", W() * 0.9, H() * 0.95, "LT", 1, ["TB", "#00000000"], 0, null);
				worldLayoutSV.addView(worldLayout);
				settingLayoutSV = NewView("SV", W() * 0.9, H() * 0.95, null, null, ["TB", "#00ffffff"], 0, null);
				settingLayout = NewView("LL", W() * 0.9, H() * 0.95, "LT", 1, ["TB", "#00000000"], 0, null);
				settingLayoutSV.addView(settingLayout);
				playerLayoutSV.setVisibility(playerLayoutSV.VISIBLE);
				displayLayoutSV.setVisibility(displayLayoutSV.GONE);
				combatLayoutSV.setVisibility(combatLayoutSV.GONE);
				worldLayoutSV.setVisibility(worldLayoutSV.GONE);
				settingLayoutSV.setVisibility(settingLayoutSV.GONE);
				NewSwitch(displayLayout, "方块边框显示", Render.playerESP_set,
				function(v) {
					if (Render.playerESP_set) {
						Render.playerESP_set = false;
					} else {
						Render.playerESP_set = true;
					}
				});
				NewSwitch(displayLayout, "攻击距离显示", attackDistance,
				function(v) {
					if (attackDistance) {
						attackDistance = false;
						showdisCDV.dismiss();
					} else {
						showDistance();
						attackDistance = true;
						Print("攻击距离获取可能不准确!仅作为参考");
					}
				});
				NewSwitch(displayLayout, "自动翻译", translate,
				function(v) {
					if (translate) {
						translate = false;
					} else {
						translate = true;
					}
				});
				NewSwitch(displayLayout, "视角缩放", zoom,
				function(v) {
					if (zoom) {
						zoom = false;
						zooming = false;
						ModPE.resetFov();
						zoomCDV.dismiss();
					} else {
						zoom = true;
						ZoomButton();
					}
				});
				NewSwitch(displayLayout, "动态Vape贴图", vapeimage,
				function(v) {
					if (vapeimage) {
						vapeimage = false;
						vapeCdv.dismiss();
					} else {
						vapeimage = true;
						VapeImageShow();
					}
				});
				NewSwitch(worldLayout, "投掷物粒子轨迹", projectileParticle,
				function(v) {
					if (projectileParticle) {
						projectileParticle = false;
					} else {
						projectileParticle = true;
					}
				});
				NewSwitch(displayLayout, "CPS显示", cpsDisplay,
				function(v) {
					if (cpsDisplay) {
						cpsCDV.dismiss();
						cpsDisplay = false;
					} else {
						KeyboardCpsShow();
						cpsDisplay = true;
					}
				});
				NewSwitch(worldLayout, "不渲染掉落物", disableRenderItem,
				function(v) {
					if (disableRenderItem) {
						disableRenderItem = false;
					} else {
						disableRenderItem = true;
					}
				});
				NewSwitch(displayLayout, "ScreeDebugMode", screenDebug,
				function(v) {
					if (screenDebug) {
						screenDebug = false;
						ModPE.setUiRenderDebug(false);
					} else {
						screenDebug = true;
						ModPE.setUiRenderDebug(true);
					}
				});

				NewSwitch(playerLayout, "一键F5视角", f5View,
				function(v) {
					if (f5View) {
						f5View = false;
						f5CDV.dismiss();
					} else {
						f5View = true;
						f5Button();
					}
				});

				NewSwitch(playerLayout, "跳跃按钮", jumpButton,
				function(v) {
					if (jumpButton) {
						jumpButton = false;
						jumpCDV.dismiss();
					} else {
						jumpButton = true;
						jumpButtonShow();
					}
				});

				NewSwitch(playerLayout, "快捷栏快速切换", fastSwitch,
				function(v) {
					if (fastSwitch) {
						fastSwitch = false;
						fastSwitchCDV.dismiss();
					} else {
						fastSwitch = true;
						fastSwitchButtonShow();
					}
				});
				NewSwitch(playerLayout, "强制疾跑", sprint,
				function(v) {
					if (sprint) {
						sprint = false;
					} else {
						sprint = true;
					}
				});
				NewSwitch(worldLayout, "全局亮度", fullbright,
				function(v) {
					if (fullbright) {
						fullbright = false;
						Block.setLightLevel(0, 0);
					} else {
						fullbright = true;
						Block.setLightLevel(0, 15);
						Print("拆一个方块即可刷新视角");
					}
				});

				NewSwitch(worldLayout, "终为白日", alwaysDay,
				function(v) {
					if (alwaysDay) {
						alwaysDay = false;
					} else {
						alwaysDay = true;
					}
				});
				NewSwitch(playerLayout, "禁止潜行", antiShift,
				function(v) {
					if (antiShift) {
						antiShift = false;
					} else {
						antiShift = true;
					}
				});
				NewSwitch(playerLayout, "彩色聊天", colorChat,
				function(v) {
					if (colorChat) {
						colorChat = false;
					} else {
						colorChat = true;
					}
				});
				NewSwitch(playerLayout, "绕过反彩字", bypassMode,
				function(v) {
					if (bypassMode) {
						bypassMode = false;
					} else {
						bypassMode = true;
					}
				});
				NewSwitch(playerLayout, "看向被持续破坏的方块", destroyLookAt,
				function(v) {
					if (destroyLookAt) {
						destroyLookAt = false;
					} else {
						destroyLookAt = true;
					}
				});
				NewSwitch(playerLayout, "右键按钮", rightButton,
				function(v) {
					if (rightButton) {
						rightButton = false;
						rightCDV.dismiss();
					} else {
						rightButton = true;
						rightButtonShow();
					}
				});
				NewButton(playerLayout, "屏蔽设置",
				function(v) {
					ShieldPlayers();
				});

				NewButton(playerLayout, "历史聊天记录",
				function(v) {
					HistoryMessage();
				});
				fovDisplay = NewText("当前Fov值:" + fov, "CC", null, "#ffffff");

				seekbar = new android.widget.SeekBar(ctx);
				seekbar.setMax(360);
				seekbar.setProgress(fov);
				//Listener
				seekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
					onProgressChanged: function(seekbar, progress, fromuser) {
						fovDisplay.setText("当前Fov值:" + seekbar.getProgress());

						fov = seekbar.getProgress();
						ModPE.setFov(fov);
					}
				}));
				NewButton(combatLayout, "重置Fov",
				function(v) {
					ModPE.resetFov();
					fov = 90;
				});
				NewSwitch(combatLayout, "启用攻击粒子", attackParticle,
				function(v) {
					if (attackParticle) {
						attackParticle = false;
					} else {
						attackParticle = true;
					}
				});
				NewSwitch(combatLayout, "虚拟准星", crosshair,
				function(v) {
					if (crosshair) {
						crosshair = false;
						crosshairCDV.dismiss();
					} else {
						crosshair = true;
						crosshairLayout();
					}
				});
				particleDisplay = NewText("当前粒子数:" + pcount, "CC", null, "#ffffff");

				parseekbar = new android.widget.SeekBar(ctx);
				parseekbar.setMax(100);
				parseekbar.setProgress(pcount);
				//Listener
				parseekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
					onProgressChanged: function(seekbar, progress, fromuser) {
						particleDisplay.setText("当前粒子数:" + parseekbar.getProgress());

						pcount = parseekbar.getProgress();

					}
				}));
				particleSpeedDisplay = NewText("当前粒子坠落速度:" + downSpeed, "CC", null, "#ffffff");

				parspseekbar = new android.widget.SeekBar(ctx);
				parspseekbar.setMax(100);
				parspseekbar.setProgress(downSpeed * 10);
				//Listener
				parspseekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
					onProgressChanged: function(seekbar, progress, fromuser) {
						particleSpeedDisplay.setText("当前粒子坠落速度:" + parspseekbar.getProgress() / 10);

						downSpeed = parspseekbar.getProgress() / 10;

					}
				}));
				NewSwitch(combatLayout, "陀螺仪", gravityMode,
				function(v) {
					if (gravityMode) {
						gravityMode = false;
						if (sl != null) {
							ctx.runOnUiThread(new java.lang.Runnable({
								run: function() {
									var sm = ctx.getSystemService(ctx.SENSOR_SERVICE);
									sm.unregisterListener(sl);
								}
							}))
						}
					} else {
						gravityMode = true;
						ctx.runOnUiThread(new java.lang.Runnable({
							run: function() {
								try {
									var sm = ctx.getSystemService(ctx.SENSOR_SERVICE);
									var sen = sm.getDefaultSensor(android.hardware.Sensor.TYPE_GYROSCOPE);
									sl = new android.hardware.SensorEventListener({
										onSensorChanged: function(se) {
											x = se.values[android.hardware.SensorManager.DATA_X];
											y = se.values[android.hardware.SensorManager.DATA_Y];
										}
									}) sm.registerListener(sl, sen, android.hardware.SensorManager.SENSOR_DELAY_GAME);
								} catch(e) {};
							}
						}))
					}
				});
				durDisplay = NewText("当前灵敏度:" + ty + "%", "CC", null, "#ffffff");

				durseekbar = new android.widget.SeekBar(ctx);
				durseekbar.setMax(300);
				durseekbar.setProgress(ty);
				//Listener
				durseekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
					onProgressChanged: function(seekbar, progress, fromuser) {
						durDisplay.setText("当前灵敏度:" + durseekbar.getProgress() + "%");

						ty = durseekbar.getProgress();

					}
				}));
				NewSwitch(combatLayout, "FPS优化", betterFPS,
				function(v) {
					if (betterFPS) {
						betterFPS = false;
					} else {
						betterFPS = true;
					}
				});
				floatalpha = NewText("悬浮球不透明度:" + floatWinAlpha * 100, "CC", null, "#ffffff");

				alphaseekbar = new android.widget.SeekBar(ctx);
				alphaseekbar.setMax(100);
				alphaseekbar.setProgress(floatWinAlpha * 100);
				//Listener
				alphaseekbar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
					onProgressChanged: function(seekbar, progress, fromuser) {
						floatalpha.setText("悬浮球不透明度:" + alphaseekbar.getProgress());
						floatvw1.setAlpha(alphaseekbar.getProgress() / 100);
						imgview.setAlpha(alphaseekbar.getProgress() / 100);
						floatWinAlpha = alphaseekbar.getProgress() / 100;

					}
				}));
				settingLayout.addView(floatalpha);
				settingLayout.addView(alphaseekbar);
				combatLayout.addView(fovDisplay);
				combatLayout.addView(seekbar);
				combatLayout.addView(particleDisplay);
				combatLayout.addView(parseekbar);
				combatLayout.addView(particleSpeedDisplay);
				combatLayout.addView(parspseekbar);
				combatLayout.addView(durDisplay);
				combatLayout.addView(durseekbar);
				chooseList.addView(img1bg1);
				chooseList.addView(img2bg2);
				chooseList.addView(img3bg3);
				chooseList.addView(img4bg4);
				chooseList.addView(img5bg5);
				leftTitleLayout.addView(title);
				actionbar.addView(leftTitleLayout);
				bottomLayout.addView(chooseList);
				bottomLayout.addView(playerLayoutSV);
				bottomLayout.addView(combatLayoutSV);
				bottomLayout.addView(displayLayoutSV);
				bottomLayout.addView(worldLayoutSV);
				bottomLayout.addView(settingLayoutSV);
				bg.addView(actionbar);
				bg.addView(bottomLayout);
				UIReveal(bg, W() * 0.5, H() * 0.5, W(), 0, 800);
				UILevel(actionbar, -100, 0, 1000, null);
				UILevel(chooseList, -100, 0, 1200, null);
				UIReveal(playerLayoutSV, 0, 0, W(), 0, 500);
				menuCDV = NewCDV( - 1, null, bg, W(), H(), false, true, "LT", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

var lmb, rmb, rmbCPSText, lmbCPSText, cpsCDV;
function KeyboardCpsShow() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				cpsbg = NewView("LL", W() * 0.21, H() * 0.08, "LT", 0, ["TB", "#00000000"], 0, null);

				lmb = NewView("LL", W() * 0.1025, H() * 0.08, "CC", 1, ["TB", "#aa000000"], 0, null);
				lmbText = NewText("LMB", "CC", null, "#ffffff");
				lmbCPSText = NewText("0", "CC", 8, "#ffffff");

				line = NewView("LL", W() * 0.005, H() * 0.08, "CC", 1, ["TB", "#00000000"], 0, null);

				rmb = NewView("LL", W() * 0.1025, H() * 0.08, "CC", 1, ["TB", "#aa000000"], 0, null);
				rmbText = NewText("RMB", "CC", null, "#ffffff");
				rmbCPSText = NewText("0", "CC", 8, "#ffffff");

				lmb.addView(lmbText);
				rmb.addView(rmbText);
				lmb.addView(lmbCPSText);
				rmb.addView(rmbCPSText);
				cpsbg.addView(lmb);
				cpsbg.addView(line);
				cpsbg.addView(rmb);

				cpsCDV = NewCDV(1, null, cpsbg, W() * 0.21, H() * 0.08, false, false, "CB", 0, H() * 0.22);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

function removeElement(arr, item) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != item) {
			result.push(arr[i]);
		}
	}
	return result;
}

function FindArray(arr, item) {
	for (var i in arr) {
		if (arr[i] == item) {
			return true;
		}
	}
	return false;

}

function HistoryMessage() {
	PromptBox("large", "历史聊天记录", {
		clo1: ["§1确定",
		function() {},
		1],
		maintext: [historyMsg.join("\n§r")],

	});

}

var shieldText;
function ShieldPlayers() {
	shieldEdit = NewET("输入玩家名", "", 15, "#000000", null);

	if (shieldPlayersArray.length == 0) {

		shieldText = NewText("还没有屏蔽任何玩家哦", "LT", null, "#000000");
	} else {
		shieldText = NewText("屏蔽的玩家:\n" + shieldPlayersArray.join("\n"), "LT", null, "#000000");
	}
	PromptBox("large", "屏蔽聊天", {
		clo1: ["§4移除",
		function() {

			if (FindArray(shieldPlayersArray, shieldEdit.getText().toString()) == true) {
				shieldPlayersArray = removeElement(shieldPlayersArray, shieldEdit.getText().toString());
				Print("移除成功");

			}
		},
		1],
		clo2: ["§1添加",
		function() {
			if (shieldEdit.getText() != null) {
				shieldPlayersArray.push(shieldEdit.getText().toString());
				Print("添加成功");
			}
		},
		1],

		maintext: ["在下方输入要屏蔽的玩家名"],
		add: [shieldEdit, shieldText]
	});

}

function GifView(is) {
	var tickTime = 20;
	var currentTime = 0;
	var mMovie = android.graphics.Movie.decodeStream(is);
	var w = mMovie.width();
	var h = mMovie.height();
	var d = mMovie.duration();

	var img = new android.widget.ImageView(ctx);
	//img.setGravity(android.view.Gravity.LEFT|android.view.Gravity.TOP);
	var params = new android.widget.LinearLayout.LayoutParams(W(), H());
	img.setLayoutParams(params);
	img.setImageBitmap(getBmp(currentTime));

	function inRun() {
		img.setImageBitmap(getBmp(currentTime += tickTime));
		if (currentTime > d) {
			currentTime = 0;
			img.setImageBitmap(getBmp(currentTime));
		}
		img.postDelayed(inRun, tickTime);
	}

	function getBmp(t) {
		var bmp = android.graphics.Bitmap.createBitmap(w, h, android.graphics.Bitmap.Config.ARGB_8888);
		var cv = new android.graphics.Canvas(bmp);
		mMovie.setTime(t);
		mMovie.draw(cv, 0, 0);
		return bmp;
	}

	this.getView = function() {
		return img;
	};

	this.start = function() {
		img.post(inRun);
		return this;
	};

	this.setTickTime = function(tt) {
		tickTime = tt;
		return this;
	};

	return this;
}

var vapeCdv;
function VapeImageShow() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var base64 = new android.util.Base64.decode(base64data, 0);
				var is = new java.io.ByteArrayInputStream(base64);
				var mGifView = new GifView(is).start().getView();
				vapeCdv = NewCDV(999, null, mGifView, W() * 0.17, H(), false, false, "RT", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

var fastSwitchCDV;
function fastSwitchButtonShow() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var postion = [0, 0, 0, 0];
				fastSwitchbg = NewView("LL", H() * 0.2, H() * 0.1, "LC", 0, ["TB", "#aaffffff"], 20, null);
				leftSwitch = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#00ffffff"], 20, {
					click: function() {
						usingSlot = Player.getSelectedSlotId();
						if (usingSlot > 0) {
							Player.setSelectedSlotId(usingSlot - 1);
						}

					}
				});
				leftSwitch.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							break;
						case 2:
							postion[2] += e.getRawX() - postion[0];
							postion[3] += e.getRawY() - postion[1];
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							fastSwitchCDV.update(postion[2], postion[3], -2, -2);
							break;
						}
						return ! true;
					}
				}));
				rightSwitch = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#00ffffff"], 20, {
					click: function() {
						usingSlot = Player.getSelectedSlotId();
						if (usingSlot < 8) {
							Player.setSelectedSlotId(usingSlot + 1);
						}

					}
				});
				leftText = NewText("L", "CC", null, "#000000");
				rightText = NewText("R", "CC", null, "#000000");
				leftSwitch.addView(leftText);
				rightSwitch.addView(rightText);
				fastSwitchbg.addView(leftSwitch);
				fastSwitchbg.addView(rightSwitch);

				fastSwitchCDV = NewCDV(2, null, fastSwitchbg, H() * 0.2, H() * 0.1, false, true, "CC", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}
var rightCDV;
function rightButtonShow() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var postion = [0, 0, 0, 0];
				rightbg = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#aaffffff"], 20, {
					click: function() {
						rightthread = new java.lang.Thread(new java.lang.Runnable({
							run: function() {
								inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_U);
							}
						})) rightthread.start();
					}
				});
				rightbg.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							break;
						case 2:
							postion[2] += e.getRawX() - postion[0];
							postion[3] += e.getRawY() - postion[1];
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							rightCDV.update(postion[2], postion[3], -2, -2);
							break;
						}
						return ! true;
					}
				}));
				buttontext = NewText("右", "CC", null, null);
				buttontext.setTextColor(hexColor("#000000"));
				rightbg.addView(buttontext);

				rightCDV = NewCDV(2, null, rightbg, H() * 0.1, H() * 0.1, false, true, "CC", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}
var jumpCDV;
function jumpButtonShow() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var postion = [0, 0, 0, 0];
				jumpbg = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#aaffffff"], 20, {
					click: function() {
						tythread = new java.lang.Thread(new java.lang.Runnable({
							run: function() {
								inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_SPACE);
							}
						})) tythread.start();
					}
				});
				jumpbg.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							break;
						case 2:
							postion[2] += e.getRawX() - postion[0];
							postion[3] += e.getRawY() - postion[1];
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							jumpCDV.update(postion[2], postion[3], -2, -2);
							break;
						}
						return ! true;
					}
				}));
				buttontext = NewText("跳", "CC", null, null);
				buttontext.setTextColor(hexColor("#000000"));
				jumpbg.addView(buttontext);

				jumpCDV = NewCDV(2, null, jumpbg, H() * 0.1, H() * 0.1, false, true, "CC", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

var zoomCDV;
var zooming = false;
function ZoomButton() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var postion = [0, 0, 0, 0];
				background = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#aaffffff"], 20, {
					click: function() {
						if (zooming) {
							zooming = false;
							ModPE.resetFov();
							background.setBackgroundDrawable(roundRect([hexColor("#aaffffff"), hexColor("#aaffffff")], [20, 20, 20, 20], "RT", 0));

						} else {
							zooming = true;
							ModPE.setFov(30);
							background.setBackgroundDrawable(roundRect([hexColor("#a8edea"), hexColor("#fed6e3")], [20, 20, 20, 20], "RT", 0));

						}
					}
				});
				background.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							break;
						case 2:
							postion[2] += e.getRawX() - postion[0];
							postion[3] += e.getRawY() - postion[1];
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							zoomCDV.update(postion[2], postion[3], -2, -2);
							break;
						}
						return ! true;
					}
				}));
				buttontext = NewText("缩", "CC", null, null);
				buttontext.setTextColor(hexColor("#000000"));
				background.addView(buttontext);

				zoomCDV = NewCDV(2, null, background, H() * 0.1, H() * 0.1, false, true, "CC", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}
var f5CDV;
function f5Button() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				var postion = [0, 0, 0, 0];
				f5bg = NewView("LL", H() * 0.1, H() * 0.1, "CC", 0, ["TB", "#aaffffff"], 20, {
					click: function() {
						F5thread = new java.lang.Thread(new java.lang.Runnable({
							run: function() {
								inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_F5);
							}
						})) F5thread.start();
						//F5thread.stop();
					}
				});
				f5bg.setOnTouchListener(new android.view.View.OnTouchListener({
					onTouch: function(v, e) {
						switch (e.getAction()) {
						case 0:
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							break;
						case 2:
							postion[2] += e.getRawX() - postion[0];
							postion[3] += e.getRawY() - postion[1];
							postion[0] = e.getRawX();
							postion[1] = e.getRawY();
							f5CDV.update(postion[2], postion[3], -2, -2);
							break;
						}
						return ! true;
					}
				}));
				buttontext = NewText("F5", "CC", null, null);
				buttontext.setTextColor(hexColor("#000000"));
				f5bg.addView(buttontext);

				f5CDV = NewCDV(2, null, f5bg, H() * 0.1, H() * 0.1, false, true, "CC", 0, 0);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

var showdisCDV;
var disText;
function showDistance() {
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try {
				backgroundd = NewView("LL", W() * 0.2, H() * 0.08, "CC", 0, ["TB", "#aa000000"], 0, null);
				disText = NewText("攻击距离:0", "CC", null, null);
				disText.setTextColor(hexColor("#ffffff"));
				backgroundd.addView(disText);
				showdisCDV = NewCDV(3, null, backgroundd, W() * 0.21, H() * 0.08, false, false, "CB", 0, H() * 0.14);

			} catch(err) {
				Error(err);
			}
		}
	}));
}

function chatHook(str) {
	var strArray = str.split(" ");
	if (strArray[0] == ".setCrosshairStyle") {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					crosshairStyle = strArray[1];
					crosshairText.setText(strArray[1]);
				} catch(err) {
					Error(err);
				}
			}
		}));
	}

	if (strArray[0] == ".setCrosshairSize") {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					crosshairSize = strArray[1];
					crosshairText.setTextSize(Number(strArray[1]));
				} catch(err) {
					Error(err);
				}
			}
		}));
	}

	if (strArray[0] == ".setCrosshairPosition") {
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					crosshairX = strArray[1];
					crosshairY = strArray[2];
					crosshairCDV.updata(crosshairX, crosshairY, -2, -2);
				} catch(err) {
					Error(err);
				}
			}
		}));
	}

	if (str == ".pos1") {
		pos1[0] = getPlayerX();
		pos1[1] = getPlayerY();
		pos1[2] = getPlayerZ();
		preventDefault();
	}
	if (str == ".pos2") {
		pos2[0] = getPlayerX();
		pos2[1] = getPlayerY();
		pos2[2] = getPlayerZ();
		preventDefault();
	}
	if (str == ".randomDestroy") {
		var blocks = 0;
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		var totalBlocks = (Math.abs(pos1[0] - pos2[0]) + 1) * (Math.abs(pos1[2] - pos2[2]) + 1) * (Math.abs(pos1[1] - pos2[1]) + 1);
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2]) {
						if (random(0, 100) < 50) {
							setTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1, 0, 0);
							blocks++;
						}
					}
				}
			}
		}
		clientMessage(WorldBuilder + "Destroyed " + blocks + " Blocks");
		preventDefault();
	}
	if (str == ".copy") {
		var blocks = 0;
		blocksArray = [];
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2] && Level.getTile(xx1, yy1, zz1) > 0) {
						if (Level.getTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1) > 0) {
							blocksArray.push([xx1, yy1, zz1, Level.getTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1), Level.getData(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1)]);
							blocks++;
						}
					}
				}
			}
		}
		clientMessage(WorldBuilder + "Copied " + blocks + " Blocks");
		preventDefault();
	}
	if (str == ".place") {
		var blocks = 0;
		for (var i in blocksArray) {
			Level.setTile(pos1[0] + blocksArray[i][0], pos1[1] + blocksArray[i][1], pos1[2] + blocksArray[i][2], blocksArray[i][3], blocksArray[i][4]);
			blocks++;
		}

		clientMessage(WorldBuilder + "Placed " + blocks + " Blocks");
		preventDefault();
	}
	if (strArray[0] == ".replace") {
		var blocks = 0;
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		var totalBlocks = (Math.abs(pos1[0] - pos2[0]) + 1) * (Math.abs(pos1[2] - pos2[2]) + 1) * (Math.abs(pos1[1] - pos2[1]) + 1);
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2]) {
						if (Level.getTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1) == parseInt(strArray[1]) && Level.getData(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1) == parseInt(strArray[2])) {
							setTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1, id, data);
							blocks++;
						}
					}
				}
			}
		}

		clientMessage(WorldBuilder + "Replaced " + blocks + " Blocks");
		preventDefault();
	}

	if (str == ".build Air") {
		var blocks = 0;
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		var totalBlocks = (Math.abs(pos1[0] - pos2[0]) + 1) * (Math.abs(pos1[2] - pos2[2]) + 1) * (Math.abs(pos1[1] - pos2[1]) + 1);
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2]) {
						if (Level.getTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1) == 0) {
							setTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1, id, data);
							blocks++;
						}
					}
				}
			}
		}
		clientMessage(WorldBuilder + "Placed " + blocks + " Blocks");
		preventDefault();
	}
	if (str == ".build Air") {
		var blocks = 0;
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		var totalBlocks = (Math.abs(pos1[0] - pos2[0]) + 1) * (Math.abs(pos1[2] - pos2[2]) + 1) * (Math.abs(pos1[1] - pos2[1]) + 1);
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2]) {
						if (Level.getTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1) == 0) {
							setTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1, id, data);
							blocks++;
						}
					}
				}
			}
		}
		clientMessage(WorldBuilder + "Placed " + blocks + " Blocks");
		preventDefault();
	}

	if (str == ".build") {
		var blocks = 0;
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		var totalBlocks = (Math.abs(pos1[0] - pos2[0])) * (Math.abs(pos1[2] - pos2[2])) * (Math.abs(pos1[1] - pos2[1]));
		for (var yy = 0; yy <= Math.abs(pos1[1] - pos2[1]); yy++) {
			for (var xx = 0; xx <= Math.abs(pos1[0] - pos2[0]); xx++) {
				for (var zz = 0; zz <= Math.abs(pos1[2] - pos2[2]); zz++) {
					var xx1 = (pos1[0] - pos2[0]) >= 0 ? -xx: xx,
					yy1 = (pos1[1] - pos2[1]) >= 0 ? -yy: yy,
					zz1 = (pos1[2] - pos2[2]) >= 0 ? -zz: zz;
					if (xx1 != pos2[0] || yy1 != pos2[1] || zz1 != pos2[2]) {
						setTile(pos1[0] + xx1, pos1[1] + yy1, pos1[2] + zz1, id, data);
						blocks++;
					}
				}
			}
		}
		clientMessage(WorldBuilder + "Placed " + blocks + " Blocks");
		preventDefault();
	}
	if (strArray[0] == ".circle") {
		var radius = strArray[3];
		var id = Player.getCarriedItem();
		var data = Player.getCarriedItemData();
		if (id > 256) {
			id = 0
		}
		//类型
		if (strArray[1] == "hollow") {
			if (strArray[2] == "x") {
				for (var i = 0; i < 360; i++) {
					var xx = Math.floor(sin(i) * radius);
					var zz = Math.floor(cos(i) * radius);
					setTile(pos1[0] + xx, pos1[1], pos1[2] + zz, id, data);

				}
			} else if (strArray[2] == "y") {
				for (var i = 0; i < 360; i++) {
					var xx = Math.floor(sin(i) * radius);
					var zz = Math.floor(cos(i) * radius);
					setTile(pos1[0] + xx, pos1[1] + zz, pos1[2], id, data);

				}
			}
			if (strArray[2] == "z") {
				for (var i = 0; i < 360; i++) {
					var xx = Math.floor(sin(i) * radius);
					var zz = Math.floor(cos(i) * radius);
					setTile(pos1[0], pos1[1] + xx, pos1[2] + zz, id, data);

				}
			}
		} else if (strArray[1] == "solid") {

} else {
			clientMessage(WorldBuilder + "§cUnknown Type");
		}

		preventDefault();
	}
	if (str == ".getID") {
		clientMessage("ItemID:§a" + Player.getCarriedItem());
		clientMessage("ItemData:§a" + Player.getCarriedItemData());
		preventDefault();
	}

	if (str == ".forcetranslate true") {
		clientMessage("§a强制翻译已开启.");
		forcetranslate = true;
		preventDefault();
	}
	if (str == ".forcetranslate false") {
		clientMessage("§a强制翻译已关闭.");
		forcetranslate = false;
		preventDefault();
	}
	var chatArr = str.split("");
	var commandArr = str.split(" ");
	if (colorChat == true && chatArr[0] != "/" && chatArr[0] != ".") {
		colorArr = new Array();
		Text = "";
		if (!bypassMode) {
			for (var i in chatArr) {
				colorArr.push(randomColor() + chatArr[i]);
			}
		} else {
			for (var i in chatArr) {
				colorArr.push(randomBypassColor() + chatArr[i]);
			}
		}
		for (var i in colorArr) {
			Text = Text + colorArr[i];
		}
		Server.sendChat("§<§>" + Text);
		preventDefault();
	}
	if (chatArr[0] != "/" && chatArr[0] != ".") {
		Server.sendChat("§<§>" + str);
		preventDefault();
	}
}
function HG(url) {
	try {
		var结果 = [],
		空 = "",
		读 = new java.io.BufferedReader(new java.io.InputStreamReader(java.net.URL(url).openConnection().getInputStream(), "UTF-8"));
		while ((空 = 读.readLine()) != null) {结果.push(空);
		};读.close();
		return结果.join("\n");
	} catch(e) {}
};
function serverMessageReceiveHook(str) {
	if (str.match("§<§>")) {
		clientMessage("§d[TaichiUser]§f" + str);
		preventDefault();
	}
	nowTime = new Date();
	historyMsg.push("§d[" + nowTime.getHours() + ":" + nowTime.getMinutes() + ":" + nowTime.getSeconds() + "]§r" + str);

	if (shieldPlayersArray.length != 0) {
		for (var i in shieldPlayersArray) {
			if (str.match(shieldPlayersArray[i])) {
				preventDefault();
			}

		}
	}

	if (forcetranslate == true) {
		var tranText = JSON.parse(HG("http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=" + encodeURI(str)));
		clientMessage("§d[§6DrFun§d]§e翻译结果:§a" + tranText.translateResult[0][0].tgt);
	}
	if (str.match(">> ") && translate == true) {
		var chatText = str.split(">> ");
		var reglet = new RegExp(/[a-zA-Z]+/);
		if (reglet.test(chatText[1])) {
			var tranText = JSON.parse(HG("http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&i=" + encodeURI(chatText[1])));
			clientMessage("§d[§6DrFun§d]§e翻译结果:§a" + tranText.translateResult[0][0].tgt);
		}
	}

}

function distanceBetweenTwoPoint(x1, z1, x2, z2) {
	return Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(z1 - z2, 2)));
}

function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {
	if (Player.getCarriedItem() == 271) {
		clientMessage(WorldBuilder + "The Second Position:" + x + "," + y + "," + z);
		pos2[0] = x;
		pos2[1] = y;
		pos2[2] = z;
		preventDefault();
	}
	if (cpsDisplay) {
		if (Player.getCarriedItem() <= 256 && Player.getCarriedItem() > 0) {
			rcps++;
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					try {
						rmb.setBackgroundColor(hexColor("#1E90FF"));
					} catch(err) {
						Error(err);
					}
				}
			}));

			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					new android.os.Handler().postDelayed(new java.lang.Runnable({
						run: function() {
							rmb.setBackgroundColor(hexColor("#aa000000"));
						}
					}), 100)
				}
			}));

		} else {
			lcps++;
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					try {
						lmb.setBackgroundColor(hexColor("#1E90FF"));
					} catch(err) {
						Error(err);
					}
				}
			}));

			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					new android.os.Handler().postDelayed(new java.lang.Runnable({
						run: function() {
							lmb.setBackgroundColor(hexColor("#aa000000"));
						}
					}), 100)
				}
			}));

		}
	}

}
function newLevel(hasLevel, isRemote) {
	inGame = true;
}
function lookAt(obj, x1, y1, z1) {
	var x = Entity.getX(obj);
	var y = Entity.getY(obj);
	var z = Entity.getZ(obj);
	var xx = x1 - x;
	var yy = y1 - y;
	var zz = z1 - z;
	if (xx == 0) xx = 0.00000001;
	if (yy == 0) yy = 0.00000001;
	if (zz == 0) zz = 0.00000001;
	var xz = Math.sqrt(xx * xx + zz * zz);
	var xyz = Math.sqrt(yy * yy + xz * xz);
	var sinxz = (xx * xx + xz * xz - zz * zz) / (2 * xx * xz);
	var yaw = -Math.asin(sinxz) / Math.PI * 180;
	var sinxyz = (yy * yy + xyz * xyz - xz * xz) / (2 * yy * xyz);
	var pitch = -Math.asin(sinxyz) / Math.PI * 180
	if (zz < 0) {
		if (yaw < 0) yaw = -90 - (90 + yaw);
		else yaw = 90 + 90 - yaw;
	}
	Entity.setRot(obj, yaw, pitch);
}
function continueDestroyBlock(dx, dy, dz, side, progress) {
	if (destroyLookAt) {
		lookAt(getPlayerEnt(), dx + 0.5, dy + 0.5, dz + 0.5);
	}
}
function destroyBlock(x, y, z, side) {
	if (Player.getCarriedItem() == 271) {
		clientMessage(WorldBuilder + "The First Position:" + x + "," + y + "," + z);
		pos1[0] = x;
		pos1[1] = y;
		pos1[2] = z;
		preventDefault();
	}
}

function startDestroyBlock(x, y, z, side) {
	if (cpsDisplay) {
		lcps++;
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					lmb.setBackgroundColor(hexColor("#1E90FF"));
				} catch(err) {
					Error(err);
				}
			}
		}));

		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				new android.os.Handler().postDelayed(new java.lang.Runnable({
					run: function() {
						lmb.setBackgroundColor(hexColor("#aa000000"));
					}
				}), 100)
			}
		}));

	}
}

function attackHook(ater, vim) {
	if (attackParticle) {
		for (var i = 0; i < pcount; i++) {
			Level.addParticle(ParticleType.crit, Entity.getX(vim) + Math.random(), Entity.getY(vim) + 1.5 + Math.random(), Entity.getZ(vim) + Math.random(), 0, parseFloat("-" + downSpeed), 0, 2);
		}
	}
	if (cpsDisplay) {
		lcps++;
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				try {
					lmb.setBackgroundColor(hexColor("#1E90FF"));
				} catch(err) {
					Error(err);
				}
			}
		}));

		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				new android.os.Handler().postDelayed(new java.lang.Runnable({
					run: function() {
						lmb.setBackgroundColor(hexColor("#aa000000"));
					}
				}), 100)
			}
		}));
	}
	if (ater == getPlayerEnt() && attackDistance == true) {
		var gx = Entity.getX(vim);
		var gz = Entity.getZ(vim);
		var px = getPlayerX();
		var pz = getPlayerZ();
		var bl1 = distanceBetweenTwoPoint(gx, gz, px, pz).toString().split("");
		if (bl1.length > 2) {
			var bl2 = bl1[0] + bl1[1] + bl1[2] + bl1[3];
		} else {
			var bl2 = 0;
		}
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				disText.setText("攻击距离:" + bl2);
			}
		})) ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				new android.os.Handler().postDelayed(new java.lang.Runnable({
					run: function() {
						disText.setText("攻击距离:0");
					}
				}), 500)
			}
		}));
	}
}

function modTick() {
	if (disableRenderItem) {
		var worldAllEntitys = Entity.getAll();
		for (var i = 0; i < worldAllEntitys.length; i++) {
			if (Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.ITEM) {
				Entity.remove(worldAllEntitys[i]);
			}
		}
	}
	if (alwaysDay) {
		Level.setTime(1000);
	}
	if (projectileParticle) {
		var worldAllEntitys = Entity.getAll();
		for (var i = 0; i < worldAllEntitys.length; i++) {
			if (Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.SNOWBALL || Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.ARROW || Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.EGG || Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.THROWN_POTION || Entity.getEntityTypeId(worldAllEntitys[i]) == EntityType.FISHING_HOOK) {
				Level.addParticle(ParticleType.flame, Entity.getX(worldAllEntitys[i]), Entity.getY(worldAllEntitys[i]), Entity.getZ(worldAllEntitys[i]), 0, 0, 0, 1);
			}
		}
	}
}
var SprIntThread = new java.lang.Thread(new java.lang.Runnable({
	run: function() {
		while (true) {
			if (sprint) {
				inst.sendKeyDownUpSync(android.view.KeyEvent.KEYCODE_CTRL_LEFT);
			}
			SprIntThread.sleep(10);
		}
	}
}));
SprIntThread.start();
var as = new java.lang.Thread(new java.lang.Runnable({
	run: function() {
		while (true) {
			if (antiShift == true) {
				Entity.setSneaking(getPlayerEnt(), false);
			}
			if (gravityMode) {
				setRot(Player.getEntity(), getYaw() - x * 180 * (ty / 100) / Math.PI / 20, getPitch() + y * 180 * (ty / 100) / Math.PI / 20);
			}
			as.sleep(20);
		}
	}
}));
as.start();
var cpsThread = new java.lang.Thread(new java.lang.Runnable({
	run: function() {
		while (true) {
			if (betterFPS) {
				ctx.runOnUiThread(new java.lang.Runnable({
					run: function() {
						FpsFix();
						Delay(1000,
						function(v) {
							fpsFixCDV.dismiss();
						});
					}
				}));
			}
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					UIRotate(floatvw1, 0, 360, 50, 50, 1000, null);
				}
			}));
			if (cpsDisplay) {
				ctx.runOnUiThread(new java.lang.Runnable({
					run: function() {
						try {
							lmbCPSText.setText(lcps.toString());
							rmbCPSText.setText(rcps.toString());
							templcps = lcps temprcps = rcps
						} catch(err) {
							Error(err);
						}
					}
				}));
			}
			Delay(50,
			function(v) {
				lcps -= templcps;
			});
			Delay(50,
			function(v) {
				rcps -= temprcps;
			});
			cpsThread.sleep(1000);
		}
	}
}));
cpsThread.start();
var Render = {
	fov: 110,
	//勿改
	fovs: 110,
	//更新视角-当值变化时
	tracers_set: false,
	playerESP_set: false,
	blockoverlay: false,
	initted: false,
	renderer: null,
	glSurface: null,
	w: 0,
	h: 0,
	ctx: null,
	getFloatBuffer: function(fArray) {
		var bBuffer = java.nio.ByteBuffer.allocateDirect(fArray.length * 4);
		bBuffer.order(java.nio.ByteOrder.nativeOrder());
		var fBuffer = bBuffer.asFloatBuffer();
		fBuffer.put(fArray);
		fBuffer.position(0);
		return fBuffer;
	},
	getShortBuffer: function(sArray) {
		var bBuffer = java.nio.ByteBuffer.allocateDirect(sArray.length * 2);
		bBuffer.order(java.nio.ByteOrder.nativeOrder());
		var sBuffer = bBuffer.asShortBuffer();
		sBuffer.put(sArray);
		sBuffer.position(0);
		return sBuffer;
	},
	init: function() {
		Render.ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		Render.renderer = new android.opengl.GLSurfaceView.Renderer({
			onSurfaceCreated: function(gl, config) {
				var GL10 = javax.microedition.khronos.opengles.GL10;
				gl.glClearColor(0, 0, 0, 0);
				gl.glShadeModel(GL10.GL_SMOOTH);
				gl.glClearDepthf(1.0);
				gl.glEnable(GL10.GL_DEPTH_TEST);
				gl.glDepthFunc(GL10.GL_LEQUAL);
				gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
			},
			onSurfaceChanged: function(gl, width, height) {
				var GL10 = javax.microedition.khronos.opengles.GL10;
				gl.glMatrixMode(GL10.GL_PROJECTION);
				gl.glLoadIdentity();
				android.opengl.GLU.gluPerspective(gl, Render.fov, (Render.w = width) / (Render.h = height), 0.1, 100);
				gl.glMatrixMode(GL10.GL_MODELVIEW);
				gl.glLoadIdentity();
			},
			onDrawFrame: function(gl) {
				if (Render.playerESP_set || Render.tracers_set) {
					var GL10 = javax.microedition.khronos.opengles.GL10;
					gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
					gl.glLoadIdentity();
					gl.glDisable(GL10.GL_LIGHTING);
					if (Render.fovs != Render.fov) {
						Render.fov = Render.fovs;
						try {
							var GL10 = javax.microedition.khronos.opengles.GL10;
							gl.glMatrixMode(GL10.GL_PROJECTION);
							gl.glLoadIdentity();
							android.opengl.GLU.gluPerspective(gl, Render.fov, Render.w / Render.h, 0.1, 100);
							gl.glMatrixMode(GL10.GL_MODELVIEW);
							gl.glLoadIdentity();
						} catch(e) {}
					}
					try {
						var playerme = getPlayerEnt();
						var yaw = getYaw(playerme) % 360;
						var pitch = getPitch(playerme) % 360;
						var eyeX = getPlayerX();
						var eyeY = getPlayerY() + 1;
						var eyeZ = getPlayerZ();
						var dCenterX = Math.sin(yaw / 180 * Math.PI);
						var dCenterZ = Math.cos(yaw / 180 * Math.PI);
						var dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);
						var centerX = eyeX - dCenterX;
						var centerZ = eyeZ + dCenterZ;
						var centerY = eyeY - dCenterY;
						android.opengl.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
						if (Render.initted) {
							try {
								if (Render.playerESP_set) {
									Render.playerESP(gl);
								}
							} catch(e) {
								print(e)
							}
						};
					} catch(e) {
						print(e);
					}
				}
			}
		});
		Render.ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				Render.glSurface = new android.opengl.GLSurfaceView(Render.ctx);
				Render.glSurface.setZOrderOnTop(true);
				Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
				Render.glSurface.getHolder().setFormat(android.graphics.PixelFormat.TRANSLUCENT);
				Render.glSurface.setRenderer(Render.renderer);
				Render.glSurface.setRenderMode(0);
				Render.ctx.getWindow().getDecorView().addView(Render.glSurface);
				Render.initted = true;
			}
		}));
	},
	drawBox: function(gl, x, y, z, xsize, ysize, zsize) {
		var GL10 = javax.microedition.khronos.opengles.GL10;
		var size = new Array(xsize, ysize, zsize);
		var vertices = [0, 0, 0, size[0], 0, 0, 0, 0, size[2], size[0], 0, size[2], 0, size[1], 0, size[0], size[1], 0, 0, size[1], size[2], size[0], size[1], size[2]];
		var vertexBuffer = Render.getFloatBuffer(vertices);
		var lineIndices = [0, 1, 0, 2, 0, 4, 3, 1, 3, 2, 3, 7, 5, 4, 5, 7, 5, 1, 6, 4, 6, 7, 6, 2];
		var polyIndices = [0, 1, 4, 1, 4, 5, 2, 3, 6, 7, 6, 3, 1, 3, 7, 7, 1, 5, 0, 2, 6, 6, 0, 4, 0, 1, 2, 3, 1, 2, 4, 5, 6, 7, 5, 6];
		var lineBuffer = Render.getShortBuffer(lineIndices);
		var polyBuffer = Render.getShortBuffer(polyIndices);
		gl.glTranslatef(x, y, z);
		gl.glFrontFace(GL10.GL_CCW);
		gl.glEnable(GL10.GL_BLEND);
		gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
		gl.glLineWidth(5);
		gl.glColor4f(1, 0, 0, 1);
		gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
		gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
		gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
		gl.glColor4f(1, 0, 0, 0.6);
		gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
		gl.glDisable(GL10.GL_LINE_SMOOTH);
		gl.glTranslatef( - x, -y, -z);
	},
	drawLine: function(gl, x, y, z, x2, y2, z2) {
		var GL10 = javax.microedition.khronos.opengles.GL10;
		var size = new Array(x2, y2, z2);
		var vertices = [0, 0, 0, x2 - x, y2 - y, z2 - z];
		var vertexBuffer = Render.getFloatBuffer(vertices);
		var indices = [0, 1];
		var indexBuffer = Render.getShortBuffer(indices);
		gl.glTranslatef(x, y, z);
		gl.glEnable(GL10.GL_BLEND);
		gl.glDepthMask(false);
		gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
		gl.glLineWidth(4);
		gl.glColor4f(1.0, 1.0, 1.0, 0.8);
		gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
		gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
		gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
		gl.glTranslatef( - x, -y, -z);
		gl.glDepthMask(true);
	},
	playerESP: function(gl) {
		var playerme = getPlayerEnt();
		if (Render.playerESP_set == true) {
			x = Player.getPointedBlockX() + 0.055;
			y = Player.getPointedBlockY() + 2;
			z = Player.getPointedBlockZ() + 0.055;
			Render.drawBox(gl, x, y, z, 1, -1, 1);
		};
	}
};
Render.init();
new java.lang.Thread(new java.lang.Runnable({
	run: function() {
		while (true) {
			try {
				//这里放代码
				Render.glSurface.requestRender();
			} catch(e) {};
		}
	}
})).start();
var r = 255,
g = 0,
b = 0;
var rgbspeed = 8;
var rgbtick = rgbspeed;
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex: hex;
};
function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
var rgb = new java.lang.Thread(new java.lang.Runnable({
	run: function() {
		while (1) {
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					try {
						if (crosshair) {
							crosshairText.setTextColor(android.graphics.Color.parseColor(rgbToHex(r, g, b)));
						}
					} catch(e) {};
				}
			}));
			if (rgbtick == 0) {
				if (r > 0 && b == 0) {
					r = r - 1;
					g = g + 1;
				}
				if (g > 0 && r == 0) {
					g = g - 1;
					b = b + 1;
				}
				if (b > 0 && g == 0) {
					r = r + 1;
					b = b - 1;
				}
				rgbtick = rgbspeed;
			} else {
				rgbtick--
			}

			rgb.sleep(1);
		}
	}
})) rgb.start();
function blockEventHook(x, y, z, type, data) {
	Render.drawBox(gl, x, y, z, 1, 1, 1);
}