var navStatus = 0;
var DC = 0;
function openNav(){
    if(navStatus == 0)
    {
        document.getElementById('sidenav').style.width = '100%';
        document.getElementById('sidenav').style.display = 'block';
        navStatus = 1;
    }
    else{
        document.getElementById('sidenav').style.width = '0';
        document.getElementById('sidenav').style.display = 'none';
        navStatus = 0;
    }
}
var typed = new Typed('#affilated', {
    strings: ["Affiliated to Lala Lajpat Rai Training Institute ","Regd by : MSME (Ministory of Micro,Small and Medium Enterprises"],
    typeSpeed: 40,
    backSpeed:60,
    loop:true
  });

  AOS.init({
    delay: 100
  });

  function loadnotes(){
    window.location.replace('./pages/notes.html');
  }
  function loadCoursesOption(){
    window.location.replace('./pages/courses.html')
  }

  function openDiplomaCoursesDetail(){
    if(DC==0)
    {
    document.getElementById('diplomaTable').style.display = "block";
    DC = 1;
    }
    else{
      document.getElementById('diplomaTable').style.display = "none";
      DC = 0;
    }
  }
  var CC = 0;
  function openCertificateCoursesDetail(){
    if(CC == 0)
    {
      document.getElementById('certificationCoursesDetail').style.display = 'block';
      CC = 1;
    }
    else{
      document.getElementById('certificationCoursesDetail').style.display = 'none';
      CC = 0;
    }
  }
  var NC = 0;
  function nieliteCoursedDeail(){
    if(NC == 0)
    {
      document.getElementById('nieliteCoursesDetail').style.display = 'block';
      NC = 1;
    }
    else{
      document.getElementById('nieliteCoursesDetail').style.display = 'none';
      NC = 0;
    }
  }
  function slideToAbout(){
    
  }
  