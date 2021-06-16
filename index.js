var imageslink = ["https://getmyuni.azureedge.net/college-image/big/national-institute-of-technology-nit-kurukshetra.jpg", "https://www.qualifygate.com/wp-content/uploads/2013/05/NIT_Kurukshetra_Academic_Block.jpg", "https://qph.fs.quoracdn.net/main-qimg-38b60fad7b0fc31ec829704dc99aeabd", "https://scontent.fdel2-3.fna.fbcdn.net/v/t31.18172-8/24131961_285405678647849_426967072086000359_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=rYtke2o331IAX9xe2wy&_nc_ht=scontent.fdel2-3.fna&oh=efd67f0647fbd5a7d05554be33d3d43f&oe=60EC8A82", "http://nitkkr.ac.in/docs/Guesthouse1.jpg", "https://qph.fs.quoracdn.net/main-qimg-e652d32aaea14cacf9b47dc5415cc00a"];
    var x = 1;
    setInterval(function () {

        if (x <= 6) {
            img = document.getElementById('img1');
            img.src = imageslink[x - 1];
        }
        else if (x == 6) {
            x = 0;
        };
        x++;
    }, 3000);
    var temp = 1;
    function navpannel() {
        document.getElementById('hiddennav').style.display = "block", color = "black";
        document.getElementById('display').style.display = "block";
        document.getElementById('overrider').style.display = "none";
        document.getElementById('best').style.display = "none";
        document.getElementsByTagName('footer')[0].style.display = "none";
    }
    function home() {
        document.getElementById('overrider').style.display = "block";
        document.getElementById('hiddennav').style.display = "none";
        document.getElementById('institute').style.display = "none";
        document.getElementById('display').style.display = "none";
        document.getElementById('academicul').style.display = "none";
        document.getElementById('map').style.display = "none";
        document.getElementsByTagName('footer')[0].style.display = "block";

    }
    function institute() {
        document.getElementById('institute').style.display = "block";
        document.getElementById('overrider').style.display = "none";
    }
    function Display(str) {
        // document.getElementById('map').style.marginTop = "63vw";
        if (str == '1') {
            var temp = document.getElementById("institute").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '2') {
            var temp = document.getElementById("programme").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '3') {
            var temp = document.getElementById("rollsheet").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '4') {
            var temp = document.getElementById("feestructure").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '5') {
            var temp = document.getElementById("compengg").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '6') {
            var temp = document.getElementById("civilengg").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '7') {
            var temp = document.getElementById("mechengg").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
        if (str == '8') {
            var temp = document.getElementById("placement_statistics").innerHTML;
            document.getElementById("display").innerHTML = temp;
            document.getElementById("display").style.display = "block";
        }
    }
    function dropdown(str) {
        document.getElementById('map').style.display = "none";
        if (str == '1') {
            var temp = document.getElementById("acad").innerHTML;
            document.getElementById("academicul").innerHTML = temp;
            document.getElementById("academicul").style.display = "block";
        }
        if (str == '2') {
            var temp = document.getElementById("depart").innerHTML;
            document.getElementById("academicul").innerHTML = temp;
            document.getElementById("academicul").style.display = "block";
        }
        if (str == '3') {
            var temp = document.getElementById("placement").innerHTML;
            document.getElementById("academicul").innerHTML = temp;
            document.getElementById("academicul").style.display = "block";
        }
        if (str == '4') {
            var temp = document.getElementById("contact").innerHTML;
            document.getElementById("academicul").innerHTML = temp;
            document.getElementById("academicul").style.display = "block";
        }
    }
    function mapdisplay() {
        home();
        document.getElementById('map').style.display = "block";
        document.getElementById('overrider').style.display = "none";
        document.getElementById('best').style.display = "none";
        document.getElementsByTagName('footer')[0].style.display = "none";

    }
    function cut() {

        home();
        document.getElementById('map').style.display = "none";
        document.getElementById('overrider').style.display = "block";
        document.getElementsByTagName('footer')[0].style.display = "block";

    }
    function bestteach() {
        home();
        if (temp == 1) {
            document.getElementById('best').style.display = 'block';
            document.getElementById('map').style.display = 'none';
            document.getElementById('overrider').style.display = 'none';
            document.getElementsByTagName('footer')[0].style.display = "none";
        }
        else if (temp == 0) {
            document.getElementById('best').style.display = 'none';
            document.getElementById('map').style.display = 'none';
            document.getElementById('overrider').style.display = 'block';
            document.getElementsByTagName('footer')[0].style.display = "block";
        }
        temp = !temp;
    }
    function progress() {
        alert("Website Under Maintenance! , footer is not working");
    }