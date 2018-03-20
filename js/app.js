$(function () {
    var products = [


        { name: 'Samsung TV', price: 1500, id: 1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'http://images.samsung.com/is/image/samsung/my-hd-j4303-ua32j4303akxxm-002-front-indigoblue?scl=1&fmt=png-alpha', category: 'Elektronik' },
        { name: 'Camera', price: 755, id: 2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://www.faxcopy.sk/images//2016/12/2541600047124_0_gallery.jpg', category: 'Elektronik' },
        { name: 'lampa', price: 25, id: 3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://static.indiska.com/medias/images/XXXL/1000006756108.jpg', category: 'Hemmet' },
        { name: 'iphone X', price: 20, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://www.tele2.se/shop/media/catalog/product/cache/1/image/750x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_x_front.png', category: 'Hemmet' },
        { name: 'Kontor Stol', price: 800, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://cdn2.jysk.com/getimage/wd2.large/25392', category: 'Kontor' },
        { name: 'telefon s1', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'http://s.cel.ro/images/descriere/telefon-mobil-huawei-venus-p9-lite-dual-sim-4g-white-347824.jpg', category: 'telfon' },
        { name: 'Skrivbord', price: 1499, id: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'http://www.trosamobler.se/wp-content/uploads/2017/02/leonardo-skrivbord-vit.jpg', category: 'Kontor' },
        { name: 'dator', price: 9000, id: 8, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://tubby.scene7.com/is/image/tubby/LE80YY0011MX?$prod_all4one$', category: 'Kontor' },
        { name: 'xbox', price: 5000, id: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'https://compass-ssl.xbox.com/assets/e7/d4/e7d46aea-90d0-4bf1-9544-cc85d59f6d18.jpg?n=Xbox-Family_Home-Hero-0_FY-18-X1X-Lead_1067x667_02.jpg', category: 'Kontor' },
        { name: 'plyastion 4', price: 6000, id: 10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'data:image/jpeg;base64,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', category: 'Kontor' },
    ];

    var varukurg = [];

    var addlist = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-3">
                <img src="${item.picture}" alt="">
                <div class="product-content">
                <h4>${item.name} -
                    <span class="category">${item.category}</span> <small>${item.price}kr</small>
                 </h4>
                  <p>${item.description}</p>
                </div>
                <button type="button" id="${item.id}">Köp Nu</button>
            </li>`;
        });
        $(location).html(template);
    };

    var addToVarukorg = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;

        });

        varukurg.push(a);
        console.log(varukurg);
        var item = `
        <li class="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(varukurg.length);
        $(location).append(item);
    };

    var removeFromvarukurg = function (array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populatevarukurg = function (array, location) {
        var item = `
        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };


    addlist(products, $('.product-list'));

    $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToVarukorg(products, +id, $('.varukorg-list'));
    });

    $('.varukorg-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromvarukurg(varukurg, item);
        populatevarukurg(varukurg, $('.varukorg-list'));
    });

});
