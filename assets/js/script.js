    // JQ Official - Datepicker
    $(function(){
        $( "#datepicker" ).datepicker();
    });

    // JQ Official - Moment JS
    let date_today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $("#time-display").text(date_today);

    // JQ Custom - Retrieve inputs
    let pro_form = $('#project-form');
    let add_form = $('#project-display');
    function submit_form(event) {
        event.preventDefault();

        // JQ Input
        let pro_name = $('input[id="project-name-input"]');
        let pro_type = $('#project-type-input');
        let pro_hour = $('input[id="hourly-rate-input"]');
        let pro_date = $('input[id="datepicker"]');

        // JQ Output
        let due_day = moment(pro_date.val()).format('D');
        let todayis = moment().format("D");
        let earning = pro_hour.val() * (due_day - todayis);

        add_form.append('<tr class="form-list">' +
                        '<th scope="col">' + pro_name.val() + '</th>' +
                        '<th scope="col">' + pro_type.val() + '</th>' +
                        '<th scope="col">' + pro_hour.val() + '</th>' +
                        '<th scope="col">' + pro_date.val() + '</th>' +
                        '<th scope="col">' + (due_day - todayis) + '</th>' +
                        '<th scope="col">' + earning + '</th>' +
                        '<th scope="col">' + '<button class="remove_item">❌</button>' +
                        '</th>');

        function delete_line(event) {
            $(event.target).parent().parent().remove();
        }
        add_form.on('click','.remove_item', delete_line);
    }
    pro_form.on('submit', submit_form);