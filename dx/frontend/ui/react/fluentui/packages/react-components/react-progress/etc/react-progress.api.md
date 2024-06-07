## API Report File for "@fluentui/react-progress"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import type { ComponentProps } from '@fluentui/react-utilities';
import type { ComponentState } from '@fluentui/react-utilities';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import * as React_2 from 'react';
import type { Slot } from '@fluentui/react-utilities';
import type { SlotClassNames } from '@fluentui/react-utilities';

// @public
export const ProgressBar: ForwardRefComponent<ProgressBarProps>;

// @public (undocumented)
export const progressBarClassNames: SlotClassNames<ProgressBarSlots>;

// @public
export type ProgressBarProps = Omit<ComponentProps<ProgressBarSlots>, 'size'> & {
    shape?: 'rounded' | 'square';
    value?: number;
    max?: number;
    thickness?: 'medium' | 'large';
    color?: 'brand' | 'success' | 'warning' | 'error';
};

// @public (undocumented)
export type ProgressBarSlots = {
    root: NonNullable<Slot<'div'>>;
    bar?: NonNullable<Slot<'div'>>;
};

// @public
export type ProgressBarState = ComponentState<Required<ProgressBarSlots>> & Required<Pick<ProgressBarProps, 'max' | 'shape' | 'thickness'>> & Pick<ProgressBarProps, 'value' | 'color'>;

// @public
export const renderProgressBar_unstable: (state: ProgressBarState) => JSX.Element;

// @public
export const useProgressBar_unstable: (props: ProgressBarProps, ref: React_2.Ref<HTMLElement>) => ProgressBarState;

// @public
export const useProgressBarStyles_unstable: (state: ProgressBarState) => ProgressBarState;

// (No @packageDocumentation comment for this package)

```