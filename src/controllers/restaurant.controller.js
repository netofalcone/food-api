import Restaurant from '../models/restaurant.model';

exports.findAll = (req, res) => {
  Restaurant.find()
    .then((restaurants) => {
      res.json(restaurants);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.findById = (req, res) => {
  Restaurant.findById(req.params.id)
    .then((restaurant) => {
      if (restaurant) {
        res.json(restaurant);
      }
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.save = (req, res) => {
  const restaurant = new Restaurant(req);
  restaurant.name = req.body.name;
  restaurant.category = req.body.category;
  restaurant.address = req.body.address;
  restaurant.save()
    .then(() => {
      res.json(Restaurant);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.replace = (req, res) => {
  const options = { overwrite: true };
  Restaurant.update({ _id: req.params.id }, req.body, options).exec()
    .then((result) => {
      if (result.n) {
        return Restaurant.findById(req.params.id);
      }
      return res.send(404);
    })
    .then((restaurant) => {
      res.json(restaurant);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.update = (req, res) => {
  const options = { new: true };
  Restaurant.findByIdAndUpdate(req.params.id, req.body, options)
    .then((restaurant) => {
      if (restaurant) {
        res.json(restaurant);
      } else {
        res.send(404);
      }
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.delete = (req, res) => {
  Restaurant.remove({ _id: req.params.id })
    .exec()
    .then((result) => {
      if (result) {
        res.send(204);
      } else {
        res.send(404);
      }
    })
    .catch((e) => {
      res.send(e);
    });
};
