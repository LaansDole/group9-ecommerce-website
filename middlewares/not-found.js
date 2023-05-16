const notFound = (req, res) => res.status(404).render('404.ejs', { error: 'Route does not exist please return', layout: './404.ejs' });

module.exports = notFound