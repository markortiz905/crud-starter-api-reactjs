const getTableData = (req, res, db) => {
  db.select('*').from('testtable1')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json([])
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const postTableData = (req, res, db) => {
  const {item, section, datePurchased, propertyNumber, description, serialNumber, amount, icsNumber, quantity } = req.body
  const added = new Date()
  db('testtable1').insert({item, section, datePurchased, propertyNumber, description, serialNumber, amount, icsNumber, quantity})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const putTableData = (req, res, db) => {
  const {id, item, section, datePurchased, propertyNumber, description, serialNumber, amount, icsNumber, quantity } = req.body
  db('testtable1').where({id}).update({item, section, datePurchased, propertyNumber, description, serialNumber, amount, icsNumber, quantity})
    .returning('*')
    .then(item => {
      res.json(item)
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const deleteTableData = (req, res, db) => {
  const { id } = req.body
  db('testtable1').where({id}).del()
    .then(() => {
      res.json({delete: 'true'})
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const loginFake = (req, res, db) => {
    const { username, password } = req.body
    console.log("username: " + username)
    if (username.toString() == "user" && password.toString() == "pass") {
        res.json ({
            token: 'test123'
        });
    } else {
        res.json ({
            token: null,
            message: "invalid credential!"
        });
    }
}

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData,
loginFake
}