const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let mainController = {
    home: function(req, res) {
        return res.render('home',{productos: products})
    }
};

module.exports = mainController;