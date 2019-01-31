<script>
document.addEventListener("DOMContentLoaded", function(event) {
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    var campaignname = getUrlParameter('pk_campaign');
    var keywordname = getUrlParameter('pk_kwd');
    var sourcename = getUrlParameter('pk_source');
    var mediumname = getUrlParameter('pk_medium');
    var contentname = getUrlParameter('pk_content');

    if (campaignname === "") { campaignname = "wf-essential"; };
    if (sourcename === "") { sourcename = "wegfinder.at"; };
    if (mediumname === "") {
      mediumname = window.location.pathname;
    };

    var campaign = "pk_campaign=" + campaignname;
		var keyword = "&pk_kwd=" + keywordname;
		var source = "&pk_source=" + sourcename ;
		var medium = "&pk_medium=" + mediumname;
		var content = "&pk_content=" + contentname;

		var tracking = campaign + keyword + source + medium + content;
		var deeplink = "https://wegfinder.at/routing/?" + tracking;
		var downloadlink = "https://z2whj.app.goo.gl/?link=" + escape(deeplink) + "&apn=ch.swift.willi&ibi=ch.swift.mobilecitywien&isi=680580267";


    document.getElementsByClassName("downloadbutton")[0].firstChild.href = downloadlink;
});
</script>
