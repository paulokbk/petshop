const home = (req, res) => {
    res.render('pages/pages')
}

const dogs = (req, res) => {
    res.send('minha rota')
}

const cats = (req, res) => {
    
}

const fishes = (req, res) => {
    
}

module.exports.home = home;
module.exports.dogs = dogs;
module.exports.cats = cats;
module.exports.fishes = fishes;