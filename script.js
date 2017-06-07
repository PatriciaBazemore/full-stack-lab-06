

var friendNames = ['Ryan' , 'Katie' , 'Isis' , 'Astrid' , 'Anna'];
var locationNames = ['bathroom' , 'basement' , 'attic' , 'senator\'s office' , 'shrub maze' , 'panty' , 'white house' , 'shower' , 'pool' , 'neighbor\'s house'];
var weaponNames = ['blow torch' , 'pitch fork' , 'torches' , 'hammer' , 'molitovs' , 'axe' , 'noodle' , 'roofies' , 'butcher\'s knife' , 'colt 45' , 'AK 47' , 'bazooka' , 'guillotine' , 'flame thrower' , 'blow gun' , 'tank' , 'marshmallow gun' , 'kiwi thrower' , 'sling shot' , 'stink bomb'];

// var friendIndex = 0;  //i is already needed in main function. Don't need a function to cycle through each array, create a variable that does
// var locationIndex = 0; //create in function so that they change with each loop
// var weaponIndex = 0;

function accusationNumberClick(num) {
    
    var friendIndex = num % friendNames.length;  // will change each time the loop runs that we put it into 
    var locationIndex = num % locationNames.length; //counts by the number in the array 
    var weaponIndex = num % weaponNames.length;

    var currentFriend = friendNames[friendIndex];           //if you use friendNames[num], will count to 100
    var currentLocation = locationNames[locationIndex];
    var currentWeapon =  weaponNames[weaponIndex];
    // var h3 = document.createElement('h3');
    var $h3 = $('<h3></h3>');
    $h3.addClass('accusations');
    $h3.append('Accusation '+ i);
    $h3.click(function() {
        alert('I accuse ' + currentFriend + ', with the ' + currentWeapon + ' in the ' + currentLocation +'!');
        // if (friendIndex === currentFriend.length) {
        //     friendIndex === 0;
        // }
        // if (weaponIndex === currentWeapon.length) {
        //     weaponIndex === 0;
        // }
        // if (locationIndex === currentLocation.length) {
        //     locaitonIndex === 0;
        // }
    });
    // document.body.appendChild(h3);
    $('body').append($h3);
    //$h3.appendTo('body');
};

for (var i = 0; i < 100; i++) {
     accusationNumberClick(i);
 };     
