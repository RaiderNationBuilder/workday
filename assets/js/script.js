var currentDay = moment().format('dddd [,] MMM Do YY')

$(".btn").on("click", function() {

    console.log($(this).attr('name'));

    console.log('you got clicked', $('#' + $(this).attr('name')).val())

    var scheduleData = [
        {time: $(this).attr('name'), message: $('#' + $(this).attr('name')).val()}
    ]

    localStorage.setItem($(this).attr('name'), JSON.stringify($('#' + $(this).attr('name')).val()))
})

function displayLocalData() {
    // adds currentDay to header
    $('#currentDay').text(currentDay);
    
    for (var key in localStorage){
        console.log('What hour we are checking out', key)
        console.log('message', localStorage[key])
        $('#' + key).val( localStorage[key])

        // time logic
        console.log('current HOUR!',  moment().format('HH'))
        if( parseInt(key) >  parseInt(moment().format('HH'))) {
            console.log('KEY WAS Bigger THAN!!!!!!')
            $('#' + key).addClass('future')

        } else if ( parseInt(key) <  parseInt(moment().format('HH'))) {
            console.log('KEY WAS less THAN!!!!!!')
            $('#' + key).addClass('past')

        } else if (parseInt(key) ===  parseInt(moment().format('HH'))) {
            console.log('KEY WAS equal TO!!!!!!')
            $('#' + key).addClass('present')

        } else {
            $('#' + key).addClass('past')
        }

    }

}
displayLocalData();