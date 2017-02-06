function loadingScreen(){
	
	//tjq(".loading-page.style2").css("z-index", "9999").show();		
	
}

tjq(document).ready(function() {
	
	
//  FTG STUFF	


		
	tjq('*[data-fusion="datecopy"]').change(function() {
	
	tjq('*[data-fusion="datepaste"]').val(tjq('*[data-fusion="datecopy"]').val());
	
	});

	
    tjq( ".airportcomplete" ).autocomplete({
        source: function( request, response ) {
            tjq.ajax({
                url: "//www.air-port-codes.com/search/",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    term: request.term, // input field value
                    limit: 7, // default is 30
                    size: 3, // default is 0
                    key: "e354a73538" // dont forget to add your API Key from your air-port-codes.com account
                },
                success: function( data ) {
                    if (data.status) { // success
                        response( tjq.map( data.airports, function( item ) {
                            return {
                                label: item.name + ' (' + item.iata + ')',
                                value: item.iata,
                                code: item.iata
                            };
                        }));
                    } else { // no results
                        response();
                    }
                }
            });
        },
        select: function( event, ui ) {
            // do something for click event
            console.log(ui.item.code);
        }
    });
	
	
	tjq('*[data-fusion="of-title"]').empty();
	
	    tjq( ".hotelcomplete" ).autocomplete({
        source: function( request, response ) {
            tjq.ajax({
                url: "//fusiontravelgroup.co.uk/ajax_regionComplete",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    term: request.term, // input field value
                    limit: 7, // default is 30
                    size: 3, // default is 0
                    
                },
                success: function( data ) {
                    if (data.status) { // success
                        response( tjq.map( data.hotels, function( item ) {
                            return {
                                label: item.area_name.replace(/[^\w\s]/gi, ' ') + ', ' + item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.region_name.replace(/[^\w\s]/gi, ' '),
                                value: item.area_name.replace(/[^\w\s]/gi, ' ') + ', ' + item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.region_name.replace(/[^\w\s]/gi, ' '),
                                code: item.resort_id,
								resort:item.resort_id,
								region: item.region_id,
								country: item.country_id,
								area: item.area_id
                            };
                        }));
                    } else { // no results
                        response();
                    }
                }
            });
        },
        select: function( event, ui ) {
            // do something for click event
            //console.dir(ui.item);
			tjq("#resortID").val(ui.item.resort);
			tjq("#regionID").val(ui.item.region);
			tjq("#countryID").val(ui.item.country);
			tjq("#areaID").val(ui.item.area);
        }
    });
	
	
	
	tjq(".overlaydropform select").change(function(){
		
		
		console.log(tjq(this).children(':selected').attr('data-title'));
		tjq(this).closest( 'form' ).prepend('<input type="hidden" name="regionid" value="'+tjq(this).children(':selected').attr('data-region_id')+'" />');
		tjq(this).closest( 'form' ).prepend('<input type="hidden" name="countryid" value="'+tjq(this).children(':selected').attr('data-country_id')+'" />');
		//console.dir(tjq(this).children('optgroup option:selected'));
		tjq(this).closest( 'form' ).submit();
	});
	
		tjq("#homehotform select").change(function(){
	
		console.log(tjq(this).children(':selected').attr('data-title'));
		tjq(this).closest( 'form' ).prepend('<input type="hidden" name="regionid" value="'+tjq(this).children(':selected').attr('data-region')+'" />');
		tjq(this).closest( 'form' ).prepend('<input type="hidden" name="countryid" value="'+tjq(this).children(':selected').attr('data-country')+'" />');
		tjq(this).closest( 'form' ).prepend('<input type="hidden" name="areaid" value="'+tjq(this).children(':selected').attr('data-area')+'" />');
		tjq(this).closest( 'form' ).submit();
	});
	
	
	
	 tjq( ".skicomplete" ).autocomplete({	
        source: function( request, response ) {
            tjq.ajax({
                url: "//fusiontravelgroup.co.uk/ajax_skiComplete",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    term: request.term, // input field value
                    limit: 7, // default is 30
                    size: 3, // default is 0
                    
                },
                success: function( data ) {
                    if (data.status) { // success
                        response( tjq.map( data.ski, function( item ) {
                            return {
                                label: item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.country_name.replace(/[^\w\s]/gi, ' '),
                                value: item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.country_name.replace(/[^\w\s]/gi, ' '),
                                code: item.resort_id,
								resort:item.resort_id,
								region: item.region_id,
								country: item.country_id,
								area: item.area_id
                            };
                        }));
                    } else { // no results
                        response();
                    }
                }
            });
        },
        select: function( event, ui ) {
            // do something for click event
            //console.dir(ui.item);
			tjq("#resortID3").val(ui.item.resort);
			tjq("#regionID3").val(ui.item.region);
			tjq("#countryID3").val(ui.item.country);
			tjq("#areaID3").val(ui.item.area);
        }
    });
	
	

		    tjq( ".dynamiccomplete" ).autocomplete({
        source: function( request, response ) {
            tjq.ajax({
                url: "//fusiontravelgroup.co.uk/ajax_regionComplete",
                jsonp: "callback",
                dataType: "jsonp",
                data: {
                    term: request.term, // input field value
                    limit: 200, // default is 30
                    size: 5, // default is 0
                    
                },
                success: function( data ) {
                    if (data.status) { // success
                        response( tjq.map( data.hotels, function( item ) {
                            return {
                                label: item.area_name.replace(/[^\w\s]/gi, ' ') + ', ' + item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.region_name.replace(/[^\w\s]/gi, ' '),
                                value: item.area_name.replace(/[^\w\s]/gi, ' ') + ', ' + item.title.replace(/[^\w\s]/gi, ' ') + ', ' + item.region_name.replace(/[^\w\s]/gi, ' '),
                                code: item.resort_id,
								resort:item.resort_id,
								region: item.region_id,
								country: item.country_id,
								area: item.area_id
                            };
                        }));
                    } else { // no results
                        response();
                    }
                }
            });
        },
        select: function( event, ui ) {
            // do something for click event
            //console.dir(ui.item);
			tjq("#resortID4").val(ui.item.resort);
			tjq("#regionID4").val(ui.item.region);
			tjq("#countryID4").val(ui.item.country);
			tjq("#areaID4").val(ui.item.area);
        }
    });










// END FTG STUFF
	


tjq(".loadingscreen").click(function(event) {
	loadingScreen();
});

tjq(".pagination a").click(function(event) {
	loadingScreen();
});

tjq(".menu-item-has-children a").click(function(event) {
	loadingScreen();
});


tjq(".datechecker").change(function(e,handler){
	
	date = new Date();
	month = tjq(".checkmonth").val();
	year = tjq(".checkyear").val();
	
	var thedate = new Date(year + "-" + month + "-" + date.getUTCDate());
	
	if (thedate < date){
		//alert("test");
		tjq("select.checkyear").val("2017").next().text("2017");
	}
	
	tjq('#cruisedate').val(year + "-" + month);
	
	
});





});