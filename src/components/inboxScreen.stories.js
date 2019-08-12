import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { defaultTasks } from './taskList.stories';
import { InboxScreen } from './inboxScreen';

const store = {
    getState: () => {
      return {
        tasks: defaultTasks,
      };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
  };

storiesOf('InboxScreen', module)
.addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <InboxScreen />)
  .add('error', () => <InboxScreen error="Something" />);