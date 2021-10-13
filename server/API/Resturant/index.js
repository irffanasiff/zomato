import { RestaurantModel } from '../../database/restaurant';

const Router = express.Router();

/*
    Route           /
    Description     get all restaruants details
    Params          None
    Access          Public
    Mehtod          GET
*/

Router.get('/', async (req, res) => {
  try {
    const { city } = req.query;
    const restaurants = await RestaurantModel.find({ city });
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
    Route           /
    Description     get particular resturant details on id
    Params          _id
    Access          Public
    Mehtod          GET
*/

Router.get('/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const resturant = await RestaurantModel.findOne(_id);
    if (!resturant) {
      return res.status(404).json({});
    }
    return res.json({ resturant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
    Route           /
    Description     get resturant details search
    Params          none
    body            search string
    Access          Public
    Mehtod          GET
*/
Router.get('/search', (req, res) => {
  try {
    const { searchString } = req.body;
    const restaruants = await RestaurantModel.find({
      name: { $regex: searchString, $options: 'i' },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
