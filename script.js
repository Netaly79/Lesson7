function Figure (){
    this.draw = function (){};
}
function Line(x1,y1,x2,y2,color){
    Figure.call(this);
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
    this.color=color;
    this.draw=function(context){
        context.beginPath();
        context.moveTo(x1,y1);
        context.lineTo(x2,y2);
        context.strokeStyle = this.color;
        context.stroke();
    };
}

function Rect (x, y, w, h, color,fill,transp){
    Figure.call(this);
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.color=color;
    this.fill=fill;
    this.transp=transp;
    this.draw=function(context){
        context.beginPath();
        if (transp)
        context.globalAlpha = transp;
        if (fill){
            context.fillStyle = this.color;
            context.fillRect(x,y,w,h);
        }  
        else{
            context.strokeStyle = this.color;
            context.strokeRect(x,y,w,h);
            }
    };
}

function Circle (x,y,r,color,trans) {
    Figure.call(this);
    this.x=x;
    this.y=y;
    this.r=r;
    this.color=color;
    this.trans=trans;
    this.draw=function(context){
        context.beginPath();
        if(trans){
            context.globalAlpha = trans;
        }
        context.fillStyle = this.color;
        context.strokeStyle=this.color;
        context.arc(x, y, r, 0, Math.PI*2, false);
        context.fill();
        context.stroke();
    };
}
function Canvas (id){
    var canvas= document.getElementById(id), 
    context = canvas.getContext("2d");

    this.add=function(... elements){
        for (let i=0; i<elements.length;i++)
        elements[i].draw(context);
    }
}

var line = new Line(58, 255, 208, 205, '#dcdcdc'); 
var line2 = new Line(68, 264, 218, 214, '#dcdcdc'); 
let bigRect=new Rect (5,5,500,305,'f8f8f8',false,0);
let marineRect = new Rect (268,136,60,120,'#cfffe2',true,0);
let yellowRect=new Rect(368,155,60,40,'#fbf7bd',true,0);
let roseRect=new Rect (288,126,100,50, '#EBCDE8',true, 0.5);
let smallCircle=new Circle(106,80,35,'#CFEAFF',0.5);
let bigCircle=new Circle(127,127,50,'#CFEAFF',0.5);

var drawArea = new Canvas('myCanvas');
drawArea.add(line,line2);
drawArea.add(smallCircle, bigCircle);
drawArea.add(bigRect,marineRect,yellowRect,roseRect);

let poly;
for (let i=5; i<505; i+=20){
    poly=new Line (i, 5, i+10, 15, "red");
    drawArea.add(poly);
    poly=new Line (i+10, 15, i+20, 5, "red");
    drawArea.add(poly);
}