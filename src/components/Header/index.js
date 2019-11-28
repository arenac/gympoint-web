import React, { useState } from 'react';

import logo from '~/assets/logo.svg';

import { Container, Content, MenuItem } from './styles';

export default function Header() {
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

  function handleSelected({ name }) {
    const selected = menuItems.map(i =>
      i.name === name
        ? { name: i.name, selected: true }
        : { name: i.name, selected: false }
    );
    setMenuItems(selected);
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
              onClick={() => handleSelected(item)}
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
