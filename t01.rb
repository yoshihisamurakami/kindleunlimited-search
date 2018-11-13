require 'uri'
require 'cgi'

#puts URI.unescape('rh=n%3A2250738051%2Ck%3APHP%E3%82%B5%E3%82%A4%E3%82%A8%E3%83%B3%E3%82%B9%2Cp_n_feature_nineteen_browse-bin%3A3169286051')

# 結果
# rh=n:2250738051,k:PHPサイエンス,p_n_feature_nineteen_browse-bin:3169286051

#(a)rh=n:2250738051,k:PHPサイエンス
#puts CGI.escape('n:2250738051,k:PHPサイエンス')

#(b)n:2250738051,p_n_feature_nineteen_browse-bin:3169286051
#puts CGI.escape('n:2250738051,p_n_feature_nineteen_browse-bin:3169286051')

puts CGI.escape('p_n_feature_nineteen_browse-bin:3169286051')