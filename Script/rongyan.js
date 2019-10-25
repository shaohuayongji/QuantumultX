/*随手记
*/
var body = $response.body;
var url = $request.url;
const path = "/api/user.getDetail.json";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["isVip"] = "1";
  	obj["vip_expires"] = "1654037822";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
