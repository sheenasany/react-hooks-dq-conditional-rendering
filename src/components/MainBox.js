import React from "react";
import MenuBar from "./MenuBar";
import { useState } from 'react';
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

//  tried out setting all components as properties to an object in order to conditionally render them
  const componentMap = {
    profile: <Profile  />,
    photos: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />
  }
  
function MainBox() {
  const [compState, setCompState] = useState('profile')

  function renderComponent(newState){
    setCompState(newState)
  }

  return (
    <div>
      <MenuBar renderComponent={renderComponent} />
      {componentMap[compState]}
    </div>
  );
}

export default MainBox;
