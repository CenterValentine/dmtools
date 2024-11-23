import { GoldenLayout } from 'golden-layout';
import 'golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
import './style.css'; // Your custom styles (optional)
import listComponent from './listComponent';
import exampleComponent from './exampleComponent';


const layoutConfig = {
  root: {
    type: 'stack', // Groups panels into a tabbed stack
    content: [
        {
            type: 'component',
            componentType: 'listComponent',
            title: 'Productivity Ideas',
            componentState: { text: 'Productivity Workshop Ideas' },
          },
      {
        type: 'component',
        componentType: 'exampleComponent',
        title: 'Panel 2',
        componentState: { text: 'This is Panel 2' },
      },
      {
        type: 'component',
        componentType: 'exampleComponent',
        title: 'Panel 3',
        componentState: { text: 'This is Panel 3' },
      },
      {
        type: 'component',
        componentType: 'exampleComponent',
        title: 'Panel 4',
        componentState: { text: 'This is Panel 4' },
      },
      {
        type: 'component',
        componentType: 'exampleComponent',
        title: 'Panel 5',
        componentState: { text: 'This is Panel 5' },
      },
      {
        type: 'component',
        componentType: 'exampleComponent',
        title: 'Panel 6',
        componentState: { text: 'This is Panel 6' },
      },
    ],
  },
};

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('layout-container');

  if (!container) {
    console.error('Error: #layout-container not found in the DOM.');
    return;
  }

  const header = document.createElement('div');
  header.id = 'header';
  header.style.cssText = 'background: #444; color: white; padding: 10px; text-align: center;';
  header.innerHTML = `
    <h1>Productivity Workshop</h1>
    <p>Organize your productivity tools in one place</p>
  `;
  document.body.insertBefore(header, container);

  const goldenLayout = new GoldenLayout(container);

  

  // Register components

  goldenLayout.registerComponentFactoryFunction('listComponent', listComponent);
  goldenLayout.registerComponentFactoryFunction('exampleComponent', exampleComponent);

  // Load the layout configuration
  goldenLayout.loadLayout(layoutConfig);
});
