function postMessage() {

       yam.getLoginStatus( function(response) {
            if (response.authResponse) {
              //call the Post function
            yamPostRequest(this);
                
            } else {
              alert("not logged in")
                yam.login( function (response) {
                	alert("From auth respsonse <" + response.authResponse + ">" );
                  if (!response.authResponse) {
                       //call the Post function
                	  alert("I am in post request")
                    yamPostRequest(this);
                  } else {
                	  alert("I am in post request")
                  }
                });
            }
        });
    }


function yamPostRequest(val)  {
   var msg_value = document.getElementById('msg_body').value;
   var groupID = document.getElementById('group_id').value;
      if(msg_value ==""){
        alert ("Message body cannot be empty!");
        return false;
     }
     
     if(groupID==""){

      var conf = confirm("Group ID is empty, message will be posted to all company")
      if(conf==false) { return false}

     }

yam.platform.request(
   { 
      url: "https://api.yammer.com/api/v1/messages.json"
      , method: "POST"
      , data: {
       "body" :  msg_value
      ,"group_id" : groupID
     }
      , success: function (msg) { alert("Post was Successful!"); }
      , error: function (msg) { alert("Post was Unsuccessful"); }
      }
      )

}

/*$(document).ready(function (){
    yam.getLoginStatus( function(response) {
        if (response.authResponse) {
          //call the Post function
        	alert("I am logged in");
            
        } else {
          alert("not logged in");
          yam.connect.loginButton('#yammer-login', function (resp) {
        	    if (resp.authResponse) {
        	      document.getElementById('yammer-login').innerHTML = 'Welcome to Yammer!';
        	    }
        	  });
        }
    });

});//main*/