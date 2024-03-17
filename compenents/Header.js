import React from 'react';
import CustomAppBar from './CustomAppBar';

const shortenTitle = (title) => {
    if (title.length > 10) {
      return title.substring(0, 10) + '...';
    }
    return title;
  };

export const HomeHeader = () => {
  return (
    <CustomAppBar
      title="Home"
      showBackButton={false}
      showFavButton={true}
      onFavPress={() => console.log('Fav button pressed')}
    />
  );
};

export const EpisodeDetailsHeader = ({ route }) => {
  return (
    <CustomAppBar
      title={shortenTitle(route.params.episode.name)}
      showBackButton={true}
      showFavButton={true}
      onFavPress={() => console.log('Fav button pressed')}
    />
  );
};

export const CharacterHeader = ({ route }) => {
  return (
    <CustomAppBar
      title={shortenTitle(route.params.character.name)}
      showBackButton={true}
      showFavButton={true}
      onFavPress={() => console.log('Fav button pressed')}
    />
  );
};

export const FavHeader = () => {
  return (
    <CustomAppBar
      title="Fav"
      showBackButton={true}
      showFavButton={false}
    />
  );
};

export const SplashScreenHeader = () => {
  return (
    <CustomAppBar
      title="Rick And Morty"
      showBackButton={false}
    />
  );
};