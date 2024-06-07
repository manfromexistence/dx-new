import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const NotesIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="2 2 16 16">
      <g className={cx(iconClassNames.outline, classes.outlinePart)}>
        <path d="M7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22386 12.7761 7 12.5 7H7.5Z" />
        <path d="M7 10.5C7 10.2239 7.22386 10 7.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H7.5C7.22386 11 7 10.7761 7 10.5Z" />
        <path d="M7.5 13C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2239 9.77614 13 9.5 13H7.5Z" />
        <path d="M6.5 2C6.22386 2 6 2.22386 6 2.5V3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H11.5C11.6326 18 11.7598 17.9473 11.8536 17.8536L15.8536 13.8536C15.9473 13.7598 16 13.6326 16 13.5V4.5C16 3.67157 15.3284 3 14.5 3H14V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H10.5V2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H7V2.5C7 2.22386 6.77614 2 6.5 2ZM14.5 4C14.7761 4 15 4.22386 15 4.5V13H12.5C11.6716 13 11 13.6716 11 14.5V17H5.5C5.22386 17 5 16.7761 5 16.5V4.5C5 4.22386 5.22386 4 5.5 4H14.5ZM14.2929 14L12 16.2929V14.5C12 14.2239 12.2239 14 12.5 14H14.2929Z" />
      </g>
      <g className={cx(iconClassNames.filled, classes.filledPart)}>
        <path d="M7 2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5V3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H11V14.5C11 13.6716 11.6716 13 12.5 13H16V4.5C16 3.67157 15.3284 3 14.5 3H14V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H10.5V2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H7V2.5ZM7 7.5C7 7.22386 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM7.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10ZM7 13.5C7 13.2239 7.22386 13 7.5 13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H7.5C7.22386 14 7 13.7761 7 13.5Z" />
        <path d="M15.6892 14H12.5C12.2239 14 12 14.2239 12 14.5V17.6892C12.0513 17.6498 12.1002 17.6069 12.1464 17.5607L15.5607 14.1464C15.6069 14.1002 15.6498 14.0513 15.6892 14Z" />
      </g>
    </svg>
  ),
  displayName: 'NotesIcon',
});
