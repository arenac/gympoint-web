import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.svg';

import { Container, Content, MenuItem } from './styles';

export default function Header({ location }) {
  const [currentMenu, setCurrentMenu] = useState(
    location.pathname.replace('/', '')
  );

  const [menuItems, setMenuItems] = useState([
    {
      name: 'students',
      selected: true,
    },
    {
      name: 'plans',
      selected: false,
    },
    {
      name: 'enrollments',
      selected: false,
    },
    {
      name: 'help',
      selected: false,
    },
  ]);

  useEffect(() => {
    const selected = menuItems.map(i =>
      i.name === currentMenu
        ? { name: i.name, selected: true }
        : { name: i.name, selected: false }
    );
    setMenuItems(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMenu]);

  function handleCurrentMenu(name) {
    setCurrentMenu(name);
  }

  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={logo} alt="GoBarber" />
            <span>GYMPOINT</span>
          </div>
          {menuItems.map(item => (
            <MenuItem
              key={item.name}
              to={`/${item.name}`}
              selected={item.selected}
              onClick={() => handleCurrentMenu(item.name)}
            >
              {item.name}
            </MenuItem>
          ))}
        </nav>
        <aside>
          <strong>User Name Header</strong>
          <button type="button">Log out</button>
        </aside>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};
