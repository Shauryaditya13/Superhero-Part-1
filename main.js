var canvas= new fabric.Canvas("myCanvas");
player_X=10;
player_Y=10;
block_image_width=30;
block_image_height=30;
var player_Object="";
var block_image_Object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(img) {
        player_Object=img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(player_Object);

    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(img){
        block_image_Object=img;
        block_image_Object.scaleToWidth(block_image_width);
        block_image_Object.scaleToHeight(block_image_height);
        block_image_Object.set({
            top:player_Y,left:player_X
        });
        canvas.add(block_image_Object);
    });

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=='80') {
        console.log("p and shiftkey are pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true&&keyPressed=='77') {
        console.log("m and shiftkey are pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keyPressed=='38'){
        Up();
        console.log("Up key is pressed");
    }

    if(keyPressed=='40'){
        Down();
        console.log("Down key is pressed");
    }

    if(keyPressed=='37'){
        Left();
        console.log("Left key is pressed");
    }

    if(keyPressed=='39'){
        Right();
        console.log("Right key is pressed");
    }

    if(keyPressed=='67') {
        new_image("cloud.jpg");
        console.log("c is pressed");
    }

    if(keyPressed=='68') {
        new_image("dark_green.png");
        console.log("d is pressed");
    }

    if(keyPressed=='71') {
        new_image("ground.png");
        console.log("g is pressed");
    }

    if(keyPressed=='76') {
        new_image("light_green.png");
        console.log("l is pressed");
    }

    if(keyPressed=='82') {
        new_image("roof.jpg");
        console.log("r is pressed");
    }

    if(keyPressed=='84') {
        new_image("trunk.jpg");
        console.log("t is pressed");
    }

    if(keyPressed=='85') {
        new_image("unique.png");
        console.log("u is pressed");
    }

    if(keyPressed=='87') {
        new_image("wall.jpg");
        console.log("w is pressed");
    }

    if(keyPressed=='89') {
        new_image("yellow_wall.jpg");
        console.log("y is pressed");
    }
}

function Up() {
    if(player_Y>=0) {
    player_Y=player_Y-block_image_height;
    console.log("block_image_height="+block_image_height);
    console.log("when Up is pressed,X="+player_X+"Y="+player_Y);
    canvas.remove(player_Object);
    player_update();
    }
}

function Down() {
    if(player_Y<=500) {
    player_Y=player_Y+block_image_height;
    console.log("block_image_height="+block_image_height);
    console.log("when Up is pressed,X="+player_X+"Y="+player_Y);
    canvas.remove(player_Object);
    player_update();
    }
}

function Left() {
    if(player_X>=0) {
    player_X=player_X-block_image_width;
    console.log("block_image_width="+block_image_width);
    console.log("when Up is pressed,X="+player_X+"Y="+player_Y);
    canvas.remove(player_Object);
    player_update();
    }
}

function Right() {
    if(player_X<=650) {
    player_X=player_X+block_image_width;
    console.log("block_image_width="+block_image_width);
    console.log("when Up is pressed,X="+player_X+"Y="+player_Y);
    canvas.remove(player_Object);
    player_update();
    }
}