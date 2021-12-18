/**
 * kindle unlimited検索
 *
 */
function search()
{
  var word = document.getElementById('word').value;
  var word_enc = encodeURIComponent(word);
  var url = 'https://www.amazon.co.jp/s?rh=n%3A2250738051%2Ck%3A' + word_enc + '%2Cp_n_feature_nineteen_browse-bin%3A3169286051'
  window.open(url, '_blank');
}

document.getElementById('word').focus();
