# check-digits-js
Quickly verify credit cards and serial numbers check digits.

# Basic Usage

## Credit Cards
var cardNo = '9770317847001';

** To get the credit card check digit (last number) **
CheckDigits.creditCardCheckDigit( cardNo );

** Check whether the credit card is valid **
CheckDigits.creditCardCheckDigit( cardNo );

## ISBN

### ISBN 13
var serialNo  = 'Enter the first 12 ISBN 13 digits omitting the last digit';

** Get the ISBN 13 check digit (last number) **
CheckDigits.getIsbn13CheckDigit( serialNo );

** Check whether the ISBN 13 is valid **
var serialNo = 'Enter full ISBN 13 number';
CheckDigits.isbn13( serialNo );

### ISBN 10
var serialNo  = 'Enter the first 9 ISBN 10 digits omitting the last digit';

** Get the ISBN 10 check digit (last number) **
CheckDigits.getIsbn10CheckDigit( serialNo );

** Check whether the ISBN 10 is valid **
var serialNo = 'Enter full ISBN 10 number';
CheckDigits.isbn10( serialNo );