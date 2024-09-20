google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State','Region'],     
        ['IN-UP', 'Uttar Pradesh', 1],
        ['IN-MH', 'Maharashtra', 3],
        ['IN-BR', 'Bihar', 1],
        ['IN-WB', 'West Bengal', 1],
        ['IN-MP', 'Madhya Pradesh', 2],
        ['IN-TN', 'Tamil Nadu', 3],
        ['IN-RJ', 'Rajasthan', 2],
        ['IN-KA', 'Karnataka', 3],
        ['IN-GJ', 'Gujarat', 3],
        ['IN-AP', 'Andhra Pradesh', 3],
        ['IN-OR', 'Odisha', 2],
        ['IN-TG', 'Telangana', 3],
        ['IN-KL', 'Kerala', 3],
        ['IN-JH', 'Jharkhand', 1],
        ['IN-AS', 'Assam', 1],
        ['IN-PB', 'Punjab', 1],
        ['IN-CT', 'Chhattisgarh', 2],
        ['IN-HR', 'Haryana', 1],
        ['IN-JK', 'Jammu and Kashmir', 1],   
        ['IN-LA', 'Ladakh', 1],             
        ['IN-UT', 'Uttarakhand', 1],
        ['IN-HP', 'Himachal Pradesh', 1],
        ['IN-TR', 'Tripura', 1],
        ['IN-ML', 'Meghalaya', 1],
        ['IN-MN', 'Manipur', 1],
        ['IN-NL', 'Nagaland', 1],
        ['IN-GA', 'Goa', 3],
        ['IN-AR', 'Arunachal Pradesh', 1],  
        ['IN-MZ', 'Mizoram', 1],
        ['IN-SK', 'Sikkim', 1],
        ['IN-DL', 'Delhi', 1],
        ['IN-PY', 'Puducherry', 3],
        ['IN-CH', 'Chandigarh', 1],
        ['IN-AN', 'Andaman and Nicobar Islands', 1],
        ['IN-DN', 'Dadra and Nagar Haveli and Daman and Diu', 1],
        ['IN-LD', 'Lakshadweep', 1]
      ]);

    var opts = {
        region: 'IN',
        domain: 'IN',
        displayMode: 'regions',
        colorAxis: {colors: ['#FF9933', '#FFFFFF', '#138808']},
        resolution: 'provinces',
        defaultColor: '#f5f5f5',
        // width: 640, 
        // height: 480,
        forceIFrame: true
    };

    var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
    geochart.draw(data, opts);

    google.visualization.events.addListener(geochart, 'regionClick', function(eventData) {
        var stateCode = eventData.region;
        redirectToStatePage(stateCode);
    });
}

function redirectToStatePage(stateCode) {
    var urlMap = {
        'IN-UP': 'https://example.com/uttar-pradesh',
        'IN-MH': 'https://example.com/maharashtra',
        'IN-BR': 'https://example.com/bihar',
        'IN-WB': 'https://example.com/west-bengal',
        // Add more mappings here
    };

    if (urlMap[stateCode]) {
        window.location.href = urlMap[stateCode];
    } else {
        alert('No webpage found for this state.');
    }
}
