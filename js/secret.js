console.log("ghostvaibhav.me");
var confettiSettings = { target: 'my-canvas', height: $(document).height() - 10, width: $(document).width() - 10, max: 500, rotate: true, start_from_edge: true };
var confetti = new ConfettiGenerator(confettiSettings);
password = [-1188512273, 415891928, -996795534, 1911831620, 659921826, -824691784, -848289003, -1068305432];
let correct = false;
$('#submit-button').click(function() {
    console.log("Clicked");
    if(document.getElementById('secret-text').value == "") {
        alert("Please enter the secret");
    }
    else if(sjcl.bitArray.equal(sjcl.hash.sha256.hash(document.getElementById('secret-text').value), password)) {
        confetti.render();
        $('.secret-page').hide();
        $('.success-container').css('display','flex');
    }
    else {
        alert("The secret is incorrect");
    }
})
// AdsEu5%2&