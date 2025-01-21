import { createRoot } from 'react-dom/client';
import { restaurants } from '../mock/mock';

const rootElement = document.getElementById('root');
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <ul>
    {restaurants.map((item) => (
      <li key={item.id}>
        <h2>{item.name}</h2>
        <div>
          <h3>Меню</h3>
          <ul>
            {item.menu.map((itemMenu) => (
              <li key={itemMenu.id}>{itemMenu.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Отзывы</h3>
          <ul>
            {item.reviews.map((itemReviews) => (
              <li key={itemReviews.id}>{itemReviews.text}</li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>,
);
