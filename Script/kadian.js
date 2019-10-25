/*卡点视频
QX：
http:\/\/kadian\.nineton\.cn url script-response-body 
*/
var body = $response.body;
var url = $request.url;
const path = "/api/v1.user/info";
let obj = JSON.parse(body);
if (url.indexOf(path) != -1) {
	obj["is_vip"] = "1";
  	obj["vip_end_time"] = "1666627200";
  	obj["vip_grade"] = "2";
	obj["vip_type"] = "2";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
