import { render, fireEvent } from '@testing-library/angular';
import '@testing-library/jest-dom';

import { CardComponent } from './card.component';
import { flower, pizza, tree } from '../../../shared/mocks/itens';

describe('CardComponent', () => {
  it('should create', async () => {
    const { fixture } = await render(CardComponent);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display content correctly', async () => {
    const { getByRole, container } = await render(CardComponent, { componentProperties: { content: flower } });

    expect(getByRole('heading', { name: flower.title })).toBeTruthy();
    expect(container.querySelector('.card__content')?.textContent?.trim()).toBe(flower.description);
  });

  it.each([
    { type: tree.type, textLabel: 'Paisagem', cssClass: 'card__badge--landscape', content: tree },
    { type: flower.type, textLabel: 'Flor', cssClass: 'card__badge--flower', content: flower },
    { type: pizza.type, textLabel: 'Pizza', cssClass: 'card__badge--pizza', content: pizza },
  ])('should have $cssClass when content type is $type', async ({ cssClass, content, textLabel }) => {
    const { container } = await render(CardComponent, { componentProperties: { content } });
    const badgeText = container.querySelector('.card__badge')?.textContent;

    expect(container.querySelector(`.${cssClass}`)).toBeTruthy();
    expect(badgeText).toContain(textLabel);
  });

  it('should emit event when click in the remove button', async () => {
    const { getByRole, fixture } = await render(CardComponent, {
      componentProperties: { content: flower }
    });

    const button = getByRole('button', { name: /remover item/i });

    jest.spyOn(fixture.componentInstance, 'remove');
    jest.spyOn(fixture.componentInstance.removeCard, 'emit');

    fireEvent.click(button);

    expect(fixture.componentInstance.remove).toHaveBeenCalled();
    expect(fixture.componentInstance.removeCard.emit).toHaveBeenCalledWith(flower.id);
  });
});
