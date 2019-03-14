
$(function(){

 
     var arrmonth = ['โปรดเลือกเดือนเกิด'
     ,'ดูใสๆ แต่แอบร้ายไม่เบา'
     ,'ถึงจะนก แต่เราก็น่ารัก'
     ,'คนมีรัก ระวังเรื่องมือที่สามน้าา'
     ,'คนโสด จะมีแฟนน่ารัก งุงิ >?<'
     ,'คนโสด จะเจอคนที่ถูกใจ ><'
     ,'เป็นป๋าใจดี รักแล้วเปย์แหลกนะจ๊ะ'
     ,'ช่วงนี้ฮอต อ่อยใครก็ติด  อุ๊ย ๆๆ'
     ,'จะมีเด็กหน้าใส ตาแบ้วๆ มาชอบ'
     ,'ดวงมีคู่เเท้ เราจะมีรักที่จริงใจ'
     ,'จะมีรุ่นพี่ มาแอบชอบ  ฟินไปอีก >//<'
     ,'จะได้คุย กับคนรักเก่า ว้าวววว !!!!'
     ,'เป็นไก่อ่อน ที่โดนหลอกบ่อยๆ เฮ้ออออ --'];
     var arrZodiac = ['โปรดเลือกราศี','ราศีธนู','ราศีมังกร','ราศีกุมภ์','ราศีมีน','ราศีเมษ','ราศีพฤษก','ราศีเมถุน'
     ,'ราศีกรกฎ','ราศีสิงห์','ราศีกันย์','ราศีตุลย์','ราศีพิจิก'];
 
     $('#submit').click(function(){
         console.log($('#month').val());
         console.log($('#Zodiac').val());
 
     var month = $('#month').val();
     var seletedmonth = arrmonth[month-1]; 
     console.log(seletedZodiac);
 
     var Zodiac = $('#Zodiac').val();
     var seletedZodiac = arrZodiac[Zodiac-1]; 
     console.log(seletedZodiac);
     
 
     var a = seletedZodiac;
     var result = " ' "  + seletedmonth +  " ' ";
     
    $('#display1').text(result);
     $('#display2').text(a);
      });

 

     
 })

 
 