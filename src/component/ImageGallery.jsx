
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import helicopterRide from "../assets/helicopterRide.jpg";
import boat from "../assets/boat.jpg";
import niagaraNight from "../assets/niagaraNight.jpg";
import citylight from "../assets/citylight.jpg";
import Helicopter from "../assets/Helicopter.jpg";
import nightlife from "../assets/nightlife.jpg";
import luxury from "../assets/luxury.jpg";
import immerse from "../assets/luxury.jpg";
import mist from "../assets/mist.jpg";
import seesight from "../assets/seesight.jpg";
import offroad from "../assets/offroad.jpg";
import lake from "../assets/lake.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft:1}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: helicopterRide,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: boat,
    title: 'Burger',
  },
  {
    img: citylight,
    title: 'Camera',
  },
  {
    img: immerse,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: Helicopter,
    title: 'Hats',
    cols: 2,
  },
  {
    img: lake,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: luxury,
    title: 'Basketball',
  },
  {
    img: mist,
    title: 'Fern',
  },
  {
    img: niagaraNight,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: nightlife,
    title: 'Tomato basil',
  },
  {
    img: offroad,
    title: 'Sea star',
  },
  {
    img: seesight,
    title: 'Bike',
    cols: 2,
  },
];