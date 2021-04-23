const {Router} = require ('express')
const router = Router()


router.get('/', (req, res) => {
    res.render('firstSite.hbs')
})
router.get('*/learn', (req, res) => {
    res.render('Learn.hbs')
})
router.get('*/player', (req, res) => {
    res.render('play.hbs')
})
router.get('*/analitics', (req, res) => {
    res.render('index.hbs')
})
module.exports = router