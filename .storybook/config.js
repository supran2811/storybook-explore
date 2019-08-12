import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import '../src/index.css';
// import 'react-chromatic/storybook-addon';
const req = requireContext('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);