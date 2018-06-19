import React from 'react';

const flexContainerGallery = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  listStyle: 'none'
};

const flexContainerList = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flexFlow: 'wrap',
  justifyContent: 'center'
};

const gridContainerTile = {
  width: '100%',
  display: 'grid',
  gridColumnGap: '0px',
  gridTemplateColumns: 'auto auto auto auto',
  justifyContent: 'center'
};

const ListContainer = ({ display, children}) => {
  switch (display) {
    case 'tile':
      return <ul style={gridContainerTile}>{children}</ul>;

    case 'gallery':
      return <ul style={flexContainerGallery}>{children}</ul>;

    case 'listing':
      return <ul style={flexContainerList}>{children}</ul>;

    default:
      return <ul style={flexContainerList}>{children}</ul>;
  }
}

export default ListContainer;
