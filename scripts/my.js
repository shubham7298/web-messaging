console.log(window.location.search);
function getQueryStringValue (key) {  
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }    
  // Would write the value of the QueryString-variable called name to the console  
  var quer = getQueryStringValue("chatroom");
if(quer.length != 0)
  $("#chat-code").val(quer);

var chatroomid = document.getElementById('chat-code');


var submitChatElement = document.getElementById('btnchatcode');

//my code

chatroomid.onkeyup = function(){
  var x;
  x = chatroomid.value;

  // If x is Not a Number or less than one or greater than 10
if(/^[a-z0-9-_$]+$/i.test(x)){
      submitChatElement.removeAttribute('disabled');
    } else {
      submitChatElement.setAttribute('disabled', 'true');
    }
  }
  
  $(document).ready(function(){
    $("#btnchatcode").click(function(){
$("#chat-code").val(chatroomid.value);
console.log("roomid", chatroomid.value );
paramsChange();
    });
});


function paramsChange(){

// params change
var params = {
    chatroom: chatroomid.value
};

var queryString = $.param(params);

var queryString = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');
console.log(queryString);
updateURL();
  function updateURL(){
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' +queryString;
        window.history.pushState({path:newurl},'',newurl);
    }
  }
  window.location.reload();
// params changed

}
  