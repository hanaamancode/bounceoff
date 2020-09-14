function bounceoff( icecream1 , icecream2 )
{
  if (icecream1.x - icecream2.x < icecream2.width/2 + icecream1.width/2
    && icecream2.x - icecream1.x < icecream2.width/2 + icecream1.width/2) {
      icecream1.velocityX = icecream1.velocityX * (-1);
      icecream2.velocityX = icecream2.velocityX * (-1);
}
if (icecream1.y - icecream2.y < icecream2.height/2 + icecream1.height/2
  && icecream2.y - icecream1.y < icecream2.height/2 + icecream1.height/2){
    icecream1.velocityY = icecream1.velocityY * (-1);
   icecream2.velocityY = icecream2.velocityY * (-1);
}


}