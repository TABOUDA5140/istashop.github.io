
function notif(){

            var a = document.getElementById("user").value;
            var b = document.getElementById("password").value;
            var x = document.getElementById('demo1');
            var y = document.getElementById('demo2');
            var z = document.getElementById('demo3');
            if (a=="" && b=="")
            {
                y.style.color = "red";
                x.style.color = "red";
                z.style.color = "red";
                
            }
            else if (a==""  && b!="")
            {
                x.style.color = "red";
                z.style.color = "red";
                document.getElementById('demo3').innerHTML = "*Veuilez saisire Votre Nom*"
                
            }
            else if (a!="" &&  b =="" )
            {
                y.style.color = "red";
                z.style.color = "red";
                document.getElementById('demo3').innerHTML = "*Veuiiler saisire le Mot de passe*"
            }
            else if (a!="" || a!=null && b!="" || b!=null)
            {
                localStorage.setItem("user", document.getElementById("user").value);
                location.href = "signe_message.html"
                
            }
        }


  