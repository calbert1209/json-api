export const sampleHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Script-Type" content="text/javascript" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<link rel="stylesheet" href="/dia/css/impDiaDiagam.css" type="text/css" media="screen,print" />
<link rel="shortcut icon" href="/img/favicon.ico" />
<meta name="author" content="神奈川中央交通" />
<meta name="description" content="神奈中バス停「金井(横浜市栄区)」の時刻データを携帯へ送信します。" />
<meta name="keywords" content="金井(横浜市栄区),神奈川中央交通,神奈中,バス,時刻表,運賃案内,所要時間,乗り換え案内,地図,のりば案内" />
<title>「金井(横浜市栄区)」のバス停時刻表携帯送信 | 神奈川中央交通</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript" src="/js/script.js"></script>
<script type="text/javascript" src="/js/jquery.placeholder.min.js"></script>
<script language="javascript" type="text/javascript"><!--
	function parentOpen() {
		window.close();
		var str = window.opener.document.location;
		str = str + "";
		if (window.opener && !window.opener.closed) {
			  str='http://www.kanachu.co.jp/dia/';
			  window.opener.document.location='http://www.kanachu.co.jp/dia/';
		 }
	}

	function send(){
		if(document.mailform.ml.value == '' ||
			document.mailform.ml.value == '例）bus@kanachu.co.jp'){
			alert('メールアドレスを入力してください');
			return false;
		}
		return true;
	}
//--></script>
</head>

<body id="popup">
<div id="container">
	<!--header-->

	<!--header-->
	<div id="header" class="separate">
		<h1><a class="nolink" href="" onclick="return false"><img src="/img/logo.gif" alt="CSSの影響で表示されない" /></a></h1>
		<div id="headerR">
			<p class="btnClose"><a href="javascript:window.close()">閉じる</a></p>
		</div>
	</div>
	<!--/header-->

	<!--topContents-->
	<div id="contents">
		<div class="hGroup101">
			<h1 class="head">検索結果を送信します。メールアドレスを入力し、送信ボタンを押してください。</h1>
		</div>
		<p class="noteText">※ドメイン指定受信を設定されている方は「kanachu.co.jp」を追加してからご利用ください。</p>
		<form method="get" action="/dia/diagram/send" name="mailform">
			<input name="cs" type="hidden" value="0000800324-12" style="float: left;" width="1" />
			<input name="nid" type="hidden" value="00126844" style="float: left;" width="1" />
			<input name="chk" type="hidden" value="all" style="float: left;" width="1" />
			<input name="dts" type="hidden" value="1638554400" style="float: left;" width="1" />
			<dl class="mailAddress">
				<dt>メールアドレス</dt>
				<dd><input name="ml" type="text" class="mailText searchTxt" placeholder="例）bus@kanachu.co.jp" size="80" maxlength="50" />
				<input type="image" src="/img/btn_transmit.gif" class="imgover" onclick="void(this.form.submit());return send();"/>
				</dd>
			</dl>
		</form>
		<div class="infoText">
			<pre>ﾊﾞｽ停名：金井(横浜市栄区)
系統番号：戸71 戸72 戸73 戸93 戸94
行先：戸塚バスセンター行
改正日：2020/11/24

<備考>
ﾋ：戸７２ﾋﾙｽﾞ南戸塚経由
ﾋ：ﾋﾙｽﾞ南戸塚経由
※祝日は休日ﾀﾞｲﾔで運行いたします。
※年末年始、お盆期間につきましては随時お知らせいたします。

■平日
5時 
6時 20(ヒ) . 28 . 37(ヒ) . 44(ヒ) . 48 . 51(ヒ) . 59(ヒ)
7時 07 . 12 . 14(ヒ) . 21(ヒ) . 28 . 32 . 35(ヒ) . 44 . 53(ヒ) .
59
8時 02(ヒ) . 12 . 19(ヒ) . 22 . 26(ヒ) . 37 . 45(ヒ) . 46 .
56(ヒ)
9時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
10時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
11時 12(ヒ) . 12 . 32(ヒ) . 52(ヒ)
12時 12(ヒ) . 12 . 32(ヒ) . 52(ヒ) . 52
13時 12(ヒ) . 32(ヒ) . 52(ヒ) . 52
14時 12(ヒ) . 32(ヒ) . 52(ヒ) . 52
15時 12(ヒ) . 32(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 37 . 52(ヒ)
17時 12 . 22 . 34 . 55
18時 12 . 15 . 35 . 55
19時 07 . 12 . 22 . 32 . 52
20時 12 . 32 . 57
21時 02 . 19 . 50 . 52
22時 20 . 57
23時 
24時 
1時 

------------------------

■土曜
5時 
6時 20(ヒ) . 47(ヒ)
7時 01 . 17(ヒ) . 47(ヒ) . 52
8時 07(ヒ) . 27(ヒ) . 27 . 52(ヒ)
9時 20 . 22(ヒ) . 52(ヒ)
10時 12 . 22(ヒ) . 52(ヒ)
11時 02 . 22(ヒ) . 52(ヒ)
12時 02 . 22(ヒ) . 52(ヒ)
13時 02 . 22(ヒ) . 52(ヒ)
14時 02 . 22(ヒ) . 52(ヒ)
15時 02 . 22(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
17時 12 . 27 . 32 . 52
18時 12 . 17 . 32 . 52
19時 12 . 32 . 52
20時 17 . 27 . 47
21時 12 . 17 . 47
22時 17 . 47
23時 
24時 
1時 

------------------------

■休日
5時 
6時 20(ヒ) . 47(ヒ)
7時 01 . 17(ヒ) . 47(ヒ) . 52
8時 07(ヒ) . 27(ヒ) . 27 . 52(ヒ)
9時 20 . 22(ヒ) . 52(ヒ)
10時 12 . 22(ヒ) . 52(ヒ)
11時 02 . 22(ヒ) . 52(ヒ)
12時 02 . 22(ヒ) . 52(ヒ)
13時 02 . 22(ヒ) . 52(ヒ)
14時 02 . 22(ヒ) . 52(ヒ)
15時 02 . 22(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
17時 12 . 27 . 32 . 52
18時 12 . 17 . 32 . 52
19時 12 . 32 . 52
20時 17 . 27 . 47
21時 12 . 17 . 47
22時 17 . 47
23時 
24時 
1時 

--
神奈川中央交通株式会社
運賃・時刻表検索
http://www.kanachu.co.jp/

</pre>
		</div>
		<p class="btnClose01"><a href="javascript:window.close()">閉じる</a></p>
	</div>
	<!--/contents-->

	<!--footer-->
	<div id="footer">
		<div class="inner">
			<address>
			Copyright (c) KANACHU All Rights Reserved
			</address>
		</div>
	</div>
	<!--/footer-->
</div>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36802625-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<script type="text/javascript">try { var lb = new Vesicomyid.Bivalves("118417"); lb.init(); } catch(err) {} </script>
</body>
</html>
`;

export const sampleHeaderText = `ﾊﾞｽ停名：金井(横浜市栄区)
系統番号：戸71 戸72 戸73 戸93 戸94
行先：戸塚バスセンター行
改正日：2020/11/24

<備考>
ﾋ：戸７２ﾋﾙｽﾞ南戸塚経由
ﾋ：ﾋﾙｽﾞ南戸塚経由
※祝日は休日ﾀﾞｲﾔで運行いたします。
※年末年始、お盆期間につきましては随時お知らせいたします。

`;

export const sampleWeekdayText = `平日
5時 
6時 20(ヒ) . 28 . 37(ヒ) . 44(ヒ) . 48 . 51(ヒ) . 59(ヒ)
7時 07 . 12 . 14(ヒ) . 21(ヒ) . 28 . 32 . 35(ヒ) . 44 . 53(ヒ) .
59
8時 02(ヒ) . 12 . 19(ヒ) . 22 . 26(ヒ) . 37 . 45(ヒ) . 46 .
56(ヒ)
9時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
10時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
11時 12(ヒ) . 12 . 32(ヒ) . 52(ヒ)
12時 12(ヒ) . 12 . 32(ヒ) . 52(ヒ) . 52
13時 12(ヒ) . 32(ヒ) . 52(ヒ) . 52
14時 12(ヒ) . 32(ヒ) . 52(ヒ) . 52
15時 12(ヒ) . 32(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 37 . 52(ヒ)
17時 12 . 22 . 34 . 55
18時 12 . 15 . 35 . 55
19時 07 . 12 . 22 . 32 . 52
20時 12 . 32 . 57
21時 02 . 19 . 50 . 52
22時 20 . 57
23時 
24時 
1時 

------------------------

`;

export const sampleSaturdayText = `土曜
5時 
6時 20(ヒ) . 47(ヒ)
7時 01 . 17(ヒ) . 47(ヒ) . 52
8時 07(ヒ) . 27(ヒ) . 27 . 52(ヒ)
9時 20 . 22(ヒ) . 52(ヒ)
10時 12 . 22(ヒ) . 52(ヒ)
11時 02 . 22(ヒ) . 52(ヒ)
12時 02 . 22(ヒ) . 52(ヒ)
13時 02 . 22(ヒ) . 52(ヒ)
14時 02 . 22(ヒ) . 52(ヒ)
15時 02 . 22(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
17時 12 . 27 . 32 . 52
18時 12 . 17 . 32 . 52
19時 12 . 32 . 52
20時 17 . 27 . 47
21時 12 . 17 . 47
22時 17 . 47
23時 
24時 
1時 

------------------------

`;

export const sampleHolidayText = `休日
5時 
6時 20(ヒ) . 47(ヒ)
7時 01 . 17(ヒ) . 47(ヒ) . 52
8時 07(ヒ) . 27(ヒ) . 27 . 52(ヒ)
9時 20 . 22(ヒ) . 52(ヒ)
10時 12 . 22(ヒ) . 52(ヒ)
11時 02 . 22(ヒ) . 52(ヒ)
12時 02 . 22(ヒ) . 52(ヒ)
13時 02 . 22(ヒ) . 52(ヒ)
14時 02 . 22(ヒ) . 52(ヒ)
15時 02 . 22(ヒ) . 47 . 52(ヒ)
16時 12(ヒ) . 32(ヒ) . 32 . 52(ヒ)
17時 12 . 27 . 32 . 52
18時 12 . 17 . 32 . 52
19時 12 . 32 . 52
20時 17 . 27 . 47
21時 12 . 17 . 47
22時 17 . 47
23時 
24時 
1時 

--
神奈川中央交通株式会社
運賃・時刻表検索
http://www.kanachu.co.jp/

`;
