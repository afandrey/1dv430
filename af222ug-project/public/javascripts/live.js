var userListData = [];

$(document).ready(function() {
	populateTable();

	$('#userList table tbody').on('click', 'td a.linkshowheat', showHeatInfo);
	$('#btnAddHeat').on('click', addHeat);
    $('#userList table tbody').on('click', 'td a.linkdeleteuser', deleteUser);
    document.querySelector("input").focus();
});

function populateTable() {
	var tableContent = '';

	$.getJSON('/users/userlist', function(data) {
		userListData = data;
		$.each(data, function() {
			tableContent += '<tr>';
            tableContent += '<td>' + this.trynr + '</td>';
			tableContent += '<td><a href="#" class="linkshowheat" rel="' + this.heatnr + '">' + this.heatnr + '</a></td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">radera</a></td>';
            tableContent += '</tr>';
		});

		$('#userList table tbody').html(tableContent);
	});
};

function showHeatInfo(event) {
	event.preventDefault();
	var thisHeatNr = $(this).attr('rel');
	var arrayPosition = userListData.map(function(arrayItem) { return arrayItem.heatnr; }).indexOf(thisHeatNr);
	var thisUserObject = userListData[arrayPosition];

	$('#redDog').text(thisUserObject.red);
    $('#blueDog').text(thisUserObject.blue);
	$('#whiteDog').text(thisUserObject.white);
	$('#blackDog').text(thisUserObject.black);
};

function addHeat(event) {
    event.preventDefault();

    var errorCount = 0;
    $('#addHeat input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    if(errorCount === 0) {

        var newHeat = {
            'trynr': $('#addHeat fieldset input#inputTryNr').val(),
            'heatnr': $('#addHeat fieldset input#inputHeatNr').val(),
            'red': $('#addHeat fieldset input#inputRedDog').val(),
            'blue': $('#addHeat fieldset input#inputBlueDog').val(),
            'white': $('#addHeat fieldset input#inputWhiteDog').val(),
            'black': $('#addHeat fieldset input#inputBlackDog').val()
        }

        $.ajax({
            type: 'POST',
            data: newHeat,
            url: '/users/addheat',
            dataType: 'JSON'
        }).done(function( response ) {

            if (response.msg === '') {
            	$('#addHeat fieldset input').val('');
            	populateTable();
                document.querySelector("input").focus();
            } else {
            	alert('Error: ' + response.msg);            
            }
        });
    } else {
    	alert('Please fill in all fields');
    	return false;
    }
};

function deleteUser(event) {
	event.preventDefault();
	var confirmation = confirm('Are you sure you want to delete this heat?');
	if (confirmation === true) {
		$.ajax({
			type: 'DELETE',
            url: '/users/deleteuser/' + $(this).attr('rel')
        }).done(function( response ) {
        	if (response.msg === '') {
        	} else {
        		alert('Error: ' + response.msg);
        	}
        	populateTable();
        });
    } else {
    	return false;
    }
};

