function openSideBar() {
  if ($(window).width() < 740) {
    document.getElementById("side-bar").style.width = "70%";
    document.getElementById("darken").style.display = "block";

}
else {
  document.getElementById("side-bar").style.width = "20%";
  document.getElementById("darken").style.display = "block";

}

}

function closeSideBar() {
    document.getElementById("side-bar").style.width = "0%";
    document.getElementById("darken").style.display = "none";
    document.getElementById('appinsert').style.display = "none";

    let cal = !! document.getElementById('calendar');
    if (cal) {
        document.getElementById('calendar').style.display = "none";
        console.log(cal);
    }

    let extappf = !! document.getElementById('extappinsert');
    if (extappf) {
      document.getElementById('extappinsert').style.display = "none";
        console.log(extappf);
    }


    if (document.getElementById('message_container')) {
      document.getElementById('message_container').style.display = "none";
    }
    let awardImgPrev = document.getElementById("award-view").style.display = "none";

    var elems = document.getElementsByClassName('services-big');
for (var i=0;i<elems.length;i+=1){
  elems[i].style.display = 'none !important';
}

}

//tab contents
function openCity(evt, cityName) {

    if ($(window).width() < 740) {
      closeSideBar();
      // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    } else {

      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");

    }



    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    if (cityName == 'Home') {
      if ($(window).width() < 740) {
        document.getElementById(cityName).style.display = "block";
    
    }else{
      document.getElementById(cityName).style.display = "grid";
    }

}else if(cityName == 'Services'){
  document.getElementById(cityName).style.display = "grid";
}else{
  document.getElementById(cityName).style.display = "block";
}


    evt.currentTarget.className += " active";
    if(cityName == 'Contact_Us'){
      document.getElementById('Page_Section').innerHTML = 'About Us';
    }else if(cityName == 'Gallery'){
      document.getElementById('Page_Section').innerHTML = 'Photos';
    }else{
      document.getElementById('Page_Section').innerHTML = String(cityName);
    }
    


}

function book_open(){
    document.getElementById("darken").style.display = "block";
    document.getElementById("appinsert").style.display = "block";

}
function serviceOpen(serviceid){
  document.getElementById(serviceid).style.display = "block";
  document.getElementById("darkenSvc").style.display = "block";
}
function serviceClose(serviceid){
  var elems = document.getElementsByClassName('services-big');
for (var i=0;i<elems.length;i+=1){
elems[i].style.display = 'none';
}
  document.getElementById("darkenSvc").style.display = "none";
}

function AppPanelOpen(){
  document.getElementById('AppPanel').style.display ='grid';
  document.getElementById('UserPanel').style.display ='none';
  document.getElementById('StaffAccount').style.display = 'none';
  document.getElementById('filterApp').style.display = 'block';
}
function UserPanelOpen(){
  document.getElementById('AppPanel').style.display ='none';
  document.getElementById('UserPanel').style.display ='block';
  document.getElementById('StaffAccount').style.display = 'none';
  document.getElementById('filterApp').style.display = 'none';
}

function StaffAccountOpen(){
  document.getElementById('AppPanel').style.display ='none';
  document.getElementById('UserPanel').style.display ='none';
  document.getElementById('StaffAccount').style.display = 'block';
  document.getElementById('filterApp').style.display = 'none';
}
function openappinsert(){
  document.getElementById('appinsert').style.display = "block";
  document.getElementById('darken').style.display = "block";
}
function closeappinsert(){
  document.getElementById('appinsert').style.display = "none";
  document.getElementById('darken').style.display = "none";
  console.log("document.getElementById('darken').style.display = hidde");
}
function openmessages(){
  document.getElementById('message_container').style.display = "block";
  document.getElementById('darken').style.display = "block";
  document.getElementById("Notifications").style.display = "none";
  $("#message_history").scrollTop($("#message_history")[0].scrollHeight);
}
function closemessages(){
  document.getElementById('message_container').style.display = "none";
  document.getElementById('darken').style.display = "none";
}

if (document.getElementById('Home').style.display == 'block') {
document.getElementById('Home').style.display = 'grid';
}
function registertocontinue(){
  window.location.replace("/login_page.php?error=Register to Book an Appointment");
}

function openExtAppInsert(){
  document.getElementById('darken').style.display = "block";
  document.getElementById('extappinsert').style.display = "block";
}
function ProfilePatient() {
    window.open('about:blank', 'popup', 'width=400,height=400')
    document.getElementById('PatientProfile').submit();
}

function ProfileGuest() {
    window.open('about:blank', 'popup', 'width=400,height=400')
    document.getElementById('GuestProfile').submit();
    console.log(document.getElementById('GuestProfile'))
}

function updateGuestProfiles() {
    var extidInput = document.getElementById('extid');
    var pprofileInput = document.getElementById('pprofileInput');
    pprofileInput.value = extidInput.value;
    console.log("hi")
}


function openNotification(){
  var notifDiv = document.getElementById('Notifications');
  let notifDivF = notifDiv.style.display;
  if(notifDivF == 'block'){
    notifDiv.style.display = 'none';

  }else{
    notifDiv.style.display = 'block';

  }


}
function clearFilters(){
  document.querySelector('.filterinputs').value = '';
  document.querySelector('.datefilter').value = '';
  document.querySelector('.timefilter').value = '';
  let e = new Event("change");
  let element = document.querySelector('#filterinputt')
  element.dispatchEvent(e);
  console.log("Filters Cleared.")
}

function closeItself(el){
  let tc = el;
  el.style.display = 'none';

}