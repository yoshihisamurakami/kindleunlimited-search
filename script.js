/**
 * kindle unlimited検索
 *
 * 2018-11-14版
 */

 /*
 - amazon検索ボックスで"kindkeストア"を選択、キーワード"PHPサイエンス" で検索し、左枠"読み放題対象タイトル"にチェック
 https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8&qid=1541941124&rnid=3169285051

 - 上記URLからパラメータrnidを削る
 https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8&qid=1541941124
 -> OK

 - 同様、qidパラメータを削る
 https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&ie=UTF8
 -> OK

 - ieパラメータを削る
 https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
 -> OK

 - rhパラメータを削る
 https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
 -> NG （検索結果が変わってしまった）

 - rhパラメータの値を削る(1)
 rhパラメータをURLデコードすると
   n:2250738051,k:PHPサイエンス,p_n_feature_nineteen_browse-bin:3169286051

 となる。このうち "p_n_feature_nineteen_browse-bin:3169286051" を削って
   n:2250738051,k:PHPサイエンス
 これをURLエンコードすると
   n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
 これでURLを置き換えて
   https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
 -> NG (読み放題対象タイトルのチェックが外れてしまった)

- rhパラメータの値を削る(2)
  n:2250738051,k:PHPサイエンス,p_n_feature_nineteen_browse-bin:3169286051
  ↓ k:〜を削る
  n:2250738051,p_n_feature_nineteen_browse-bin:3169286051
  ↓ URLエンコード
  n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051
  これでURLを置き換えると
  https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
  -> OK

- rhパラメータの値を削る(3)
  n:2250738051,p_n_feature_nineteen_browse-bin:3169286051
  ↓  n:〜を削る
  p_n_feature_nineteen_browse-bin:3169286051
  ↓ URLエンコード
  p_n_feature_nineteen_browse-bin%3A3169286051
  これでURLを置き換えると
  https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=p_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
  -> NG (kindleストアでの検索ではなくなってしまった)

- fstパラメータを削る
  https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
  -> OK

- URLの s/ を削る
  https://www.amazon.co.jp/s/ref=sr_nr_p_n_feature_nineteen_0?rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
  -> OK

 */

function search()
{
  var word = document.getElementById('word').value;
  var word_enc = encodeURIComponent(word);
  var url = "https://www.amazon.co.jp/s/ref=sr_nr_p_n_feature_nineteen_0?rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=" + word_enc;
  window.open(url, '_blank');
}
