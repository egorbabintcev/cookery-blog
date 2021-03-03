import React from 'react'
import './RecipePage.scss'
import preview from './preview.png'
import icons from './sprite.svg'

/* interface RecipePageProps {} */

const RecipePage: React.FC = () => (
  <div className="Recipe-container">
    <button type="button" className="Recipe-goback-btn">
      <svg>
        <use xlinkHref={`${icons}#goback`} />
      </svg>
    </button>
    <div className="Recipe-preview">
      <img src={preview} alt="Avocado and egg toast" />
    </div>
    <div className="Recipe-wrapper">
      <div className="Recipe-head">
        <h1 className="Recipe-head__title">Avocado and Egg Toast</h1>
        <div className="Recipe-benefits">
          <div className="Recipe-benefits__item">
            <svg>
              <use xlinkHref={`${icons}#time`} />
            </svg>
            <p>15’</p>
          </div>
          <div className="Recipe-benefits__item">
            <svg>
              <use xlinkHref={`${icons}#calories`} />
            </svg>
            <p>350 kcal</p>
          </div>
          <div className="Recipe-benefits__item">
            <svg>
              <use xlinkHref={`${icons}#persons`} />
            </svg>
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="Recipe-steps">
        <ul>
          <li className="Recipe-step">
            <div className="Recipe-step__label">
              <p>1</p>
              <div className="Recipe-step__label-divider" />
            </div>
            <p className="Recipe-step__text">
              Melt butter in a skillet over medium-low heat. Crack eggs into the
              skillet side by side and cook until eggs are white on the bottom
              layer and firm enough to flip, 2 to 3 minutes. Flip eggs, trying
              not to crack the yolk, and cook until egg reaches desired
              doneness, 2 to 5 minutes more.
            </p>
          </li>
          <li className="Recipe-step">
            <div className="Recipe-step__label">
              <p>2</p>
              <div className="Recipe-step__label-divider" />
            </div>
            <p className="Recipe-step__text">
              Melt butter in a skillet over medium-low heat. Crack eggs into the
              skillet side by side and cook until eggs are white on the bottom
              layer and firm enough to flip, 2 to 3 minutes. Flip eggs, trying
              not to crack the yolk, and cook until egg reaches desired
              doneness, 2 to 5 minutes more.
            </p>
          </li>
          <li className="Recipe-step">
            <div className="Recipe-step__label">
              <p>3</p>
              <div className="Recipe-step__label-divider" />
            </div>
            <p className="Recipe-step__text">
              Melt butter in a skillet over medium-low heat. Crack eggs into the
              skillet side by side and cook until eggs are white on the bottom
              layer and firm enough to flip, 2 to 3 minutes. Flip eggs, trying
              not to crack the yolk, and cook until egg reaches desired
              doneness, 2 to 5 minutes more.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default RecipePage
