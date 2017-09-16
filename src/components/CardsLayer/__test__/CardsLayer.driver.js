import { mount } from 'enzyme';
import CardsLayer from './../index';

export default class CardsLayerDriver {
  when = {
    created: (props) => {
      this.component = mount(<CardsLayer
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="cardsLayer"]').length,
  }

  get = {
    numberOfCards: () => this.component.find('[data-testid="card"]').length,
  }
}
