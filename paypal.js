<!DOCTYPE html>
<html>
<body>
<script src="https://www.paypal.com/sdk/js?client-id=AfrHAe3JZH4UXcSpTlxjhnoKvK8smyB6oULJNyMIQBGIlY_mu-Lp2EwuKR-lJ1uy78bUVLIp6P0oQXmo&disable-funding=credit,card"></script>
<div id="paypal-button-container"></div>
<script>
 paypal.Buttons({
    createOrder: function(data, actions) {
      // This function sets up the details of the transaction, including the amount and line item details.
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10',
            currency_code: 'USD',
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        //alert('Transaction completed by ' + details.payer.name.given_name);
        console.log(JSON.stringify(details));
        alert(JSON.stringify(details));
        Android.getPaypalResponse(JSON.stringify(details));
      });
    }
  }).render('#paypal-button-container');
</script>
</body>
</html>
