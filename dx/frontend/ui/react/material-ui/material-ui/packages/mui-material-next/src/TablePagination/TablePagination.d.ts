import * as React from 'react';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { TableCellProps } from '@mui/material/TableCell';
import { IconButtonProps } from '@mui/material/IconButton';
import { SelectProps } from '@mui/material/Select';
import { TablePaginationClasses } from './tablePaginationClasses';

export interface LabelDisplayedRowsArgs {
  from: number;
  to: number;
  count: number;
  page: number;
}

export interface TablePaginationActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  backIconButtonProps?: Partial<IconButtonProps>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {};
  count: number;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   */
  getItemAriaLabel: (type: 'first' | 'last' | 'next' | 'previous') => string;
  nextIconButtonProps?: Partial<IconButtonProps>;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  page: number;
  rowsPerPage: number;
  showFirstButton: boolean;
  showLastButton: boolean;
}

/**
 * This type is kept for compatibility. Use `TablePaginationOwnProps` instead.
 */
export type TablePaginationBaseProps = Omit<TableCellProps, 'classes' | 'component' | 'children'>;

export interface TablePaginationOwnProps extends TablePaginationBaseProps {
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent?: React.ElementType<TablePaginationActionsProps>;
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) component.
   */
  backIconButtonProps?: Partial<IconButtonProps>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<TablePaginationClasses>;
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: number;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel?: (type: 'first' | 'last' | 'next' | 'previous') => string;
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows?: (paginationInfo: LabelDisplayedRowsArgs) => React.ReactNode;
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage?: React.ReactNode;
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  nextIconButtonProps?: Partial<IconButtonProps>;
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * The zero-based index of the current page.
   */
  page: number;
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: number;
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions?: ReadonlyArray<
    | number
    | {
        value: number;
        label: string;
      }
  >;
  /**
   * Props applied to the rows per page [`Select`](/material-ui/api/select/) element.
   * @default {}
   */
  SelectProps?: Partial<SelectProps>;
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
}

export interface TablePaginationTypeMap<AdditionalProps, RootComponent extends React.ElementType> {
  props: AdditionalProps & TablePaginationOwnProps;
  defaultComponent: RootComponent;
}

/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 *
 * Demos:
 *
 * - [Tables](https://mui.com/components/tables/)
 *
 * API:
 *
 * - [TablePagination API](https://mui.com/api/table-pagination/)
 * - inherits [TableCell API](https://mui.com/api/table-cell/)
 */
declare const TablePagination: OverridableComponent<
  TablePaginationTypeMap<{}, React.JSXElementConstructor<TablePaginationBaseProps>>
>;

export type TablePaginationProps<
  RootComponent extends React.ElementType = React.JSXElementConstructor<TablePaginationBaseProps>,
  AdditionalProps = {},
> = OverrideProps<TablePaginationTypeMap<AdditionalProps, RootComponent>, RootComponent>;

export default TablePagination;