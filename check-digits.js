/*!
 * CheckDigits JS v1.0.0 (https://github.com/johnzeniht/check-digits-js)
 * Author  John Zenith
 * Licensed under GNU General Public License V3 (https://github.com/johnzenith/check-digits-js/blob/master/LICENSE)
 */
var CheckDigits = {
    creditCardCheckDigit: function(value)
    {
        var i,
            formatDouble,
            sum                  = 0,
            double               = 0,
            characters           = value.split('');
            valuesInEvenPosition = CheckDigits.getValuesInEvenPosition(
                0, characters.length - 1, 2
            );

        valuesInEvenPosition.forEach( function(value) 
        {
            if ( characters[value] * 2 > 9 ) {
                formatDouble = characters[value] * 2;

                formatDouble.toString().split('')
                .forEach( function (val) 
                {
                    double += Number(val);
                });
            } else {
                double += Number(characters[value] * 2);
            }
        });

        for (i = 0; i < characters.length - 1; i++)
        {
            if ( CheckDigits.getValuesInEvenPosition( 0, characters.length - 1, 2 ).includes(i)  == false )
            {
                sum += Number(characters[i]);
            }
        }
        sum += double;
        return 10 - ( sum % 10 );
    },

    creditCard: function(creditCard)
    {
        var formatCreditCardValue = creditCard.replace( /([^0-9])/g, '' ),
            characters = formatCreditCardValue.split('');

        return characters[ characters.length - 1 ] == CheckDigits.creditCardCheckDigit( formatCreditCardValue );
    },

    getValuesInEvenPosition: function(start, incrementLength, increment)
    {
        var i,
            valuesInEvenPosition = [];

        for (i = start; i < incrementLength; i += increment) {
            valuesInEvenPosition.push( i );
        }
        return valuesInEvenPosition;
    },

    getIsbn10CheckDigit: function (isbn)
    {
        var i,
            characters = isbn.split(''),
            sum = 0;

        for ( i = 0; i < characters.length - 1; i++ ) {
            sum += characters[ i ] * ( 10 - i );
        }

        return ( 11 - ( sum % 11 ) );
    },

    getIsbn13CheckDigit: function (isbn)
    {
        var i,
            index,
            productBy1  = 0,
            productBy3  = 0,
            characters  = isbn.split(''),
            checkDigit  = 0;

        productBy1Array = CheckDigits.getValuesInEvenPosition( 0, characters.length - 1, 2 );

        for (i = 0; i < characters.length - 1; i++)
        {
            if (productBy1Array.includes( i ) != false) {
                productBy1 += characters[ i ] * 1;
            } else {
                productBy3 += characters[ i ] * 3;
            }
        }
        return  10 - ( ( productBy1 + productBy3 ) % 10 );
    },

    isbn10: function ( isbn )
    {
        var i, characters, sum;
        if ( isbn.trim().length != 10 ) {
            return false;
        }

        characters = isbn.split(''),
        sum = 0;

        // If ISBN is given without check digit, generate and validate it
        if ( characters[ characters.length - 1 ].toUpperCase() == 'X' ) {
            characters[ characters.length - 1 ] = CheckDigits.getIsbn10CheckDigit( isbn );
        }

        for (i = 0; i < characters.length; i++) {
            sum += characters[ i ] * ( 10 - i );
        }

        return ( 0 == ( sum % 11 ) && 11 - CheckDigits.getIsbn10CheckDigit( isbn ) == 0 );
    },

    isbn13: function ( isbn )
    {
        var characters;
        if ( isbn.trim().length > 13 ) {
            return false;
        }

        characters = isbn.split('');
        return CheckDigits.getIsbn13CheckDigit( isbn ) == characters[ characters.length - 1 ];
    },
};