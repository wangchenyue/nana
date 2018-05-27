var hisheight=0;
var index=0;
var appendhis=function(name, content){
	var child="<div class='hiscontainer' id='his"+index+"'><div class='hisname'>"+name+"</div><div class='hiscontent'>"+content+"</div><div>";
	$('.outputcontainer').append(child);
	$('.outputcontainer').scrollTop($('.outputcontainer')[0].scrollHeight);
}

var sendmsg=function(data){
	$.ajax({
		url: "//localhost:8000/tuling/ajaxindex",
		method: 'get',
		data: data,
        crossDomain: true,
		success: function(msg){
			console.log(msg);
			msg=$.parseJSON(msg)
			output=msg['results'][0]['values']['text']
			appendhis('nana:',output);
		}
	})
}

$('.input').keyup(function(event){
	if(13==event.which){
		var value=$('.input').val();
	    if(''!=value){
	    	appendhis('me:',value);
	   		var data={
	   			'value':value,
	   		}
	   		sendmsg(data);
	   	}
	   	$('.input').val("");
	}
});
