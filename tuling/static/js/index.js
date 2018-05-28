var hisheight=0;
var index=0;
var appendhis=function(name, content){
	var myDate = new Date();
	var mytime=myDate.toLocaleTimeString();
	console.log(mytime)
	if('nana'==name){
		var child='<div class="output-cell"><p><span class="time">'+mytime+'</span></p><span class="nana-icon">&nbsp;</span><span class="nana-content">'+content+'</span></div>';
	}
	else {
		var child='<div class="output-cell"><p><span class="time">'+mytime+'</span></p><span class="me-content">'+content+'</span><span class="me-icon">&nbsp;</span></div>';
	}
	$('.output-container').append(child);
	$('.output-container').scrollTop($('.output-container')[0].scrollHeight);
}

var sendmsg=function(data){
	$.ajax({
		url: "/tuling/ajaxindex",
		method: 'get',
		data: data,
        crossDomain: true,
		success: function(msg){
			console.log(msg);
			msg=$.parseJSON(msg)
			output=msg['results'][0]['values']['text']
			appendhis('nana',output);
		}
	})
}

$('.input').keyup(function(event){
	if(13==event.which){
		var value=$('.input').val();
	    if(''!=value){
	    	appendhis('me',value);
	   		var data={
	   			'value':value,
	   		}
	   		sendmsg(data);
	   	}
	   	$('.input').val("");
	}
});
$('.sendbtn').click(function(event){
		var value=$('.input').val();
	    if(''!=value){
	    	appendhis('me',value);
	   		var data={
	   			'value':value,
	   		}
	   		sendmsg(data);
	   	}
	   	$('.input').val("");
});
