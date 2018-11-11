require 'uri'
# puts URI.unescape('https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as%3Aoff&rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9')

# 結果
# https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=n:2250738051,k:PHPサイエンス,p_n_feature_nineteen_browse-bin:3169286051&keywords=PHPサイエンス

# p_n_feature_nineteen_browse-bin:3169286051 は kindle unlimited検索を指定

# https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=n:2250738051,p_n_feature_nineteen_browse-bin:3169286051&keywords=PHPサイエンス
# (6)
# p URI.escape('https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=n:2250738051,p_n_feature_nineteen_browse-bin:3169286051&keywords=PHPサイエンス')

# https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=n:2250738051,p_n_feature_nineteen_browse-bin:3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
# (7)
p URI.escape('https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=p_n_feature_nineteen_browse-bin:3169286051&keywords=PHPサイエンス')
#=> https://www.amazon.co.jp/s/s/ref=sr_nr_p_n_feature_nineteen_0?fst=as:off&rh=p_n_feature_nineteen_browse-bin:3169286051&keywords=PHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9
