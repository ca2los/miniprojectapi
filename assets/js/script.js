    // JQ Official - Datepicker
    $(function(){
        $( "#datepicker" ).datepicker();
    });

    // JQ Official - Sortable
    $(function(){
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
    });

    // JQ Official - Moment JS
    let date_today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#time-display").text(date_today);

    // JQ Custom - Retrieve inputs
    let pro_form = $('#project-form');
    let add_form = $('#project-display');
    function submit_form(event) {
        event.preventDefault();

        let pro_name = $('input[id="project-name-input"]');
        let pro_type = $('#project-type-input');
        let pro_hour = $('input[id="hourly-rate-input"]');
        let pro_date = $('input[id="datepicker"]');
        //let pro_today  = String(moment().subtract(10, 'days').calendar());
        //let pro_remain = pro_date - pro_actd;

        console.log('Name: ' + pro_name.val());
        console.log('Type: ' + pro_type.val());
        console.log('Hour: ' + pro_hour.val());
        console.log('Date: ' + pro_date.val());
        //console.log('Due:  ' + pro_dued);

        add_form.append('<tr class="form-list">' +
                        '<th scope="col">' + pro_name.val() + '</th>' +
                        '<th scope="col">' + pro_type.val() + '</th>' +
                        '<th scope="col">' + pro_hour.val() + '</th>' +
                        '<th scope="col">' + pro_date.val() + '</th>' +
                        '<th scope="col">' + "PENDING" + '</th>' +
                        '<th scope="col">' + '<button class="remove_item">Remove</button>' +
                        '</th>');

        function delete_line(event) {
            $(event.target).parent().parent().remove();
        }
        add_form.on('click','.remove_item', delete_line);

    }
    pro_form.on('submit', submit_form);