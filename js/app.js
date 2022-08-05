$(document).ready(function () {
  //要執行回到最上方
  $('#to-top-button').on('click',function(){
     $("html,body").animate(
      {
        scrollTop:0 //回到第一個區塊
      },
      300
    );   
  })
});
