import React from 'react';
import { render } from 'react-dom';

import HeroBanner from "../components/homePage/heroBanner/index.js";
import { cardsData } from "../services/mock/homePage/cards";


describe('HeroBanner', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = cardsData;
  });

  test("Devem aparecer os card com imagem e texto", () => {
    const { getByText } = render(<HeroBanner {...expectedProps} />);
    const text = getByText(expectedProps[0].text);

    expect(text).toBeVisible();
  });
});
