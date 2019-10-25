/*猫耳asmr
*/
var body = $response.body;
var url = $request.url;
const path1 = "/video/api/user/info";
const path2 = "/video/api/video/play";
const path3 = "/video/api/charge/ioslist";
if (url.indexOf(path1) != -1) {
	let obj = JSON.parse(body);
	obj["vip"] = "1";
	body = JSON.stringify(obj);
 }
if (url.indexOf(path2) != -1) {
	let obj = JSON.parse(body);
	obj["result"] = "100";
	body = JSON.stringify(obj);
 }
if (url.indexOf(path3) != -1) {
	let obj = JSON.parse(body);
	obj["result"] = "100";
  	obj["days"] = "365";
	obj["effective"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});

// From HoGer
