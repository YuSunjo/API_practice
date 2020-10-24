module.exports = function(app, connection)
{
    const request = require('request');
	const key = "kgiQsVQw2UykeibGu%2B616KGEpGzEWwVk2APaO0lm1wR33oZ6j4F02a5AHVWyu8soS%2FgUWXXHMf%2F294wdlV0HrQ%3D%3D";

	function requestAPI(_method, _pageNo, _numOfRow, _startCreateDt, _endCreateDt, _callback){

		const pageNo = _pageNo;
		const numOfRow = _numOfRow;
		const startCreateDt = _startCreateDt;
		const endCreateDt = _endCreateDt;

		const url = "http://openapi.data.go.kr/openapi/service/rest/Covid19/" + _method
		 	+ "?serviceKey=" + key
			+ "&pageNo=" + pageNo
			+ "&numOfRows=" + numOfRow
			+ "&startCreateDt=" + startCreateDt
			+ "&endCreateDt="+endCreateDt;
			//console.log("url : " , url);

			request.get({
				url : url,
				method : "GET",
				headers: {
				 'Accept': 'application/json',
				 'Accept-Charset': 'utf-8',
				 'User-Agent': 'my-reddit-client'
		 		}
				},
				function(err, res, body){
					// console.log("res : " , body);
					if(err) console.log("request err : " , err);
					else{
						_callback(body);
					}
				})
    }
    
    app.get('/getLatestInfoData',function(req,res){
        const page = 1;
       const numOfRow = 10;
       var start = 20200810;
       var end = 20200811;
       console.log(start + " to " + end)
       requestAPI("getCovid19InfStateJson", page, numOfRow, start, end,function(data){
           if(res)
               res.send(data);
           else {
               res.send(false)
           }
       });
   });
}