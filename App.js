function  User() {
    this.name = "";
    this.life = 100;
    this.giveLife= function giveLife(targetPlayer) {
        targetPlayer.life +=1;
        console.log(this.name+" gave 1 life to "+targetPlayer.name);
    }

}

var NKN = new User();
var Auvee = new User();

NKN.name = "Nuruzzaman";
Auvee.name="Anisur Rahman Auvee";

NKN.giveLife(Auvee);

console.log("Nuruzzaman :",NKN.life);
console.log("Anisur Rahman: ",Auvee.life);


//You van add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -=3;
    console.log(this.name+ " just uppercutted  "+targetPlayer.name);

}

Auvee.uppercut(NKN);

console.log("Nuruzzaman :",NKN.life);
console.log("Anisur Rahman: ",Auvee.life);

//You can add properties to all objects
User.prototype.magic = 60;

console.log(NKN.magic);
console.log(Auvee.magic);
