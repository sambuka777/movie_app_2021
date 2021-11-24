import PropTypes from 'prop-types'

const foodLike = [
  {
    id: 1,
    name: "chikin",
    image: "",
    alt: '김치',
    rating: 5.0
  },
  {
    id: 2,
    name: "pizza",
    image: "",
    alt: '피자',
    rating: 5.0
  }
]
const renderFood = dish => <Food
  key={dish.key}
  name={dish.name}
  picture={dish.image}
  alt={dish.alt}
  rating={dish.rating}
/>
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}
function App() {
  return (
    <div>
      {
        //foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
        foodLike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} />)
      }
      {/* <h1>hello react</h1>
      <Food fav="kimchi" />
      <Food fav="a" />
      <Food fav="b" />
      <Potato /> */}
    </div>
  );
}
function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  )
}
export default App;
