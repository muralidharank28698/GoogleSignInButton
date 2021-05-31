
// onSignIn function:
function onSignIn(userProfile){

    console.log(userProfile);
    const profile=userProfile.getBasicProfile();
    console.log(profile);

    const userName=profile.getName();
    console.log(userName);

    const email=profile.getEmail();
    console.log(email);

    const id_token=userProfile.getAuthResponse().id_token;
    console.log(id_token);

}

// signOut function:
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }


// onFailure function:
function onFailure(err){
        console.log(err);
  }


// buttonFunction:
function buttonFunction(){
        gapi.signin2.render('signInBtn',{
            height:50,
            width:300,
            theme:'dark',
            onsuccess:onSignIn,
            onfailure:onFailure,
            longtitle:true
        })
  }

// window onload functon:  
  window.onload=function(){
    buttonFunction();
}