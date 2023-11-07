function verifNum(ch)
{
if(ch.length!=4)
{
test=false;
}
else
{
i=0;
test=true;

while( (i<ch.length) && (test==true) )
{
if((ch.charAt(i)<"0") || (ch.charAt(i)>"9"))
{
test=false;
}
i++;
}
}
return(test);
}

function verifTxt(ch)
{
ch=ch.toUpperCase();
i=0;
test=true;

while( (i<ch.length) && (test==true) )
{
if(((ch.charAt(i)<"A") || (ch.charAt(i)>"Z")) && (ch.charAt(i)!=" "))
{
test=false;
}
i++;
}
return(test);
}
function verifMail(ch)
{
posat=ch.indexOf("@");
poslastat=ch.lastIndexOf("@");
pospt=ch.indexOf(".");
test=true
if( (posat<1) || (posat!=poslastat) || (pospt<=posat+1) || (pospt==(ch.length)-1))
{
test=false;
}
return(test);
}
function verif()
{
nom=document.getElementById("nom").value;
prenom=document.getElementById("pre").value;
ville=document.getElementById("ville").value;
tel=document.getElementById("cp").value;
email=document.getElementById("email").value;
if((!verifTxt(nom)) || (!verifTxt(prenom)))
{
alert("verifier votre nom ou prenom");
}
else if(!verifMail(email))
{
alert("Verifier votre adresse email");
}
else if(!verifNum(cp))
{
alert("verifier votre code postal");
}
else if(verifTxt(ville)==false)
{
alert("verifier votre ville");
}

}