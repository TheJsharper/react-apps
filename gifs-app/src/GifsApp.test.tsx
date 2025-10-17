import { describe, expect, it } from 'vitest';
import GifsApp from './GifsApp';
import { render } from '@testing-library/react';
describe('GifsApp', () => {
  it('should render correctly', () => {
    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });
});