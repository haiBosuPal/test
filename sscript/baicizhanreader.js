let body = $response.body
body=JSON.parse(body)

if(body['scholar_member_remain']){
body['scholar_member_remain']=1
}

if(body['membership_remains']){
body['membership_remains']=666
}


body=JSON.stringify(body)
$done({body})
