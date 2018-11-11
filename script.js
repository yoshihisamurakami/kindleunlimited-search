
function search()
{
    alert('ok');
}

/*
kindleストア、"abcde" で検索した場合
https://www.amazon.co.jp/s/ref=nb_sb_noss_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Ddigital-text&field-keywords=abcde

”PHPサイエンス”で検索した場合
https://www.amazon.co.jp/s/ref=nb_sb_noss_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Ddigital-text&field-keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

"PHPサイエンス" で検索し、"読み放題対象タイトル"にチェック
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8&qid=1541941124&rnid=3169285051

URLを短くしてみる(1) rnidパラメータを削ってみた OK
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8&qid=1541941124

URLを短くしてみる(2) qidパラメータを削ってみた OK
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8

URLを短くしてみる(3) ieパラメータを削ってみた OK
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

URLを短くしてみる(4) 検索結果が変わってしまった NG
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

URLを短くしてみる(5) (rubyでURLデコード+エンコード) NG kindle unlimited検索ではなくなってしまった
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2C&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

URLを短くしてみる(6) (rubyでURLデコード+エンコード)  OK! 検索結果51件
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=n:2250738051,p_n_feature_nineteen_browse-bin:3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

URLを短くしてみる(7) (rubyでURLデコード+エンコード) NG  表示が１列から４列に変わった
https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=p_n_feature_nineteen_browse-bin:3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9

*/
