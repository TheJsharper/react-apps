import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyAwesomeApp from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render correctly', () => {
    const component = render(<MyAwesomeApp />);
    
    screen.debug();

    expect(component).toMatchSnapshot();
  });
  test('should display the correct heading', () => {
   
    const {container} = render(<MyAwesomeApp />);

    expect(container.querySelector('h1')!.innerHTML).toBe('My Awesome App');
  });

  test('should display 4 ItemCounter components', () => {
    
    const { container } = render(<MyAwesomeApp />);

    expect(container.querySelectorAll('.item-counter')).toHaveLength(4);

  });
  
  test('should display the correct quantities in ItemCounter components', () => {
    
    const { container } = render(<MyAwesomeApp />);
    const ItemCounters = container.querySelectorAll('.item-counter');

    expect(ItemCounters[0].querySelector('span.text')!.innerHTML).toBe('Nintendo Switch 2');
    expect(ItemCounters[1].querySelector('span.text')!.innerHTML).toBe('PlayStation 5');
    expect(ItemCounters[2].querySelector('span.text')!.innerHTML).toBe('Xbox Series X');
    expect(ItemCounters[3].querySelector('span.text')!.innerHTML).toBe('Steam Deck');
    });



    test('should display the correct operation buttons in ItemCounter components', () => {
    
      const { container } = render(<MyAwesomeApp />);
      const ItemCounters = container.querySelectorAll('.item-counter');
      const buttons = ItemCounters[0].querySelectorAll('button');
  
      expect(buttons[0].innerHTML).toBe('+1');
      expect(buttons[1].innerHTML).toBe('-1');
    })

    test('should display the correct initial quantity in ItemCounter components', () => {
      const { container } = render(<MyAwesomeApp />);   
        const ItemCounters = container.querySelectorAll('.item-counter');
        const spans = ItemCounters[0].querySelectorAll('span');
        expect(spans[1].innerHTML).toBe('2');
        const spans1 = ItemCounters[1].querySelectorAll('span');
        expect(spans1[1].innerHTML).toBe('1');
        const spans2 = ItemCounters[2].querySelectorAll('span');
        expect(spans2[1].innerHTML).toBe('3');
        const spans3 = ItemCounters[3].querySelectorAll('span');
        expect(spans3[1].innerHTML).toBe('5');
    });

    

});