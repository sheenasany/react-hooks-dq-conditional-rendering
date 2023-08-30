import React from "react";

function MenuBar({ renderComponent }) {

  function clickSpan(compState){
    // use callback function to handle switching components on click
    // taking in the string of the key needed to change comps and sending to parent
    renderComponent(compState)
    // grab all spans and clear their active status, start fresh
    const spanTags = document.querySelectorAll('span')
    // convert nodeList to array to map through (best practice)
    const spanTagsArr = [...spanTags].map(spanTag => {
      spanTag.className = 'item'
    })
    // grab span by id passing in the string from the onClick
    const activeSpan = document.getElementById(compState)
    // change className to active
    activeSpan.className = 'item active'
  }

  return (
    <div className="ui four item menu" >
      {/* jerry rigged the onClick to always take in a specific string, otherwise if the i element is clicked, rather than span, messes everything up */}
      <span id="profile" className="item active" onClick={() => clickSpan('profile')}>
        <i className="user large icon"  />
      </span>

      <span id="photos" className="item" onClick={() => clickSpan('photos')}>
        <i className="photo large icon" />
      </span>

      <span id="cocktails" className="item" onClick={() => clickSpan('cocktails')}>
        <i className="cocktail large icon" />
      </span>

      <span id="pokemon" className="item" onClick={() => clickSpan('pokemon')}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
