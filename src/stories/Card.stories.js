import React from 'react';

import { Card } from './Card.js';

export default {
  title: 'Example/Card',
  component: Card  
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  url: 'https://loremflickr.com/240/320',
  title: 'Critical Care',
  description:'Lorem ipsum dolor sit amet'
};
