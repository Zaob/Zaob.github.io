let startY1 = 350;
let stopY1 = 1400;


$(window).scroll(function(){
    checkY();
});

function checkY()
{
    console.log($(window).scrollTop()); 
    if($(window).scrollTop() > startY1 && $(window).scrollTop() <= stopY1)
    {
        console.log("Show"); 
        $('.foxedDiv').show(); 
    }
    else
    {
        console.log("Hide"); 
        $('.foxedDiv').hide();
    }
}

checkY();